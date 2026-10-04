/**
 * Single source of truth for brand + business details.
 * Everything SEO-related (metadata, JSON-LD, sitemap, llms.txt) reads from here,
 * so update these values once and every page stays consistent.
 */
export const SITE = {
  name: "Metron",
  legalName: "Metron",
  tagline: "The AI Integration Agency for Small & Medium Businesses",
  description:
    "Metron integrates AI into small and medium-sized businesses — from trades, construction and home services to offices and clinics. We automate the back office, build custom AI tools, answer every lead, and get you found online, so you grow faster, save money, and focus on the work you do best.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.metron.ai").replace(/\/$/, ""),
  email: "eeharris2004@gmail.com",
  phone: "(347) 674-1110" as string, // display format — leave empty to hide everywhere
  phoneE164: "+13476741110", // used for tel: links + schema
  founded: "2024",
  areaServed: "United States",
  // Public profiles strengthen entity recognition in Google + AI answer engines.
  sameAs: [] as string[], // e.g. ["https://www.linkedin.com/company/…", "https://x.com/…"]
  author: {
    name: "Metron Team",
    role: "AI Automation Specialists",
  },
  bookingUrl: "/contact",
  // Google Ads / analytics (set in .env.local — tracking is skipped when empty)
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "", // GA4, e.g. G-XXXXXXX
  adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "", // e.g. AW-123456789
  adsLeadLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? "", // conversion label for form leads
  adsCallLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL ?? "", // conversion label for phone clicks
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
