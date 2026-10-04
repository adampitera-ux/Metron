import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";
import { CATEGORIES } from "@/content/categories";
import { CtaBand, PageHeader, Section } from "@/components/page/blocks";
import { ArrowUpRight } from "@/components/icons";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog — How Small Businesses Grow and Save Money With AI",
  description:
    "Practical guides on using AI in small and medium businesses: back-office automation, custom AI tools, sales and service, industry playbooks, costs and ROI.",
  path: "/blog",
  kicker: "Blog",
});


export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={itemListSchema(
          "Automatix blog",
          posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Blog", path: "/blog" }]}
        kicker="Resources"
        title={
          <>
            Guides To Grow With <span className="text-orange">AI</span>
          </>
        }
        lead="Plain-English playbooks for owners and operators: automate the back office, build smarter tools, win more customers and save money with AI."
      />

      <Section>
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[26px] border border-line bg-[radial-gradient(60%_80%_at_100%_0%,#fff1e3_0%,#ffffff_55%)] p-8 transition-shadow duration-300 hover:shadow-[0_24px_60px_-30px_rgba(232,120,17,0.5)] md:p-12"
          >
            <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Latest · {featured.category}</p>
            <h2 className="h-display mt-4 max-w-[820px] text-[30px] leading-[1.2] text-fg md:text-[42px]">{featured.title}</h2>
            <p className="mt-4 max-w-[720px] text-lg leading-[1.6] text-muted">{featured.tldr}</p>
            <p className="mt-6 flex items-center gap-2 text-[15px] text-muted-2">
              {formatDate(featured.date)} · {featured.readingMinutes} min read
              <ArrowUpRight className="size-4 text-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </Link>
        )}

        <nav aria-label="Blog categories" className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.filter((c) => posts.some((p) => p.category === c.name)).map((c) => (
            <Link
              key={c.slug}
              href={`/blog/category/${c.slug}`}
              className="rounded-full border border-line bg-white px-4 py-2 text-[14.5px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange"
            >
              {c.name} <span className="text-muted-3">· {posts.filter((p) => p.category === c.name).length}</span>
            </Link>
          ))}
        </nav>

        {CATEGORIES.map((cat) => {
          const list = rest.filter((p) => p.category === cat.name);
          if (!list.length) return null;
          return (
            <div key={cat.slug} className="mt-16">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="h-display text-[28px] text-fg">{cat.name}</h2>
                  <p className="mt-1.5 max-w-[640px] text-[15.5px] text-muted">{cat.description}</p>
                </div>
                <Link href={`/blog/category/${cat.slug}`} className="inline-flex items-center gap-1.5 text-[15px] font-medium text-orange">
                  View all <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {list.slice(0, 6).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-[20px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_18px_40px_-22px_rgba(232,120,17,0.45)]"
                  >
                    <h3 className="h-display text-[21px] leading-[1.3] text-fg">{p.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-[1.6] text-muted">{p.description}</p>
                    <p className="mt-auto pt-5 text-sm text-muted-2">
                      {formatDate(p.date)} · {p.readingMinutes} min read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
