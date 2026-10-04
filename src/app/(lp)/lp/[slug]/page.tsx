import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import { CheckCircle } from "@/components/icons";
import { FaqBlock } from "@/components/page/blocks";
import { LANDING_PAGES, LP_STEPS, LP_TRUST } from "@/content/landing-pages";
import { INDUSTRIES } from "@/content/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lp/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lp = LANDING_PAGES.find((p) => p.slug === slug);
  if (!lp) return {};
  return {
    title: { absolute: lp.metaTitle },
    description: lp.metaDescription,
    // Paid landing pages stay out of organic results so they don't compete with the main site.
    robots: { index: false, follow: true },
    alternates: { canonical: `/lp/${lp.slug}` },
  };
}

function FormCard({ lp, id }: { lp: (typeof LANDING_PAGES)[number]; id?: string }) {
  return (
    <div id={id} className="scroll-mt-6 rounded-[24px] border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)] md:p-7">
      <p className="h-display text-[24px] leading-[1.2] text-fg">Get your free AI audit</p>
      <p className="mt-1.5 text-[15px] text-muted">See exactly what AI can save your business. Takes 30 seconds.</p>
      <div className="mt-5">
        <LeadForm variant="compact" source={`lp-${lp.slug}`} cta={lp.formCta} defaultInterest={lp.interest} />
      </div>
    </div>
  );
}

export default async function LandingPage({ params }: PageProps<"/lp/[slug]">) {
  const { slug } = await params;
  const lp = LANDING_PAGES.find((p) => p.slug === slug);
  if (!lp) notFound();

  const industries = INDUSTRIES.slice(0, 24).map((i) => i.name);

  return (
    <>
      {/* HERO — headline + form above the fold */}
      <section className="relative overflow-hidden bg-bg-soft pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_30%_30%,#000_10%,transparent_80%)]" />
        <div className="pointer-events-none absolute top-20 left-[10%] h-[360px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(255,177,104,0.3),transparent)]" />
        <div className="relative mx-auto grid max-w-[1260px] items-start gap-10 px-4 lg:grid-cols-[1fr_440px] lg:gap-14">
          <div className="pt-4 lg:pt-12">
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-[6px] text-sm text-fg-2">
              <span className="size-2 rounded-full bg-[#16a34a]" />
              {lp.eyebrow}
            </span>
            <h1 className="animate-rise h-display mt-6 text-[40px] leading-[1.12] text-fg [animation-delay:80ms] sm:text-[52px] lg:text-[62px]">
              {lp.headline} <span className="text-orange">{lp.accent}</span>
            </h1>
            <p className="animate-rise mt-6 max-w-[580px] text-lg leading-[1.6] text-muted [animation-delay:160ms] md:text-[19px]">{lp.sub}</p>
            <ul className="animate-rise mt-8 space-y-3 [animation-delay:240ms]">
              {lp.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16.5px] text-fg-2">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-orange" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-rise [animation-delay:200ms]">
            <FormCard lp={lp} id="get-started" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-line bg-white">
        <ul className="mx-auto grid max-w-[1260px] grid-cols-2 gap-x-6 gap-y-3 px-4 py-6 md:grid-cols-4">
          {LP_TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5 text-[14.5px] text-fg-2">
              <CheckCircle className="size-[18px] shrink-0 text-orange" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1260px] px-4">
          <p className="text-center font-mono text-xs tracking-[0.12em] text-orange uppercase">What we automate</p>
          <h2 className="h-display mx-auto mt-3 max-w-[760px] text-center text-[32px] leading-[1.2] text-fg md:text-[44px]">
            Everything that slows your team down
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lp.automate.map((a, i) => (
              <div key={a.title} className="rounded-[20px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6">
                <span className="font-mono text-sm text-orange">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-display mt-2 text-[21px] text-fg">{a.title}</h3>
                <p className="mt-2 text-[15.5px] leading-[1.6] text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#111] py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1260px] px-4">
          <h2 className="h-display text-center text-[32px] leading-[1.2] md:text-[44px]">
            How it works
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {LP_STEPS.map((s, i) => (
              <div key={s.title} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6">
                <span className="grid size-10 place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] font-mono text-sm">
                  {i + 1}
                </span>
                <h3 className="h-display mt-4 text-[22px]">{s.title}</h3>
                <p className="mt-2 text-[15.5px] leading-[1.6] text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#get-started" className="btn-orange inline-flex h-[56px] items-center rounded-[10px] px-8 text-[17px] font-medium">
              {lp.formCta}
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1060px] px-4 text-center">
          <h2 className="h-display text-[28px] leading-[1.25] text-fg md:text-[36px]">Built for small & medium businesses</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {industries.map((n) => (
              <li key={n} className="rounded-full border border-line bg-white px-4 py-1.5 text-[14.5px] text-fg-2">
                {n}
              </li>
            ))}
            <li className="rounded-full border border-orange/30 bg-[#fff4ea] px-4 py-1.5 text-[14.5px] text-orange">+ many more</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[860px] px-4">
          <FaqBlock faqs={lp.objections} title="Questions owners ask us" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 lg:grid-cols-[1fr_440px]">
          <div>
            <h2 className="h-display text-[34px] leading-[1.15] text-fg md:text-[48px]">
              Find out what AI can <span className="text-orange">save your business.</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-lg leading-[1.6] text-muted">
              In 30 minutes you&apos;ll know which workflows to automate first, what it costs, and how much time and money it frees up. No obligation.
            </p>
          </div>
          <FormCard lp={lp} />
        </div>
      </section>
    </>
  );
}
