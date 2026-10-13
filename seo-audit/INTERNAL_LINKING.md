# Internal Linking Plan

**Current architecture** (verified in templates):
- Industry pages list related blog posts (`relatedIndustries`) and location links.
- Service pages list related industries, posts and glossary terms (`SERVICE_TERMS`).
- Glossary pages list related terms and posts that link to them.
- Blog posts render their `relatedServices` and `relatedIndustries`.

**Crawl result:** 0 orphans. Every page has at least 2 inlinks, except `/glossary/fine-tuning`, which had 1 and is now fixed.

| Source | Destination | Anchor | Rationale | Status |
|---|---|---|---|---|
| /glossary/rag | /glossary/fine-tuning | Fine-Tuning (related term) | Page had 1 inlink; RAG vs fine-tuning is a natural comparison | ✅ Done |
| /glossary/prompt-engineering | /glossary/fine-tuning | Fine-Tuning | Same | ✅ Done |
| /blog/how-much-does-ai-automation-cost | /blog/how-to-choose-an-ai-automation-agency | how to choose an AI automation agency | Pricing readers are choosing vendors | ✅ Done |
| /blog/how-much-does-ai-automation-cost | /pricing | pricing page | Commercial path (already present) | ✅ Existing |
| /blog/ai-quote-follow-up-system | /industries/pest-control, /industries/moving (roofing already linked) | industry names (related-industries block) | Pass relevance to near-page-1 industry pages | ✅ Done |
| /glossary/missed-call-text-back + 8 other high-impression terms | matching service / tool | "Put it to work" block | Commercial next step from impression-earning pages | ✅ Done |
| /blog/missed-calls-cost-home-service-businesses | /tools/missed-call-revenue-calculator | (existing, 2 links) | Same | ✅ Existing |
| /industries/roofing, pest-control, moving | /blog/ai-quote-follow-up-system | post card | Supporting how-to content | ✅ Done via relatedIndustries |
| /services/lead-follow-up | /industries/pest-control, /industries/moving (roofing existing) | industry cards | Commercial cluster | ✅ Done |

Anchors should be descriptive and natural; avoid repeating exact-match anchors.
