import { lookup } from "node:dns/promises";
import net from "node:net";

/**
 * AI Search Readiness Checker — fetches a public URL and audits the signals
 * that help search engines and AI answer engines understand and cite a site.
 */

export type CheckStatus = "pass" | "warn" | "fail";
export type Check = { id: string; group: string; label: string; status: CheckStatus; detail: string; weight: number };

const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended", "Bingbot"];
const TIMEOUT_MS = 8000;
const MAX_BYTES = 2_000_000;
const UA = "Mozilla/5.0 (compatible; MetronReadinessChecker/1.0; +https://www.metron.ai/tools/ai-search-readiness-checker)";

/* ---------------- SSRF protection ---------------- */

function isPrivateIp(ip: string) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return (
      a === 10 ||
      a === 127 ||
      a === 0 ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) ||
      (a === 100 && b >= 64 && b <= 127) ||
      a >= 224
    );
  }
  const v = ip.toLowerCase();
  if (v.startsWith("::ffff:")) return isPrivateIp(v.slice(7));
  return v === "::1" || v === "::" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80");
}

async function assertPublic(url: URL) {
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Only http and https URLs are supported.");
  if (url.port && !["80", "443"].includes(url.port)) throw new Error("Only standard ports (80/443) are supported.");
  const host = url.hostname.replace(/^\[|\]$/g, "");
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) throw new Error("That host isn't publicly reachable.");
  const addrs = net.isIP(host) ? [{ address: host }] : await lookup(host, { all: true });
  if (!addrs.length || addrs.some((a) => isPrivateIp(a.address))) throw new Error("That host isn't publicly reachable.");
}

/** Fetch with manual redirect handling so every hop is re-validated. */
async function safeFetch(input: string, maxRedirects = 4): Promise<{ res: Response; body: string; finalUrl: string } | null> {
  let current = new URL(input);
  for (let i = 0; i <= maxRedirects; i++) {
    await assertPublic(current);
    const res = await fetch(current, {
      redirect: "manual",
      headers: { "User-Agent": UA, Accept: "text/html,text/plain,application/xml;q=0.9,*/*;q=0.8" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      current = new URL(res.headers.get("location")!, current);
      continue;
    }
    const reader = res.body?.getReader();
    let received = 0;
    const chunks: Uint8Array[] = [];
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        received += value.byteLength;
        if (received > MAX_BYTES) {
          await reader.cancel();
          break;
        }
        chunks.push(value);
      }
    }
    const body = new TextDecoder().decode(Buffer.concat(chunks));
    return { res, body, finalUrl: current.toString() };
  }
  return null;
}

async function tryFetch(url: string) {
  try {
    return await safeFetch(url);
  } catch {
    return null;
  }
}

/* ---------------- robots.txt parsing ---------------- */

function robotsBlocks(robots: string, bot: string): boolean {
  // Returns true if `bot` (or * when no specific group) is disallowed from "/"
  const lines = robots.split(/\r?\n/).map((l) => l.replace(/#.*/, "").trim()).filter(Boolean);
  const groups: { agents: string[]; rules: { allow: boolean; path: string }[] }[] = [];
  let cur: (typeof groups)[number] | null = null;
  let lastWasAgent = false;
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    const val = line.slice(idx + 1).trim();
    if (key === "user-agent") {
      if (!cur || !lastWasAgent) {
        cur = { agents: [], rules: [] };
        groups.push(cur);
      }
      cur.agents.push(val.toLowerCase());
      lastWasAgent = true;
    } else {
      lastWasAgent = false;
      if (cur && (key === "allow" || key === "disallow")) cur.rules.push({ allow: key === "allow", path: val });
    }
  }
  const specific = groups.filter((g) => g.agents.includes(bot.toLowerCase()));
  const applicable = specific.length ? specific : groups.filter((g) => g.agents.includes("*"));
  const rules = applicable.flatMap((g) => g.rules);
  const rootDisallow = rules.some((r) => !r.allow && r.path === "/");
  const rootAllow = rules.some((r) => r.allow && r.path === "/");
  return rootDisallow && !rootAllow;
}

/* ---------------- HTML helpers ---------------- */

const pick = (html: string, re: RegExp) => re.exec(html)?.[1]?.trim();
const metaContent = (html: string, attr: string, name: string) =>
  pick(html, new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]*content=["']([^"']*)["']`, "i")) ??
  pick(html, new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*${attr}=["']${name}["']`, "i"));
