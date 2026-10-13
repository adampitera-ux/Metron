# AEO / GEO Strategy

## Official guidance (fetched 2026-10-12)
- **Google, [AI features](https://developers.google.com/search/docs/appearance/ai-features):** "There are no additional requirements to appear in AI Overviews or AI Mode." Pages must be indexed and snippet-eligible. Controls are `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` and `Google-Extended`. AI-feature traffic is reported inside Search Console's Performance report (type "Web").
- **Google, [generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide):** llms.txt and special markup are not used by Google Search. No content chunking is required, and no special schema is required. Inauthentic mentions don't help. Google recommends non-commodity content with a unique point of view, quality over quantity, and avoiding excessive page variations.
- **OpenAI, [bots](https://developers.openai.com/api/docs/bots):**
  - `OAI-SearchBot` handles ChatGPT search inclusion and respects robots.txt.
  - `GPTBot` collects training data and respects robots.txt.
  - `ChatGPT-User` makes user-triggered fetches and does not follow robots.txt.
- **Perplexity, [bots](https://docs.perplexity.ai/guides/bots):**
  - `PerplexityBot` handles search and respects robots.txt.
  - `Perplexity-User` makes user-triggered fetches and generally ignores robots.txt.
- **Bing:**
  - [IndexNow](https://www.bing.com/indexnow/getstarted) protocol: verified (POST to api.indexnow.org with host, key, keyLocation and urlList).
  - [Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a): the page is client-rendered and could not be fetched. Its content is **not** paraphrased here; the owner should review it when verifying Bing Webmaster Tools.

## Platform differences (do not conflate)
| Experience | Retrieval source | What Metron controls |
|---|---|---|
| Google organic | Google index | Everything in classic SEO |
| AI Overviews / AI Mode | Google index (snippet-eligible pages) | Same as organic; preview controls |
| Gemini app (web-grounded) | Google Search grounding | Indexability; `Google-Extended` affects grounding and training in other Google systems |
| Bing / Copilot | Bing index | Bing Webmaster Tools verification, sitemap, IndexNow |
| ChatGPT search | OAI-SearchBot plus partner search | Allow OAI-SearchBot |
| Perplexity | PerplexityBot index | Allow PerplexityBot |

## Tactic classification
| Tactic | Class | Decision |
|---|---|---|
| Indexable, crawlable, snippet-eligible pages | A (documented) | ✅ Verified (all 183) |
| Accurate canonicals, sitemap and lastmod | A | ✅ Fixed lastmod and 404/noindex canonicals |
| Helpful, original content with unique information | A | ✅ Cited price table; ongoing calendar |
| Organization schema matching visible facts | B | ✅ Disambiguation added |
| IndexNow for Bing/Copilot freshness | A (for IndexNow engines) | ✅ Implemented, needs a key |
| Allow OAI-SearchBot and PerplexityBot | A (per their docs) | ✅ Already allowed |
| Answer-first summaries (TL;DR, answer boxes) | B | Already present site-wide |
| llms.txt | C (experiment; Google says it doesn't use it) | Keep: auto-generated, near-zero maintenance. No ranking claim. |
| `speakable` schema | C | Kept; harmless; no benefit claimed |
| Mass brand-name insertion, fake mentions, self-ranking listicles | D | ❌ Not done |
| FAQ schema for rich results | B: FAQ rich results are restricted by Google to authoritative government/health sites | Kept as semantic markup only; no rich result expected |

## Verified issues relevant to AI discovery
1. **Entity ambiguity** ("Metron" collides with at least 8 companies): partly fixed in schema. Needs real `sameAs` profiles.
2. **Zero independent citations:** see AI_CITATION_ACQUISITION.md.
3. **No proof assets** (case studies, reviews): owner input needed.
