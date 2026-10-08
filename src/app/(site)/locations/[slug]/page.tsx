import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/content/industries";
import { LOCATIONS } from "@/content/locations";
import { AnswerBox, CtaBand, FaqBlock, LinkCard, PageHeader, PointGrid, Section, SectionTitle } from "@/components/page/blocks";
import { Button } from "@/components/ui";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = LOCATIONS.find((x) => x.slug === slug);
  if (!l) return {};
  return pageMetadata({
    title: l.metaTitle,
    absoluteTitle: true,
    description: l.metaDescription,
    path: `/locations/${l.slug}`,
    kicker: `${l.city}, ${l.region}`,
  });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const loc = LOCATIONS.find((x) => x.slug === slug);
  if (!loc) notFound();

  const industries = loc.industries
    .map((s) => INDUSTRIES.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const others = LOCATIONS.filter((x) => x.slug !== loc.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `AI automation for ${loc.city} small businesses`,
          description: loc.answer,
          url: absoluteUrl(`/locations/${loc.slug}`),
          serviceType: "AI automation, websites and SEO",
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: { "@type": "City", name: `${loc.city}, ${loc.region}` },
        }}
      />
      <PageHeader
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: loc.city, path: `/locations/${loc.slug}` },
        ]}
        kicker={`${loc.city}, ${loc.region}`}
        title={loc.headline}
        lead={loc.metaDescription}
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
        <Button href="/pricing">See Pricing</Button>
      </PageHeader>

      <Section>
        <AnswerBox label={`How can AI help ${loc.city} businesses?`}>{loc.answer}</AnswerBox>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="The market" title={`What's different about running a service business in ${loc.city}`} />
        <div className="mt-8">
          <PointGrid items={loc.drivers} cols={2} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          kicker="What we automate"
          title={`The automations that matter most in ${loc.metro}`}
          sub="Built around your existing phone line, calendar and software — no rip-and-replace."
        />
        <div className="mt-8">
          <PointGrid items={loc.plays} numbered cols={2} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Industries" title={`Industries we help in ${loc.city}`} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <LinkCard key={i.slug} href={`/industries/${i.slug}`} title={`AI for ${i.audience}`} meta={i.name} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px] rounded-[22px] border border-line bg-white p-7 md:p-9">
          <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Service area</p>
          <h2 className="h-display mt-3 text-[26px] leading-[1.25] text-fg">Serving {loc.metro}</h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-muted">
            We work with businesses throughout {loc.metro}, including {loc.areas.slice(0, -1).join(", ")} and{" "}
            {loc.areas[loc.areas.length - 1]}. Our team works remotely, so everything from your free audit to launch and
            ongoing support happens by phone, video and email.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px]">
          <FaqBlock faqs={loc.faqs} title={`AI automation in ${loc.city}: FAQs`} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Other cities" title="More locations we serve" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {others.map((o) => (
            <a key={o.slug} href={`/locations/${o.slug}`} className="rounded-full border border-line bg-[#fafafa] px-4 py-2 text-[15px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange">
              {o.city}
            </a>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title={`Get a free AI audit for your ${loc.city} business`} />
      </Section>
    </>
  );
}
