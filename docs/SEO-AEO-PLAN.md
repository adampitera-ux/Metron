# Metron — SEO, AEO & GEO Growth Plan

**Owner:** Founder / Marketing lead
**Last updated:** 2026-10-04
**Scope:** the Metron website (Next.js 16 App Router), editorial program, off-site entity building, local presence, measurement, and how organic search works alongside Google Ads
**Planning horizon:** 12 months, with a detailed 90-day roadmap

> **Ground rule for this document:** nobody — not us, not any agency, not any tool vendor — can guarantee a Google ranking or a citation inside ChatGPT, Perplexity, Gemini, Claude, Copilot or Google AI Overviews. Search engines and AI providers do not publish their source-selection logic in full. This plan separates **what is publicly documented** from **what is reasonable inference**, and it optimizes for what we control: being the clearest, most trustworthy, most consistently described answer to small-business owners' questions about using AI in their operations.

---

## 1. Executive summary

### 1.1 The goal

Make Metron the business that search engines and AI assistants surface when the owner or operator of a small or medium-sized business asks some version of:

- "How do I use AI in my business?" / "Who can integrate AI into my company?"
- "How do I automate invoicing, scheduling, data entry and paperwork?"
- "Should I build custom software or keep using spreadsheets?"
- "AI for [my industry]" — HVAC, plumbing, trucking, manufacturing, property management, dental, staffing, wholesale and dozens more
- "How much does AI automation cost, and is it safe for my data?"

### 1.2 The strategy in one paragraph

We win by (1) publishing the most practical, operator-level content on the web about **using AI to run a small business** — back office, custom software, integrations, customer service, sales follow-up and industry playbooks — written for owners of "boring," essential businesses who are skeptical and short on time; (2) keeping a tightly structured site where every page answers one question and links to its neighbors (services ↔ industries ↔ blog categories ↔ glossary ↔ tools ↔ company facts); (3) making the Metron *entity* unambiguous across the web; (4) earning third-party mentions in trade media, associations, podcasts, partner directories and review sites; (5) measuring Google, Bing and AI-assistant visibility directly; and (6) running Google Ads on separate, noindexed landing pages with shared conversion tracking so paid and organic reinforce each other (§13).

### 1.3 What SEO, AEO and GEO mean *for this plan*

AEO and GEO are **how our own site gets found and cited** — not what our blog is about. Roughly 1% of our editorial topics touch AEO/GEO or Google Ads; the rest is AI for business operations.

| Discipline | What it targets for Metron | Primary success signal |
|---|---|---|
| **SEO** | Ranking our service, industry, category and blog pages in Google/Bing organic results | Impressions, rankings, organic clicks, audit bookings |
| **AEO** (answer engine optimization) | Our pages being the extracted answer: featured snippets, People Also Ask, AI Overviews | Snippet/AI Overview presence for target queries |
| **GEO** (generative engine optimization) | Metron being mentioned, cited or recommended inside ChatGPT, Perplexity, Gemini, Claude and Copilot answers | Mentions + citations across a fixed monthly prompt panel; AI-referral sessions |

### 1.4 How AI answer engines choose sources — known vs. inferred

**Publicly documented or clearly observable**

| Engine | How it gets web content (as publicly described) | Implication for us |
|---|---|---|
| **Google AI Overviews / AI Mode** | Built on Google Search's index and ranking systems; Google states there are no special requirements beyond normal Search eligibility. Controlled by **Googlebot**, not Google-Extended. | Classic SEO quality is the entry ticket. |
| **ChatGPT search** | **OAI-SearchBot** for its search index; **ChatGPT-User** for user-initiated fetches; widely reported to also draw on third-party search providers, notably Bing. | Be indexed well in Bing (Bing Webmaster Tools + IndexNow); allow OAI-SearchBot. |
| **Microsoft Copilot** | Grounded on Bing search. | Bing indexing matters directly. |
| **Perplexity** | Own crawler (**PerplexityBot**) and index; **Perplexity-User** for user fetches; numbered citations. | Allow PerplexityBot; write citable passages. |
| **Gemini app** | Google Search grounding; **Google-Extended** is a control token for Gemini training/grounding use and does not affect Search. | We allow it — being represented is the goal. |
| **Claude** | Anthropic documents **ClaudeBot** (training), **Claude-SearchBot** (search indexing), **Claude-User** (user fetches). | Allow all three; be present in more than one search index. |

**Reasonable inference (not confirmed by providers)**

- **Retrieval first.** Assistants search, retrieve a few pages and synthesize, so ranking for long, specific sub-queries ("ai invoice reminders quickbooks small business") matters as much as head terms.
- **Extractability.** A plain 40–80 word answer under a heading that mirrors the question appears easier to lift. Academic GEO research (Aggarwal et al., 2023) found citations, quotations and statistics raised visibility in their test setup — directional, not a guarantee.
- **Corroboration.** For "who should I hire" prompts, assistants appear to favor entities described consistently across independent sources.
- **Training vs. retrieval.** Model memory lags by months; a new brand wins near-term through retrieval and long-term through being widely mentioned.
- **Structured data** helps search engines understand pages; it is not confirmed as a direct LLM input.
- **llms.txt is an emerging, proposed convention** (llmstxt.org); no major AI provider has publicly confirmed using it for ranking or citation. We ship it because it's cheap and harmless.

### 1.5 Top 10 priorities (in order)

1. Keep the technical foundation clean on what is already built: static HTML, sitemap, robots.txt allowing search and AI crawlers (and AdsBot), valid JSON-LD, fast Core Web Vitals, `/lp/*` and `/thank-you` noindexed.
2. Verify **Google Search Console and Bing Webmaster Tools**; enable **IndexNow**.
3. Lock the **entity**: one canonical description ("the AI integration agency for small and medium-sized businesses"), `/company` as the facts page, consistent `sameAs` profiles.
4. Publish **5 new posts per month** against the calendar in §6, weighted ~85–90% toward AI for business operations, industries and strategy.
5. Turn the **8 category hubs** into genuine topic hubs (intro, best-of links, FAQs), not thin archives.
6. Expand industry coverage from **24 to ~40 industries** via playbook posts first, industry pages second (§5).
7. Launch **industry × use-case pages** only where they pass the uniqueness test (§5.3), starting with HVAC, plumbing and construction.
8. Publish **one original data piece per quarter** (e.g., anonymized aggregate findings from our AI audits — with consent and a clear method).
9. Earn **10+ genuine client reviews** (Google if eligible, Clutch, G2) and list in partner directories where we have real integrations.
10. Run Google Ads on `/lp/*` with offline conversion import, and feed the **search-terms report** into the editorial backlog every month (§13).

---

## 2. Positioning & content mix

### 2.1 Who we are

Metron is the **AI integration agency for small and medium-sized businesses** of every kind — mostly blue-collar, trades and "boring" essential businesses (home services, construction, trucking, manufacturing, cleaning, auto, property management), but casting a wide net to offices, clinics, firms, restaurants, retail, e-commerce and wholesale. We integrate AI anywhere it saves money or time:

- **Back-office and admin automation** — invoicing, payment reminders, data entry, document processing, scheduling, bookkeeping prep
- **Custom AI software and internal tools** — quoting calculators, dashboards, portals, internal assistants trained on SOPs
- **Software integrations** — connecting the CRM, field-service, accounting and communication tools a business already uses
- **AI receptionists and follow-up** — answering every call, missed-call text-back, quote follow-up, reactivation
- **Customer service** — chat, reminders, status updates, reviews
- **Reporting** — dashboards and plain-English summaries of the numbers
- **Websites and search visibility** — conversion-focused sites, Google and AI-search readiness

The promise: grow faster and save capital on back-end work so owners can focus on what they do best. Delivery is done-for-you; the first step is a **free AI audit** at `/contact`. Plans start at **$900/month (Standard)** and **$1,600/month (Enterprise)**; custom software is quoted per project.

### 2.2 Audience

**Primary reader:** the owner, general manager or operations manager of a **2–200 person business** who is curious about AI but skeptical, time-poor and allergic to jargon. They search in plain language ("how do I stop doing invoices at night"), often from a phone, and increasingly ask ChatGPT or Gemini first.

**Secondary readers:** office managers and bookkeepers (who run the back office day to day), buyers of small businesses (searchers/ETA, who want an operations upgrade plan), and trade-association staff and journalists looking for a credible, practical source.

**Not our audience:** developers looking for API tutorials, enterprise IT buyers, marketers looking for SEO tactics. Content that mainly serves them is out of scope even if it would get traffic.

### 2.3 Target content mix

Measured by count of **new posts** over 12 months (the calendar in §6.3 follows this exactly). The 43 live posts skew toward Websites & Search (7 of 43, ~16%) because the AEO/GEO launch set was written first; the new calendar rebalances.

| Blog category (hub `/blog/category/…`) | Live posts | New posts (12 mo) | Share of new | Role |
|---|---|---|---|---|
| Industry Playbooks (`industry-playbooks`) | 7 | 22 | ~37% | Widest net; one playbook per industry, then industry pages |
| Back Office & Admin (`back-office-and-admin`) | 5 | 8 | ~13% | Core of the offer; highest pain, lowest competition from agencies |
| Custom AI Software (`custom-ai-software`) | 5 | 7 | ~12% | Differentiator; integrations and internal tools |
| AI Strategy & ROI (`ai-strategy-and-roi`) | 3 | 7 | ~12% | Cost, ROI, safety, policy, original data |
| Sales & Customer Service (`sales-and-customer-service`) | 7 | 6 | ~10% | Receptionist, follow-up, reviews, service |
| Boring Businesses (`boring-businesses`) | 5 | 4 | ~7% | Brand-defining angle; niche operators |
| AI for Small Business (`ai-for-small-business`) | 4 | 3 | ~5% | Broad explainers, comparisons of AI tools |
| Websites & Search (`websites-and-search`) | 7 | 3 | ~5% | Conversion, lead tracking, Google Business Profile |
| **Total** | **43** | **60** | 100% | |

**In plain terms:** ~90% of new posts are about using AI to run and grow a business (operations, industries, strategy, customer service); ~5% are about websites and search; AEO/GEO-specific and Google Ads-specific topics are ~1% (effectively zero new posts — those topics are handled by quarterly refreshes of the existing six posts). Original-data pieces live inside the category they inform.

### 2.4 Editorial guardrails that follow from positioning

- Every post answers: *what work does this remove, for whom, with which tools, and how would an owner start?*
- Name real, well-known software the reader already uses (QuickBooks, Jobber, ServiceTitan, Housecall Pro, HubSpot, Google Workspace, Microsoft 365, Shopify, Dentrix, Clio…), without implying partnerships we don't have.
- Default CTA is the free AI audit; tools are secondary CTAs (ROI calculator for operations posts, missed-call calculator for phone/lead posts, AI search readiness checker only for website/search posts).
- When a topic drifts into "marketing for marketers," cut it or reframe it for the owner.

