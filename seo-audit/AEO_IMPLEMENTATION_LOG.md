# AEO Implementation Log — 2026-10-12

| Change | Affected URLs | Evidence / guidance | Validation | Outstanding dependency |
|---|---|---|---|---|
| Entity disambiguation in Organization schema | All pages (layout JSON-LD) | Brand search returned only other Metrons; Google: structured data should match visible content | JSON-LD parses; values match the About/Company pages | Owner: real `sameAs` profiles |
| Article author linked to the Organization `@id` | All /blog/* | Consistent entity graph | Rendered on the cost post | — |
| Accurate sitemap lastmod | /sitemap.xml | Freshness signals must be accurate to be used | Sitemap inspected | — |
| IndexNow | /indexnow-key.txt, scripts | IndexNow protocol docs | 404 until the key is set (expected) | Owner: INDEXNOW_KEY + Bing WMT |
| Cost guide with original, cited data | /blog/how-much-does-ai-automation-cost | Google: non-commodity content; observed SERP pattern | Rendered | Re-test prompt P02 in 4–6 weeks |
| Crawler policy reviewed, no change | /robots.txt | OpenAI and Perplexity bot docs | curl robots.txt | Owner decision on training opt-out |
| llms.txt kept as experiment (class C) | /llms.txt | Google says Search doesn't use it | — | None; no ranking claim |
