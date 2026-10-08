# Google Ads — Account Setup & Launch Plan (policy-safe)

Everything on the website side is done. This is the exact plan for the Google Ads account itself.
Follow it in order. Do not skip step 1.

---

## 1. Account setup (do these first — they prevent suspensions)

1. **Create ONE account** at ads.google.com with a Google account you control long-term.
   - Never create a second account for the same business or domain. Multiple accounts are the #1
     cause of "Circumventing systems" suspensions.
   - When Google offers "Smart Mode", click **Switch to Expert Mode** → create an account **without a campaign**.
2. **Billing profile:** use the business's real legal name and address, and a card in that name.
   The name/address must match the documents you'll use for verification.
3. **Advertiser verification:** Admin → Account (formerly "Advertiser verification") → complete it as soon as
   Google asks. Have ready: legal business name, address, EIN or business registration, and ID of the owner.
   Missing the deadline pauses or suspends the account.
4. **Add your business info:** Admin → Account settings → business name **Metron**, website **https://www.usemetron.com**.
5. **Auto-tagging ON:** Admin → Account settings → Auto-tagging → "Tag the URL that people click through".
6. **Link Google Analytics 4** and **Google Search Console** (Tools → Linked accounts).
7. **Create conversions** (Goals → Conversions → New → Website → set up manually with code):

   | Name | Category | Count | Primary? | Value | Vercel env var for the label |
   |---|---|---|---|---|---|
   | Lead form submit | Submit lead form | One | Yes | 1 | `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` |
   | Booked sales call | Book appointment | One | Yes | 1 | `NEXT_PUBLIC_GOOGLE_ADS_BOOKING_LABEL` |
   | Purchase | Purchase | One | Yes | Use transaction value | `NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL` |
   | Phone click | Phone call lead | One | **No** (secondary) | 1 | `NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL` |

   Turn **Enhanced conversions ON** for Lead form submit (the site already sends hashed email/phone).
   Then put `NEXT_PUBLIC_GOOGLE_ADS_ID` (the `AW-…` ID) and each label in Vercel → Settings → Environment Variables → **Redeploy**.
8. **Test before spending:** open https://tagassistant.google.com, connect www.usemetron.com, submit a test lead
   on `/lp/ai-receptionist` and confirm the "Lead form submit" conversion fires.

## 2. Policy guardrails (what keeps the account safe)

- Send ads only to the `/lp/` pages (or /pricing). They have no testimonials or performance claims.
- Every claim in an ad must also appear on its landing page. Use only these approved facts:
  "Free AI audit", "Plans from $500 setup + $100/month", "24/7 call answering", "Done-for-you setup",
  "No long-term contract", "Cancel anytime", "Works with Jobber, Housecall Pro, ServiceTitan".
- **Never** write: guaranteed results, "#1", "best", percentages or revenue claims, "limited spots", fake urgency,
  or competitor brand names.
