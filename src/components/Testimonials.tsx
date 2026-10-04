"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
        <SectionHeader badge="What Our Users Say" title="Trusted by Businesses Like Yours" />

        {/* Featured testimonial */}
        <div className="mx-auto mt-[60px] grid max-w-[1024px] items-center gap-10 md:grid-cols-[402px_1fr] md:gap-[46px]">
          <Reveal y={30}>
            <div className="group relative aspect-[402/427] overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/testimonial.jpg"
                alt="Zidane Muharto"
                fill
                sizes="(min-width: 768px) 402px, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logos/zapfast-color.svg" alt="Zapfast" width={124} height={35} className="-ml-1 h-[35px] w-auto" />
            </Reveal>
            <Reveal delay={0.18}>
              <blockquote className="h-display mt-6 text-[26px] leading-[1.45] text-fg-2 capitalize md:text-[32px]">
                &quot;Metron&apos;s fusion of AI and innovation set our project apart. Their solutions are second to none.&quot;
              </blockquote>
            </Reveal>
            <Reveal delay={0.26} className="mt-[42px] flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="h-display text-[26px] leading-[1.25] text-fg-2 capitalize">Zidane Muharto</span>
              <span className="text-lg text-muted">Chief Techology Officer</span>
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
              <span className="h-display mt-[60px] text-[21px] leading-[1.25] text-fg capitalize">{r.name}</span>
              <span className="mt-1.5 text-base text-muted-2">{r.role}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
