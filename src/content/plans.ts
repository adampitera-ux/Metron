/**
 * Pricing plans — the single source of truth for every price on the site
 * (pricing cards, comparison table, schema, llms.txt, ROI calculator).
 *
 * Each plan is a one-time setup fee plus a monthly fee. "Buy" buttons go to the
 * plan's Stripe Payment Link. Paste each link into `stripeLink` below, or set the
 * matching NEXT_PUBLIC_STRIPE_LINK_* variable in Vercel. Until a link is set, the
 * button falls back to the contact form with the plan pre-selected.
 */

export type Plan = {
  id: "launch" | "growth" | "scale" | "enterprise";
  name: string;
  tagline: string;
  setup: number;
  monthly: number;
  monthlyLabel: string;
  popular?: boolean;
  /** Short line shown above the feature list, e.g. "Everything in Launch, plus:" */
  includesPrevious?: string;
  features: string[];
  stripeLink: string;
};

const link = (envValue: string | undefined, fallback = "") => (envValue ?? "").trim() || fallback;

export const PLANS: Plan[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "A professional website, built and hosted for you.",
    setup: 500,
    monthly: 100,
    monthlyLabel: "hosting & care",
    features: [
      "Custom-designed website (up to 5 pages)",
      "Mobile-friendly, fast-loading build",
      "Premium hosting, SSL & security",
      "Domain & business email setup",
      "Contact form that sends leads to your inbox",
      "Basic on-page SEO",
      "Ongoing updates, backups & uptime monitoring",
      "Monthly content edits included",
    ],
    stripeLink: link(process.env.NEXT_PUBLIC_STRIPE_LINK_LAUNCH, "https://buy.stripe.com/cNicMY7gNdH94V14izeAg07"),
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Get found on Google and in AI search.",
    setup: 999,
    monthly: 150,
    monthlyLabel: "hosting, care & SEO",
    includesPrevious: "Everything in Launch, plus:",
    features: [
      "Website up to 10 pages",
      "Full SEO: keyword research, on-page & technical",
      "Google Business Profile setup & optimization",
      "Local SEO & directory listings",
      "AI search optimization (AEO & GEO)",
      "Schema markup for rich results",
      "Ongoing SEO updates every month",
      "Monthly ranking & traffic report",
    ],
    stripeLink: link(process.env.NEXT_PUBLIC_STRIPE_LINK_GROWTH, "https://buy.stripe.com/eVq28k9oV5aDdrxcP5eAg08"),
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Turn more visitors and calls into booked jobs.",
    setup: 1700,
    monthly: 500,
    monthlyLabel: "managed AI & growth",
    popular: true,
    includesPrevious: "Everything in Growth, plus:",
    features: [
      "AI receptionist & missed-call text-back",
      "Instant AI lead follow-up by text & email",
      "AI chat assistant on your website",
      "Online booking with automated reminders",
      "Automated Google review requests",
      "CRM setup & integration",
      "Conversion optimization & landing pages",
      "Monthly performance dashboard & priority support",
    ],
    stripeLink: link(process.env.NEXT_PUBLIC_STRIPE_LINK_SCALE),
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "AI built into every part of your operations.",
    setup: 2800,
    monthly: 1000,
    monthlyLabel: "full-service AI partner",
    includesPrevious: "Everything in Scale, plus:",
    features: [
      "Custom AI software & internal tools",
      "Back-office automation: invoicing, data entry & paperwork",
      "Integrations across all your business software",
      "Advanced analytics & reporting dashboards",
      "AI knowledge base & staff assistant",
      "Quarterly AI strategy sessions",
      "Dedicated account manager",
      "Same-day priority support & enhanced security",
    ],
    stripeLink: link(process.env.NEXT_PUBLIC_STRIPE_LINK_ENTERPRISE),
  },
];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
export const planHref = (p: Plan) => p.stripeLink || `/contact?plan=${p.id}`;
export const LOWEST = PLANS[0];
export const HIGHEST = PLANS[PLANS.length - 1];
