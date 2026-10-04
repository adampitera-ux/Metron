---
title: "llms.txt, Schema Markup & Technical AEO: A Plain-English Checklist"
description: "A plain-English technical AEO checklist for small businesses: schema markup, llms.txt, robots.txt, crawlability and site structure, explained without jargon."
date: "2026-10-02"
category: "Websites & Search"
tags:
  - llms.txt
  - schema markup
  - technical SEO
  - AEO
  - structured data
tldr: "Technical AEO is the behind-the-scenes work that lets search engines and AI tools read your website without guessing: crawlable pages, clean headings, schema markup in JSON-LD, sensible robots.txt rules and consistent business data. llms.txt is an emerging, proposed convention for pointing AI tools to your key content; it's cheap to add but not an official standard, so prioritize schema and crawlability first."
cta: "readiness"
faqs:
  - q: "What is llms.txt?"
    a: "llms.txt is a proposed convention, first published in 2024, for a plain-text Markdown file at the root of your website that summarizes your site and links to its most important pages for large language models. It is not an official web standard, and support from major AI companies and search engines is limited or unconfirmed. It's quick to add, but it shouldn't be your first priority."
  - q: "Does schema markup help with AI search?"
    a: "Schema markup labels the facts on your page, like business type, address, services and FAQs, in a structured, machine-readable format. Search engines use it to understand pages and power certain rich results, and it removes ambiguity for any system reading your site. It isn't a guarantee of AI citations, but it's one of the most reliable technical foundations you can add."
  - q: "What type of schema should a small business use?"
    a: "Start with LocalBusiness or a more specific subtype such as Plumber, HVACBusiness, Dentist or LegalService on your home or contact page. Add Service markup for core service pages, FAQPage for genuine FAQ sections, and Organization details like logo and social profiles. Only mark up information that's actually visible on the page."
  - q: "Does robots.txt affect whether AI tools can see my site?"
    a: "Yes, for crawlers that respect it, which reputable ones state they do. robots.txt can allow or block specific user agents, including several documented AI crawlers. Check that you're not unintentionally blocking search engines or AI search crawlers you want to reach your content."
  - q: "Do I need a developer for technical AEO?"
    a: "Not always. Many website platforms and SEO plugins can add basic schema and manage robots.txt for you. You may want help for custom schema, fixing JavaScript rendering issues, or cleaning up a site with years of accumulated problems."
relatedServices:
  - aeo-geo
  - website-refresh
  - ai-automation
relatedIndustries:
  - hvac
  - plumbing
  - dental
  - law-firms
  - auto-repair
---

Good content is only half of Answer Engine Optimization. The other half is technical: making sure search engines and AI tools can actually reach, read and understand your website.

This checklist explains each piece in plain English, tells you what's proven and what's still experimental, and gives you a priority order so you spend time where it counts.

## What is technical AEO?

**Technical AEO is the behind-the-scenes setup that lets search engines and AI tools access your pages and understand them without guessing.** It covers crawlability, page structure, structured data and a few newer files like llms.txt.

If [AEO](/glossary/aeo) is about writing answers worth quoting, technical AEO is about making sure the machine can find the answer, trust what it is and lift it cleanly. For the content side, start with our guide to [what AEO is](/blog/what-is-aeo-answer-engine-optimization).

## What should be on a technical AEO checklist?

**Focus on five areas, in this order: crawlability, page structure, schema markup, business data consistency, and AI-specific files like llms.txt.** The first four are well established; the last is emerging.

| Area | What it means | Status | Priority |
|---|---|---|---|
| Crawlability & indexing | Engines can reach and index your pages | Well established | Critical |
| Page structure | Clear headings, answer-first sections, real HTML text | Well established | High |
| [Schema markup](/glossary/schema-markup) | Machine-readable labels for your business and content | Well established | High |
| Business data consistency | Same name, address, phone, hours everywhere | Well established | High |
| [llms.txt](/glossary/llms-txt) | Plain-text guide to your site for AI models | Proposed convention, unconfirmed support | Low (nice-to-have) |

Let's go through each.

## How do I make sure search engines and AI tools can crawl my site?

**Confirm your key pages are indexed, your robots.txt isn't blocking crawlers you want, and your important text loads as real HTML.** If a page can't be crawled, nothing else on this list matters.

### Crawlability checklist

