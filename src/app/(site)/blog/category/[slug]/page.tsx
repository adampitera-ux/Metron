import { notFound } from "next/navigation";
import { CATEGORIES } from "@/content/categories";
import { getAllPosts } from "@/lib/blog";
import { AnswerBox, CtaBand, LinkCard, PageHeader, Section } from "@/components/page/blocks";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  const used = new Set(getAllPosts().map((p) => p.category));
  return CATEGORIES.filter((c) => used.has(c.name)).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[slug]">) {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMetadata({ title: `${c.name} — Guides & Playbooks`, description: c.description, path: `/blog/category/${c.slug}`, kicker: "Blog" });
}

export default async function CategoryPage({ params }: PageProps<"/blog/category/[slug]">) {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  if (!c) notFound();
  const posts = getAllPosts().filter((p) => p.category === c.name);

  return (
    <>
      <JsonLd data={itemListSchema(c.name, posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })))} />
      <PageHeader
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: c.name, path: `/blog/category/${c.slug}` },
        ]}
        kicker={`${posts.length} guides`}
        title={c.name}
        lead={c.description}
      />
      <Section>
        <AnswerBox label="In short">{c.answer}</AnswerBox>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} body={p.description} meta={`${p.readingMinutes} min read`} />
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
