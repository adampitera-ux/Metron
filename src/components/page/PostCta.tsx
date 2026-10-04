import Link from "next/link";
import type { BlogFrontmatter } from "@/content/types";
import { ArrowUpRight } from "../icons";

type CtaKind = NonNullable<BlogFrontmatter["cta"]>;

const CTAS: Record<CtaKind, { kicker: string; title: string; body: string; label: string; href: string }> = {
  audit: {
    kicker: "Free AI audit",
    title: "Want this set up for your business?",
    body: "In a free 30-minute audit we'll map what AI can take off your plate — and exactly what it would cost and save.",
    label: "Book My Free AI Audit",
    href: "/contact",
  },
  roi: {
    kicker: "Free calculator",
    title: "How many hours could AI save your team?",
    body: "Plug in your numbers and see the hours and payroll AI automation could free up — in under a minute.",
    label: "Calculate My Savings",
    href: "/tools/ai-automation-roi-calculator",
  },
  "missed-calls": {
    kicker: "Free calculator",
    title: "What are missed calls costing you?",
    body: "Estimate the revenue walking out the door every month when calls go to voicemail.",
    label: "Run the Numbers",
    href: "/tools/missed-call-revenue-calculator",
  },
  readiness: {
    kicker: "Free tool",
    title: "Can Google and ChatGPT find your business?",
    body: "Scan your website in seconds and get a prioritized list of fixes for search and AI visibility.",
    label: "Check My Website",
    href: "/tools/ai-search-readiness-checker",
  },
};

/** CTA block injected mid-article and at the end of every blog post. */
export default function PostCta({ kind = "audit", variant = "inline" }: { kind?: CtaKind; variant?: "inline" | "end" }) {
  const c = CTAS[kind];
  if (variant === "end") {
    return (
      <div className="relative overflow-hidden rounded-[24px] bg-[#111] p-8 text-white md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_100%_0%,rgba(232,120,17,0.5),transparent_65%)]" />
        <div className="relative">
          <p className="font-mono text-xs tracking-[0.12em] text-orange-light uppercase">Free AI audit</p>
          <p className="h-display mt-3 text-[28px] leading-[1.2] md:text-[34px]">Let us find the hours AI can save you.</p>
          <p className="mt-3 max-w-[560px] text-[16.5px] leading-[1.6] text-white/70">
            We integrate AI into small and medium businesses — back office, phones, follow-up, custom tools and more. Done for you, built around the software you already use.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-orange inline-flex h-[52px] items-center gap-2 rounded-[10px] px-6 text-base font-medium">
              Book My Free AI Audit <ArrowUpRight className="size-4" />
            </Link>
            {kind !== "audit" && (
              <Link href={c.href} className="inline-flex h-[52px] items-center gap-2 rounded-[10px] border border-white/15 px-6 text-base text-white/85 hover:bg-white/10">
                {c.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <aside className="not-prose my-10 flex flex-col gap-5 rounded-[20px] border border-orange/25 bg-[linear-gradient(135deg,#fff6ec_0%,#ffffff_70%)] p-6 sm:flex-row sm:items-center">
      <div className="flex-1">
        <p className="font-mono text-[11px] tracking-[0.14em] text-orange uppercase">{c.kicker}</p>
        <p className="h-display mt-1.5 text-[21px] leading-[1.3] text-fg">{c.title}</p>
        <p className="mt-1.5 text-[15.5px] leading-[1.55] text-muted">{c.body}</p>
      </div>
      <Link href={c.href} className="btn-orange inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[10px] px-5 text-[15px] font-medium no-underline">
        {c.label} <ArrowUpRight className="size-4" />
      </Link>
    </aside>
  );
}
