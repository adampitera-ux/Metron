# Final QA — 2026-10-12 (production, commit ad267b3)

| Check | Result |
|---|---|
| `npm run build` | ✅ Pass (207 static routes) |
| `npm run lint` | ⚠ 2 errors + 1 warning, **pre-existing** (identical before this work): LeadForm.tsx and LpCityEyebrow.tsx set-state-in-effect; unused email helper |
| `BASE=https://www.usemetron.com npm run seo:check` | ✅ 0 errors across 183 URLs. Warnings: 13 titles >65 chars (Google rewrites; not bulk-changed), /tools and /glossary/fine-tuning short |
| Sitemap | ✅ 183 URLs, all 200, all self-canonical; `lastmod` on 64 blog/hub URLs with real dates |
| robots.txt | ✅ Unchanged; search and AI bots allowed; /api/ disallowed |
| 404 page | ✅ HTTP 404, `noindex`, no canonical (previously conflicting `index, follow` + canonical → home) |
| noindex pages (/thank-you, /welcome) | ✅ No longer canonicalize to the homepage |
| Ad landing pages /lp/* | ✅ Still `noindex, follow`, self-canonical |
| URL variants | ✅ http / non-www / trailing slash → 308 to canonical. ⚠ `http://usemetron.com` takes 2 hops (owner: in Vercel → Domains, make the apex redirect straight to https://www.usemetron.com) |
| JSON-LD | ✅ Parses on every page; Organization has disambiguation and contactPoint; no ratings or reviews. Owner: optionally spot-check at https://validator.schema.org |
| Stripe checkout links (4) | ✅ All present on /pricing; all return 200 |
| Lead API | ✅ Rejects empty payloads (400); real submissions unchanged |
| IndexNow key file | ⏳ 404, as expected until `INDEXNOW_KEY` is set in Vercel |
| Visual check | ✅ Glossary "Put it to work" block and cost-guide table render in the existing design |
| Destructive changes | None: no URLs deleted, renamed, redirected or noindexed |

## Remaining blockers (owner)
1. Set `INDEXNOW_KEY` in Vercel, redeploy, then run `npm run indexnow -- --all` once.
2. Verify Bing Webmaster Tools (import from Search Console).
3. In Search Console, request indexing for /blog/how-much-does-ai-automation-cost, /industries/roofing, /industries/pest-control and /tools/missed-call-revenue-calculator.
4. Create a LinkedIn company page and Clutch/G2/DesignRush profiles, then send the URLs for `sameAs`.
5. Switch to a domain email. (Founding date removed site-wide on 2026-10-12.)
6. Provide one real case study and real reviews (permission required).
7. Set the GA4 ID and key events; add the "AI Assistants" channel group.
8. Run the AI prompt set monthly and log real rows in AI_CITATION_TRACKING.csv.