---

## 3. Entity strategy

### 3.1 Why entity work matters

Search engines and LLMs build an internal picture of "who is Metron." The word "Metron" is used by unrelated products and businesses, so systems may merge or confuse us. The defense is **disambiguation through consistency**: same name, same one-line description, same service area, same founder names, same logo and same links everywhere.

### 3.2 Canonical brand facts (use verbatim everywhere)

The on-site source of truth is **`/company`** (Company Facts page, `AboutPage` schema pointing at `#organization`), backed by `src/lib/site.ts`. Every off-site profile copies from it.

| Field | Canonical value |
|---|---|
| Brand name | Metron |
| Disambiguator / tagline | "Metron — The AI Integration Agency for Small & Medium Businesses" |
| One-line description (≤160 chars) | "Metron integrates AI into small and medium-sized businesses — back-office automation, custom AI software, integrations, AI receptionists and follow-up." |
| Short description (~50 words) | "Metron is a done-for-you AI integration agency for small and medium-sized businesses, especially trades, home services, construction, logistics and manufacturing. We automate back-office work, build custom AI tools, connect existing software, answer calls and follow up on leads. Plans from $900/month; every engagement starts with a free AI audit." |
| Founded / founders | Fill in once, never vary; each founder has a LinkedIn profile and an on-site author page |
| Service area | Per `SITE.areaServed` (remote delivery). Never use a virtual office or P.O. box as a Google Business Profile address. |
| Phone / email | One primary number and `hello@usemetron.com`, identical in schema, footer, profiles |
| Pricing | Standard $900/mo, Enterprise $1,600/mo, custom software quoted per project — identical on `/pricing`, `/company`, schema `Offer`, directories |

**Retire** the old one-liner that described us as an AI receptionist + AEO/GEO shop on every profile where it was used.

### 3.3 On-site entity implementation

- **Organization** JSON-LD on every page (root layout) with `@id: https://usemetron.com/#organization`, `name`, `alternateName`, `url`, `logo`, `description`, `founder`, `areaServed`, `contactPoint`, `sameAs`.
- `/company` is written so an LLM answering "What is Metron?" gets it right from that page alone. Link to it from the footer, `/about`, `llms.txt` and every off-site profile's "more info" field where possible.
- **Author pages** with `Person` schema, bio, credentials and `sameAs` to LinkedIn (to build).

### 3.4 Profiles (sameAs targets)

- **P0:** LinkedIn company page + founder profiles; Clutch (verified reviews; list AI development, IT consulting, business process automation); Google Business Profile *only if eligible* (§11).
- **P1:** G2, UpCity, Crunchbase, YouTube, Bing Places, software partner directories with real integrations (§10.4).
- **P2:** X, BBB, Apple Business Connect.
- **No:** Wikipedia (conflict of interest); Wikidata only after independent press coverage exists.

### 3.5 Entity consistency checklist (quarterly)

- [ ] Description identical (or a strict subset) on site, `/company`, LinkedIn, Clutch, G2, GBP, YouTube, Crunchbase
- [ ] Phone, email, URL identical; no tracking numbers in citations
- [ ] Every profile links to the homepage; homepage `sameAs` links to every profile
- [ ] Search "Metron" in Google, Bing, ChatGPT and Perplexity; correct anything that conflates us with another "Metron" or describes the old positioning

---

## 4. Keyword & query universe

### 4.1 How owners ask

- **Search style:** "automate invoicing small business", "ai for trucking company", "custom software vs spreadsheets"
- **Prompt style:** "I run a 14-person plumbing company and my office manager spends two days a week on invoices and chasing payments. Can AI fix that, and what would it cost?"

Assistants break prompt-style questions into several search-style sub-queries. We target search-style terms in titles/H1s and prompt-style phrasings in H2s, FAQs and TL;DRs.

### 4.2 Clusters: pillar → supporting pages

| Cluster | Pillar | Supporting pages (live unless marked *new*) |
|---|---|---|
| **K1. AI for small business** | `/services/ai-automation` + `ai-automation-for-small-business-guide` | `how-to-integrate-ai-into-your-small-business`, `what-can-ai-do-for-my-business`, `small-business-automation-ideas`, hub `ai-for-small-business`, glossary `ai-integration`, `ai-agent`, `large-language-model` |
| **K2. Back-office automation** | `/services/ai-automation` + hub `back-office-and-admin` | `automate-invoicing-payment-reminders`, `automate-data-entry-and-paperwork`, `ai-bookkeeping-admin-small-business`, `ai-scheduling-and-dispatch`, `ai-admin-assistant-vs-hiring`; glossary `back-office-automation`, `document-processing`, `rpa`, `workflow-automation` |
| **K3. Custom AI software & integrations** | `/services/custom-ai-software` | `custom-ai-software-for-small-business`, `replace-spreadsheets-with-custom-software`, `connect-your-business-software`, `ai-dashboards-reporting-small-business`, `ai-knowledge-base-employee-training`; glossary `api-integration`, `knowledge-base`, `sop`, `field-service-management` |
| **K4. AI receptionist, sales & customer service** | `/services/ai-receptionist`, `/services/lead-follow-up`, `/services/review-automation` | `missed-calls-cost-home-service-businesses`, `ai-receptionist-vs-answering-service`, `ai-quote-follow-up-system`, `reactivate-past-customers-with-ai`, `reduce-no-shows-with-ai-reminders`, `ai-chatbot-for-small-business-website`, `get-more-google-reviews-automatically`; tool missed-call calculator; glossary `missed-call-text-back`, `speed-to-lead`, `ai-chatbot`, `conversational-ai`, `crm`, `lead-nurturing` |
| **K5. AI cost, ROI & safety** | `/services/ai-strategy` + `/pricing` | `how-much-does-ai-automation-cost`, `where-to-start-with-ai-small-business`, `is-ai-safe-for-small-business-data`; ROI calculator; glossary `customer-lifetime-value` |
| **K6. Boring businesses + AI** | hub `boring-businesses` + `how-ai-can-100x-a-boring-business` | `boring-businesses-ai-opportunities`, `buying-a-boring-business-ai-playbook`, `ai-for-junk-removal-and-pressure-washing`, `ai-for-laundromats-car-washes-self-storage` |
| **K7. Industry × AI matrix** | `/industries` + 24 industry pages + hub `industry-playbooks` | 7 live playbooks + 22 new (§6.3); phase-2 industry × use-case pages (§5) |
| **K8. Websites, search & ads (small)** | `/services/website-refresh`, `/services/aeo-geo` | `small-business-website-that-converts`, `seo-vs-aeo-vs-geo`, `what-is-aeo-…`, `what-is-geo-…`, `how-to-get-recommended-by-chatgpt`, `llms-txt-schema-markup-for-small-business`, `google-ads-landing-page-quality-score`; readiness checker |

### 4.3 Target query list

Intent key: **I** informational · **C** commercial investigation · **T** transactional · **P** prompt-style (typed to an AI assistant). "*new*" = a page in the §6.3 calendar or a phase-2 page.

#### K1 — AI for small business (10)

| # | Query | Intent | Target page |
|---|---|---|---|
| 1 | ai integration agency for small business | C/T | `/` + `/services/ai-automation` |
| 2 | ai for small business | I/C | blog `ai-automation-for-small-business-guide` |
| 3 | how to integrate ai into my business | I | blog `how-to-integrate-ai-into-your-small-business` |
| 4 | what can ai do for my business | I | blog `what-can-ai-do-for-my-business` |
| 5 | small business automation ideas | I | blog `small-business-automation-ideas` |
| 6 | ai consultant for small business | C/T | `/services/ai-strategy` (ads: `/lp/ai-consultant`) |
| 7 | chatgpt vs copilot vs gemini for small business | C | *new* M6 comparison post |
| 8 | ai agents for small business | I | *new* M11 post + glossary `ai-agent` |
| 9 | "Who can set up AI for my 20-person company without me learning to code?" | P/C | `/services/ai-automation` + `/company` |
| 10 | is my business ready for ai | I | *new* M1 readiness checklist |

#### K2 — Back-office automation (11)

| # | Query | Intent | Target page |
|---|---|---|---|
| 11 | back office automation small business | C | `/services/ai-automation` + hub `back-office-and-admin` |
| 12 | automate invoicing and payment reminders | I/C | blog `automate-invoicing-payment-reminders` |
| 13 | automate data entry with ai | I | blog `automate-data-entry-and-paperwork` |
| 14 | ai bookkeeping for small business | I | blog `ai-bookkeeping-admin-small-business` |
| 15 | ai admin assistant vs hiring | C | blog `ai-admin-assistant-vs-hiring` |
| 16 | automate accounts payable small business / vendor bills | I/C | *new* M1 post |
| 17 | automate employee onboarding and timesheets | I | *new* M2 post |
| 18 | estimate automation for contractors | I/C | *new* M4 post |
| 19 | automate job costing and payroll prep | I | *new* M9 post |
| 20 | track license and certificate expirations automatically | I | *new* M12 post |
| 21 | "My office manager spends two days a week on invoices. Can AI do that?" | P | blog `automate-invoicing-payment-reminders` + `/services/ai-automation` |

#### K3 — Custom AI software & integrations (10)

| # | Query | Intent | Target page |
|---|---|---|---|
| 22 | custom ai software for small business | C/T | `/services/custom-ai-software` (ads: `/lp/custom-ai-software`) |
| 23 | replace spreadsheets with custom software | I/C | blog `replace-spreadsheets-with-custom-software` |
| 24 | connect business software / integrate apps | I/C | blog `connect-your-business-software` |
| 25 | ai dashboard for small business | I/C | blog `ai-dashboards-reporting-small-business` |
| 26 | internal ai assistant trained on company sops | I/C | blog `ai-knowledge-base-employee-training` |
| 27 | how much does custom software cost small business | C | *new* M2 cost guide |
| 28 | build vs buy software small business | C | *new* M3 decision post |
| 29 | connect quickbooks to crm / field service software | I | *new* M6 post |
| 30 | customer portal for small business | C | *new* M8 post |
| 31 | "Is there a way to get Jobber, QuickBooks and our spreadsheets to talk to each other?" | P | blog `connect-your-business-software` + *new* M4 FSM post |

#### K4 — AI receptionist, sales & customer service (12)

