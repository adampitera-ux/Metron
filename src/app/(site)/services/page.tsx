import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { AnswerBox, CtaBand, LinkCard, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { ServiceIcon } from "@/components/page/ServiceIcon";
import { Button } from "@/components/ui";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Integration & Automation Services for Small Businesses",
  description:
    "AI strategy, back-office automation, custom AI software, AI receptionists, lead follow-up, websites and AI search — built and managed for small and medium businesses.",
  path: "/services",
  kicker: "Services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "AI automation services",
          SERVICES.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Services", path: "/services" }]}
        kicker="Our Services"
        title={
          <>
            Every Way AI Can <span className="text-orange">Save You Time & Money</span>
          </>
        }
        lead="From your first AI roadmap to custom software, back-office automation and 24/7 phones — we integrate AI into every part of your business and run it for you."
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
        <Button href="/pricing">See Pricing</Button>
      </PageHeader>

      <Section>
        <AnswerBox>
          An AI integration agency finds where AI can save a business time and money, then designs,
          builds and maintains it — back-office automation, custom AI tools, integrations between
          existing software, AI phone answering, lead follow-up, and websites that get found. For
          small and medium businesses, that means lower overhead and faster growth without hiring
          more admin staff.
        </AnswerBox>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/services/${s.slug}`}
              title={s.name}
              body={s.summary}
              icon={<ServiceIcon name={s.icon} />}
              meta="Learn more"
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          kicker="Industries"
          title="Tailored to how your industry works"
          sub="The same building blocks, configured for the calls, jobs and appointments in your trade."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {INDUSTRIES.map((i) => (
            <a
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-[15px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange"
            >
              AI for {i.audience}
            </a>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
