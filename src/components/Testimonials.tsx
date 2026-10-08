"use client";

import Image from "next/image";
import { CheckCircle } from "./icons";
import { Container, Reveal, SectionHeader } from "./ui";

/*
 * "Why owners choose Metron" — honest commitments instead of placeholder reviews.
 * When real client reviews come in, they can be added here (name, business, quote).
 */

const PROMISES = [
  {
    title: "Done for you, start to finish",
    body: "We design, build, connect and run everything. No new software for your team to learn and nothing for you to configure.",
  },
  {
    title: "Clear, flat pricing",
    body: "Four plans with a one-time setup fee and a flat monthly rate, published on our pricing page. No surprise invoices.",
  },
  {
    title: "Real people, real support",
    body: "Talk to a real person when you need to. We monitor your systems, fix issues and keep improving them every month.",
  },
];

const FACTS = [
  { k: "24/7", v: ["Calls and leads", "answered"] },
  { k: "$500", v: ["Plans start at", "one-time setup"] },
  { k: "Free", v: ["AI audit before", "you commit"] },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-[120px] pb-[60px]">
      <Container>
        <SectionHeader badge="Why Metron" title="Why Owners Choose Metron" />

        {/* Featured */}
        <div className="mx-auto mt-[60px] grid max-w-[1024px] items-center gap-10 md:grid-cols-[402px_1fr] md:gap-[46px]">
          <Reveal y={30}>
            <div className="relative aspect-[402/427] overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/ethan.jpg"
                alt="Ethan Harris, Metron"
                fill
                sizes="(min-width: 768px) 402px, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Our promise</p>
            </Reveal>
            <Reveal delay={0.18}>
              <blockquote className="h-display mt-5 text-[26px] leading-[1.45] text-fg-2 md:text-[32px]">
                &quot;We build it, run it and keep it working, so you can get back to running your business.&quot;
              </blockquote>
            </Reveal>
            <Reveal delay={0.26} className="mt-[34px] flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="h-display text-[26px] leading-[1.25] text-fg-2">Ethan Harris</span>
              <span className="text-lg text-muted">Sales, Metron</span>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-line-strong to-transparent" />
              <div className="mt-[34px] flex flex-wrap gap-x-12 gap-y-6">
                {FACTS.map((s) => (
                  <div key={s.k} className="flex items-center gap-4">
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

        {/* Promise columns */}
        <div className="mt-[100px] grid gap-12 md:grid-cols-3 md:gap-0">
          {PROMISES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={0.12 * i}
              y={30}
              className={`relative flex flex-col items-center px-8 text-center ${
                i > 0 ? "md:before:absolute md:before:top-[20px] md:before:bottom-[20px] md:before:left-0 md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-line-strong md:before:to-transparent" : ""
              }`}
            >
              <span className="grid size-12 place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white shadow-[0_8px_20px_-8px_rgba(228,111,3,0.6)]">
                <CheckCircle className="size-6" />
              </span>
              <h3 className="h-display mt-5 text-[21px] leading-[1.25] text-fg">{p.title}</h3>
              <p className="mt-3 max-w-[330px] text-lg leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
