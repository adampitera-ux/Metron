#!/usr/bin/env node
/**
 * Notify IndexNow engines (Bing, Yandex, Seznam, Naver…) that specific URLs changed.
 * IndexNow is a change notification, not a ranking or indexing guarantee — only submit
 * pages that were actually added, updated or removed.
 *
 *   INDEXNOW_KEY=… node scripts/indexnow.mjs /pricing /blog/how-much-does-ai-automation-cost
 *   INDEXNOW_KEY=… node scripts/indexnow.mjs --all   # one-time initial submission from the sitemap
 */
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.usemetron.com").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY?.trim();
if (!key) {
  console.error("Set INDEXNOW_KEY (same value as in Vercel). Nothing submitted.");
  process.exit(1);
}
const args = process.argv.slice(2);
const host = new URL(SITE).host;
const keyLocation = `${SITE}/indexnow-key.txt`;

let urls;
if (args.includes("--all")) {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
} else {
  urls = args.map((a) => (a.startsWith("http") ? a : `${SITE}${a.startsWith("/") ? a : `/${a}`}`));
}
urls = [...new Set(urls)].filter((u) => new URL(u).host === host); // only our canonical host
if (!urls.length) {
  console.error("No URLs for", host, "— pass paths like /pricing or --all.");
  process.exit(1);
}

// The key file must be live before engines will accept submissions.
const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ""));
if (live.trim() !== key) {
  console.error(`${keyLocation} does not serve the key yet. Add INDEXNOW_KEY in Vercel and redeploy first.`);
  process.exit(1);
}

for (let i = 0; i < urls.length; i += 10000) {
  const urlList = urls.slice(i, i + 10000);
  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });
  const meaning = { 200: "OK", 202: "Accepted (key validation pending)", 400: "Bad request", 403: "Key not valid", 422: "URLs don't match host/key", 429: "Too many requests — slow down" }[res.status] ?? "";
  console.log(`IndexNow: ${urlList.length} URL(s) → HTTP ${res.status} ${meaning}`);
  if (res.status >= 400) process.exitCode = 1;
}