| # | Query | Intent | Target page |
|---|---|---|---|
| 32 | ai receptionist for small business | C/T | `/services/ai-receptionist` (ads: `/lp/ai-receptionist`) |
| 33 | ai receptionist vs answering service | C | blog `ai-receptionist-vs-answering-service` |
| 34 | how much does an ai receptionist cost | C | *new* M2 cost guide + `/pricing` |
| 35 | missed call text back | I/C | glossary `missed-call-text-back` + `/services/ai-receptionist` |
| 36 | how much do missed calls cost a business | I | blog `missed-calls-cost-home-service-businesses` + calculator |
| 37 | quote follow up automation | C | blog `ai-quote-follow-up-system` |
| 38 | reduce no shows | I | blog `reduce-no-shows-with-ai-reminders` |
| 39 | customer service automation small business | C | *new* M3 post |
| 40 | ai chatbot vs ai receptionist | C | *new* M6 comparison |
| 41 | speed to lead | I | glossary `speed-to-lead` + *new* M7 post |
| 42 | how to get more google reviews | I | blog `get-more-google-reviews-automatically` |
| 43 | "I'm on a roof all day and miss calls — what's the cheapest way to answer all of them?" | P | `/services/ai-receptionist` |

#### K5 — AI cost, ROI & safety (8)

| # | Query | Intent | Target page |
|---|---|---|---|
| 44 | how much does ai automation cost | C | blog `how-much-does-ai-automation-cost` + `/pricing` |
| 45 | ai automation roi calculator | T | tool `ai-automation-roi-calculator` |
| 46 | where to start with ai small business | I | blog `where-to-start-with-ai-small-business` |
| 47 | is ai safe for business data | I | blog `is-ai-safe-for-small-business-data` |
| 48 | ai policy template for employees | I/T | *new* M5 template |
| 49 | zapier vs hiring a developer vs ai agency | C | *new* M1 comparison |
| 50 | how to measure ai roi | I | *new* M4 scorecard |
| 51 | "Is paying $900 a month for AI automation worth it for a 10-person company?" | P/C | `/pricing` + ROI calculator |

#### K6 — Boring businesses + AI (6)

| # | Query | Intent | Target page |
|---|---|---|---|
| 52 | boring businesses ai | I | blog `boring-businesses-ai-opportunities` |
| 53 | how to use ai in a boring business | I | blog `how-ai-can-100x-a-boring-business` |
| 54 | buying a small business ai / ETA operations playbook | I | blog `buying-a-boring-business-ai-playbook` |
| 55 | software stack for a service business | I/C | *new* M10 post |
| 56 | how to get off the tools as an owner | I | *new* M12 post |
| 57 | "I just bought a 30-year-old septic company. What should I automate first?" | P | blog `buying-a-boring-business-ai-playbook` + *new* M2 septic post |

#### K7 — Industry × AI matrix (39)

Head query pattern: **"ai for [industry]"**, with secondary variants "[industry] automation", "[industry] back office", "ai receptionist for [industry]", "[industry] software integration." Each row lists the head query and its target page today; phase-2 use-case pages are in §5.

**Existing 24 industry pages**

| # | Industry | Head query | Intent | Target page |
|---|---|---|---|---|
| 58 | HVAC | ai for hvac companies | I/C | `/industries/hvac` + blog `ai-for-hvac-companies` |
| 59 | Plumbing | ai for plumbers | I/C | `/industries/plumbing` + blog `ai-for-plumbers` |
| 60 | Electrical | ai for electricians | I/C | `/industries/electrical` + *new* M1 playbook |
| 61 | Roofing | ai for roofing companies | I/C | `/industries/roofing` + *new* M1 playbook |
| 62 | Landscaping | ai for landscaping business | I/C | `/industries/landscaping` + *new* M7 playbook |
| 63 | Cleaning services | automation for cleaning business | I/C | `/industries/cleaning-services` + *new* M11 playbook |
| 64 | Pest control | ai for pest control | I/C | `/industries/pest-control` + *new* M12 playbook |
| 65 | Dental | ai for dental practices | I/C | `/industries/dental` + *new* M2 playbook |
| 66 | Law firms | ai for small law firms | I/C | `/industries/law-firms` + *new* M3 playbook |
| 67 | Real estate | ai for real estate agents | I/C | `/industries/real-estate` |
| 68 | Auto repair | ai for auto repair shops | I/C | `/industries/auto-repair` + *new* M10 playbook |
| 69 | Med spas | ai for med spas | I/C | `/industries/med-spas` + *new* M11 playbook |
| 70 | Construction | ai for construction companies | I/C | `/industries/construction` + blog `ai-for-construction-companies` |
| 71 | Painting | ai for painting contractors | I/C | `/industries/painting` |
| 72 | Garage door | garage door business automation | C | `/industries/garage-door` |
| 73 | Pool service | pool service business software ai | C | `/industries/pool-service` |
| 74 | Moving | ai for moving companies | I/C | `/industries/moving` |
| 75 | Junk removal | junk removal business automation | C | `/industries/junk-removal` + blog `ai-for-junk-removal-and-pressure-washing` |
| 76 | Trucking & logistics | ai for trucking companies | I/C | `/industries/trucking-logistics` + blog `ai-for-trucking-and-logistics` |
| 77 | Manufacturing | ai for small manufacturers | I/C | `/industries/manufacturing` + blog `ai-for-small-manufacturers` |
| 78 | Property management | ai for property management | I/C | `/industries/property-management` + blog `ai-for-property-management` |
| 79 | Accounting firms | ai for accounting firms | I/C | `/industries/accounting-firms` + *new* M4 playbook |
| 80 | Insurance agencies | ai for insurance agencies | I/C | `/industries/insurance-agencies` + *new* M10 playbook |
| 81 | Restaurants | ai for restaurants | I/C | `/industries/restaurants` + blog `ai-for-restaurants` |

**New industries to add** (playbook post first; industry page once the §5.3 gate is met)

| # | Industry | Head query | Intent | Target page |
|---|---|---|---|---|
| 82 | Septic & portable toilets | septic company software / automation | C | *new* M2 playbook → `/industries/septic` |
| 83 | Towing | towing dispatch automation | C | *new* M3 playbook → `/industries/towing` |
| 84 | Locksmiths | ai for locksmiths / locksmith answering service | C | *new* M5 playbook → `/industries/locksmiths` |
| 85 | HVAC & plumbing distributors | ai for distributors / supply house order entry | C | *new* M6 playbook → `/industries/hvac-distributors` |
| 86 | Landscape & nursery supply | landscape supply yard software | C | *new* M7 playbook → `/industries/landscape-supply` |
| 87 | Staffing agencies | ai for staffing agencies | I/C | *new* M6 playbook → `/industries/staffing-agencies` |
| 88 | Veterinary clinics | ai for veterinary clinics | I/C | *new* M5 playbook → `/industries/veterinary` |
| 89 | Chiropractic & PT | ai for chiropractors | I/C | *new* M8 playbook → `/industries/chiropractic` |
| 90 | Salons & barbershops | ai for salons | I/C | *new* M8 playbook → `/industries/salons` |
| 91 | Gyms & fitness studios | ai for gyms | I/C | *new* M8 playbook → `/industries/gyms` |
| 92 | Retail stores | ai for retail stores small business | I/C | *new* M9 playbook → `/industries/retail` |
| 93 | E-commerce brands | ai customer service for ecommerce small business | I/C | *new* M9 playbook → `/industries/ecommerce` |
| 94 | Wholesale & distribution | ai for wholesale distribution order entry | C | *new* M9 playbook → `/industries/wholesale-distribution` |
| 95 | Laundromats, car washes, self-storage | ai for laundromats / self storage automation | I/C | blog `ai-for-laundromats-car-washes-self-storage` → industry page if demand |
| 96 | Year 2 candidates | appliance repair, solar installers, home inspectors, flooring/cabinet installers, funeral homes, equipment rental | — | Validate demand in GSC + ads search terms first |

#### K8 — Websites, search & ads (small cluster, 8)

| # | Query | Intent | Target page |
|---|---|---|---|
| 97 | small business website that converts | I/C | blog `small-business-website-that-converts` + `/services/website-refresh` |
| 98 | seo vs aeo vs geo | I | blog `seo-vs-aeo-vs-geo` |
| 99 | what is aeo | I | blog `what-is-aeo-answer-engine-optimization` + glossary `aeo` |
| 100 | how to get recommended by chatgpt | I | blog `how-to-get-recommended-by-chatgpt` |
| 101 | what is llms.txt | I | glossary `llms-txt` + blog `llms-txt-schema-markup-for-small-business` |
| 102 | ai search readiness checker | T | tool `ai-search-readiness-checker` |
| 103 | google ads landing page quality score | I | blog `google-ads-landing-page-quality-score` |
| 104 | track where leads come from small business | I | *new* M9 post |

That is **~100 target queries** (the industry matrix is the long tail). Commercial and prompt-style rows also feed the AI prompt panel (§12.4).

### 4.4 Keyword research process (monthly light, quarterly deep)

1. **GSC + Bing WMT:** queries with impressions but position > 10 → new sections, FAQs or posts.
2. **Google Ads search-terms report:** real phrases from people ready to buy (§13.4) — the highest-signal keyword source we have after sales calls.
3. **Sales and audit calls:** record the exact words owners use ("I'm drowning in paperwork," "our system doesn't talk to QuickBooks"). Add them to a phrase bank.
4. **Communities:** r/smallbusiness, r/sweatystartup, r/Entrepreneur, r/HVAC, r/Plumbing, r/Construction, r/Truckers, r/smallbusinessowners, r/ecommerce, r/msp-adjacent ops threads; trade forums and Facebook groups. Verbatim questions only, no scraping of personal data.
5. **People Also Ask and autocomplete** for each cluster's head terms.
6. **AI assistants as idea generators only** ("what do septic company owners ask about software?") — validate every idea with real data.

---

## 5. Site architecture, internal linking & programmatic expansion

### 5.1 What is built today

```
/                                    home: positioning, services, industries, tools, latest posts
├── /services                        hub
│   └── /services/{8}                ai-automation, ai-receptionist, lead-follow-up, custom-ai-software,
│                                    ai-strategy, website-refresh, aeo-geo, review-automation
├── /industries                      hub
│   └── /industries/{24}             hvac … restaurants
├── /blog                            hub (43 posts)
│   ├── /blog/category/{8}           ai-for-small-business, boring-businesses, back-office-and-admin,
│   │                                sales-and-customer-service, custom-ai-software, industry-playbooks,
│   │                                ai-strategy-and-roi, websites-and-search
│   └── /blog/{slug}
├── /tools                           hub
│   └── /tools/{3}                   ai-automation-roi-calculator, missed-call-revenue-calculator,
│                                    ai-search-readiness-checker
├── /glossary                        hub (28 terms) → /glossary/{slug}
├── /pricing  /faq  /about  /company  /contact  /privacy  /terms
├── /thank-you                       noindex (post-conversion)
├── /lp/{7}                          Google Ads landing pages — noindex, follow; no site nav
├── /api/lead  /api/ai-readiness     lead capture (attribution + conversion), checker backend
└── /sitemap.xml  /robots.txt  /llms.txt  /llms-full.txt  /og (OG images)
```

