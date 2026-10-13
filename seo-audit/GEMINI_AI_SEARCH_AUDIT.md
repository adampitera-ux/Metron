# Gemini & Google AI Search Audit (2026-10-12)

## What was actually observed
3 Google searches were run in Chrome (desktop, logged-in profile, hl=en, gl=us). Results are recorded in AI_CITATION_TRACKING.csv.

| Prompt | AI Overview shown? | Metron mentioned / cited | Notable sources |
|---|---|---|---|
| best AI automation agency for small business | Not observed | No / No | Lindy, Reddit, Forbes, goodish.agency, DesignRush, aimakers.co, Maps pack |
| how much does AI automation cost for a small business | Not observed (People Also Ask present) | No / No | Consultrium, Bluecore, Freshstack, Taskip, Parix, Reddit, Quora |
| AI receptionist for HVAC companies | Not observed | No / No | Allo, ElevenLabs, NextPhone, Dapta, Retell, Trillet, Sophiie |

**Not tested** (no access or not performed): the Gemini app, Google AI Mode, ChatGPT search, Perplexity and Copilot. **No AI answers are invented in this report.** "Not observed" means it did not appear in that one session. That is not evidence that it never appears.

## Citation gap analysis
- **Vendor-selection prompts:** competitors appear through listicles (often self-published), directories (DesignRush, G2) and the Maps pack. Metron has none of these.
  - Gap: independent third-party presence.
  - Fix: real directory profiles and real reviews. Don't stuff competitor names.
- **Pricing prompts:** sources are small agency blogs with concrete numbers.
  - Gap: Metron's guide was vague. **Fixed:** it now has a cited table plus Metron's real prices.
  - Confidence the change helps eventually: Medium. Measure by re-testing P02 in 4–6 weeks.
- **HVAC receptionist prompts:** SaaS-dominated.
  - Gap: product demos and integrations.
  - Recommendation: deprioritize the head term; target the long-tail.
- **Brand prompts:** web search returns only other Metrons. Fix: disambiguation in schema (done), plus external profiles (owner).

## Opportunity matrix
| Cluster | Intent | Metron URL | Observed? | Gap | Improvement | Confidence | Measure |
|---|---|---|---|---|---|---|---|
| Vendor selection | BOFU | / , /blog/how-to-choose-an-ai-automation-agency | Absent (1 obs.) | Third-party mentions | Directory profiles, reviews | Medium | P01 monthly |
| Pricing | MOFU | /blog/how-much-does-ai-automation-cost | Absent (1 obs.) | Specific numbers | ✅ Done | Medium | P02 monthly + GSC |
| Industry problem-solving | MOFU | /industries/roofing, /industries/pest-control | Not tested | Industry depth | Content calendar wk 1–3 | Medium | P05, P12 |
| Brand | BOFU | /about, /company | Absent | Entity | sameAs + profiles | High | P16–P18 |
