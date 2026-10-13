#!/usr/bin/env node
/**
 * Lightweight SEO QA crawl. Flags problems for a human to review — it never changes anything.
 *
 *   npm run build && npx next start -p 3123 &
 *   BASE=http://localhost:3123 npm run seo:check      # or BASE=https://www.usemetron.com
 *
 * Errors (exit 1): non-200 sitemap URLs, missing/duplicate titles or descriptions, H1 count ≠ 1,
 * canonical not self-referencing, noindex pages in the sitemap, broken internal links,
 * invalid JSON-LD, images without alt. Warnings: long titles, thin pages, weakly linked pages.
 */
const BASE = (process.env.BASE ?? "http://localhost:3000").replace(/\/$/, "");
const SITE = (process.env.SITE ?? "https://www.usemetron.com").replace(/\/$/, ""); // canonical origin
const errors = [];
const warnings = [];
const err = (u, m) => errors.push(`${u}  ${m}`);
const warn = (u, m) => warnings.push(`${u}  ${m}`);
const pick = (re, s) => (s.match(re)?.[1] ?? "").trim();

const smXml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const smUrls = [...smXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const smPaths = new Set(smUrls.map((u) => new URL(u).pathname));
if (!smUrls.length) err("/sitemap.xml", "no URLs");
for (const u of smUrls) if (!u.startsWith(SITE)) err(u, `sitemap URL not on ${SITE}`);

const pages = new Map();
const inlinks = new Map();
const queue = ["/", ...smPaths];
const seen = new Set();
while (queue.length) {
  const batch = queue.splice(0, 16).filter((p) => !seen.has(p));
  batch.forEach((p) => seen.add(p));
  await Promise.all(
    batch.map(async (path) => {
      const res = await fetch(BASE + path, { redirect: "manual" });
      const html = res.status === 200 ? await res.text() : "";
      pages.set(path, { status: res.status, html });
      for (const [, href] of html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) {
        if (href.startsWith("//") || /\.(xml|txt|png|jpe?g|pdf|svg)$/.test(href)) continue;
        const p = href.replace(/\/$/, "") || "/";
        if (!inlinks.has(p)) inlinks.set(p, new Set());
        inlinks.get(p).add(path);
        if (!seen.has(p)) queue.push(p);
      }
    }),
  );
}

const titles = new Map();
const descs = new Map();
for (const [path, { status, html }] of pages) {
  if (status !== 200) {
    const from = [...(inlinks.get(path) ?? [])].slice(0, 3).join(", ");
    err(path, `HTTP ${status}${from ? ` (linked from ${from})` : ""}${smPaths.has(path) ? " [in sitemap]" : ""}`);
    continue;
  }
  const robots = pick(/<meta name="robots" content="([^"]*)"/, html);
  const noindex = /noindex/.test(robots);
  if (noindex) {
    if (smPaths.has(path)) err(path, "noindex page is in the sitemap");
    continue;
  }
  const title = pick(/<title>([\s\S]*?)<\/title>/, html);
  const desc = pick(/<meta name="description" content="([^"]*)"/, html);
  const canonical = pick(/<link rel="canonical" href="([^"]*)"/, html);
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (!title) err(path, "missing <title>");
  else if (title.length > 65) warn(path, `title ${title.length} chars`);
  if (!desc) err(path, "missing meta description");
  if (h1s !== 1) err(path, `${h1s} <h1> elements`);
  const expected = SITE + (path === "/" ? "" : path);
  if (canonical.replace(/\/$/, "") !== expected) err(path, `canonical "${canonical}" ≠ ${expected}`);
  if (!smPaths.has(path)) warn(path, "indexable page not in sitemap");
  titles.set(title, [...(titles.get(title) ?? []), path]);
  descs.set(desc, [...(descs.get(desc) ?? []), path]);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { err(path, "invalid JSON-LD"); }
  }
  const noAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  if (noAlt) err(path, `${noAlt} <img> without alt`);
  const main = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
  const words = main.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  if (words < 150) warn(path, `thin: ~${words} words in <main>`);
  if ((inlinks.get(path)?.size ?? 0) < 2 && path !== "/") warn(path, `only ${inlinks.get(path)?.size ?? 0} internal inlink(s)`);
}
for (const [t, ps] of titles) if (ps.length > 1) err(ps.join(", "), `duplicate title "${t}"`);
for (const [d, ps] of descs) if (ps.length > 1) err(ps.join(", "), `duplicate description "${d.slice(0, 60)}…"`);

console.log(`Crawled ${pages.size} URLs from ${BASE} (sitemap: ${smUrls.length})`);
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + warnings.join("\n  "));
if (errors.length) {
  console.log(`\n${errors.length} error(s):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log("\nNo SEO errors found.");
