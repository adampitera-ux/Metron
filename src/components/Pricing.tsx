"use client";

import { motion } from "motion/react";
import { CheckCircle } from "./icons";
import { Button, Container, Reveal, SectionHeader } from "./ui";

const PLANS = [
  {
    name: "Standard",
    blurb: "Ideal for small businesses.",
    price: "$900",
    features: ["Website refresh", "AEO", "GEO", "Basic automations"],
    popular: false,
  },
  {
    name: "Enterprise",
    blurb: "Designed for expanding teams and advanced needs.",
    price: "$1,600",
    features: [
      "Up to 50 users",
      "Advanced Analytics",
      "Priority support",
      "Custom workflows",
      "Enhanced Security",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 pt-[120px] pb-[60px]">
      <Container>
        <SectionHeader badge="Simple Pricing" title="Transparent Pricing Plans" />

        <div className="mx-auto mt-[100px] flex max-w-[876px] flex-col items-stretch justify-center gap-8 md:flex-row">
          {PLANS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={0.12 * i}
              y={30}
              className={p.popular ? "md:w-[508px]" : "md:w-[336px]"}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`card-shell h-full rounded-[23px] ${p.popular ? "bg-[linear-gradient(180deg,rgba(232,120,17,0.45),#f2f2f2_45%)]" : ""}`}
              >
                <div className="relative h-full overflow-hidden rounded-[22px] bg-[radial-gradient(75%_33%_at_-6%_-5%,#ffffff_0%,#f5f5f5_100%)] p-8">
                  {p.popular && (
                    <div className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-orange/10 blur-3xl" />
                  )}
                  <div className="relative flex items-center gap-[10px]">
                    <h3 className="h-display text-[30px] leading-[1.25] text-fg">{p.name}</h3>
                    {p.popular && (
                      <span className="rounded-full bg-fg px-[10px] pt-[5px] pb-[7px] text-sm leading-[14px] text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="relative mt-3 text-lg leading-[1.6] text-muted">{p.blurb}</p>

                  <div className="relative mt-[22px] flex items-baseline gap-1.5">
                    <span className="h-display text-[38px] leading-[1.25] font-bold text-fg">{p.price}</span>
                    <span className="text-lg text-muted-3">/month</span>
                  </div>

                  <Button href="/contact" variant="orange" className="relative mt-[22px] w-full">
                    Get Started
                  </Button>

                  <p className="relative mt-6 text-[17px] leading-[1.4] text-muted-3">What&apos;s Included:</p>
                  <ul
                    className={`relative mt-[18px] grid gap-x-10 gap-y-3 ${p.popular ? "sm:grid-cols-[auto_auto] sm:justify-start" : ""}`}
                  >
                    {p.features.map((f, j) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.06 }}
                        className="flex items-center gap-3 text-lg leading-[1.6] text-muted"
                      >
                        <CheckCircle className="size-5 shrink-0 text-muted-2" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
