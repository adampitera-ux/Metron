import Pricing from "@/components/Pricing";
import { GENERAL_FAQS } from "@/content/faqs";
import { AnswerBox, CtaBand, FaqBlock, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pricing — AI Automation Plans for Small Businesses",
  description:
    "Simple monthly pricing for AI automation: Standard at $900/month for small businesses and Enterprise at $1,600/month for growing teams with advanced needs.",
  path: "/pricing",
  kicker: "Pricing",
});

const ROWS: [string, boolean | string, boolean | string][] = [
  ["Website refresh", true, true],
  ["AEO (answer engine optimization)", true, true],
  ["GEO (generative engine optimization)", true, true],
  ["Basic automations", true, true],
  ["Expanded & custom workflows", false, true],
  ["Advanced analytics", false, true],
  ["Priority support", false, true],
  ["Enhanced security", false, true],
  ["Users", "Small teams", "Up to 50"],
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
          description: "Managed AI automation, AEO/GEO and website services for small businesses.",
          brand: { "@type": "Brand", name: SITE.name },
          offers: [
            { "@type": "Offer", name: "Standard", price: "900", priceCurrency: "USD", url: absoluteUrl("/pricing"), priceSpecification: { "@type": "UnitPriceSpecification", price: "900", priceCurrency: "USD", unitText: "MONTH" } },
            { "@type": "Offer", name: "Enterprise", price: "1600", priceCurrency: "USD", url: absoluteUrl("/pricing"), priceSpecification: { "@type": "UnitPriceSpecification", price: "1600", priceCurrency: "USD", unitText: "MONTH" } },
          ],
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
        lead="Two monthly plans. We build, run and maintain everything — you focus on your customers."
      />

      <div className="-mt-[60px]">
        <Pricing />
      </div>

      <Section>
        <div className="mx-auto max-w-[900px]">
          <AnswerBox label="How much does AI automation cost?">
            {SITE.name} plans start at $900 per month (Standard) for small businesses that need a
            website refresh, AEO, GEO and basic automations, and $1,600 per month (Enterprise) for
            growing teams that need expanded custom workflows, advanced analytics, priority support and
            enhanced security. A free audit comes first so you know exactly what you&apos;ll get.
          </AnswerBox>

          <div className="mt-14">
            <SectionTitle kicker="Compare" title="What's in each plan" />
            <div className="mt-8 overflow-x-auto rounded-[18px] border border-line">
              <table className="w-full min-w-[520px] text-left text-[15.5px]">
                <thead>
                  <tr className="bg-[#f6f6f6] text-fg">
                    <th className="px-5 py-4 font-semibold">Feature</th>
                    <th className="px-5 py-4 font-semibold">Standard · $900/mo</th>
                    <th className="px-5 py-4 font-semibold">Enterprise · $1,600/mo</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([f, a, b]) => (
                    <tr key={f} className="border-t border-line">
                      <td className="px-5 py-3.5 text-fg-2">{f}</td>
                      {[a, b].map((v, i) => (
                        <td key={i} className="px-5 py-3.5 text-muted">
                          {typeof v === "string" ? v : v ? <span className="text-orange">✓ Included</span> : <span className="text-muted-3">—</span>}
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