The sitemap includes category hubs only when they have posts, includes `/company`, and excludes `/lp/*`, `/thank-you` and API routes. Maximum click depth from home to any indexable page: **3**.

### 5.2 To build in the next 12 months

| Addition | Route | When |
|---|---|---|
| Author pages | `/about/{author}` | Months 1–2 |
| New industry pages (from playbooks) | `/industries/{new-slug}` | As each passes the gate, ~1–2/month from month 3 |
| Industry × use-case pages | `/industries/{industry}/{use-case}` | Phase P1 from month 4 (§5.5) |
| New tools | `/tools/{slug}` | §9 |
| Glossary growth | 28 → ~60 terms | 3/month |

### 5.3 Category hubs as real pages

Each `/blog/category/{slug}` already has a meta description and an answer-first summary (`src/content/categories.ts`). To make them rank and get cited rather than act as archives:

- [ ] Add a "Start here" block: 3 hand-picked posts per hub
- [ ] Link the matching service(s) and 4–6 relevant industries
- [ ] Add 4–6 hub-level FAQs (with `FAQPage` JSON-LD) not reused elsewhere
- [ ] Self-canonical; paginate only past ~24 posts

### 5.4 Internal link quotas (minimums)

| Page type | Must link to |
|---|---|
| Home | All 8 services, all industries (or the top 12 + hub), 3 tools, pricing, `/company`, latest posts |
| Service page | 4+ industries, 3+ posts in its cluster, 2+ glossary terms, 1 tool, pricing, contact |
| Industry page | 3+ most relevant services, its playbook post(s), 1 tool, 2 glossary terms, 2–3 adjacent industries (HVAC ↔ plumbing ↔ electrical; trucking ↔ wholesale ↔ manufacturing; dental ↔ veterinary ↔ chiropractic) |
| Blog post | Its pillar service, its category hub, 2+ sibling posts, 2+ glossary terms (first mention), 1 tool where relevant, 1–4 related industries |
| Category hub | Its services, top industries, 3 "start here" posts, every post in the category |
| Glossary term | 1 service, 1–2 posts, 2–4 related terms |
| Tool | Related service, 1–2 posts, glossary terms used in results |

Every new page receives **3+ inbound contextual links** from existing pages on publish day. Anchors are descriptive and varied ("automating vendor bills," "AI for staffing agencies"); never "click here." Glossary auto-links: first occurrence only, never in headings, ≤ ~8 per page.

### 5.5 Programmatic expansion: industry × use-case pages

**The opportunity:** owners search "[industry] + [job to be done]" — "hvac back office automation," "dental ai receptionist," "construction software integration." With 24+ industries and ~6 use cases, that's 150+ possible pages.

**The risk:** Google's spam policies target **scaled content abuse** and **doorway pages** — many pages produced mainly to rank, with little unique value, whether written by people or AI. AI assistants also have little reason to cite near-duplicates. We expand **only where each page carries unique substance.**

**URL pattern and use cases** (use-case slugs are user-facing jobs; each maps to a service):

| Use-case slug | Maps to service | Example |
|---|---|---|
| `back-office-automation` | `/services/ai-automation` | `/industries/hvac/back-office-automation` |
| `ai-receptionist` | `/services/ai-receptionist` | `/industries/plumbing/ai-receptionist` |
| `lead-follow-up` | `/services/lead-follow-up` | `/industries/roofing/lead-follow-up` |
| `custom-software` | `/services/custom-ai-software` | `/industries/manufacturing/custom-software` |
| `software-integrations` | `/services/custom-ai-software` | `/industries/construction/software-integrations` |
| `review-automation` | `/services/review-automation` | `/industries/auto-repair/review-automation` |

**Phases**

| Phase | When | Pages | Gate |
|---|---|---|---|
| P0 | Live | 8 services, 24 industries | Each industry page carries industry-specific pain points, automations, illustrative math, tools, FAQs |
| P1 | Months 4–6 | ~6 pages: HVAC back-office-automation + ai-receptionist; plumbing ai-receptionist; construction software-integrations + back-office-automation; trucking back-office-automation | Passes §5.6; demand evidence from GSC, keyword tools or ads search terms |
| P2 | Months 7–12 | Up to ~20 more combos with evidence | Same gate; review P1 performance first |
| P3 | Year 2 | City pages only with real local presence | §5.7 |
| Never | — | All combos auto-generated from one template; industry × city × service grids | — |

### 5.6 Uniqueness test (each programmatic page must pass ≥ 5 of 7)

- [ ] Workflows specific to the industry (HVAC: maintenance-agreement renewals, no-heat triage; trucking: BOL/POD processing, driver check-calls; construction: submittals, change orders, lien waivers)
- [ ] A before/after workflow, sample script or diagram specific to that industry
- [ ] Industry software named accurately (ServiceTitan, Housecall Pro, Jobber; Procore, Buildertrend; McLeod, TruckingOffice; Dentrix, Open Dental; Clio; AppFolio, Buildium; QuickBooks) — never implying a partnership we don't have
- [ ] Compliance notes where relevant (HIPAA for health, TCPA/A2P 10DLC for texting, legal-ethics review for law firms, fair housing for real estate, FMCSA paperwork context for trucking) — brief, not legal advice
- [ ] An anonymized example or illustrative math with that industry's own assumptions, clearly labeled
- [ ] ≥ 4 FAQs not reused on any other page
- [ ] A link to a playbook post with deeper detail

If a combination can't pass, it stays a **section** on the industry page — not its own URL.

**Implementation (Next.js):** a typed content map (e.g., `src/content/industry-use-cases.ts`) feeds `src/app/(site)/industries/[slug]/[useCase]/page.tsx` via `generateStaticParams` with `dynamicParams = false`, so pages without content 404. Each page gets its own metadata, canonical, OG image, `Service` + `BreadcrumbList` + `FAQPage` JSON-LD, and joins the sitemap only when published, with a real `lastModified`.

### 5.7 City/location pages — guardrails

Only where we have clients, staff or partnerships in that market, with genuinely local content. Swapping a city name into a template is a doorway page. Cap at 10 in year two; prefer location-specific blog content with real data.

### 5.8 URL & canonical rules

- Lowercase, hyphenated, no trailing slash, no dates in blog URLs; one canonical per piece of content.
- Tool result states (e.g., the readiness checker with a URL parameter) are `noindex` or canonical to the tool page.
- `/lp/*` pages are `noindex, follow` and never linked from the main navigation; they are not part of the organic architecture (§13).

---

## 6. Content plan

### 6.1 Formats that earn citations and links

| Format | Why it works | Examples for Metron |
|---|---|---|
| **Industry playbooks** | Specific to the reader's world; easy for assistants to match to "AI for X" prompts | "AI for Staffing Agencies: Screening, Shift Fill and Timesheets" |
| **Cost guides** | "How much does X cost" is a top commercial question; owners want honest ranges and drivers | AI receptionist cost; custom software cost — ranges labeled approximate, with what drives the price |
| **Comparison / "vs" posts** | Comparison prompts are common; tables are easy to extract | AI vs Zapier vs a developer; build vs buy; chatbot vs receptionist |
| **Templates & checklists** | Bookmarkable, linkable, practical | AI policy template, ROI scorecard, SOP templates, readiness checklist |
| **Original data** | If we created the number, we're the source | Anonymized audit findings, owner survey, after-hours call test |
| **Calculators & tools** | Linkable assets; lead magnets | ROI calculator, missed-call calculator, readiness checker |
| **Glossary definitions** | Definitional queries trigger answer boxes | `back-office-automation`, `document-processing`, `api-integration` |
| **Walkthroughs with screenshots/video** | First-hand experience; hard to fake | "How we connect QuickBooks to a field-service app," screen-recorded |

### 6.2 What's live (43 posts — do not duplicate)

AI for Small Business (4), Boring Businesses (5), Back Office & Admin (5), Sales & Customer Service (7), Custom AI Software (5), Industry Playbooks (7: HVAC, plumbers, construction, trucking, manufacturing, property management, restaurants), AI Strategy & ROI (3), Websites & Search (7). The full slug list is in `content/blog/`. New posts must target a different primary query than any live post; where a new idea overlaps, it becomes a refresh or a new section instead.

### 6.3 12-month editorial calendar (60 new posts)

Cadence: **5 posts/month** (roughly one every six days), plus 2–3 refreshes/month. M1 = November 2026, M12 = October 2027. Category names match `BLOG_CATEGORIES`. Format codes: **PB** playbook · **G** guide · **VS** comparison · **$** cost guide · **T** template/checklist · **D** original data · **W** walkthrough.

