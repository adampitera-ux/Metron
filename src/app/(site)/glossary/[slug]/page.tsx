import Link from "next/link";
import { notFound } from "next/navigation";
import { GLOSSARY } from "@/content/glossary";
import { getAllPosts } from "@/lib/blog";
import { AnswerBox, CtaBand, LinkCard, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { JsonLd, definedTermSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOSSARY.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/glossary/[slug]">) {
  const { slug } = await params;
  const t = GLOSSARY.find((x) => x.slug === slug);
  if (!t) return {};
  return pageMetadata({
    title: `What Is ${t.term}? Definition & Examples`,
    description: t.short.length > 150 ? t.short : `${t.short} Learn what it means and why it matters for small businesses.`.slice(0, 160),
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
          </div>

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
