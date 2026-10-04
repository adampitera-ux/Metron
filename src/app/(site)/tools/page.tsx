import Link from "next/link";
import { TOOLS } from "@/content/tools";
import { CtaBand, PageHeader, Section } from "@/components/page/blocks";
import { ArrowUpRight } from "@/components/icons";
import { JsonLd, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free AI Tools for Small Businesses",
  description:
    "Free tools to check your website's AI search readiness, estimate revenue lost to missed calls, and calculate the ROI of AI automation for your business.",
  path: "/tools",
  kicker: "Free Tools",
});

const ICONS: Record<string, string> = {
  "ai-search-readiness-checker": "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-3.5-3.5M8 11l2 2 4-4",
  "missed-call-revenue-calculator": "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2ZM15 3l6 6M21 3l-6 6",
  "ai-automation-roi-calculator": "M4 20V10M10 20V4M16 20v-7M22 20H2",
};

export default function ToolsIndex() {
  return (
    <>
      <JsonLd data={itemListSchema("Free tools", TOOLS.map((t) => ({ name: t.name, path: `/tools/${t.slug}` })))} />
      <PageHeader
        crumbs={[{ name: "Free Tools", path: "/tools" }]}
        kicker="Free Tools"
        title={
          <>
            Free Tools To Find Your <span className="text-orange">AI Opportunities</span>
          </>
        }
        lead="No sign-up. Check how ready your website is for AI search, and put real numbers on missed calls and manual admin work."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-[radial-gradient(80%_60%_at_100%_0%,#fff1e3_0%,#ffffff_60%)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-26px_rgba(232,120,17,0.55)]"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white shadow-[0_10px_24px_-10px_rgba(228,111,3,0.7)]">
                <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICONS[t.slug]} />
                </svg>
              </span>
              <h2 className="h-display mt-6 text-[26px] leading-[1.2] text-fg">{t.name}</h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-muted">{t.tagline}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[15px] font-medium text-orange">
                Use free tool
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
