import { INDUSTRIES } from "@/content/industries";
import { AnswerBox, CtaBand, LinkCard, PageHeader, Section } from "@/components/page/blocks";
import { Button } from "@/components/ui";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation by Industry — HVAC, Plumbing, Dental, Legal & More",
  description:
    "See how AI automation works for HVAC, plumbing, electrical, roofing, landscaping, cleaning, pest control, dental, law firms, real estate, auto repair and med spas.",
  path: "/industries",
  kicker: "Industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "Industries we serve",
          INDUSTRIES.map((i) => ({ name: `AI automation for ${i.audience}`, path: `/industries/${i.slug}` })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Industries", path: "/industries" }]}
        kicker="Who We Help"
        title={
          <>
            AI Automation Built For <span className="text-orange">Your Industry</span>
          </>
        }
        lead="From HVAC and plumbing to dental and law firms, we configure AI around the way your business actually books work, serves customers, and gets paid."
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
      </PageHeader>

      <Section>
        <AnswerBox>
          Any small business that runs on phone calls, appointments, quotes and follow-ups can use AI
          automation. The biggest wins usually come from answering every inbound call and lead
          instantly, automating scheduling and reminders, and removing manual data entry between
          tools — which grows revenue while reducing admin costs.
        </AnswerBox>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <LinkCard
              key={i.slug}
              href={`/industries/${i.slug}`}
              title={`AI for ${i.audience}`}
              body={i.metaDescription}
              meta={i.name}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title="Don't see your industry?" body="If your business runs on calls, bookings and follow-ups, we can automate it. Book a free audit and we'll map it out together." />
      </Section>
    </>
  );
}
