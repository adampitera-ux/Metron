"use client";

import { motion } from "motion/react";
import { Star } from "./icons";
import { Container, Reveal, SectionHeader } from "./ui";

const REVIEWS = [
  {
    logo: { src: "/images/logos/creativedge.svg", w: 117, h: 24 },
    quote:
      '"The creativity and AI expertise from Metron set a new benchmark for our industry. Highly recommended!"',
    name: "Agus Blimbing",
    role: "Tech Manager",
  },
  {
    logo: { src: "/images/logos/brightnest.svg", w: 107, h: 25 },
    quote:
      '"Metron’s revolutionary AI approach and creative solutions elevated our project. Stellar performance!"',
    name: "Steve Kebalen",
    role: "AI Developer",
  },
  {
    logo: { src: "/images/logos/primecore.svg", w: 108, h: 23 },
    quote:
      '"The blend of AI and creativity at Metron transformed our vision into reality. Exceptional support!"',
    name: "John Kepanjen",
    role: "E-Commerce Stacks",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-[120px] pb-[60px]">
      <Container>
        <SectionHeader badge="What Our Clients Say" title="Trusted by Businesses Like Yours" />

        {/* Featured testimonial */}
        <div className="mx-auto mt-[60px] grid max-w-[1024px] items-center gap-10 md:grid-cols-[402px_1fr] md:gap-[46px]">
          <Reveal y={30}>
            <div className="relative flex aspect-[402/427] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-[radial-gradient(90%_70%_at_0%_0%,#fff3e8_0%,#f6f6f6_60%)] p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]">
              <svg viewBox="0 0 48 36" aria-hidden className="w-14 text-orange/80">
                <path fill="currentColor" d="M0 36V21.6C0 9.7 6.3 2.5 18.9 0l2 4.4C14.3 6.4 11 10.3 10.6 16H20v20H0Zm27 0V21.6C27 9.7 33.3 2.5 45.9 0l2 4.4C41.3 6.4 38 10.3 37.6 16H47v20H27Z" />
              </svg>
              <div>
                <div className="flex gap-1 text-[#f5862a]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-5" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logos/zapfast-color.svg" alt="Zapfast" width={124} height={35} className="-ml-1 h-[35px] w-auto" />
            </Reveal>
            <Reveal delay={0.18}>
              <blockquote className="h-display mt-6 text-[26px] leading-[1.45] text-fg-2 md:text-[32px]">
                &quot;Metron&apos;s fusion of AI and innovation set our project apart. Their solutions are second to none.&quot;
              </blockquote>
            </Reveal>
            <Reveal delay={0.26} className="mt-[42px] flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="h-display text-[26px] leading-[1.25] text-fg-2">Zidane Muharto</span>
              <span className="text-lg text-muted">Chief Technology Officer</span>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-line-strong to-transparent" />
              <div className="mt-[34px] flex flex-wrap gap-x-14 gap-y-6">
                {[
                  { k: "73%", v: ["Sales increase in", "first month."] },
                  { k: "5X", v: ["Faster customer", "resolutions."] },
                ].map((s) => (
                  <div key={s.k} className="flex items-center gap-5">
                    <span className="h-display text-[30px] leading-[1.25] text-fg">{s.k}</span>
                    <span className="text-base leading-[1.5] text-muted">
                      {s.v[0]}
                      <br />
                      {s.v[1]}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Review columns */}
        <div className="mt-[100px] grid gap-12 md:grid-cols-3 md:gap-0">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={0.12 * i}
              y={30}
              className={`relative flex flex-col items-center px-8 text-center ${
                i > 0 ? "md:before:absolute md:before:top-[60px] md:before:bottom-[60px] md:before:left-0 md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-line-strong md:before:to-transparent" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.logo.src} alt="" width={r.logo.w} height={r.logo.h} className="h-6 w-auto" />
              <div className="mt-[22px] flex gap-[5px] text-[#f5862a]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.3 + i * 0.12 + s * 0.06 }}
                  >
                    <Star className="size-5" />
                  </motion.span>
                ))}
              </div>
              <p className="mt-4 max-w-[330px] text-lg leading-[1.6] text-muted">{r.quote}</p>
              <span className="h-display mt-[60px] text-[21px] leading-[1.25] text-fg">{r.name}</span>
              <span className="mt-1.5 text-base text-muted-2">{r.role}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
