# Google Ads Setup Guide

How the site is wired for paid traffic, and what to configure before you spend a dollar.

## 1. What's already built

| Piece | Where | Why it matters for Ads |
|---|---|---|
| Dedicated landing pages | `/lp/<slug>` (content in `src/content/landing-pages.ts`) | Message match between keyword → ad → page improves **ad relevance** and **landing page experience** (two of the three Quality Score components). |
| Distraction-free LP layout | `src/app/(lp)/layout.tsx` | No site navigation — one goal (the form). Privacy/Terms/contact still linked for transparency. |
| Form above the fold + repeated at bottom | `LeadForm` (`variant="compact"`) | Fewer fields (name, business, email, phone, type) → higher conversion rate. |
| Real lead capture | `POST /api/lead` | Sends each lead to your webhook/CRM and/or email. Honeypot + rate limit for spam. |
| Ad attribution | `src/lib/track.ts` | Captures `gclid`, `gbraid`, `wbraid`, UTMs, landing page and referrer (first + last touch) and sends them with every lead. Enables **offline conversion import**. |
| Conversion tracking | `trackLead()` / `trackCall()` | Fires GA4 `generate_lead` and the Google Ads conversion (with **enhanced conversions** user data) on successful submit; tracks `tel:` clicks. |
| Thank-you page | `/thank-you` (noindex) | Clean post-conversion page; can also be used as a URL-based conversion. |
| Consent Mode v2 | `src/components/Analytics.tsx` | Defaults to *denied* in EEA/UK/CH, *granted* elsewhere. Add a consent banner (CMP) if you target the EEA/UK. |
| `AdsBot-Google` allowed | `src/app/robots.ts` | Google must be able to crawl landing pages to rate them. |
| Fast, static pages | Next.js static generation | Page speed is part of landing page experience. |
| Sticky mobile CTA | `src/components/StickyCta.tsx` | Most local-service ad clicks are on mobile. |

## 2. Before launch (checklist)

- [ ] Set `NEXT_PUBLIC_SITE_URL` and your real business details in `src/lib/site.ts` (add a phone number — it enables click-to-call buttons and call tracking).
- [ ] Configure lead delivery: `LEAD_WEBHOOK_URL` and/or `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`. **Test a submission end-to-end.**
- [ ] In Google Ads → Goals → Conversions, create:
  - **Lead form submit** (Website, "Submit lead form", count = One, enhanced conversions ON) → copy its label to `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`
  - **Phone click** (Website, "Phone call lead") → `NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL`
  - Optional: **Calls from ads** (call assets with Google forwarding numbers)
- [ ] Set `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GA_ID`; link GA4 ↔ Google Ads.
- [ ] Verify with Google Tag Assistant that the conversion fires on a test lead.
- [ ] Have counsel review `/privacy` and `/terms` (templates) — especially texting consent language.

## 3. Campaign → landing page map

| Campaign / ad group | Example keywords | Final URL |
|---|---|---|
| AI automation (broad) | ai automation for small business, ai agency, automate my business | `/lp/ai-automation` |
| Back office | back office automation, automate invoicing, reduce admin work | `/lp/back-office-automation` |
| AI receptionist | ai receptionist, ai answering service, missed call text back | `/lp/ai-receptionist` |
| Custom software | custom ai software, custom business software, internal tools | `/lp/custom-ai-software` |
| Home services | ai for hvac, ai for plumbers, ai for electricians | `/lp/home-services` |
| Contractors | ai for contractors, construction automation | `/lp/contractors` |
| Websites (Launch plan) | small business website design, web design for contractors | `/lp/website-design` |
| Local SEO (Growth plan) | local seo services, seo for small business, google business profile help | `/lp/local-seo` |
| AI consulting | ai consultant small business, ai integration services | `/lp/ai-consultant` |

Add UTMs via a tracking template, e.g.
`{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}`
(auto-tagging adds `gclid` automatically — keep it ON).

To add a landing page: append an object to `LANDING_PAGES` — the page, metadata and form wiring are generated automatically.

## 3b. City message match

Add `?city=<slug>` to any landing page final URL for location-targeted campaigns, e.g.
`/lp/home-services?city=houston` → eyebrow reads "AI for home service businesses in Houston".
Valid slugs: new-york, los-angeles, chicago, houston, phoenix, dallas, miami, atlanta, denver, seattle.
Unknown values are ignored, so a typo never breaks the page.

## 3c. Conversion actions to create (Google Ads → Goals → Conversions)

| Conversion | Env var for the label | Fires when | Suggested settings |
|---|---|---|---|
| Lead form submit | `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | Form submitted successfully | Primary, count One, enhanced conversions ON |
| Phone click | `NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL` | Any `tel:` link tapped | Secondary (clicks aren't calls) |
| Booked sales call | `NEXT_PUBLIC_GOOGLE_ADS_BOOKING_LABEL` | Ethan's Cal.com booking completes | Primary, count One |
| Purchase | `NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL` | `/welcome?plan=…&session_id=…` loads after Stripe checkout | Primary, count One, use transaction-specific value |

**Stripe redirect URLs (required for purchase tracking).** In each Payment Link → After payment → redirect, use:

- Launch: `https://www.usemetron.com/welcome?plan=launch&session_id={CHECKOUT_SESSION_ID}`
- Growth: `https://www.usemetron.com/welcome?plan=growth&session_id={CHECKOUT_SESSION_ID}`
- Scale: `https://www.usemetron.com/welcome?plan=scale&session_id={CHECKOUT_SESSION_ID}`
- Enterprise: `https://www.usemetron.com/welcome?plan=enterprise&session_id={CHECKOUT_SESSION_ID}`

Stripe fills in `{CHECKOUT_SESSION_ID}`; it's used as the transaction ID so refreshes never double count.
The value sent is setup + first month (what the customer pays today).

## 4. Quality Score checklist per ad group

1. Headline on the landing page repeats the ad group's core phrase (edit `headline` + `accent`).
2. Ad copy mentions the same offer as the page ("Free AI audit").
3. One clear action; the form is visible without scrolling on desktop and one tap away on mobile.
4. Transparency: business details, privacy policy, terms, and what happens after submitting.
5. Use negative keywords for jobs/careers/free courses/DIY tutorials to protect CTR.

## 5. Offline conversions (recommended once leads flow)

Every lead payload includes `attribution.first.gclid` / `attribution.last.gclid`. In your CRM, mark leads as **Qualified** and **Won**, then import those as offline conversions (Google Ads → Conversions → Uploads, or via Zapier/HubSpot/GoHighLevel integrations). Bidding on qualified leads instead of raw form fills is usually the biggest lever on cost per customer.

## 6. Measure

- Google Ads: conversions, cost per lead, search terms report (weekly negatives).
- GA4: `generate_lead`, `click_to_call`, `cta_click` events; landing page engagement.
- Speed-to-lead: how fast your team (or AI) replies to each lead — it decides how many ad leads become customers.
