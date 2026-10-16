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

## 2026-10-12 (round 2): keyword coverage, founding date removal

| # | Change | Files | Rationale | Risk / rollback |
|---|---|---|---|---|
| 10 | Founding date removed (Company page, Organization `foundingDate`, `SITE.founded`) | company/page.tsx, seo.tsx, site.ts | Owner request; the date was unconfirmed | None |
| 11 | Website service retargeted at "web design" (title, H1, answer, description, shortName "Web Design", 2 FAQs from plans.ts facts). Slug `/services/website-refresh` unchanged. | services.ts | "web design" appeared on zero pages despite every plan including a website | Low; git revert |
| 12 | Industry titles: "AI Receptionist & Automation for {audience}" (generated in the template; data `metaTitle` kept as fallback) | industries/[slug]/page.tsx | Owners search both "AI automation for X" and "AI receptionist for X"; pages had ~0 clicks, so title-change risk is low | Revert the template lines to use `i.metaTitle` |
| 13 | "Web design and local SEO for {audience}" section on all 36 industry pages; prices read from PLANS | industries/[slug]/page.tsx | Real offer (every plan includes a website); links to the web design service and pricing | Low |
| 14 | Fixed lowercase audience bug ("hvac companies" → "HVAC companies") in 7 template headings | industries/[slug]/page.tsx | Visible typo | None |
| 15 | Pool cleaning and hair salon wording; service titles (AI Automation Services, AI Receptionist Service, AI Integration Services); home, pricing and industries-hub metadata include web design | services*.ts, industries-*.ts, page.tsx, pricing, industries hub | Match the real search phrasing | Low |

## 2026-10-15 (round 3): "Crawled – currently not indexed" (7 URLs) + CTR

| # | Change | Rationale |
|---|---|---|
| 16 | Long-form guides (sections, tables, FAQs) for /glossary/ai-evals, ai-hallucination, prompt-engineering, fine-tuning (139–281 → 598–802 words) | Thin pages Google crawled but didn't index |
| 17 | Contextual links to all 7 affected URLs from related posts, service glossary blocks, glossary "Put it to work" blocks and industry web-design sections (website-cost post: +36 links) | Two posts had zero in-content links |
| 18 | Service meta descriptions now show real plan prices; review service retitled "Reputation & Review Automation for Local Businesses" (GSC query "reputation automation") | CTR: price and exact-match wording in the snippet |
| — | Finding: no GA4 or Google Ads ID is set in production, so conversion events don't fire | Owner must supply IDs (see final message) |

## 2026-10-16 (round 4): GSC query alignment

| # | Change | Rationale |
|---|---|---|
| 19 | New /industries/home-services overview page (shared home-service workflows, FAQs, real plan prices) linked from the hub, every industry page, the receptionist and follow-up services, and the AI tools post | GSC query "home service business automation" had no matching page; the existing /lp/home-services is noindex (ads only), so no conflict |
| 20 | Website cost post title shortened to 58 chars ("How Much Does a Small Business Website Cost? (2026 Prices)") | Was 74 chars and truncated; GSC queries "how much does a business website cost" and "small business website cost" |
