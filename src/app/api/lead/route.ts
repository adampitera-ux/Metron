import { SITE } from "@/lib/site";

/**
 * Lead intake. Delivers each lead to any configured channel:
 *  - LEAD_WEBHOOK_URL   → POSTs JSON (Zapier, Make, n8n, GoHighLevel, HubSpot workflows, Slack, etc.)
 *  - RESEND_API_KEY + LEAD_NOTIFY_EMAIL → sends an email notification via Resend
 * Attribution (gclid, UTMs, landing page) is included so leads can be imported
 * back into Google Ads as offline conversions.
 */

type Lead = {
  name: string;
  business: string;
  email: string;
  phone?: string;
  industry?: string;
  interests?: string[];
  message?: string;
  source?: string;
  page?: string;
  attribution?: Record<string, unknown>;
};

/** Where lead notifications go when LEAD_NOTIFY_EMAIL isn't set. */
const LEAD_NOTIFY_DEFAULT = "Eeharris2004@gmail.com";

const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website)) return Response.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return Response.json({ error: "Too many submissions. Please email us instead." }, { status: 429 });

  const lead: Lead = {
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    industry: clean(body.industry, 80),
    interests: Array.isArray(body.interests) ? body.interests.map((i) => clean(i, 60)).filter(Boolean).slice(0, 10) : [],
    message: clean(body.message, 3000),
    source: clean(body.source, 80),
    page: clean(body.page, 300),
    attribution: typeof body.attribution === "object" && body.attribution ? (body.attribution as Record<string, unknown>) : undefined,
  };

  if (!lead.name || !lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return Response.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }

  const payload = { ...lead, submitted_at: new Date().toISOString(), site: SITE.url };
  const tasks: Promise<boolean>[] = [];

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    tasks.push(
      fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(8000) })
        .then((r) => r.ok)
        .catch(() => false),
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL || LEAD_NOTIFY_DEFAULT;
  if (resendKey && notify) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || `${SITE.name} Leads <onboarding@resend.dev>`,
          to: notify.split(",").map((s) => s.trim()),
          reply_to: lead.email,
          subject: `New lead: ${lead.business || lead.name}${lead.industry ? ` · ${lead.industry}` : ""}`,
          html: leadEmailHtml(lead, payload.submitted_at),
          text: leadEmailText(lead),
        }),
        signal: AbortSignal.timeout(8000),
      })
        .then(async (r) => {
          if (!r.ok) console.error("[lead] Resend error", r.status, await r.text().catch(() => ""));
          return r.ok;
        })
        .catch(() => false),
    );
  }

  if (!tasks.length) {
    console.warn("[lead] No delivery channel configured (LEAD_WEBHOOK_URL or RESEND_API_KEY + LEAD_NOTIFY_EMAIL).", payload);
    if (process.env.NODE_ENV === "production") {
      return Response.json({ error: `Our form is temporarily unavailable — please email ${SITE.email}.` }, { status: 503 });
    }
    return Response.json({ ok: true, dev: true });
  }

  const results = await Promise.all(tasks);
  if (!results.some(Boolean)) {
    console.error("[lead] All delivery channels failed", payload);
    return Response.json({ error: `Something went wrong — please email ${SITE.email}.` }, { status: 502 });
  }
  return Response.json({ ok: true });
}

function leadEmailText(l: Lead) {
  return [
    `New lead from ${SITE.name}`,
    "",
    `Name: ${l.name}`,
    `Business: ${l.business}`,
    `Email: ${l.email}`,
    l.phone && `Phone: ${l.phone}`,
    l.industry && `Industry: ${l.industry}`,
    l.interests?.length && `Interested in: ${l.interests.join(", ")}`,
    l.message && `\nMessage:\n${l.message}`,
    "",
    `Source: ${l.source || "—"} (${l.page || "—"})`,
  ]
    .filter(Boolean)
    .join("\n");
}

function leadEmailHtml(l: Lead, submittedAt: string) {
  const when = new Date(submittedAt).toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });
  const row = (k: string, v?: string, href?: string) =>
    v
      ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:130px;color:#8a8a8a;font-size:13px;vertical-align:top">${k}</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;font-size:15px">${
          href ? `<a href="${href}" style="color:#e46f03;text-decoration:none">${esc(v)}</a>` : esc(v)
        }</td></tr>`
      : "";
  const chips = (l.interests ?? [])
    .map((i) => `<span style="display:inline-block;margin:0 6px 6px 0;padding:5px 11px;border-radius:999px;background:#fff4ea;color:#c25e02;font-size:13px">${esc(i)}</span>`)
    .join("");
  const attr = l.attribution
    ? Object.entries(l.attribution)
        .filter(([, v]) => v)
        .map(([k, v]) => `${esc(k)}: ${esc(String(v))}`)
        .join(" · ")
    : "";
  const tel = l.phone ? `tel:${l.phone.replace(/[^+\d]/g, "")}` : undefined;

  return `<!doctype html><html><body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e9e9eb">
  <tr><td style="background:linear-gradient(90deg,#e36d00,#ffb168);height:4px;line-height:4px;font-size:0">&nbsp;</td></tr>
  <tr><td style="padding:28px 32px 8px">
    <div style="font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#e46f03">${esc(SITE.name)} · New lead</div>
    <h1 style="margin:8px 0 4px;font-size:22px;line-height:1.3;color:#111">${esc(l.business || l.name)}</h1>
    <div style="font-size:13px;color:#8a8a8a">${esc(when)} ET</div>
  </td></tr>
  <tr><td style="padding:16px 32px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", l.name)}${row("Business", l.business)}${row("Email", l.email, `mailto:${l.email}`)}${row("Phone", l.phone, tel)}${row("Industry", l.industry)}
    </table>
  </td></tr>
  ${chips ? `<tr><td style="padding:18px 32px 0"><div style="font-size:13px;color:#8a8a8a;margin-bottom:8px">Interested in</div>${chips}</td></tr>` : ""}
  ${l.message ? `<tr><td style="padding:18px 32px 0"><div style="font-size:13px;color:#8a8a8a;margin-bottom:8px">What's taking up their time</div><div style="padding:14px 16px;background:#fafafa;border:1px solid #f0f0f0;border-radius:10px;font-size:15px;line-height:1.55;color:#222;white-space:pre-wrap">${esc(l.message)}</div></td></tr>` : ""}
  <tr><td style="padding:24px 32px 28px">
    <a href="mailto:${esc(l.email)}" style="display:inline-block;padding:12px 20px;border-radius:10px;background:#e87811;color:#fff;font-size:15px;font-weight:600;text-decoration:none">Reply to ${esc(l.name.split(" ")[0])}</a>
    ${tel ? `<a href="${tel}" style="display:inline-block;margin-left:8px;padding:11px 19px;border-radius:10px;border:1px solid #e0e0e0;color:#111;font-size:15px;font-weight:600;text-decoration:none">Call</a>` : ""}
  </td></tr>
  <tr><td style="padding:16px 32px;background:#fafafa;border-top:1px solid #f0f0f0;font-size:12px;line-height:1.6;color:#9a9a9a">
    Source: ${esc(l.source || "—")} · Page: ${esc(l.page || "—")}${attr ? `<br>${attr}` : ""}
  </td></tr>
</table></td></tr></table></body></html>`;
}
