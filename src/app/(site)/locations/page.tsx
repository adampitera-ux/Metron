import { LOCATIONS } from "@/content/locations";
import { AnswerBox, CtaBand, LinkCard, PageHeader, Section } from "@/components/page/blocks";
import { Button } from "@/components/ui";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Locations — AI Automation for Small Businesses Across the US",
  description:
    "Metron helps small businesses in New York, Los Angeles, Chicago, Houston, Phoenix, Dallas–Fort Worth, Miami, Atlanta, Denver, Seattle and nationwide.",
  path: "/locations",
  kicker: "Locations",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "Locations we serve",
          LOCATIONS.map((l) => ({ name: `AI automation in ${l.city}`, path: `/locations/${l.slug}` })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Locations", path: "/locations" }]}
        kicker="Where We Work"
        title={
          <>
            AI Automation for Businesses <span className="text-orange">Across the US</span>
          </>
        }
        lead="We work remotely with service businesses nationwide. Here's how AI helps in some of the biggest markets we serve."
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
      </PageHeader>

      <Section>
        <AnswerBox>
          Metron works with small and medium-sized businesses anywhere in the United States. Every market is different:
          heat drives AC emergencies in Phoenix and Houston, hail drives roofing surges in Dallas and Denver, winter
          drives no-heat calls in Chicago and many Miami and Los Angeles customers prefer Spanish. We build each system
          around the realities of your market.
        </AnswerBox>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l) => (
            <LinkCard key={l.slug} href={`/locations/${l.slug}`} title={`AI automation in ${l.city}`} body={l.metaDescription} meta={l.region} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title="Don't see your city?" body="We work with businesses nationwide. Book a free audit and we'll map out what AI can do for your market." />
      </Section>
    </>
  );
}
