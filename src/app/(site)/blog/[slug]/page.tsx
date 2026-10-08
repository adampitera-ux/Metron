import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost, splitAtHeading } from "@/lib/blog";
import { categorySlug } from "@/content/categories";
import PostCta from "@/components/page/PostCta";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { AnswerBox, Breadcrumbs, CtaBand, FaqBlock, LinkCard, Section, SectionTitle, Wrap } from "@/components/page/blocks";
import { JsonLd, articleSchema, ogImageUrl, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/** Search results show ~60 characters: use the headline before a colon or bracket when the full title is too long. */
function seoTitle(t: string) {
  if (t.length <= 60) return t;
  const short = t.split(/:\s|\s\(|\?\s/)[0].trim();
  return short.length >= 25 ? short : t;
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMetadata({
    title: seoTitle(p.title),
    description: p.description,
    path: `/blog/${p.slug}`,
    kicker: p.category,
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated ?? p.date,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const related = all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score:
        (p.category === post.category ? 2 : 0) +
        p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.p);
  const services = SERVICES.filter((s) => post.relatedServices?.includes(s.slug));
  const industries = INDUSTRIES.filter((i) => post.relatedIndustries?.includes(i.slug));

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          date: post.date,
          updated: post.updated,
          image: ogImageUrl(post.title, post.category),
          section: post.category,
          keywords: post.tags,
          words: post.words,
          faqsAbout: post.tags,
        })}
      />

      <header className="px-0 md:px-5">
        <div className="relative overflow-hidden bg-bg-soft pt-[140px] pb-14 md:pt-[150px]">
          <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_30%,#000_10%,transparent_80%)]" />
          <Wrap className="relative flex flex-col items-center text-center">
            <div className="animate-rise">
              <Breadcrumbs
                items={[
                  { name: "Blog", path: "/blog" },
                  { name: post.category, path: `/blog/category/${categorySlug(post.category)}` },
                  { name: post.title.length > 42 ? `${post.title.slice(0, 40)}…` : post.title, path: `/blog/${post.slug}` },
                ]}
              />
            </div>
            <Link
              href={`/blog/category/${categorySlug(post.category)}`}
              className="animate-rise mt-6 inline-flex rounded-full border border-line bg-white px-4 py-[5px] text-sm text-fg-2 transition-colors hover:border-orange/40 hover:text-orange [animation-delay:60ms]"
            >
              {post.category}
            </Link>
            <h1 className="animate-rise h-display mt-5 max-w-[900px] text-[34px] leading-[1.2] text-fg [animation-delay:120ms] sm:text-[44px] lg:text-[52px]">
              {post.title}
            </h1>
            <p className="animate-rise mt-5 text-[15px] text-muted-2 [animation-delay:200ms]">
              By <Link href="/about" className="text-fg-2 hover:text-orange">{SITE.author.name}</Link> ·{" "}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  {" "}· Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}{" "}
              · {post.readingMinutes} min read
            </p>
          </Wrap>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-center lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav aria-label="Table of contents" className="sticky top-28">
              <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-line">
                {post.headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-[14.5px] leading-[1.45] text-muted transition-colors hover:border-orange hover:text-fg">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article>
            <div className="tldr">
              <AnswerBox label="TL;DR">{post.tldr}</AnswerBox>
            </div>

            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="mt-6 rounded-[20px] border border-line bg-[#fafafa] p-6">
                <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Key takeaways</p>
                <ul className="mt-3 space-y-2.5">
                  {post.keyTakeaways.map((k) => (
                    <li key={k} className="flex gap-3 text-[16.5px] leading-[1.55] text-fg-2">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-orange" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(() => {
              // Inject a contextual CTA before the 3rd H2 (roughly a third of the way in).
              const [first, rest] = splitAtHeading(post.html, 3);
              return (
                <>
                  <div className="prose-article mt-10" dangerouslySetInnerHTML={{ __html: first }} />
                  {rest && (
                    <>
                      <PostCta kind={post.cta ?? "audit"} />
                      <div className="prose-article" dangerouslySetInnerHTML={{ __html: rest }} />
                    </>
                  )}
                </>
              );
            })()}

            <div className="mt-14">
              <PostCta kind={post.cta ?? "audit"} variant="end" />
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16">
                <FaqBlock faqs={post.faqs} />
              </div>
            )}

            {(services.length > 0 || industries.length > 0) && (
              <div className="mt-14 rounded-[20px] border border-line bg-[#fafafa] p-6">
                <p className="h-display text-lg text-fg">Related</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-line bg-white px-4 py-1.5 text-[14.5px] text-fg-2 hover:border-orange/40 hover:text-orange">
                      {s.shortName}
                    </Link>
                  ))}
                  {industries.map((i) => (
                    <Link key={i.slug} href={`/industries/${i.slug}`} className="rounded-full border border-line bg-white px-4 py-1.5 text-[14.5px] text-fg-2 hover:border-orange/40 hover:text-orange">
                      AI for {i.audience}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="Keep reading" title="Related articles" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((p) => (
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
