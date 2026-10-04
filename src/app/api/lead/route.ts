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
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    const rows = Object.entries({ ...lead, interests: lead.interests?.join(", "), attribution: lead.attribution ? JSON.stringify(lead.attribution) : "" })
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(k)}</td><td style="padding:4px 0">${esc(String(v))}</td></tr>`)
      .join("");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? `${SITE.name} <onboarding@resend.dev>`,
          to: notify.split(",").map((s) => s.trim()),
          reply_to: lead.email,
          subject: `New lead: ${lead.business || lead.name}${lead.industry ? ` (${lead.industry})` : ""}`,
          html: `<h2>New website lead</h2><table>${rows}</table>`,
        }),
        signal: AbortSignal.timeout(8000),
      })
        .then((r) => r.ok)
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
