import Pricing from "@/components/Pricing";
import { GENERAL_FAQS } from "@/content/faqs";
import { AnswerBox, CtaBand, FaqBlock, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";
import { PLANS, usd } from "@/content/plans";

export const metadata = pageMetadata({
  title: "Pricing — AI Automation Plans for Small Businesses",
  description:
    "Four clear plans: Launch ($500 setup + $100/mo), Growth ($999 + $150/mo), Scale ($1,700 + $500/mo) and Enterprise ($2,800 + $1,000/mo). Websites, SEO and AI automation for small businesses.",
  path: "/pricing",
  kicker: "Pricing",
});

// Feature comparison — mirrors the plan cards in src/content/plans.ts line for line.
const ROWS: [string, ...(boolean | string)[]][] = [
  ["Custom-designed website", "Up to 5 pages", "Up to 10 pages", "Up to 10 pages", "Up to 10 pages"],
  ["Mobile-friendly, fast-loading build", true, true, true, true],
  ["Premium hosting, SSL & security", true, true, true, true],
  ["Domain & business email setup", true, true, true, true],
  ["Contact form that sends leads to your inbox", true, true, true, true],
  ["Ongoing updates, backups & uptime monitoring", true, true, true, true],
  ["Monthly content edits", true, true, true, true],
  ["SEO", "Basic on-page", "Full: keyword research, on-page & technical", "Full: keyword research, on-page & technical", "Full: keyword research, on-page & technical"],
  ["Google Business Profile setup & optimization", false, true, true, true],
  ["Local SEO & directory listings", false, true, true, true],
  ["AI search optimization (AEO & GEO)", false, true, true, true],
  ["Schema markup for rich results", false, true, true, true],
  ["Ongoing SEO updates every month", false, true, true, true],
  ["Monthly ranking & traffic report", false, true, true, true],
  ["AI receptionist & missed-call text-back", false, false, true, true],
  ["Instant AI lead follow-up by text & email", false, false, true, true],
  ["AI chat assistant on your website", false, false, true, true],
  ["Online booking with automated reminders", false, false, true, true],
  ["Automated Google review requests", false, false, true, true],
  ["CRM setup & integration", false, false, true, true],
  ["Conversion optimization & landing pages", false, false, true, true],
  ["Monthly performance dashboard", false, false, true, true],
  ["Custom AI software & internal tools", false, false, false, true],
  ["Back-office automation: invoicing, data entry & paperwork", false, false, false, true],
  ["Integrations across all your business software", false, false, false, true],
  ["Advanced analytics & reporting dashboards", false, false, false, true],
  ["AI knowledge base & staff assistant", false, false, false, true],
  ["Quarterly AI strategy sessions", false, false, false, true],
  ["Dedicated account manager", false, false, false, true],
  ["Enhanced security", false, false, false, true],
  ["Support", "Standard", "Standard", "Priority", "Same-day priority"],
];

export default function PricingPage() {
  const pricingFaqs = GENERAL_FAQS.find((c) => c.category.startsWith("Pricing"))?.items ?? [];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: `${SITE.name} AI Automation Plans`,
          description: "Websites, SEO, AI search optimization and managed AI automation for small businesses.",
          brand: { "@type": "Brand", name: SITE.name },
          offers: PLANS.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.tagline,
            price: String(p.setup),
            priceCurrency: "USD",
            url: absoluteUrl("/pricing"),
            priceSpecification: [
              { "@type": "UnitPriceSpecification", name: "One-time setup", price: String(p.setup), priceCurrency: "USD" },
              { "@type": "UnitPriceSpecification", name: "Monthly", price: String(p.monthly), priceCurrency: "USD", unitText: "MONTH" },
            ],
          })),
        }}
      />
      <PageHeader
        crumbs={[{ name: "Pricing", path: "/pricing" }]}
        kicker="Pricing"
        title={
          <>
            Simple Pricing. <span className="text-orange">Real Results.</span>
          </>
        }
        lead="Four plans, one simple structure: a one-time setup fee and a flat monthly rate. We build, run and maintain everything."
      />

      <div className="-mt-[60px]">
        <Pricing />
      </div>

      <Section>
        <div className="mx-auto max-w-[1040px]">
          <AnswerBox label="How much does Metron cost?">
            {SITE.name} has four plans. Each has a one-time setup fee and a flat monthly fee:{" "}
            {PLANS.map((p, i) => (
              <span key={p.id}>
                {i === PLANS.length - 1 ? "and " : ""}
                <strong>{p.name}</strong> at {usd(p.setup)} setup + {usd(p.monthly)}/month
                {i < PLANS.length - 1 ? "; " : "."}
              </span>
            ))}{" "}
            Launch covers a professionally built and hosted website, Growth adds full SEO and AI search
            optimization, Scale adds AI lead capture and follow-up, and Enterprise adds custom AI software and
            back-office automation.
          </AnswerBox>

          <div className="mt-14">
            <SectionTitle kicker="Compare" title="What's in each plan" />
            <div className="mt-8 overflow-x-auto rounded-[18px] border border-line">
              <table className="w-full min-w-[760px] text-left text-[15px]">
                <thead>
                  <tr className="bg-[#f6f6f6] text-fg">
                    <th className="px-5 py-4 font-semibold">Feature</th>
                    {PLANS.map((p) => (
                      <th key={p.id} className="px-4 py-4 font-semibold">
                        {p.name}
                        <span className="block text-[13px] font-normal text-muted-2">
                          {usd(p.setup)} + {usd(p.monthly)}/mo
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([f, ...cells]) => (
                    <tr key={f} className="border-t border-line">
                      <td className="px-5 py-3.5 text-fg-2">{f}</td>
                      {cells.map((v, i) => (
                        <td key={i} className="px-4 py-3.5 text-muted">
                          {typeof v === "string" ? v : v ? <span className="text-orange">✓</span> : <span className="text-muted-3">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {pricingFaqs.length > 0 && (
            <div className="mt-16">
              <FaqBlock faqs={pricingFaqs} title="Pricing questions" />
            </div>
          )}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title="Not sure which plan fits?" body="Book a free AI audit. We'll map your workflows and recommend the plan that pays for itself fastest." />
      </Section>
    </>
  );
}
