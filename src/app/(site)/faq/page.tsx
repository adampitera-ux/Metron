import { GENERAL_FAQS } from "@/content/faqs";
import { HOME_FAQS } from "@/content/home-faqs";
import { CtaBand, FaqBlock, PageHeader, Section } from "@/components/page/blocks";
import { JsonLd, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ — AI Automation, Pricing, AEO & SEO Questions",
  description:
    "Answers to common questions about AI automation for small businesses: getting started, pricing, how the AI works, data security, and AEO & SEO.",
  path: "/faq",
  kicker: "FAQ",
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function FaqPage() {
  const groups = [{ category: "About Metron", items: HOME_FAQS }, ...GENERAL_FAQS];
  return (
    <>
      {/* one FAQPage schema for the whole page */}
      <JsonLd data={faqSchema(groups.flatMap((g) => g.items))} />
      <PageHeader
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        kicker="Need To Know"
        title="Frequently Asked Questions"
        lead="Everything small business owners ask us about AI automation, pricing, and getting found in Google and AI answer engines."
      />

      <Section>
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="FAQ categories" className="hidden lg:block">
            <ul className="sticky top-28 space-y-2.5 border-l border-line">
              {groups.map((g) => (
                <li key={g.category}>
                  <a href={`#${slug(g.category)}`} className="-ml-px block border-l border-transparent pl-4 text-[15px] text-muted hover:border-orange hover:text-fg">
                    {g.category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16">
            {groups.map((g) => (
              <div key={g.category} id={slug(g.category)} className="scroll-mt-28">
                <FaqBlock faqs={g.items} title={g.category} withSchema={false} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title="Still have questions?" body="Book a free 30-minute call. We'll answer them and show you what AI could automate in your business." />
      </Section>
    </>
  );
}