- [ ] **Verify your site** in Google Search Console and Bing Webmaster Tools. Both are free.
- [ ] **Submit an XML sitemap** to both.
- [ ] **Check indexing** for your home, service, location and contact pages. Fix any marked "excluded" or "not indexed" that should be indexed.
- [ ] **Review robots.txt** (yoursite.com/robots.txt). Make sure it isn't blocking Googlebot, Bingbot or AI crawlers you want to allow.
- [ ] **Check your firewall, CDN or security plugin.** Some block unfamiliar bots by default, which can include AI crawlers.
- [ ] **Make sure key text isn't locked inside images, PDFs or heavy JavaScript.** View your page source or use a "fetch as" tool to confirm your prices, services and FAQs appear as text.
- [ ] **Test mobile speed and usability.** Slow, broken mobile pages are a problem for both people and crawlers.

### A note on AI crawlers and robots.txt

Several AI companies publish the names of their crawlers and say they respect robots.txt. Some separate crawlers by purpose: for example, OpenAI documents GPTBot (used for model training) and OAI-SearchBot (used for search features), and Google offers a "Google-Extended" token that controls use of your content for its Gemini models without affecting regular Google Search.

If your goal is to be recommended by AI tools, the sensible default for most small businesses is to allow AI search crawlers. Whether to allow training crawlers is a business choice. Just make it on purpose.

Here's a simple example robots.txt that allows everything and points to your sitemap:

```
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

## How should my pages be structured for AEO?

**Use one clear H1 per page, question-style H2s, a direct answer right under each heading, and lists or tables for steps and comparisons.** Structure tells machines which text answers which question.

- [ ] **One page per core service** rather than one long "Services" page.
- [ ] **Question-style subheadings** using your customers' words ("How much does drain cleaning cost?").
- [ ] **A 1–3 sentence direct answer** immediately under each heading, then detail.
- [ ] **Lists and tables** for steps, options, pricing tiers and comparisons.
- [ ] **Descriptive page titles and meta descriptions** that state the service and location.
- [ ] **Internal links** between related pages (a service page linking to its FAQ, a location page linking to services).
- [ ] **Visible business details** (name, phone, service area) in the footer of every page.

If your current site makes these changes painful, that's a sign it may be time for a [website refresh](/services/website-refresh) built with this structure from the start.

## What is schema markup and which types should I use?

**Schema markup is code, usually in a format called JSON-LD, that labels the facts on your page so machines know exactly what they mean.** It uses a shared vocabulary from Schema.org that Google, Bing and others support.

Without schema, a machine sees "555-0123" and has to infer it's your phone number. With schema, you state it outright.

### Recommended schema types for small businesses

| Schema type | Where to use it | What it tells machines |
|---|---|---|
| **LocalBusiness** (or a subtype like Plumber, HVACBusiness, Electrician, RoofingContractor, Dentist, LegalService, AutoRepair) | Home page or contact page | Business name, address, phone, hours, geo coordinates, service area |
| **Organization** | Home page | Legal name, logo, social profiles (via `sameAs`) |
| **Service** | Each service page | The service name, description, area served, provider |
| **FAQPage** | Pages with genuine FAQ sections | Questions and answers in structured form |
| **Review / AggregateRating** | Only where rules allow | Ratings for specific items; Google restricts self-serving review markup on your own business |
| **BreadcrumbList** | Site-wide | How pages relate in your site hierarchy |

A note on FAQPage: since 2023, Google shows FAQ rich results only for a limited set of authoritative sites, such as government and health sites. FAQ markup is still valid and still helps machines understand your Q&A content, but don't expect it to produce expandable FAQs in Google results for a typical small business.

### A simple LocalBusiness example

Here's what basic JSON-LD for a plumbing company might look like. The details are placeholders.

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Example Plumbing Co.",
  "url": "https://www.example.com",
  "telephone": "+1-555-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Springfield",
    "addressRegion": "IL",
    "postalCode": "62701",
    "addressCountry": "US"
  },
  "areaServed": ["Springfield", "Chatham", "Rochester"],
  "openingHours": "Mo-Fr 07:00-18:00",
  "sameAs": [
    "https://www.facebook.com/exampleplumbing"
  ]
}
```

### Schema checklist

- [ ] Add LocalBusiness (most specific subtype available) to your home or contact page.
- [ ] Add Service schema to each core service page.
- [ ] Add FAQPage only where the FAQs are visible on the page.
- [ ] Include `sameAs` links to your real profiles to help connect your business identity across the web (a core idea in [entity SEO](/glossary/entity-seo)).
- [ ] **Never mark up content that isn't on the page,** such as hidden FAQs or reviews you made up. It violates search engine guidelines.
- [ ] Validate with Google's Rich Results Test and the Schema.org validator.

