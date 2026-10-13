import Link from "next/link";
import { notFound } from "next/navigation";
import { GLOSSARY } from "@/content/glossary";
import { getAllPosts } from "@/lib/blog";
import { AnswerBox, CtaBand, FaqBlock, LinkCard, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { JsonLd, definedTermSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

// Next steps for terms that earn search impressions: the matching service, tool or guide.
const TERM_NEXT_STEPS: Record<string, { href: string; label: string }[]> = {
  "missed-call-text-back": [
    { href: "/tools/missed-call-revenue-calculator", label: "Missed-call revenue calculator" },
    { href: "/services/ai-receptionist", label: "AI receptionist & missed-call text-back service" },
  ],
  "speed-to-lead": [
    { href: "/services/lead-follow-up", label: "AI lead follow-up service" },
    { href: "/blog/speed-to-lead-response-time", label: "Speed-to-lead response time guide" },
  ],
  "ai-integration": [
    { href: "/services/ai-strategy", label: "AI strategy & integration service" },
    { href: "/blog/how-much-does-ai-automation-cost", label: "What AI automation costs" },
  ],
  "workflow-automation": [
    { href: "/services/ai-automation", label: "Workflow & back-office automation service" },
    { href: "/tools/ai-automation-roi-calculator", label: "AI automation ROI calculator" },
  ],
  rpa: [{ href: "/services/ai-automation", label: "Workflow & back-office automation service" }],
  "api-integration": [{ href: "/services/custom-ai-software", label: "Custom AI software & integrations" }],
  "field-service-management": [
    { href: "/services/ai-receptionist", label: "AI receptionist that books into your schedule" },
    { href: "/blog/best-ai-tools-for-home-service-businesses", label: "Best AI tools for home service businesses" },
  ],
  "google-business-profile": [{ href: "/blog/google-business-profile-checklist", label: "Google Business Profile checklist" }],
  "entity-seo": [{ href: "/services/aeo-geo", label: "AI search optimization (AEO & GEO) service" }],
};

export function generateStaticParams() {
  return GLOSSARY.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/glossary/[slug]">) {
  const { slug } = await params;
  const t = GLOSSARY.find((x) => x.slug === slug);
  if (!t) return {};
  return pageMetadata({
    title: t.guide?.seoTitle ?? `What Is ${t.term}? Definition & Examples`,
    description:
      t.guide?.seoDescription ??
      (t.short.length > 150 ? t.short : `${t.short} Learn what it means and why it matters for small businesses.`.slice(0, 160)),
    path: `/glossary/${t.slug}`,
    kicker: "Glossary",
  });
}

export default async function TermPage({ params }: PageProps<"/glossary/[slug]">) {
  const { slug } = await params;
  const t = GLOSSARY.find((x) => x.slug === slug);
  if (!t) notFound();

  const related = GLOSSARY.filter((x) => t.related.includes(x.slug));
  // surface blog posts that link to this term
  const posts = getAllPosts()
    .filter((p) => p.html.includes(`/glossary/${t.slug}"`))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={definedTermSchema({ term: t.term, description: t.short, path: `/glossary/${t.slug}` })} />
      <PageHeader
        crumbs={[
          { name: "Glossary", path: "/glossary" },
          { name: t.term, path: `/glossary/${t.slug}` },
        ]}
        kicker="Definition"
        title={`What is ${t.term}?`}
      />

      <Section>
        <div className="mx-auto max-w-[780px]">
          <AnswerBox label="Definition">{t.short}</AnswerBox>
          <div className="prose-article mt-10">
            {t.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {t.guide?.sections.map((sec) => (
              <div key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {sec.bullets && (
                  <ul>
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {t.guide?.table && (
              <>
                <h2>{t.guide.table.caption}</h2>
                <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {t.guide.table.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.guide.table.rows.map((r) => (
                      <tr key={r[0]}>
                        {r.map((c, i) => (
                          <td key={i}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </>
            )}
          </div>

          {t.guide?.faqs && t.guide.faqs.length > 0 && (
            <div className="mt-12">
              <FaqBlock faqs={t.guide.faqs} title={`${t.term}: FAQs`} />
            </div>
          )}

          {TERM_NEXT_STEPS[t.slug] && (
            <div className="mt-12">
              <p className="h-display text-lg text-fg">Put it to work</p>
              <ul className="mt-4 space-y-2">
                {TERM_NEXT_STEPS[t.slug].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15.5px] font-medium text-orange hover:underline">
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-12">
              <p className="h-display text-lg text-fg">Related terms</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {related.map((r) => (
                  <Link key={r.slug} href={`/glossary/${r.slug}`} className="rounded-full border border-line bg-white px-4 py-1.5 text-[14.5px] text-fg-2 hover:border-orange/40 hover:text-orange">
                    {r.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {posts.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="Go deeper" title={`Guides about ${t.term}`} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} body={p.description} meta={p.category} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