| M | Title | Primary query | Category | Format |
|---|---|---|---|---|
| 1 | AI for Electricians: Emergency Calls, Estimates and Permit Paperwork | ai for electricians | Industry Playbooks | PB |
| 1 | AI for Roofing Companies: Storm Surges, Insurance Paperwork and Estimates | ai for roofing companies | Industry Playbooks | PB |
| 1 | How to Automate Purchase Orders and Vendor Bills With AI | automate accounts payable small business | Back Office & Admin | G |
| 1 | AI Agency vs. Zapier vs. Hiring a Developer: How to Choose | zapier vs developer vs ai agency | AI Strategy & ROI | VS |
| 1 | The Small Business AI Readiness Checklist (Printable) | is my business ready for ai | AI for Small Business | T |
| 2 | AI for Dental Practices: Front Desk, Insurance Verification and Recall | ai for dental practices | Industry Playbooks | PB |
| 2 | AI for Septic and Portable Toilet Companies: Routes, Pump Schedules and Calls | septic company software automation | Boring Businesses | PB |
| 2 | How to Automate Employee Onboarding, Timesheets and HR Paperwork | automate employee onboarding small business | Back Office & Admin | G |
| 2 | How Much Does an AI Receptionist Cost? Pricing Models Compared | how much does an ai receptionist cost | Sales & Customer Service | $ |
| 2 | How Much Does Custom AI Software Cost? What Drives the Price | custom software cost small business | Custom AI Software | $ |
| 3 | AI for Small Law Firms: Intake, Conflict Checks and Drafts (Attorney-Reviewed) | ai for small law firms | Industry Playbooks | PB |
| 3 | AI for Towing Companies: Dispatch, Motor Club Calls and Impound Paperwork | towing dispatch automation | Boring Businesses | PB |
| 3 | Month-End Close Without the Scramble: What AI Can Take Off Your Plate | automate month end close small business | Back Office & Admin | G |
| 3 | Customer Service Automation: What to Automate and What to Keep Human | customer service automation small business | Sales & Customer Service | G |
| 3 | Build vs. Buy: Custom Software or an Off-the-Shelf App? | build vs buy software small business | Custom AI Software | VS |
| 4 | AI for Accounting Firms: Tax-Season Intake, Document Chasing and Client Updates | ai for accounting firms | Industry Playbooks | PB |
| 4 | From Site Visit to Signed Quote the Same Day: Estimate Automation | estimate automation for contractors | Back Office & Admin | W |
| 4 | Getting More From ServiceTitan, Jobber or Housecall Pro With AI and Integrations | jobber integrations / field service ai | Custom AI Software | G |
| 4 | How to Measure AI ROI: A One-Page Scorecard for Owners | how to measure ai roi | AI Strategy & ROI | T |
| 4 | We Called [N] Local Service Businesses After Hours. Here's Who Answered. | after hours answering service | Sales & Customer Service | D |
| 5 | AI for Locksmiths: Answer Every Lockout Call and Quote Accurately | locksmith answering service | Industry Playbooks | PB |
| 5 | AI for Veterinary Clinics: Phones, Reminders and Records Requests | ai for veterinary clinics | Industry Playbooks | PB |
| 5 | Automate Inventory and Parts Ordering Before You Run Out | inventory automation small business | Back Office & Admin | G |
| 5 | Internal Tools for Field Crews: Job Checklists, Photo Reports and Voice Notes | field crew app / job report automation | Custom AI Software | G |
| 5 | AI Use Policy Template for Small Businesses | ai policy template for employees | AI Strategy & ROI | T |
| 6 | AI for Staffing Agencies: Candidate Screening, Shift Fill and Timesheets | ai for staffing agencies | Industry Playbooks | PB |
| 6 | AI for HVAC and Plumbing Distributors: Counter Calls, Quotes and Order Entry | ai for distributors | Industry Playbooks | PB |
| 6 | How to Connect QuickBooks to Your CRM and Field Software | connect quickbooks to crm | Custom AI Software | W |
| 6 | AI Chatbot vs. AI Receptionist vs. Live Chat: Which Do You Need? | ai chatbot vs ai receptionist | Sales & Customer Service | VS |
| 6 | ChatGPT vs. Copilot vs. Gemini for Small Business Teams: An Honest Comparison | chatgpt vs copilot vs gemini for business | AI for Small Business | VS |
| 7 | AI for Landscaping Companies: Estimates, Crew Scheduling and Seasonal Upsells | ai for landscaping business | Industry Playbooks | PB |
| 7 | AI for Landscape and Nursery Supply Yards: Orders, Deliveries and Contractor Accounts | landscape supply yard software | Industry Playbooks | PB |
| 7 | Write It Down Before You Automate It: SOP Templates for Small Businesses | sop template small business | Back Office & Admin | T |
| 7 | Speed to Lead: How Fast to Respond and How to Automate It | speed to lead | Sales & Customer Service | G |
| 7 | Small Business Owner Survey: How Owners Are Actually Using AI in 2027 | small business ai adoption survey | AI Strategy & ROI | D |
| 8 | AI for Chiropractors and PT Clinics: Scheduling, Intake and Reactivation | ai for chiropractors | Industry Playbooks | PB |
| 8 | AI for Salons and Barbershops: Bookings, No-Shows and Rebooking | ai for salons | Industry Playbooks | PB |
| 8 | AI for Gyms and Fitness Studios: Leads, Trials and Member Retention | ai for gyms | Industry Playbooks | PB |
| 8 | Customer Portals: Let Clients Check Job Status Without Calling You | customer portal for small business | Custom AI Software | G |
| 8 | What Can Go Wrong With AI in a Small Business? Risks and Guardrails | ai risks small business | AI Strategy & ROI | G |
| 9 | AI for Retail Stores: Inventory Questions, Staffing and Customer Messages | ai for retail stores | Industry Playbooks | PB |
| 9 | AI for Small E-commerce Brands: Support Tickets, Order Issues and Product Content | ai customer service ecommerce | Industry Playbooks | PB |
| 9 | AI for Wholesale and Distribution: Order Entry, Quotes and Account Management | ai for wholesale distribution | Industry Playbooks | PB |
| 9 | How to Automate Job Costing and Payroll Prep | automate job costing | Back Office & Admin | G |
| 9 | Where Do Your Leads Come From? Tracking Calls, Forms, Ads and AI Referrals | track lead sources small business | Websites & Search | G |
| 10 | AI for Auto Repair Shops: Status Updates, Estimate Approvals and Reviews | ai for auto repair shops | Industry Playbooks | PB |
| 10 | AI for Insurance Agencies: Renewals, Certificates and Service Requests | ai for insurance agencies | Industry Playbooks | PB |
| 10 | The Software Stack for a 10-Person Service Business (and Where AI Fits) | small business software stack | Boring Businesses | G |
| 10 | Your First 90 Days of AI: What a Realistic Implementation Looks Like | ai implementation timeline | AI Strategy & ROI | G |
| 10 | Review Reply Templates: Responding to Good and Bad Reviews (With AI Drafts) | how to respond to negative reviews | Sales & Customer Service | T |
| 11 | AI for Med Spas: Consult Booking, Deposits and Rebooking | ai for med spas | Industry Playbooks | PB |
| 11 | AI for Cleaning Companies: Quotes, Recurring Schedules and Staff Turnover | automation for cleaning business | Industry Playbooks | PB |
| 11 | AI Agents for Small Business: What They Can Do Today (and What's Hype) | ai agents for small business | AI for Small Business | G |
| 11 | Quote Calculators: How a Custom Pricing Tool Saves Hours Per Estimate | quote calculator for contractors | Custom AI Software | G |
| 11 | Google Business Profile Checklist for Service Businesses | google business profile checklist | Websites & Search | T |
| 12 | AI for Pest Control Companies: Seasonal Calls, Recurring Plans and Renewals | ai for pest control | Industry Playbooks | PB |
| 12 | Never Miss an Expiration: Automating Licenses, Certificates and Inspections | track license expirations automatically | Back Office & Admin | G |
| 12 | What We Learned From [N] AI Audits: Where Small Businesses Lose the Most Time | small business time spent on admin | AI Strategy & ROI | D |
| 12 | From Owner-Operator to Owner: Using AI to Get Off the Tools and the Phone | how to get off the tools | Boring Businesses | G |
| 12 | Website Refresh vs. Rebuild: How to Decide | website refresh vs rebuild | Websites & Search | VS |

**Totals:** Industry Playbooks 22 · Back Office & Admin 8 · Custom AI Software 7 · AI Strategy & ROI 7 · Sales & Customer Service 6 · Boring Businesses 4 · AI for Small Business 3 · Websites & Search 3 = **60**. That's 24 industry playbooks in all: 11 for existing industry pages that lack a post (electrical, roofing, dental, law, accounting, landscaping, auto repair, insurance, med spas, cleaning, pest control) and 13 for new industries (septic and towing under Boring Businesses; locksmiths, veterinary, staffing, distributors, landscape supply, chiropractic, salons, gyms, retail, e-commerce, wholesale).

**Original-data rules ([N] placeholders):** publish only with real data. Each data piece gets a methodology section (sample, dates, how collected, limitations), consent for any client-derived data (anonymized and aggregated), a downloadable summary, and a press-ready findings box. If the sample turns out too small to say anything, publish it as a qualitative "what we saw" piece or don't publish it.

**Cost-guide rules:** ranges are labeled approximate, dated and explained by their drivers; our own prices are stated exactly as on `/pricing`; no competitor price claims we can't source.

### 6.4 Backlog (pull forward if search data says so)

- Industry: real estate teams, painting, moving, pool service, garage door, appliance repair, solar installers, equipment rental
- Back office: expense receipts, fleet maintenance logs, warranty claims
- Custom software: Microsoft 365/Google Workspace + AI for a small office; scheduling boards; driver apps
- Sales & service: maintenance-agreement renewals; appointment-setting scripts
- Strategy: introducing AI to employees without scaring the team; vendor due-diligence questions

### 6.5 Refresh calendar

- **Quarterly:** the six AEO/GEO/ads posts in Websites & Search (fast-moving facts about crawlers, AI products and Google policy); cost guides (prices change).
- **Twice yearly:** service and industry pages, `/pricing` references, category hub intros, glossary.
- **Annually:** original-data pieces get a new edition at the same URL.
- Change the visible "updated" date only when content materially changes.

### 6.6 Glossary expansion (28 → ~60 terms)

Add ~3/month, prioritizing terms used in our posts: accounts payable automation, OCR, invoice matching, job costing, dispatch board, SaaS integration, webhook, iPaaS (Zapier/Make), single source of truth, internal tool, customer portal, RAG (retrieval-augmented generation), hallucination, prompt, AI policy, data retention, BAA, HIPAA (vendor context), TCPA, A2P 10DLC, answering service, IVR, call routing, lead scoring, no-show rate, maintenance agreement, SOP library, KPI dashboard, Google Business Profile, featured snippet.

---

## 7. Content quality standard (on-page AEO for our own pages)

### 7.1 Page anatomy (service, industry, category, blog, glossary, tool)

1. **H1** matching the primary query in natural language.
2. **TL;DR / answer box** (40–80 words) that fully answers the core question — the passage we want quoted. Posts use `tldr`; service, industry and category pages use `answer`.
3. **Byline + dates** visible and in schema.
4. **Question-style H2s** that mirror real owner questions; the first 1–3 sentences under each answer it directly.
5. **Definitions** in "X is Y that does Z" form on first use, linked to the glossary.
6. **At least one table and one list.**
7. **First-hand material:** before/after workflows, sample messages and scripts, screenshots, diagrams.
8. **Citations to primary sources** for factual claims (vendor docs, Google Search Central, FTC, FCC).
9. **FAQ block** (5 Qs for posts) with `FAQPage` JSON-LD. Google limited FAQ rich results in 2023 — expect no rich snippet; we keep FAQs because they answer real questions.
10. **Related links** and one clear CTA (free AI audit by default).

### 7.2 Writing rules

- Lead with the answer; no throat-clearing.
- Write like an operator who has implemented the workflow. Short paragraphs, second person.
- **Honesty:** no invented statistics, studies, client names, case studies, testimonials or guaranteed outcomes. Numbers appear only as clearly labeled illustrative examples with assumptions shown, and the arithmetic must be right. "100x" in a headline is explained as leverage, not a promised result.
- Name real software accurately; avoid specific third-party prices unless labeled approximate and dated.
- Compliance notes where relevant, briefly, not legal advice: TCPA/A2P 10DLC for texting, HIPAA for healthcare, legal ethics for law firms, fair housing for real estate; AI drafts, a CPA or attorney reviews for finance and legal.
- Say when Metron is *not* the right fit ("If you send five invoices a month, your accounting software's built-in reminders are enough").

### 7.3 AI-assisted writing policy

AI may help with outlines, drafts and editing. Every published piece is substantively edited by a named human, includes first-hand material, and is fact-checked against a source log (claim → source → date checked). Nothing is published that could have been produced by prompting an LLM with the title alone.

### 7.4 E-E-A-T signals

Experience (real workflows, screenshots, demos), expertise (author pages; outside reviewers for compliance-heavy topics), authoritativeness (real trade-media, podcast, partner and association mentions) and trust (clear pricing, `/company`, privacy/terms, honest limitations, verifiable reviews).

### 7.5 Editorial QA checklist (per post)

- [ ] Primary query not already targeted by a live post
- [ ] Title ≤ ~70 chars, description 140–160 chars, category exactly one of the 8
- [ ] TL;DR answers the title in 2–3 sentences; 3–5 key takeaways
- [ ] 5–9 question H2s with bolded answer-first sentences; ≥ 1 table, ≥ 1 list
- [ ] 5–10 valid internal links; 3 inbound links added from older pages
- [ ] Every number is sourced or labeled illustrative with assumptions; no invented claims
- [ ] 5 FAQs; `relatedServices` / `relatedIndustries` set
- [ ] Schema validated; added to sitemap automatically; IndexNow ping; GSC inspection for pillar posts
- [ ] Added to `llms.txt` / `llms-full.txt` if it's a key page

---

## 8. Technical SEO + AEO/GEO checklist (our own site)

### 8.1 Rendering & indexability

- [ ] All content pages statically generated; core content, headings, answers, FAQs and JSON-LD in the initial HTML (assume AI crawlers don't execute JavaScript).
- [ ] Tools render a server-side explanation, methodology and FAQ; interactivity is progressive enhancement.
- [ ] Unique title, description, canonical, OG and Twitter tags on every route (`pageMetadata`).
- [ ] `sitemap.ts` lists all indexable URLs with real `lastModified`; excludes `/lp/*`, `/thank-you`, API routes and parameter URLs.
- [ ] `robots.ts` allows the crawlers in Appendix C, including **AdsBot-Google** and **AdsBot-Google-Mobile** (required to evaluate landing pages), and references the sitemap.
- [ ] `/lp/*` return `noindex, follow`; `/thank-you` returns `noindex`. Don't also block them in robots.txt — a crawler must fetch a page to see its `noindex`.
- [ ] 404s return 404; redirects are single-hop 301/308; consistent trailing slash and apex/www.
- [ ] Preview deployments noindexed or protected.

### 8.2 Core Web Vitals

Targets at mobile p75 (Google's "good" thresholds in brackets): LCP ≤ 2.0 s [2.5 s], INP ≤ 150 ms [200 ms], CLS ≤ 0.05 [0.1]. `next/image` with dimensions; `next/font`; minimal client components; analytics and ads tags via `next/script` loaded after interactive. LP speed matters twice — it's part of Google Ads landing page experience.

### 8.3 Structured data

- One JSON-LD graph per page, entities linked by `@id` (Appendix B). Validate templates with the Rich Results Test and validator.schema.org after any template change.
- Mark up only visible content; no self-serving `AggregateRating` on our own Organization.

### 8.4 Search engine tooling

- **Google Search Console:** domain property, sitemap, indexing, CWV, manual actions. AI Overviews/AI Mode are included in Performance totals, not broken out (as of this writing).
- **Bing Webmaster Tools:** import from GSC, sitemap. Bing feeds Copilot and is widely reported as a source for ChatGPT search — treat it as first-class.
- **IndexNow:** ping changed URLs on deploy (Bing and others; Google does not use IndexNow).

### 8.5 Crawl hygiene & AI crawler access

- [ ] Monthly log check (Vercel/CDN) for Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Claude-SearchBot, AdsBot. Verify identity via published IP ranges where available; user-agent strings can be spoofed.
- [ ] Confirm CDN/WAF "block AI bots" settings aren't silently overriding robots.txt.

### 8.6 llms.txt and llms-full.txt

- `/llms.txt` and `/llms-full.txt` are generated by route handlers from the same content source, so they don't drift. Lead with the canonical description and link `/company`, services, industries, category hubs and tools.
- **Status: emerging, proposed convention; no major AI provider has confirmed using it for search or citation.** Keep it as low-cost hygiene; don't expect measurable impact; never sell it to clients as a ranking factor.

---

## 9. Free tools & linkable assets

### 9.1 Built

| Tool | Primary query | Role | Next improvements |
|---|---|---|---|
| `/tools/ai-automation-roi-calculator` | ai automation roi calculator | Main operations lead magnet; default secondary CTA on back-office, custom software and strategy posts | Industry presets (editable), "hours by task" breakdown, emailed PDF summary (opt-in) |
| `/tools/missed-call-revenue-calculator` | missed call revenue calculator | Feeds AI receptionist and follow-up | Industry presets by typical job value (user-editable) |
| `/tools/ai-search-readiness-checker` | ai search readiness checker | Website/search lead magnet | Keep scope modest; result URLs noindexed |

Each tool page: server-rendered explanation, every default assumption stated and editable, FAQ, `WebApplication` schema, related links.

### 9.2 To build (months 3–12), reweighted to operations

| # | Tool | Target query | Effort | Why |
|---|---|---|---|---|
| 1 | **Automation opportunity finder** (pick industry, team size, tools → ranked list of workflows to automate first with rough hours saved) | what can i automate in my business | M | Mirrors the free audit; strongest qualified-lead generator |
| 2 | **Hire vs. automate calculator** (fully loaded cost of an admin hire vs. automation, with user inputs) | cost of hiring office manager vs automation | S | Supports back-office cluster; honest, assumption-driven |
| 3 | **AI policy generator** (answers → draft AI-use policy for employees) | ai policy template | S | Pairs with M5 template post; linkable by associations |
| 4 | **Software stack/integration map** (select apps you use → shows common integration paths and gaps) | connect quickbooks to jobber | M | Supports custom software and integrations |
| 5 | **AI receptionist script builder** (industry → greeting, triage questions, after-hours handling) | ai receptionist script | M | Demo of the service; template seekers link to it |

### 9.3 Other linkable assets

- Annual **"AI in Small Business Operations"** report (from the survey and anonymized audit aggregates)
- Downloadable **AI readiness checklist**, **ROI scorecard**, **SOP template pack** (ungated versions on-page; optional emailed PDF)
- **Industry one-pagers** for trade associations to share with members

---

## 10. Off-site: authority, mentions & corroboration

AI assistants answering "who should I hire" lean on what *other* sources say. For a new brand, this is where GEO is won or lost.

### 10.1 Digital PR (data-led)

- Each original-data piece gets a press kit: 3–5 findings, one chart, methodology, founder quote.
- Pitch tiers: (1) **trade media** across our industries (e.g., ACHR News, Construction Dive, FreightWaves, Modern Distribution Management, Staffing Industry Analysts, Dental Economics, Lawn & Landscape, Accounting Today); (2) **small-business media** — local business journals, SMB and ETA newsletters; (3) rarely, marketing media for a search-related finding.
- Goal: 1 data-story placement per quarter.

### 10.2 Expert sourcing

Use several platforms (Qwoted, Featured.com, Source of Sources, Help a B2B Writer, ProfNet, #journorequest). Answer only where the founder has genuine expertise; give specific 2–4 sentence answers with one concrete example; never fabricate client results. Target 4 quality submissions/week; expect a low hit rate.

### 10.3 Podcasts, webinars & events

- Target trade-business podcasts (home services, contractors, trucking, distribution, dental and vet practice management, staffing, small law, accounting), ETA/"boring business" acquisition shows, and SMB operations shows.
- Pitch a specific, useful topic ("What we see when we audit a 20-person plumbing company's back office"), never "I run an AI agency."
- Target: 2 appearances/month from month 3; show notes link to the most relevant page, not just the homepage.

### 10.4 Partnerships & software marketplaces

**Only list where we have a real integration or qualify under the program's rules.**

| Ecosystem | Why | Action |
|---|---|---|
| Intuit QuickBooks (app/partner listings) | Back-office cluster centers on QuickBooks | Pursue ProAdvisor/partner-style listing if eligible; app listing only with a real integration |
| Jobber, Housecall Pro, ServiceTitan | Home-services industries | Partner/consultant listings if offered; marketplace apps require real integrations (ServiceTitan likely year 2) |
| HubSpot Solutions Directory | CRM implementations | Solutions Partner if we implement HubSpot for clients |
| Zapier / Make expert directories | Integrations work | Apply once eligible |
| Microsoft / Google Workspace partner networks | Office-heavy clients | Evaluate year 2 |
| Procore, AppFolio, Clio, Shopify | Construction, property management, law, e-commerce | Only with real integrations or partner eligibility |

**Trade associations** across our industries (e.g., ACCA, PHCC, NRCA, NALP, state trucking associations, distributor associations, American Staffing Association, state dental and veterinary associations): associate membership, an educational webinar or newsletter article, or a member resource — highly relevant, trusted mentions.

### 10.5 YouTube

2 videos/month from month 2: (a) 3–5 minute walkthroughs of real automations ("invoice reminders from QuickBooks, start to finish"); (b) industry demos; (c) tool walkthroughs; (d) short explainers mirroring top posts. Captions from cleaned transcripts; embed on matching pages with `VideoObject` schema.

### 10.6 Reddit & community participation rules

- Participate as a named founder with affiliation disclosed in the profile and in any comment mentioning Metron. Follow each subreddit's rules; many ban vendors.
- **90/10 rule:** ≥ 90% of contributions are pure help with no link.
- Never use multiple accounts, buy upvotes, astroturf "has anyone tried Metron?" posts, or ask clients/staff for undisclosed praise (platform violation and an FTC endorsement-disclosure issue).
- Time box: 2–3 hours/week.

### 10.7 Reviews (Google if eligible, Clutch, G2)

Ask **every** client at a natural success moment — no gating by expected sentiment, no incentives (Google policy; the FTC's 2024 rule on fake reviews and testimonials). Respond to every review within 72 hours. Target: 10 reviews by month 6, 25 by month 12.

### 10.8 Off-site targets (12 months)

| Activity | Monthly | 12-month |
|---|---|---|
| Expert quote placements | 1–3 | 15+ |
| Podcast/webinar appearances | 2 (from M3) | 20 |
| Data-story placements | — | 4 |
| Complete directory/marketplace listings | — | 10–15 |
| Client reviews | 2+ | 25 |
| Trade/association guest articles | 1 (from M4) | 8 |
| YouTube videos | 2 | 24 |

---

## 11. Local SEO

**Eligibility first.** A Google Business Profile requires in-person contact with customers (a staffed location or a service-area business). If Metron serves clients entirely remotely, it may not be eligible — don't create a profile at a virtual office. Options: storefront GBP (real office clients visit), service-area GBP (we visit clients in a defined region), or no GBP and lean on LinkedIn, Clutch, G2 and Bing Places.

If eligible: real business name only (no keywords), most accurate primary category, services listed to match our 8 services, canonical description, consistent phone, website link with UTM (`utm_source=google&utm_medium=organic&utm_campaign=gbp`), real photos, a post per week, reviews per §10.7, mirrored to Bing Places and Apple Business Connect. Keep NAP consistent on a small set of quality citations (BBB, chamber, Clutch, UpCity, LinkedIn, Crunchbase); avoid bulk citation services.

Local SEO also appears as client-facing *content* — the Google Business Profile checklist (M11) and review posts help our customers, and that's the right amount.

---

## 12. Measurement

### 12.1 KPIs

| Layer | KPI | Source | 12-month direction |
|---|---|---|---|
| Visibility (search) | Impressions and positions for the §4.3 query set, by cluster | GSC, Bing WMT | Top-10 for ≥ 40% of target queries; industry matrix growing month over month |
| Visibility (AI) | AI share of voice: % of panel prompts where Metron is mentioned or cited, per engine | Prompt panel (§12.4) | Measurable presence on ≥ 20% of panel prompts by M12 (baseline ~0) — directional, not a promise |
| Traffic | Organic sessions by category hub; AI-referral sessions | GA4 | Growth trend; Industry Playbooks and Back Office the largest |
| Engagement | Tool completions, scroll depth on pillar pages | GA4 events | — |
| Conversion | Free AI audit requests (`generate_lead`) and calls (`click_to_call`) by channel: organic, AI referral, paid, direct, referral | GA4 + CRM | Primary business KPI |
| Quality | Qualified and won leads by channel (offline conversion stages) | CRM | Organic and paid compared on the same definition |
| Attribution gap | "How did you hear about us?" answers mentioning ChatGPT/Google AI/etc. | Contact form + audit call notes | Track — captures AI influence analytics misses |
| Authority | Quality referring domains, mentions, reviews | Ahrefs/Semrush, alerts | 50+ quality referring domains; 25 reviews |
| Technical | CWV pass rate, indexed vs submitted, schema errors | GSC, Bing WMT | 100% "good"; 0 errors |

### 12.2 Tooling

GSC · Bing WMT · GA4 · Looker Studio (monthly dashboard: GSC + GA4 + Ads + panel sheet) · one of Ahrefs/Semrush · optionally one AI-visibility tracker (evaluate on engines covered, prompt volume and price; use alongside the manual panel) · server/CDN logs · CRM with lead stage and attribution fields.

### 12.3 GA4 AI-referrer channel

Create a custom channel group with an **"AI Assistants"** channel placed above Referral. Session source regex:

```
^(.*\.)?(chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|copilot\.cloud\.microsoft|edgeservices\.bing\.com|claude\.ai|you\.com|meta\.ai|chat\.deepseek\.com|chat\.mistral\.ai|grok\.com)$
```

Caveats: many AI-driven visits arrive as Direct; Google AI Overviews/AI Mode clicks count as Google organic; review the regex quarterly.

### 12.4 AI visibility prompt panel (50 prompts, monthly)

- **Mix:** 15 commercial ("who can automate the back office for a small HVAC company?"), 15 informational in our operations clusters ("how do I automate invoice reminders from QuickBooks?"), 12 industry prompt-style, 3 local/regional, 5 brand ("What is Metron?", "Is Metron legit?"). At most 3 prompts about AEO/GEO.
- **Engines:** ChatGPT (search on), Perplexity, Gemini, Claude (web search on), Copilot, Google AI Overviews/AI Mode — logged-out or fresh sessions, US location, no memory.
- Run commercial prompts 3× each (answers vary) and record the share of runs where we appear.
- **Record:** mentioned, cited with link, position, our URL cited, competitors named, sources the engine cited (these become outreach targets), and accuracy of our description — especially whether it reflects the *current* positioning, not the old receptionist/AEO framing.

**Using results:** competitor cited from a list we're absent from → outreach; engine cites a page type we lack (cost table, comparison) → content brief; we rank in Google but aren't cited → tighten the answer box, H2s and tables.

### 12.5 Reporting

- **Monthly one-pager:** organic + AI-referral + paid leads, top gaining/losing pages, panel share of voice, new citations and reviews, search-term insights from Ads, next month's priorities.
- **Quarterly review:** cluster performance, content mix vs. §2.3 target, refresh list, programmatic go/no-go, tools roadmap.

---

## 13. How SEO, AEO/GEO and Google Ads work together

Organic search, AI answers and Google Ads are three ways the same owner finds us. They work best as one system with separate pages, shared measurement and a feedback loop.

### 13.1 Roles of each channel

| Channel | Job | Time to impact | Pages |
|---|---|---|---|
| **Google Ads** | Capture owners actively searching to buy now ("ai consultant small business," "back office automation") and test which offers and messages convert | Days | `/lp/*` (7 landing pages) |
| **SEO** | Win the much larger set of research questions ("how do I automate invoicing," "ai for staffing agencies") and build a durable, compounding lead source | Months | Services, industries, category hubs, blog, tools |
| **AEO/GEO** | Make sure that when an owner asks Google AI or ChatGPT, our pages are among the sources and our brand is described correctly | Months, uneven | Same organic pages + `/company`, entity profiles |

Organic content and AI-answer visibility build familiarity and trust; that tends to show up as **branded searches** ("Metron AI agency") and direct visits, which are cheaper to convert — whether the click comes from organic or a brand ad. We treat rising brand-search impressions in GSC and Ads as a lagging indicator of organic and AI-answer work.

### 13.2 Separate pages, on purpose

- **`/lp/*` are ad-only:** distraction-free layout (no site nav), form above the fold, message-matched to each ad group, `noindex, follow`, excluded from the sitemap. Their job is conversion rate and Quality Score, not ranking.
- **Organic pages are the opposite:** full navigation, deep content, internal links, schema. Ads should not point to blog posts, and organic pages should not be thinned out to look like LPs.
- Keeping them separate avoids near-duplicate pages competing in the index and lets us test LP copy aggressively without touching rankings.
- **AdsBot-Google** must stay allowed in `robots.ts` so Google can evaluate LPs; `noindex` doesn't stop that.
- Campaign → LP map lives in `docs/GOOGLE-ADS-SETUP.md`. When an ad group needs an LP that doesn't exist, add it to `src/content/landing-pages.ts` — never repurpose an organic page.

### 13.3 Shared conversion tracking

Both channels flow through the same lead pipeline, so they can be compared fairly:

- **One form, one endpoint:** `LeadForm` → `POST /api/lead`, used on `/contact` and every `/lp/*`.
- **Attribution on every lead:** `src/lib/track.ts` stores first- and last-touch source, UTMs, `gclid`/`gbraid`/`wbraid`, landing page and referrer, and sends them with the lead.
- **Same events everywhere:** `trackLead()` fires GA4 `generate_lead` plus the Google Ads conversion (with enhanced conversions); `trackCall()` tracks `tel:` clicks; `/thank-you` (noindex) can serve as a URL-based conversion.
- **Consent Mode v2** defaults are set in `Analytics.tsx`; add a consent banner if targeting the EEA/UK.
- In GA4, report leads by channel group (Organic Search, AI Assistants, Paid Search, Direct, Referral) using the same `generate_lead` event — no channel gets a special definition of "lead."

### 13.4 Search-terms reports feed the editorial calendar

Every month:

1. Export the Google Ads search-terms report.
2. Tag terms that are **informational** ("how to automate payroll prep," "ai for septic companies") — usually negative keywords for ads, but excellent **content ideas**. Add them to the §6.4 backlog or as H2s/FAQs on existing pages.
3. Tag terms that are **commercial with an industry or task** ("hvac back office automation") — evidence for industry × use-case pages (§5.5) and for new industry pages.
4. Compare with GSC: terms we pay for that we already rank for organically are candidates for lower bids; terms we pay for where organic is absent are content gaps.
5. Feed winning ad headlines (high CTR) into title and meta-description tests on organic pages, and organic FAQs into ad copy and LP objection handling.

### 13.5 Offline conversions close the loop

Form fills aren't customers. Mark leads **Qualified** and **Won** in the CRM using the `gclid` carried with each lead, and import those stages as offline conversions in Google Ads (or via a CRM/Zapier integration). Bidding on qualified leads rather than raw form fills usually matters more than any keyword change. Apply the **same stage definitions to organic and AI-referral leads** in the CRM so the monthly report compares channels on cost and quality per qualified lead, not per click.

### 13.6 What not to do

- Don't index LPs or point ads at organic pages to "help SEO" — paid clicks don't improve organic rankings.
- Don't bid on queries our blog answers better unless they show commercial intent; send budget to buyers, content to researchers.
- Don't let ad copy make claims the organic site doesn't support (guaranteed savings, "#1 agency") — inconsistency hurts trust in both channels and in AI summaries.

---

## 14. Roadmap & operating cadence

### 14.1 Roles

| Role | Responsibilities |
|---|---|
| SEO lead (founder/marketing lead) | Strategy, query map, prompt panel, reporting, ads ↔ content loop |
| Developer | Next.js templates, schema, sitemap/robots/llms routes, tools, use-case pages, tracking |
| Content lead/editor | Briefs, editing, honesty and QA checklist, refreshes |
| Subject-matter experts | Workflows, screenshots, demos, reviews of drafts |
| PR/outreach | Expert sourcing, podcasts, data-story pitching, associations |
| Client success | Review requests, case-example permissions, lead-stage updates in CRM |

### 14.2 90-day roadmap (from what's built)

**Starting point:** 8 services, 24 industries, 43 posts, 8 category hubs, 28 glossary terms, 3 tools, `/company` facts page, 7 noindexed `/lp/*` pages, lead capture with attribution and GA4/Ads conversion tracking, `llms.txt` / `llms-full.txt`.

| Week | Focus | Deliverables | Owner |
|---|---|---|---|
| 1 | Technical verification | GSC + Bing WMT verified; sitemap submitted; IndexNow live; confirm `/lp/*` and `/thank-you` noindex and absent from sitemap; robots allows AdsBot and AI crawlers; schema validated on every template (service, industry, category, post, glossary, tool, `/company`); CWV baseline | Dev, SEO lead |
| 2 | Tracking QA | Test lead end-to-end from `/contact` and each `/lp/*`; `generate_lead`, `click_to_call` and Ads conversion firing; attribution fields reach the CRM; GA4 AI Assistants channel; CRM lead stages (New/Qualified/Won) defined | Dev, SEO lead |
| 3 | Entity | `/company` facts final; old positioning removed from all profiles; LinkedIn, Clutch, G2, Crunchbase, YouTube aligned; GBP eligibility decision; Bing Places | SEO lead |
| 4 | Baselines | First 50-prompt panel; rank tracking for the §4.3 set; crawler-log check; content audit of the 43 posts against §7.5 (fix links, descriptions, internal links to new hubs) | SEO lead, Content |
| 5 | Hubs | Category hubs upgraded (§5.3): start-here posts, service/industry links, hub FAQs; author pages live | Dev, Content |
| 6 | Content M1 | Publish M1 posts (electricians, roofing, vendor bills, agency vs Zapier vs developer, readiness checklist); 3 inbound links each | Content |
| 7 | Ads loop | First search-terms export → negatives + content backlog; compare ads vs organic lead quality structure in the monthly report | SEO lead |
| 8 | Off-site | Expert-sourcing accounts live (4 submissions/week); podcast pitch list (40 shows across trades/ETA); trade-association shortlist (8) | PR |
| 9 | Reviews & partners | Review requests to every current client; marketplace eligibility reviewed (QuickBooks, Jobber, HubSpot, Zapier) | CS, Founder |
| 10 | Content M2 | Publish M2 posts (dental, septic, onboarding, AI receptionist cost, custom software cost); first 2 YouTube walkthroughs | Content |
| 11 | Optimization | GSC: pages with impressions but low CTR → rewrite titles/answers; second panel vs baseline; first offline-conversion import | SEO lead |
| 12 | Programmatic P1 prep | Draft the first 3 industry × use-case pages (HVAC back-office, HVAC receptionist, construction integrations) against §5.6; decide which new industry gets the first new `/industries` page | Content, SME, Dev |
| 13 | Quarter review | Q1 report; content mix vs §2.3; go/no-go on P1; Q2 targets | All |

### 14.3 Monthly cadence

| Week | Recurring tasks |
|---|---|
| 1 | Prompt panel; monthly report; GSC/Bing/Ads review; search-terms → backlog; plan content |
| 2 | Publish 2–3 posts; refresh 1–2 older pages; 1 YouTube video |
| 3 | Publish 2–3 posts; 3 glossary terms; review requests; podcast pitches |
| 4 | Technical check (CWV, schema, 404s, crawler logs); internal-link audit; offline conversion upload |
| Weekly | 4 expert-sourcing submissions; 2–3 hrs community participation; respond to reviews |

### 14.4 Quarterly milestones

| Quarter | Milestones |
|---|---|
| Q1 (Nov–Jan) | Tracking and entity verified; hubs upgraded; 15 new posts; baseline panel; 5 reviews |
| Q2 (Feb–Apr) | P1 use-case pages live (~6); first 2 new industry pages; after-hours data study; opportunity finder tool; 10 reviews |
| Q3 (May–Jul) | Owner survey published; P2 begins; hire-vs-automate calculator + AI policy generator; 45-term glossary; first association partnership |
| Q4 (Aug–Oct) | Audit-findings report; ~40 industries covered by playbooks/pages; 25 reviews; 60-term glossary; year-2 plan |

---

## 15. Risks & things to avoid

| Risk / tactic | Why | Instead |
|---|---|---|
| Mass AI-generated content or industry × service grids | Scaled content abuse; doorway pages; low citation value | §5.6 gate; fewer, deeper pages |
| Drifting back into marketing topics | Off-positioning; attracts the wrong audience | Hold the §2.3 mix; review quarterly |
| Invented stats, case studies, testimonials, "#1" claims, guarantees | Misleading; erodes trust; AI systems repeat and then contradict them | Sourced claims only; illustrative math clearly labeled |
| Fake, incentivized or gated reviews | Google policy and FTC rules | Ask every client, no incentives |
| Self-serving review schema; markup of invisible content | Guideline violations | Mark up only visible, allowed content |
| Indexing `/lp/*` or blocking them in robots.txt | Duplicate pages; or Google can't see `noindex`/evaluate LPs | `noindex, follow`, crawlable, out of sitemap |
| Promising rankings or AI citations to anyone | No one controls them | Sell process and measurement |
| Treating llms.txt as a ranking factor | Unconfirmed by providers | Low-cost hygiene only |
| Accidentally blocking AI crawlers or AdsBot at the CDN | Invisible in AI answers; LP evaluation fails | Monthly log check |
| Cloaking; link schemes; Reddit astroturfing | Spam policies, bans, FTC disclosure issues | Earn links via data, tools, PR; §10.6 rules |
| Entity confusion with other "Metron" brands or our old positioning | AI misdescribes us | Disambiguator, `/company`, quarterly brand prompts |
| Compliance errors in content (TCPA, HIPAA, legal ethics) | Legal risk for readers and us | Brief, accurate notes; qualified review for sensitive posts |

---

## Appendix A — Pre-publish checklist (any page)

- [ ] Unique title and meta description; self canonical; OG image; indexable and in sitemap (except `/lp/*`, `/thank-you`)
- [ ] One H1; answer box/TL;DR; question H2s with direct answers; ≥ 1 table and list
- [ ] Sources for factual claims; illustrative numbers labeled with assumptions
- [ ] FAQ block; author and dates visible
- [ ] Internal link quotas (§5.4) met; 3 inbound links added; breadcrumbs + `BreadcrumbList`
- [ ] JSON-LD validated; mobile layout checked; IndexNow ping; llms files updated if a key page

## Appendix B — Schema by page type

All indexable pages emit one graph that references `Organization` (`/#organization`) and `WebSite` (`/#website`) by `@id`.

| Page type | Route(s) | Schema types |
|---|---|---|
| Home | `/` | `Organization`, `WebSite`, `ProfessionalService`, `FAQPage` (if visible) |
| Company facts | `/company` | `AboutPage` with `mainEntity` → `#organization` |
| About / author | `/about`, `/about/*` | `AboutPage`; `ProfilePage` + `Person` (`worksFor` → `#organization`) |
| Service hub / page | `/services`, `/services/*` | `CollectionPage` + `ItemList`; `Service`, `Offer` (Standard $900/mo, Enterprise $1,600/mo; custom software as quote), `FAQPage`, `BreadcrumbList` |
| Industry hub / page | `/industries`, `/industries/*` | `CollectionPage` + `ItemList`; `Service` with `audience`, `FAQPage`, `BreadcrumbList` |
| Industry × use case | `/industries/*/*` (phase P1+) | `Service`, `FAQPage`, `BreadcrumbList`, `VideoObject` if a demo is embedded |
| Blog hub / category hub | `/blog`, `/blog/category/*` | `Blog` / `CollectionPage`, `BreadcrumbList`, `FAQPage` once hub FAQs exist |
| Blog post | `/blog/*` | `BlogPosting`, `Person` (author), `FAQPage`, `BreadcrumbList`; add `Dataset` for downloadable original data |
| Tools | `/tools`, `/tools/*` | `CollectionPage`; `WebApplication` (price 0), `FAQPage`, `BreadcrumbList` |
| Glossary | `/glossary`, `/glossary/*` | `DefinedTermSet`; `DefinedTerm`, `BreadcrumbList` |
| Pricing / FAQ / Contact | `/pricing`, `/faq`, `/contact` | `OfferCatalog` (prices match the page); `FAQPage`; `ContactPage` |
| Ad landing pages | `/lp/*` | Minimal (`WebPage`); `noindex, follow` — not part of the organic graph |

## Appendix C — robots.txt crawler policy

Tokens and purposes as publicly documented at the time of writing; verify quarterly.

- **Allow:** `Googlebot`, `Bingbot`, `AdsBot-Google` and `AdsBot-Google-Mobile` (Ads landing page checks; they ignore the `*` group — never block), `Google-Extended` (Gemini control token; doesn't affect Search), OpenAI `GPTBot` / `OAI-SearchBot` / `ChatGPT-User`, Anthropic `ClaudeBot` / `Claude-SearchBot` / `Claude-User`, `PerplexityBot` / `Perplexity-User`, `Applebot` / `Applebot-Extended`, and — as a business choice to be represented — `Meta-ExternalAgent`, `Amazonbot`, `DuckAssistBot`, `CCBot`, `MistralAI-User`.
- **Monitor:** `Bytespider` (reported to be aggressive); rate-limit at the CDN if needed.

Rules: disallow `/api/` and tool-result parameter URLs; do **not** disallow `/lp/` or `/thank-you` (they rely on `noindex`). A crawler obeys only its most specific matching group, so repeat any `Disallow` lines inside named groups. Robots.txt is a request, not access control.

## Appendix D — Prompt panel template

**Sheet columns:** Prompt ID · Prompt · Type (Commercial / Informational / Industry / Local / Brand) · Cluster · Engine · Run # · Date · Mentioned · Cited w/ link · Position · Our URL cited · Competitors named · Sources cited · Accuracy issues · Action

**First 16 of 50 prompts** (complete the set from the commercial and prompt-style rows in §4.3)

| ID | Prompt | Type | Cluster |
|---|---|---|---|
| P01 | Who can help a small business integrate AI into its operations? | Commercial | K1 |
| P02 | Best AI automation agency for a 20-person home services company | Commercial | K1 |
| P03 | Who can automate invoicing and payment reminders for a small contractor? | Commercial | K2 |
| P04 | I need someone to connect Jobber, QuickBooks and our spreadsheets — who does that? | Commercial | K3 |
| P05 | Who builds custom internal software for small businesses at a reasonable price? | Commercial | K3 |
| P06 | Recommend an AI receptionist service for a plumbing company | Commercial | K4 |
| P07 | AI consultant for a small trucking company — what are my options? | Commercial | K7 |
| P08 | How much does AI automation cost for a small business per month? | Commercial | K5 |
| P09 | How do I automate data entry from emailed invoices and work orders? | Informational | K2 |
| P10 | Should I replace our spreadsheets with custom software? | Informational | K3 |
| P11 | Is it safe to use AI with my customers' data? | Informational | K5 |
| P12 | What's the first thing a small business should automate with AI? | Informational | K5 |
| P13 | How can AI help a boring business like a septic or towing company? | Informational | K6 |
| P14 | I run a 6-truck HVAC company and my office is buried in paperwork. What should I automate? | Industry | K7 |
| P15 | How can a small wholesale distributor automate order entry from emailed POs? | Industry | K7 |
| P16 | What is Metron and what does it cost? | Brand | — |

**Monthly summary:** per engine — prompts run, mentioned %, cited-with-link %, change vs last month, top competitor, top 3 sources cited, accuracy issues (including any description of us that reflects the old positioning).

---

*Review this plan quarterly. AI search products, crawler names, ads policies and search-engine guidelines change often — verify every technical claim against the provider's current documentation before acting on it.*