const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const stripTags = (s: string) => s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function collectSchemaTypes(html: string) {
  const types = new Set<string>();
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  let invalid = 0;
  const walk = (node: unknown) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (node && typeof node === "object") {
      const t = (node as Record<string, unknown>)["@type"];
      if (typeof t === "string") types.add(t);
      if (Array.isArray(t)) t.forEach((x) => typeof x === "string" && types.add(x));
      Object.values(node).forEach(walk);
    }
  };
  while ((m = re.exec(html))) {
    try {
      walk(JSON.parse(m[1]));
    } catch {
      invalid++;
    }
  }
  return { types: [...types], invalid };
}

/* ---------------- Handler ---------------- */

export async function POST(req: Request) {
  let raw = "";
  try {
    raw = String((await req.json()).url ?? "").trim();
  } catch {
    return Response.json({ error: "Send a JSON body like { \"url\": \"example.com\" }." }, { status: 400 });
  }
  if (!raw || raw.length > 500) return Response.json({ error: "Enter a website URL." }, { status: 400 });
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  let target: URL;
  try {
    target = new URL(raw);
    await assertPublic(target);
  } catch (e) {
    return Response.json({ error: e instanceof Error && e.message.includes("support") ? e.message : "That doesn't look like a public website URL." }, { status: 400 });
  }

  let page: Awaited<ReturnType<typeof safeFetch>>;
  try {
    page = await safeFetch(target.toString());
  } catch {
    page = null;
  }
  if (!page || !page.res.ok) {
    return Response.json(
      { error: `We couldn't load that page${page ? ` (HTTP ${page.res.status})` : ""}. Check the URL and try again.` },
      { status: 422 },
    );
  }

  const html = page.body;
  const origin = new URL(page.finalUrl).origin;
  const [robotsRes, llmsRes, sitemapRes] = await Promise.all([
    tryFetch(`${origin}/robots.txt`),
    tryFetch(`${origin}/llms.txt`),
    tryFetch(`${origin}/sitemap.xml`),
  ]);

  const checks: Check[] = [];
  const add = (c: Check) => checks.push(c);

  // --- Basics
  const title = decode(pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i) ?? "");
  add({
    id: "title", group: "On-page basics", label: "Title tag", weight: 8,
    status: !title ? "fail" : title.length < 15 || title.length > 65 ? "warn" : "pass",
    detail: title ? `"${title.slice(0, 90)}" (${title.length} chars). Aim for 30–60 characters with your service + location.` : "No <title> found.",
  });

  const desc = decode(metaContent(html, "name", "description") ?? "");
  add({
    id: "description", group: "On-page basics", label: "Meta description", weight: 6,
    status: !desc ? "fail" : desc.length < 70 || desc.length > 170 ? "warn" : "pass",
    detail: desc ? `${desc.length} characters. Aim for 120–160 characters that summarize what you do and who you serve.` : "No meta description found.",
  });

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1])).filter(Boolean);
  add({
    id: "h1", group: "On-page basics", label: "Single, descriptive H1", weight: 6,
    status: h1s.length === 1 ? "pass" : h1s.length === 0 ? "fail" : "warn",
    detail: h1s.length === 0 ? "No H1 heading found." : h1s.length === 1 ? `"${decode(h1s[0]).slice(0, 90)}"` : `${h1s.length} H1 headings found — use exactly one.`,
  });

  const canonical = pick(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ?? pick(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  add({
    id: "canonical", group: "On-page basics", label: "Canonical URL", weight: 3,
    status: canonical ? "pass" : "warn",
    detail: canonical ? canonical : "No canonical link tag. Add one to avoid duplicate-URL confusion.",
  });

  const robotsMeta = metaContent(html, "name", "robots") ?? "";
  add({
    id: "indexable", group: "On-page basics", label: "Page is indexable", weight: 10,
    status: /noindex/i.test(robotsMeta) ? "fail" : "pass",
    detail: /noindex/i.test(robotsMeta) ? `Meta robots says "${robotsMeta}" — search and AI engines are told not to index this page.` : "No noindex directive found.",
  });

  // --- Content structure
  const text = stripTags(html);
  const words = text.split(" ").filter(Boolean).length;
  add({
    id: "content", group: "Content for answer engines", label: "Enough readable text", weight: 7,
    status: words >= 500 ? "pass" : words >= 200 ? "warn" : "fail",
    detail: `About ${words.toLocaleString()} words of server-rendered text. AI engines need clear, crawlable text — not just images or client-rendered scripts.`,
  });

  const questionHeadings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) => stripTags(m[1])).filter((h) => h.endsWith("?"));
  add({
    id: "questions", group: "Content for answer engines", label: "Question-style headings", weight: 5,
    status: questionHeadings.length >= 3 ? "pass" : questionHeadings.length >= 1 ? "warn" : "fail",
    detail: questionHeadings.length ? `${questionHeadings.length} headings phrased as questions (e.g. "${decode(questionHeadings[0]).slice(0, 70)}").` : "No headings phrased as questions. Add H2s that match what customers ask, each followed by a direct answer.",
  });

  const lang = pick(html, /<html[^>]+lang=["']([^"']+)["']/i);
  add({
    id: "lang", group: "Content for answer engines", label: "Language declared", weight: 2,
    status: lang ? "pass" : "warn",
    detail: lang ? `lang="${lang}"` : "No lang attribute on <html>.",
  });

  // --- Structured data
  const { types, invalid } = collectSchemaTypes(html);
  add({
    id: "schema", group: "Structured data", label: "JSON-LD structured data", weight: 10,
    status: types.length ? (invalid ? "warn" : "pass") : "fail",
    detail: types.length ? `Found: ${types.slice(0, 12).join(", ")}${invalid ? ` (${invalid} block(s) failed to parse)` : ""}.` : "No JSON-LD found. Structured data helps engines understand who you are and what you offer.",
  });
  const hasOrg = types.some((t) => /Organization|LocalBusiness|ProfessionalService|Service|Contractor|Dentist|Attorney|LegalService|HVACBusiness|Plumber|Electrician|RoofingContractor|MedicalBusiness|AutoRepair/i.test(t));
  add({
    id: "org", group: "Structured data", label: "Business / Organization schema", weight: 8,
    status: hasOrg ? "pass" : "fail",
    detail: hasOrg ? "Business entity schema found." : "Add Organization or LocalBusiness schema with your name, URL, logo, phone, address and sameAs profiles.",
  });
  const hasFaq = types.includes("FAQPage");
  add({
    id: "faq", group: "Structured data", label: "FAQ content & schema", weight: 5,
    status: hasFaq ? "pass" : "warn",
    detail: hasFaq ? "FAQPage schema found." : "No FAQPage schema. Visible FAQs with matching schema give engines ready-made answers to quote.",
  });
  const og = metaContent(html, "property", "og:title") && metaContent(html, "property", "og:image");
  add({
    id: "og", group: "Structured data", label: "Open Graph tags", weight: 3,
    status: og ? "pass" : "warn",
    detail: og ? "og:title and og:image present." : "Missing og:title or og:image — affects how links look when shared.",
  });

  // --- Crawlability
  const robotsTxt = robotsRes?.res.ok ? robotsRes.body : "";
  add({
    id: "robots", group: "AI crawler access", label: "robots.txt", weight: 4,
    status: robotsTxt ? "pass" : "warn",
    detail: robotsTxt ? "robots.txt found." : "No robots.txt found at the site root.",
  });
  const blocked = robotsTxt ? AI_BOTS.filter((b) => robotsBlocks(robotsTxt, b)) : [];
  add({
    id: "ai-bots", group: "AI crawler access", label: "AI crawlers allowed", weight: 12,
    status: blocked.length === 0 ? "pass" : blocked.length >= 3 ? "fail" : "warn",
    detail: blocked.length ? `Blocked from the whole site: ${blocked.join(", ")}. If you want to appear in AI answers, review these rules.` : `None of ${AI_BOTS.join(", ")} are blocked from the site root.`,
  });
  const sitemapOk = !!sitemapRes?.res.ok && /<(urlset|sitemapindex)/i.test(sitemapRes.body);
  const sitemapInRobots = /^\s*sitemap:/im.test(robotsTxt);
  add({
    id: "sitemap", group: "AI crawler access", label: "XML sitemap", weight: 5,
    status: sitemapOk || sitemapInRobots ? "pass" : "warn",
    detail: sitemapOk ? "sitemap.xml found." : sitemapInRobots ? "Sitemap referenced in robots.txt." : "No sitemap.xml found at the root and none referenced in robots.txt.",
  });
  const llmsOk = !!llmsRes?.res.ok && !/<html/i.test(llmsRes.body.slice(0, 500)) && llmsRes.body.trim().length > 20;
  add({
    id: "llms", group: "AI crawler access", label: "llms.txt (emerging)", weight: 3,
    status: llmsOk ? "pass" : "warn",
    detail: llmsOk ? "llms.txt found." : "No llms.txt. It's an emerging, proposed convention — low effort to add, though support by AI providers isn't confirmed.",
  });
  add({
    id: "https", group: "AI crawler access", label: "HTTPS", weight: 3,
    status: page.finalUrl.startsWith("https://") ? "pass" : "fail",
    detail: page.finalUrl.startsWith("https://") ? "Served over HTTPS." : "Site is not served over HTTPS.",
  });

  const total = checks.reduce((s, c) => s + c.weight, 0);
  const got = checks.reduce((s, c) => s + (c.status === "pass" ? c.weight : c.status === "warn" ? c.weight * 0.5 : 0), 0);
  const score = Math.round((got / total) * 100);

  return Response.json({ url: page.finalUrl, score, checks });
}
