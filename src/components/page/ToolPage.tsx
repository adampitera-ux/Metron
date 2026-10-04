import type { ReactNode } from "react";
import { TOOLS } from "@/content/tools";
import { JsonLd, webAppSchema } from "@/lib/seo";
import { AnswerBox, CtaBand, FaqBlock, LinkCard, PageHeader, PointGrid, Section, SectionTitle } from "./blocks";

/** Shared shell for every free tool page: header, widget, explainer, FAQ. */
export default function ToolPage({ slug, children }: { slug: string; children: ReactNode }) {
  const tool = TOOLS.find((t) => t.slug === slug)!;
  const others = TOOLS.filter((t) => t.slug !== slug);
  const path = `/tools/${slug}`;

  return (
    <>
      <JsonLd data={webAppSchema({ name: tool.name, description: tool.metaDescription, path })} />
      <PageHeader
        crumbs={[
          { name: "Free Tools", path: "/tools" },
          { name: tool.name, path },
        ]}
        kicker="Free Tool"
        title={tool.name}
        lead={tool.tagline}
      />

      <Section className="-mt-10 md:-mt-14">
        <div className="relative">{children}</div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px]">
          <AnswerBox label="How it works">{tool.answer}</AnswerBox>
        </div>
        <div className="mt-10">
          <PointGrid items={tool.how} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-[900px]">
          <FaqBlock faqs={tool.faqs} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="More free tools" title="Try another tool" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {others.map((t) => (
            <LinkCard key={t.slug} href={`/tools/${t.slug}`} title={t.name} body={t.tagline} meta="Free" />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
