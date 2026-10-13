# SEO Measurement Plan

## Baseline (2026-10-12)
| Metric | Baseline | Source |
|---|---|---|
| Indexable URLs / in sitemap | 183 / 183 | Live crawl ✅ |
| Indexed pages | ~160 | Owner (GSC) |
| Impressions (28 days) | 731 | Owner (GSC) |
| Clicks (28 days) | 0 | Owner (GSC) |
| Average position | ~70 | Owner (GSC); an average, not a fixed rank |
| Broken internal links / duplicate titles | 0 / 0 | `npm run seo:check` ✅ |
| Organic leads / bookings / purchases | Unknown | Needs GA4 + Ads conversions configured |

## Conversion definitions (implemented in `src/lib/track.ts`)
| Event | Fires when | Counts as |
|---|---|---|
| `generate_lead` (trackLead) | /api/lead returns success | **Lead** |
| `book_call` (trackBooking) | Cal.com `bookingSuccessful` event | **Booking** |
| `purchase` (trackPurchase) | /welcome with a Stripe session_id; deduplicated per transaction | **Customer / revenue** |
| `click_to_call` (trackCall) | tel: link click | Engagement, **not** a lead (the Ads call conversion should be set as Secondary) |
| `cta_click`, `begin_checkout` | Button clicks | Engagement only |

No personal data is sent to analytics. Button clicks are never reported as leads.

## Owner setup needed
- Set `NEXT_PUBLIC_GA_ID` in Vercel and redeploy.
- In GA4, mark `generate_lead`, `book_call` and `purchase` as key events.
- Link GA4 ↔ Search Console.

## Reporting cadence
- **Weekly (5 min):** GSC clicks, impressions, top queries; leads and bookings.
- **Monthly:**
  - GSC pages report: high-impression/low-CTR pages and positions 8–20.
  - Organic landing page → lead/booking (GA4).
  - Re-run `npm run seo:check` against production.
- **Quarterly:** review location pages and short glossary terms (classes E/G in url-inventory.csv) with 90 days of data before any change.

## Success windows (realistic)
- **Leading indicators, 2–6 weeks:** impressions and positions on updated pages; first clicks on long-tail terms.
- **Business results, 3–6 months:** organic leads and bookings.
- No rankings or revenue are guaranteed.
