"use client";

import { motion } from "motion/react";
import { PLANS, planHref, usd } from "@/content/plans";
import { trackCheckout } from "@/lib/track";
import { CheckCircle } from "./icons";
import { Button, Container, Reveal, SectionHeader } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 pt-[120px] pb-[60px]">
      <Container>
        <SectionHeader
          badge="Simple Pricing"
          title="Plans That Grow With You"
          subtitle="One-time setup, then a flat monthly fee. Every plan includes hosting, maintenance and real support."
        />

        <div className="mx-auto mt-[80px] grid max-w-[1240px] items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => {
            const checkout = Boolean(p.stripeLink);
            return (
              <Reveal key={p.id} delay={0.08 * i} y={30} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={`relative flex h-full flex-col rounded-[22px] border p-7 ${
                    p.popular
                      ? "border-orange/40 bg-[radial-gradient(90%_45%_at_50%_0%,#fff1e4_0%,#ffffff_70%)] shadow-[0_30px_60px_-30px_rgba(232,120,17,0.45)]"
                      : "border-line bg-white shadow-[0_20px_50px_-36px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-orange px-3 py-1 text-[12px] font-semibold tracking-wide text-white uppercase">
                      Most popular
                    </span>
                  )}

                  <h3 className="h-display text-[24px] leading-tight text-fg">{p.name}</h3>
                  <p className="mt-2 text-[15px] leading-[1.55] text-muted xl:min-h-[48px]">{p.tagline}</p>

                  <div className="mt-6 border-t border-line pt-6">
                    <span className="h-display block text-[40px] leading-none font-bold text-fg">{usd(p.setup)}</span>
                    <span className="mt-1.5 block text-[13px] text-muted-2">one-time setup</span>
                    <p className="mt-3 text-[15px] leading-snug text-fg-2">
                      <span className="font-semibold text-fg">+ {usd(p.monthly)}/mo</span>
                      <span className="block text-[13px] text-muted-2">{p.monthlyLabel}</span>
                    </p>
                  </div>

                  <Button
                    href={planHref(p)}
                    variant={p.popular ? "orange" : "dark"}
                    className="mt-6 w-full"
                    onClick={checkout ? () => trackCheckout(p.id, p.setup) : undefined}
                  >
                    {checkout ? `Buy ${p.name}` : `Get ${p.name}`}
                  </Button>

                  <div className="mt-7 flex-1">
                    {p.includesPrevious && <p className="mb-3 text-[13.5px] font-semibold text-fg">{p.includesPrevious}</p>}
                    <ul className="space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-[14.5px] leading-[1.5] text-fg-2">
                          <CheckCircle className={`mt-[3px] size-4 shrink-0 ${p.popular ? "text-orange" : "text-muted-2"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-[620px] text-center text-[14.5px] leading-[1.6] text-muted-2">
          Secure checkout powered by Stripe. Not sure which plan fits?{" "}
          <a href="/contact" className="text-orange underline-offset-2 hover:underline">
            Book a free AI audit
          </a>{" "}
          and we&apos;ll recommend one.
        </p>
      </Container>
    </section>
  );
}
