# AI Crawler Policy

**Current file:** `src/app/robots.ts`, generating /robots.txt.
- Named search and AI bots, plus `*`, are allowed on `/` with `/api/` disallowed.
- Sitemap declared.
- Nothing private is exposed. `/api/` holds only the lead endpoint (POST plus rate limit). **robots.txt is not access control**; the API validates server-side.

| Platform | User agent | Purpose | Obeys robots.txt | Current | Business value | Recommendation |
|---|---|---|---|---|---|---|
| Google | Googlebot | Search, AI Overviews, AI Mode | Yes | Allowed | Critical | Keep |
| Google | AdsBot-Google(-Mobile) | Ads landing-page checks | Yes (named only) | Allowed | Critical for Ads | Keep |
| Google | Google-Extended | Token controlling Gemini training and grounding outside Search | Yes | Allowed | Gemini app grounding | Keep allowed (owner wants AI visibility). Blocking does **not** affect Google Search. |
| Microsoft | Bingbot | Bing and Copilot | Yes | Allowed | High | Keep |
| OpenAI | OAI-SearchBot | ChatGPT search | Yes | Allowed | High | Keep |
| OpenAI | GPTBot | Model training | Yes | Allowed | Indirect | Owner choice; allowed now. Block to opt out of training without affecting ChatGPT search. |
| OpenAI | ChatGPT-User | User-triggered fetch | No | n/a | Medium | No action possible via robots |
| Perplexity | PerplexityBot | Perplexity search | Yes | Allowed | Medium | Keep |
| Perplexity | Perplexity-User | User-triggered fetch | Generally no | n/a | Medium | — |
| Anthropic | ClaudeBot / Claude-SearchBot / Claude-User | Training / search / user fetch | Per vendor docs | Allowed | Medium | Keep |
| Apple | Applebot / Applebot-Extended | Siri/Spotlight search / training opt-out token | Yes | Allowed | Low-Medium | Keep |
| Others | DuckDuckBot, Amazonbot, meta-externalagent | Search / assistants / training | Yes | Allowed | Low | Keep; review yearly |

**Decision:** no change. Every search and training crawler is currently allowed, which matches the owner's stated goal of maximum AI discoverability. If the owner later wants to opt out of *training* only, disallow `GPTBot`, `Google-Extended`, `ClaudeBot`, `Applebot-Extended` and `meta-externalagent`, and keep all search agents.

**Verification:** `curl https://www.usemetron.com/robots.txt`; Search Console robots.txt report.