- Prices in ads must match the pricing page exactly ($500 / $999 / $1,700 / $2,800 setup; $100 / $150 / $500 / $1,000 per month).
- Keep the billing policy (https://www.usemetron.com/billing), privacy policy and phone number visible — they already are on every LP.
- Don't change the landing page domain or add redirects/cloaking. Final URL = the real page.

## 3. Campaign structure (Search only to start)

Settings for every campaign:
- Type: **Search**. Networks: **untick Display Network and Search Partners**.
- Locations: **Presence: People in or regularly in your targeted locations** (not "interest").
- Languages: English (add Spanish only if you have Spanish ads/pages).
- Bidding: start with **Maximize conversions** (no target) for 2–4 weeks; switch to **Target CPA** after ~30 conversions.
- Budget: start small and steady (e.g. $30–$50/day per campaign) and don't change it more than ~20% at a time.
- Ad schedule: all hours (the AI answers 24/7).

| Campaign | Final URL | Keyword examples (phrase "…" and exact […]) |
|---|---|---|
| AI Receptionist | `/lp/ai-receptionist` | "ai receptionist", "ai answering service", "missed call text back", [virtual receptionist for small business], "after hours answering service" |
| Home Services AI | `/lp/home-services` | "ai for hvac", "ai for plumbers", "hvac answering service", "plumbing answering service", "home service automation" |
| Contractors | `/lp/contractors` | "ai for contractors", "construction automation software", "contractor lead follow up" |
| Website Design | `/lp/website-design` | "small business website design", "website design for contractors", "web design for small business", "business website with hosting" |
| Local SEO | `/lp/local-seo` | "local seo services", "seo for small business", "google business profile optimization", "seo for contractors" |
| AI Automation (broad intent) | `/lp/ai-automation` | "ai automation agency", "ai automation for small business", "automate my business", "ai consultant for small business" |

**City campaigns:** duplicate a campaign, target one metro, and add `?city=<slug>` to the final URL, e.g.
`https://www.usemetron.com/lp/home-services?city=houston`.
Slugs: new-york, los-angeles, chicago, houston, phoenix, dallas, miami, atlanta, denver, seattle.

### Shared negative keyword list (add to every campaign)

```
jobs
job
career
careers
hiring
salary
course
courses
training
certification
tutorial
free
diy
how to build
template
templates
internship
remote job
chatgpt login
openai
reddit
youtube
definition
meaning
wikipedia
pdf
```

## 4. Ready-to-paste ads (Responsive Search Ads)

Headlines ≤ 30 characters, descriptions ≤ 90. Pin nothing at first.

### AI Receptionist
Headlines:
- AI Receptionist for Your Business
- Answer Every Call 24/7
- Missed-Call Text-Back Included
- Books Jobs on Your Calendar
- Done-for-You Setup
- Free AI Audit
- No Long-Term Contract
- Works With Jobber & ServiceTitan
- Never Miss a Lead Again
- Plans From $500 Setup

Descriptions:
- An AI receptionist that answers, books and routes calls 24/7. Set up and managed for you.
- Every missed call gets an instant text back. Free AI audit before you commit to anything.
- Flat monthly pricing, no long-term contract. Connects to the calendar and software you use.

### Home Services AI
Headlines:
- AI for HVAC & Plumbing
- Book More Jobs Automatically
- Answer Every Call 24/7
- Estimate Follow-Up on Autopilot
- Free AI Audit
- Done-for-You Setup
- Works With Your Software
- No Long-Term Contract

Descriptions:
- Answer every call, follow up on every estimate and automate office work. Built for trades.
- Set up and managed for you. Works with Jobber, Housecall Pro and ServiceTitan. Free audit.

### Website Design
Headlines:
- Small Business Website Design
- Built and Hosted for You
- $500 Setup + $100/Month
- Mobile-Friendly & Fast
- Monthly Edits Included
- No Tech Skills Needed
- Free Website Plan

Descriptions:
- A professional website designed, built and hosted for you. $500 setup, then $100/month.
- Hosting, security, backups and monthly edits included. Cancel anytime. Get a free plan.

### Local SEO
Headlines:
- Local SEO for Small Business
- Get Found on Google
- Google Business Profile Help
- $999 Setup + $150/Month
- Monthly Ranking Reports
- Show Up in AI Search
- Free SEO Audit

Descriptions:
- Full local SEO, Google Business Profile optimization and AI search optimization in one plan.
- Includes your website and hosting. Clear monthly reports. Free SEO audit to start.

## 5. Assets (extensions)

- **Sitelinks:** Pricing (/pricing) · Book a Call (/#book) · Free AI Audit (/contact) · Billing & Refunds (/billing)
- **Callouts:** Free AI Audit · 24/7 Call Answering · Done-for-You Setup · No Long-Term Contract · Cancel Anytime
- **Structured snippet (Services):** AI Receptionist, Lead Follow-Up, Websites, Local SEO, Review Automation, Custom AI Software
- **Call asset:** (347) 674-1110 — only if someone will answer or the AI receptionist is live on that number.
- **Price assets:** Launch $500, Growth $999, Scale $1,700, Enterprise $2,800 — "setup" qualifier, final URL /pricing.
- **Business name & logo:** Metron + the orange "M" logo (Admin → Account → Business info).

## 6. First 30 days

- Week 1: check Search terms daily; add irrelevant terms as negatives.
- Watch for "Disapproved" or "Eligible (limited)" in Ads → fix the copy immediately rather than appealing repeatedly.
- After ~30 conversions, switch bidding to Target CPA near your actual cost per lead.
- Upload offline conversions (closed deals) later using the gclid the site already stores with each lead.

## 7. If something gets disapproved or suspended

- **Don't** create a new account — that guarantees a permanent ban.
- Read the exact policy named, fix the ad or page, then submit one appeal through the Policy Manager.
