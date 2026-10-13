# Metron — Executive SEO Audit (2026-10-12)

**Scope:** live site https://www.usemetron.com (crawled 2026-10-12), repo `main` @ 0e22dc0, Google Search Console summary shared by the owner, live Google SERP observations, competitor web research.
**Labels:** ✅ confirmed (measured) · 🔎 informed hypothesis · ❓ needs more data.

## 1. Current site assessment
- **Stack:** Next.js 16 App Router, fully static generation (SSG) on Vercel. All primary content, titles, canonicals and JSON-LD are in the initial HTML ✅ — no JavaScript-SEO risk.
- **Size:** 183 indexable URLs, and all of them are in the sitemap ✅. Breakdown: 55 blog posts, 48 glossary, 36 industries, 10 locations, 8 services, 8 blog categories, 3 tools, 15 core/hub pages. 9 `/lp/*` ad pages are correctly `noindex, follow`.
- **Technical health** ✅:
  - 183 of 183 pages return 200.
  - 0 broken internal links and 0 duplicate titles or descriptions.
  - Exactly 1 H1 per page and 0 images without alt text.
  - Every canonical is self-referencing.
  - http, non-www and trailing-slash variants 308-redirect to the canonical URL; UTM query parameters canonicalize correctly.
- **Search performance** (owner-provided Search Console, 28 days): **731 impressions, 0 clicks, average position ~70** ✅. This is a **ranking/authority problem, not a technical one**. The pages are indexed but rank on pages 5–10.
  - Most impressions come from broad informational terms: ai integration, rpa, field service management, api integration, workflow automation.
  - The best positions are long-tail commercial terms: roofing insurance-claim follow-up (~8), pest control quote follow-up (~26), missed-call text-back calculator (~26).

## 2. Confirmed technical issues (all fixed in this release)
| # | Issue | Evidence | Severity | Status |
|---|---|---|---|---|
| T1 | 404 pages had contradictory `noindex` and `index, follow` robots tags, plus a canonical to the homepage | `curl /nope` | Medium | Fixed |
| T2 | noindex utility pages (`/thank-you`, `/welcome`) canonicalized to the homepage, a conflicting signal | `curl /thank-you` | Low | Fixed |
| T3 | Sitemap `lastmod` was set to the build time on 170+ URLs, so every deploy claimed every page changed. Google and Bing ignore lastmod that isn't consistently accurate. | `src/app/sitemap.ts` | Medium | Fixed: lastmod only sent where known (blog) |
| T4 | Apex `http://usemetron.com` takes 2 redirect hops (to https apex, then to www) | `curl` | Low | Owner: Vercel domain setting (see FINAL_QA) |
| T5 | No IndexNow support for Bing, Copilot and Yandex | repo | Low | Implemented; needs an env key |
| T6 | No automated SEO regression check | repo | Medium | `npm run seo:check` added |

## 3. Biggest commercial opportunities
1. **Brand entity collision** ✅. At least 8 unrelated organizations are called "Metron", including metron.ai (automation) and Metron Inc (AI/government). A web search for the brand returns none of Metron's pages, and there are zero independent mentions of usemetron.com. AI answer engines can't recommend a company they can't disambiguate.
   - Done: `alternateName` and `disambiguatingDescription` added to the Organization schema.
   - Owner: create a LinkedIn company page, Clutch and Google Business Profile listings (if eligible), and add them to `SITE.sameAs`.
2. **Transparent pricing is a real differentiator** ✅. Competitors publish $1,500–$30,000 builds. Metron publishes $500–$2,800 setup fees. That is original, verifiable information.
   - Done: the cost guide now has a cited market-price table.
3. **Long-tail commercial terms already near page 1** ✅ (roofing, pest control, moving, calculator). These are the fastest path to first clicks. FAQs were added last release; the next step is requesting indexing and watching CTR.
4. **No proof** ✅. There are no case studies, reviews or third-party mentions. This is the single largest weakness for both conversion and AI citations. Nothing was fabricated; real proof needs owner input.

## 4. Competitor findings (detail in COMPETITOR_RESEARCH.md)
- **"Best AI automation agency" queries:** owned by listicles, often written by agencies about themselves, plus Reddit, Forbes and DesignRush, plus a Google Maps pack. Metron is absent.
- **AI receptionist head terms:** owned by funded SaaS companies (Jobber, Avoca, Dapta, Retell, ElevenLabs). Near-term win probability is low.
- **Cost queries:** small agency blogs rank (Bluecore, Parix, Freshstack, Taskip). These are winnable with better, concrete content.

## 5. Industry priorities (detail in INDUSTRY_STRATEGY.md)
1. Roofing
2. Pest control
3. HVAC long-tail
4. Plumbing
5. Moving
6. Construction
7. Property management

These are ranked on existing Search Console evidence, how long the sales cycle and follow-up are, and fit with Metron's Scale plan.

## 6. Existing-page risks
- **10 location pages** (a remote national agency with no local offices). Google's doorway guidance applies.
  - Recommendation: keep them (indexed, with no evidence of harm), **do not add more**, and review in 90 days with Search Console data.
- **36 industry pages share one template.** Uniqueness comes from per-industry pain points, automations and FAQs. The highest-value pages need deeper, industry-specific detail first.
- No deletions, slug changes, noindex or redirects were made to any existing URL.

## 7. Immediate recommendations (owner)
1. In Search Console, request indexing for the updated cost post, plus the roofing, pest-control and calculator pages.
2. Verify the site in **Bing Webmaster Tools** (importing from Search Console is fastest) and submit the sitemap.
3. Set `INDEXNOW_KEY` in Vercel, redeploy, then run `npm run indexnow -- --all` once.
4. Create a LinkedIn company page and a Clutch profile; send the URLs so they can be added to `sameAs`.
5. Move to a domain email (for example hello@usemetron.com). A Gmail address on a business site is a trust gap.
6. Collect 3–5 real customer reviews or results with permission.

## 8. Data limitations
- No direct API access to Search Console, GA4, Bing Webmaster Tools or any CRM. Search Console numbers are the owner-provided summary.
- No third-party SEO data source, so **no search volumes, keyword difficulty, backlink counts or competitor traffic are claimed anywhere.**
- AI-engine testing was limited to 3 Google SERP observations from one logged-in browser. Gemini, ChatGPT, Perplexity and Copilot were **not** tested; see AI_CITATION_TRACKING.csv.
- Core Web Vitals field data was not available. The site is static, with no lab regressions observed; run PageSpeed Insights for field data.
