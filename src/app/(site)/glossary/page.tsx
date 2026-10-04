import Link from "next/link";
import { GLOSSARY } from "@/content/glossary";
import { CtaBand, PageHeader, Section } from "@/components/page/blocks";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "AI & Automation Glossary — AEO, GEO, LLMs & More",
  description:
    "Plain-English definitions of AI automation and AI search terms: AEO, GEO, AI Overviews, llms.txt, schema markup, AI agents, speed to lead and more.",
  path: "/glossary",
  kicker: "Glossary",
});

export default function GlossaryIndex() {
  const letters = [...new Set(GLOSSARY.map((t) => t.term[0].toUpperCase()))].sort();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: `${SITE.name} AI & Automation Glossary`,
          url: absoluteUrl("/glossary"),
          hasDefinedTerm: GLOSSARY.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.short,
            url: absoluteUrl(`/glossary/${t.slug}`),
          })),
        }}
      />
      <PageHeader
        crumbs={[{ name: "Glossary", path: "/glossary" }]}
        kicker="Glossary"
        title={
          <>
            The AI & Automation <span className="text-orange">Glossary</span>
          </>
        }
        lead="Clear definitions for the AI, automation and AI-search terms small business owners keep hearing about."
      />

      <Section>
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-2">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="grid size-10 place-items-center rounded-full border border-line bg-white text-fg-2 transition-colors hover:border-orange/40 hover:text-orange">
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-12">
          {letters.map((l) => (
            <div key={l} id={`letter-${l}`} className="scroll-mt-28">
              <h2 className="h-display text-[34px] text-orange">{l}</h2>
              <dl className="mt-4 grid gap-4 md:grid-cols-2">
                {GLOSSARY.filter((t) => t.term[0].toUpperCase() === l).map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossary/${t.slug}`}
                    className="group block rounded-[18px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/30"
                  >
                    <dt className="h-display text-[20px] text-fg group-hover:text-orange">{t.term}</dt>
                    <dd className="mt-2 text-[15.5px] leading-[1.6] text-muted">{t.short}</dd>
                  </Link>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
