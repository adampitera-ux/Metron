# AEO Measurement Plan

## Observation method
- **Prompts:** use the fixed set in AI_VISIBILITY_PROMPTS.csv (18 prompts). Don't reword prompts between rounds.
- **Cadence:** monthly, same week.
- **Platforms:** Google (AI Overview / AI Mode when shown), Gemini (web), ChatGPT search, Perplexity, Copilot.
- **Session setup:** logged-out or incognito where possible; record country, language and login state.
- **Recording:** add one row per platform × prompt to AI_CITATION_TRACKING.csv. Record "not observed" separately from "not tested". Never pre-fill rows.

## Metrics (always report n and the date)
| Metric | Definition |
|---|---|
| Mention rate | observations where Metron is named ÷ valid observations (platform × prompt cohort) |
| Citation rate | observations linking to a usemetron.com URL ÷ valid observations |
| Correct-link rate | citations to the most relevant Metron URL ÷ citations |
| Description accuracy | brand mentions with correct facts (service, pricing, US, small business) ÷ brand mentions |
| Competitor co-occurrence | count of each competitor named alongside or instead of Metron |
| AI referral sessions | GA4 sessions with referrer matching `chatgpt.com\|perplexity.ai\|gemini.google.com\|copilot.microsoft.com\|bing.com/chat` |
| AI referral conversions | key events (lead, booking, purchase) from those sessions |

## Limitations
- AI answers vary by session, user, date and wording. A small sample is anecdotal and does not estimate market share.
- Google AI Overview clicks are not separable in Search Console; they are included in "Web".
- Referrer-less AI traffic shows up as Direct. Never relabel Direct traffic as AI.

## GA4 setup (owner)
Create a custom channel group "AI Assistants" using the referrer regex above, placed above "Referral".