## What is llms.txt and should my business have one?

**llms.txt is a proposed convention for a plain-text file at your site's root that gives AI models a short summary of your site and links to your most important pages.** It's quick to create, but it is not an official standard, and adoption by major AI tools is limited or unconfirmed.

### What's confirmed and what isn't

- **Confirmed:** The format was proposed publicly in 2024 by Jeremy Howard of Answer.AI, and a number of websites, especially software documentation sites, have published one.
- **Confirmed:** It is not a W3C, IETF or other official standard.
- **Not confirmed:** That major AI products like ChatGPT, Perplexity or Google AI Overviews consistently read or rely on llms.txt when answering questions. Google representatives have indicated publicly that Google Search doesn't use it.
- **Not confirmed:** Any measurable ranking or citation benefit.

### So should you add one?

It's reasonable to add one if it takes you less than an hour, and treat it as a low-cost bet on an emerging convention. Just don't let it distract from schema, crawlability and content, which have far more established value.

### A simple llms.txt example

The proposal uses Markdown: a title, a short summary in a blockquote, then sections of links.

```
# Example Plumbing Co.

> Licensed residential plumbing company serving Springfield, Chatham and Rochester, IL. Specializes in water heaters, drain cleaning, repiping and 24/7 emergency repairs.

## Services
- [Water heater repair and replacement](https://www.example.com/water-heaters): Tank and tankless, same-day service available
- [Drain cleaning](https://www.example.com/drain-cleaning): Clogs, camera inspections, hydro-jetting
- [Emergency plumbing](https://www.example.com/emergency): 24/7 response in our service area

## Company
- [About us](https://www.example.com/about): Family-owned since 2009, licensed and insured
- [Contact](https://www.example.com/contact): Phone, hours and service area
```

Save it as `llms.txt` in your site's root folder so it's reachable at `yoursite.com/llms.txt`.

## How do I keep my business data consistent?

**Pick one exact version of your name, address, phone, hours and website, then make every listing and page match it.** Inconsistency forces machines to guess which version is right.

1. Write down your "official" business details in one document.
2. Update your website (header, footer, contact page, schema).
3. Update Google Business Profile, Bing Places and Apple Business Connect.
4. Update Yelp, Facebook, BBB and your top industry directories.
5. Set a reminder to recheck quarterly, and any time you change hours, phone or location.

This is tedious work, and it's a good candidate for a lightweight automated process. Our [AI automation](/services/ai-automation) work often includes keeping this kind of recurring back-office task from slipping.

## What order should I tackle this checklist in?

**Crawlability first, then structure and schema, then data consistency, then llms.txt.** Here's a realistic sequence for a small business.

1. **Day 1:** Verify Search Console and Bing Webmaster Tools, submit sitemaps, check robots.txt and firewall settings.
2. **Week 1:** Add LocalBusiness and Organization schema; fix any pages that aren't indexed.
3. **Weeks 2–3:** Restructure your top service pages with question headings and direct answers; add Service and FAQPage schema.
4. **Week 3:** Clean up listings for consistent business data.
5. **Week 4:** Add llms.txt if you want, then retest everything.

Once the technical foundation is solid, the next step is visibility. See [how to get recommended by ChatGPT, Perplexity and Google AI Overviews](/blog/how-to-get-recommended-by-chatgpt).

## Key takeaways

- **Technical AEO lets machines read your site without guessing.** It's the foundation for being cited by AI tools.
- **Crawlability comes first:** indexed pages, sensible robots.txt, no accidental bot blocking, real HTML text.
- **Schema markup is one of the highest-value technical additions** for most small businesses. Use the most specific LocalBusiness subtype and only mark up visible content.
- **llms.txt is an emerging, proposed convention,** not an official standard, with limited confirmed support. Cheap to add, low priority.
- **Consistent business data** across your site and listings removes doubt about who you are.
- **Work in order:** crawlability, structure and schema, data consistency, then llms.txt.

Not sure how your site scores on these basics? Run it through our free [AI Search Readiness Checker](/tools/ai-search-readiness-checker), or [book a free AI audit](/contact) and we'll review your crawlability, schema and listings, then hand you a prioritized fix list through our [AEO & GEO service](/services/aeo-geo).
