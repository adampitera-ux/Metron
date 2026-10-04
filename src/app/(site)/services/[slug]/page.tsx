import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import {
  AnswerBox,
  CtaBand,
  FaqBlock,
  LinkCard,
  PageHeader,
  PointGrid,
  Section,
  SectionTitle,
} from "@/components/page/blocks";
import { ServiceIcon } from "@/components/page/ServiceIcon";
import { CheckCircle } from "@/components/icons";
import { Button } from "@/components/ui";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    absoluteTitle: true,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    kicker: "Service",
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const industries = INDUSTRIES.filter((i) => s.relatedIndustries.includes(i.slug));
  const posts = getAllPosts()
    .filter((p) => p.relatedServices?.includes(s.slug))
    .slice(0, 3);
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: s.name,
          description: s.answer,
          path: `/services/${s.slug}`,
          serviceType: s.shortName,
          audience: "Small businesses",
        })}
      />
      <PageHeader
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.shortName, path: `/services/${s.slug}` },
        ]}
        kicker={s.name}
        title={s.headline}
        lead={s.summary}
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
        <Button href="/pricing">See Pricing</Button>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <AnswerBox label={`What is ${s.shortName}?`}>{s.answer}</AnswerBox>

            <div className="mt-16">
              <SectionTitle kicker="Benefits" title={`Why small businesses invest in ${s.shortName}`} />
              <div className="mt-8">
                <PointGrid items={s.benefits} cols={2} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[22px] border border-line bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]">
              <span className="grid size-12 place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white">
                <ServiceIcon name={s.icon} className="size-6" />
              </span>
              <p className="h-display mt-5 text-[22px] text-fg">What you get</p>
              <ul className="mt-4 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[15.5px] leading-[1.5] text-muted">
                    <CheckCircle className="mt-0.5 size-[18px] shrink-0 text-orange" />
                    {d}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="orange" className="mt-7 w-full">
                Get Started
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Use cases" title="Workflows we build" />
        <div className="mt-8">
          <PointGrid items={s.useCases} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Process" title="How it works" />
        <div className="mt-8">
          <PointGrid items={s.process} numbered cols={s.process.length === 4 ? 2 : 3} />
        </div>
      </Section>

      {industries.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="Industries" title={`${s.shortName} by industry`} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <LinkCard key={i.slug} href={`/industries/${i.slug}`} title={`${s.shortName} for ${i.audience}`} body={i.answer.split(". ")[0] + "."} meta={i.name} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px]">
          <FaqBlock faqs={s.faqs} title={`${s.shortName} FAQs`} />
        </div>
      </Section>

      {posts.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="Learn more" title="Related guides" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} body={p.description} meta={p.category} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <SectionTitle kicker="More services" title="Explore other services" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((o) => (
            <LinkCard key={o.slug} href={`/services/${o.slug}`} title={o.shortName} icon={<ServiceIcon name={o.icon} />} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
