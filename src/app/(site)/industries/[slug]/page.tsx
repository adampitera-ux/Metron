import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";
import { INDUSTRIES } from "@/content/industries";
import { LOCATIONS } from "@/content/locations";
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
import { Button } from "@/components/ui";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";
import { PLANS, usd } from "@/content/plans";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) return {};
  // Owners search both "AI automation for X" and "AI receptionist for X", so the title covers both.
  const audience = i.metaTitle.replace(/\s*\|\s*Metron$/, "").replace(/^AI Automation for /, "");
  const base = `AI Receptionist & Automation for ${audience}`;
  const title = audience === i.metaTitle ? i.metaTitle : base.length + 9 <= 60 ? `${base} | Metron` : base.length <= 60 ? base : i.metaTitle;
  return pageMetadata({
    title,
    absoluteTitle: true,
    description: i.metaDescription,
    path: `/industries/${i.slug}`,
    kicker: `AI for ${i.audience}`,
  });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((x) => x.slug === slug);
  if (!ind) notFound();

  const services = SERVICES.filter((s) => ind.relatedServices.includes(s.slug));
  const launch = PLANS.find((p) => p.id === "launch")!;
  const growth = PLANS.find((p) => p.id === "growth")!;
  const posts = getAllPosts()
    .filter((p) => p.relatedIndustries?.includes(ind.slug))
    .slice(0, 3);
  const others = INDUSTRIES.filter((x) => x.slug !== ind.slug);
  // City pages where this trade is a focus (falls back to every city).
  const cityMatches = LOCATIONS.filter((l) => l.industries.includes(ind.slug));
  const cities = cityMatches.length ? cityMatches : LOCATIONS;
  // Phone-driven trades get the missed-call calculator; everyone else the ROI calculator.
  const calc = ind.relatedServices.includes("ai-receptionist")
    ? { href: "/tools/missed-call-revenue-calculator", label: "Missed-Call Calculator" }
    : { href: "/tools/ai-automation-roi-calculator", label: "Savings Calculator" };

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `AI automation for ${ind.audience}`,
          description: ind.answer,
          path: `/industries/${ind.slug}`,
          serviceType: "AI automation",
          audience: ind.audience,
        })}
      />
      <PageHeader
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: ind.name, path: `/industries/${ind.slug}` },
        ]}
        kicker={`AI for ${ind.audience}`}
        title={ind.headline}
        lead={ind.metaDescription}
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
        <Button href={calc.href}>{calc.label}</Button>
      </PageHeader>

      <Section>
        <AnswerBox label={`How can AI help ${ind.audience}?`}>{ind.answer}</AnswerBox>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="The problem" title={`What's holding ${ind.audience} back`} />
        <div className="mt-8">
          <PointGrid items={ind.painPoints} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          kicker="What we automate"
          title={`AI workflows for ${ind.audience}`}
          sub="Each workflow is built around your existing phone line, calendar and software — no rip-and-replace."
        />
        <div className="mt-8">
          <PointGrid items={ind.automations} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-7 md:p-9">
            <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Illustrative example</p>
            <h2 className="h-display mt-3 text-[26px] leading-[1.25] text-fg">{ind.exampleMath.title}</h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-muted">{ind.exampleMath.body}</p>
            <Button href={calc.href} className="mt-7">
              Run Your Own Numbers
            </Button>
          </div>
          <div className="rounded-[22px] border border-line bg-white p-7 md:p-9">
            <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Integrations</p>
            <h2 className="h-display mt-3 text-[26px] leading-[1.25] text-fg">Works with the tools you already use</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {ind.tools.map((t) => (
                <li key={t} className="rounded-full border border-line bg-[#fafafa] px-4 py-2 text-[15px] text-fg-2">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-[1.6] text-muted-2">
              Don&apos;t see your software? Most tools with an API, email or calendar integration can be connected.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Services" title={`Recommended services for ${ind.audience}`} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.shortName} body={s.summary} icon={<ServiceIcon name={s.icon} />} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px] rounded-[24px] border border-line bg-white p-8 md:p-10">
          <p className="font-mono text-xs tracking-[0.14em] text-orange uppercase">Websites & local SEO</p>
          <h2 className="h-display mt-3 text-[28px] leading-[1.2] text-fg">Web design and local SEO for {ind.audience}</h2>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-fg-2">
            Every Metron plan includes a custom-designed, mobile-friendly website with hosting, built so nearby customers
            can find {ind.audience} on Google and call, request a quote or book in one tap. Plans start at{" "}
            {usd(launch.setup)} setup + {usd(launch.monthly)}/month. The Growth plan ({usd(growth.setup)} + {usd(growth.monthly)}/month) adds
            full SEO, Google Business Profile optimization and local SEO. The AI receptionist, missed-call text-back and lead
            follow-up are included in the Scale plan.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15.5px] font-medium">
            <Link href="/services/website-refresh" className="text-orange hover:underline">Small business web design →</Link>
            <Link href="/pricing" className="text-orange hover:underline">Compare plans →</Link>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px]">
          <FaqBlock faqs={ind.faqs} title={`AI for ${ind.audience}: FAQs`} />
        </div>
      </Section>

      {posts.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="Playbooks" title="Related guides" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} body={p.description} meta={p.category} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <SectionTitle kicker="Locations" title={`Where we help ${ind.audience}`} />
        <div className="mt-8 flex flex-wrap gap-3">
          {cities.map((l) => (
            <a
              key={l.slug}
              href={`/locations/${l.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-[15px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange"
            >
              {l.city}
            </a>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Other industries" title="We also help" />
        <div className="mt-8 flex flex-wrap gap-3">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/industries/${o.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-[15px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange"
            >
              {o.audience}
            </a>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand title={`Ready to put AI to work for your ${ind.name.toLowerCase()} business?`} />
      </Section>
    </>
  );
}
