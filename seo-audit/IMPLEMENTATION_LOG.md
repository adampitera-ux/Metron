# Technical Implementation Log — 2026-10-12

**Pre-change state:** branch `main` @ 0e22dc0, clean working tree (no user changes to protect).
**Rollback for any item:** `git revert <commit>`; Vercel "Promote" of the previous deployment restores production instantly.

| # | Change | Files | Rationale | Risk | Test |
|---|---|---|---|---|---|
| 1 | Removed site-wide `canonical: "/"` | src/app/layout.tsx | 404s and noindex pages canonicalized to the homepage | Low: every indexable page sets its own canonical (crawl: 183 of 183 self-canonical after the change) | seo:check, curl /nope, /thank-you |
| 2 | Root robots meta is now `max-snippet:-1, max-image-preview:large` only | src/app/layout.tsx | `index, follow` conflicted with the 404's `noindex`; index/follow is the default | Low: LP and utility noindex overrides verified | curl /lp/ai-receptionist → `noindex, follow` |
| 3 | Sitemap lastmod only where known | src/app/sitemap.ts | The build timestamp on every URL made lastmod untrustworthy | Low: URL set unchanged (183) | sitemap diff |
| 4 | Organization `alternateName`, `disambiguatingDescription`, `contactPoint`; BlogPosting author → org `@id`; Service `brand` | src/lib/seo.tsx | Brand collision with 8+ "Metron" entities; connect the entity graph | Low: facts match visible content | JSON parse in seo:check; Rich Results Test (owner) |
| 5 | IndexNow key route + submit script | src/app/indexnow-key.txt/route.ts, scripts/indexnow.mjs, package.json | Bing/Copilot freshness | Low: 404 until the env var is set | local 404 check |
| 6 | SEO QA crawler `npm run seo:check` | scripts/seo-check.mjs, package.json | Regression detection; flags only, never edits | None | Ran locally and on production |
| 7 | Cost guide: cited published-price table + Metron's real prices, `updated` date | content/blog/how-much-does-ai-automation-cost.md | SERP shows concrete-number guides ranking; adds original verifiable info | Low: prices sourced from providers' public pages Oct 2026; Metron prices match plans.ts | Render check |
| 8 | Glossary "Put it to work" links (9 high-impression terms → service/tool) | src/app/(site)/glossary/[slug]/page.tsx | Impressions with no commercial next step | Low | seo:check links |
| 9 | Internal links: fine-tuning (2 new inlinks); lead-follow-up service → pest-control and moving; quote follow-up post → pest-control and moving | glossary-ai.ts, services.ts, ai-quote-follow-up-system.md | Weakly linked page; near-page-1 industry pages | Low | crawl inlinks |

**Not changed (deliberately):** no URL deleted, renamed, redirected or noindexed. No bulk title rewrites (long-title warnings logged only). Design unchanged.

**Pre-existing, not fixed:** 2 ESLint `react-hooks/set-state-in-effect` errors in LeadForm.tsx and LpCityEyebrow.tsx (they read URL params on mount; both work in production). Left alone to avoid touching the working lead form and Ads message-match without a specific bug.
