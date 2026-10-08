import Link from "next/link";
import type { ReactNode } from "react";
import type { Point, QA } from "@/content/types";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { ArrowUpRight, ChevronDown } from "../icons";
import { Button } from "../ui";

/* Server-rendered building blocks shared by every inner page. */

export const Wrap = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1260px] px-4 ${className}`}>{children}</div>
);

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-2">
        <ol className="flex flex-wrap items-center justify-center gap-1.5">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-muted-3">/</span>}
              {i < all.length - 1 ? (
                <Link href={it.path} className="hover:text-orange">
                  {it.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-fg-2">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageHeader({
  crumbs,
  kicker,
  title,
  lead,
  children,
}: {
  crumbs: { name: string; path: string }[];
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="px-0 md:px-5">
      <div className="relative overflow-hidden bg-bg-soft pt-[140px] pb-16 md:pt-[150px] md:pb-20">
        <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_30%,#000_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute top-[120px] left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,177,104,0.22),transparent)]" />
        <Wrap className="relative flex flex-col items-center text-center">
          <div className="animate-rise">
            <Breadcrumbs items={crumbs} />
          </div>
          {kicker && (
            <span className="animate-rise mt-6 inline-flex items-center rounded-full border border-line bg-white px-5 py-[6px] text-sm leading-[18px] text-fg-2 [animation-delay:60ms]">
              {kicker}
            </span>
          )}
          <h1 className="animate-rise h-display mt-6 max-w-[960px] text-[38px] leading-[1.2] text-fg [animation-delay:120ms] sm:text-[50px] lg:text-[60px]">
            {title}
          </h1>
          {lead && (
            <div className="animate-rise mt-6 max-w-[720px] text-lg leading-[1.6] text-muted [animation-delay:200ms]">
              {lead}
            </div>
          )}
          {children && (
            <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3 [animation-delay:280ms]">
              {children}
            </div>
          )}
        </Wrap>
      </div>
    </section>
  );
}

/** Answer-first "Quick answer" box — the paragraph we want AI engines to quote. */
export function AnswerBox({ label = "Quick answer", children }: { label?: string; children: ReactNode }) {
  return (
    <aside className="relative overflow-hidden rounded-[20px] border border-orange/25 bg-[linear-gradient(135deg,#fff8f1_0%,#ffffff_60%)] p-6 md:p-8">
      <span className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-orange to-orange-light" />
      <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">{label}</p>
      <div className="mt-3 text-lg leading-[1.65] text-fg-2 md:text-[19px]">{children}</div>
    </aside>
  );
}

export function SectionTitle({
  kicker,
  title,
  sub,
  center = false,
}: {
  kicker?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">{kicker}</p>}
      <h2 className="h-display mt-3 text-[30px] leading-[1.25] text-fg md:text-[40px]">{title}</h2>
      {sub && <p className={`mt-4 text-lg leading-[1.6] text-muted ${center ? "mx-auto max-w-[640px]" : "max-w-[680px]"}`}>{sub}</p>}
    </div>
  );
}

export function PointGrid({ items, numbered = false, cols = 3 }: { items: Point[]; numbered?: boolean; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((p, i) => (
        <div
          key={p.title}
          className="group rounded-[20px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_-20px_rgba(0,0,0,0.25)]"
        >
          {numbered && <span className="font-mono text-sm text-orange">{String(i + 1).padStart(2, "0")}</span>}
          <h3 className={`h-display text-[21px] leading-[1.3] text-fg ${numbered ? "mt-2" : ""}`}>{p.title}</h3>
          <p className="mt-2.5 text-[16px] leading-[1.65] text-muted">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

/** FAQ using native <details> so every answer is in the HTML for crawlers. */
export function FaqBlock({
  faqs,
  title = "Frequently asked questions",
  withSchema = true,
}: {
  faqs: QA[];
  title?: string;
  withSchema?: boolean;
}) {
  return (
    <div>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      <SectionTitle kicker="FAQ" title={title} />
      <div className="mt-8 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <h3 className="h-display text-[19px] leading-[1.35] text-fg-2 transition-colors group-open:text-fg md:text-[21px]">
                {f.q}
              </h3>
              <ChevronDown className="size-5 shrink-0 text-muted-2 transition-transform duration-300 group-open:rotate-180 group-open:text-orange" />
            </summary>
            <p className="mt-3 max-w-[760px] text-[17px] leading-[1.65] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function LinkCard({
  href,
  title,
  body,
  meta,
  icon,
}: {
  href: string;
  title: string;
  body?: string;
  meta?: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-[20px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_18px_40px_-22px_rgba(232,120,17,0.45)]"
    >
      <div className="flex items-start justify-between gap-4">
        {icon ? (
          <span className="grid size-11 place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white shadow-[0_8px_20px_-8px_rgba(228,111,3,0.6)]">
            {icon}
          </span>
        ) : meta ? (
          <span className="font-mono text-xs tracking-[0.1em] text-orange uppercase">{meta}</span>
        ) : (
          <span />
        )}
        <ArrowUpRight className="size-5 text-muted-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange" />
      </div>
      <h2 className="h-display mt-5 text-[21px] leading-[1.3] text-fg">{title}</h2>
      {body && <p className="mt-2.5 text-[15.5px] leading-[1.6] text-muted">{body}</p>}
      {icon && meta && <p className="mt-auto pt-4 font-mono text-xs tracking-[0.1em] text-orange uppercase">{meta}</p>}
    </Link>
  );
}

export function CtaBand({
  title = "Get a free AI automation audit",
  body = "In 30 minutes we'll map the calls, follow-ups and admin work AI can take off your plate — and show you exactly what it would cost and save.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#111] px-6 py-14 text-center md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(232,120,17,0.45),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1.3px)] bg-[size:7px_7px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_30%,#000,transparent)]" />
      <div className="relative">
        <h2 className="h-display mx-auto max-w-[720px] text-[30px] leading-[1.2] text-white md:text-[44px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.6] text-white/70">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="orange">
            Book Free Audit
          </Button>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-[7px] border border-white/15 px-[27px] py-[15px] text-base text-white/85 transition-colors hover:bg-white/10"
          >
            Try Free Tools <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`py-14 md:py-20 ${className}`}>
    <Wrap>{children}</Wrap>
  </section>
);
