"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Container, Reveal, SectionHeader } from "./ui";
import Stats from "./Stats";

const DESCRIPTION =
  "That’s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.";

const WORKS = [
  {
    name: "Grapho AI",
    stat: "47% increase in new customers.",
    image: "/images/work-grapho.png",
    logo: { src: "/images/logos/grapho-light.svg", w: 120, h: 34 },
    chart: { src: "/images/chart-grapho.svg", w: 179, h: 227 },
  },
  {
    name: "VectraOps",
    stat: "34% increase in online sales.",
    image: "/images/work-vectra.png",
    logo: { src: "/images/logos/vectra-light.svg", w: 113, h: 35 },
    chart: { src: "/images/chart-vectra.svg", w: 187, h: 266 },
  },
  {
    name: "Signum",
    stat: "47% increase in new customers.",
    image: "/images/work-signum.png",
    logo: { src: "/images/logos/signum-light.svg", w: 134, h: 36 },
    chart: { src: "/images/chart-signum.svg", w: 189, h: 186 },
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Works() {
  const [active, setActive] = useState(0);
  const work = WORKS[active];

  return (
    <section id="works" className="scroll-mt-24 pt-10 pb-[60px]">
      <Container>
        <SectionHeader badge="Work That Make Us Proud" title="Recent Works, Notable Impact" />

        <div className="mt-[60px] grid items-center gap-10 lg:grid-cols-[583px_1fr] lg:gap-[60px]">
          {/* Project list */}
          <Reveal y={30}>
            <ul className="relative">
              {/* rail */}
              <span className="absolute top-0 bottom-0 left-0 w-px bg-line" />
              {WORKS.map((w, i) => {
                const isActive = i === active;
                return (
                  <li key={w.name} className="relative">
                    {isActive && (
                      <motion.span
                        layoutId="work-rail"
                        className="absolute top-0 bottom-0 left-0 z-10 w-[2px] bg-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`group block w-full cursor-pointer py-[34px] pr-5 pl-10 text-left transition-colors ${
                        isActive ? "" : "hover:bg-surface/60"
                      }`}
                    >
                      <div
                        className={`flex ${isActive ? "flex-col" : "flex-row flex-wrap items-baseline gap-x-[34px] gap-y-1"}`}
                      >
                        <span
                          className={`h-display text-[26px] leading-[1.25] capitalize transition-colors md:text-[30px] ${
                            isActive ? "text-fg" : "text-fg-2 group-hover:text-fg"
                          }`}
                        >
                          {w.name}
                        </span>
                        <AnimatePresence initial={false} mode="popLayout">
                          {isActive ? (
                            <motion.p
                              key="desc"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.45, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <span className="block pt-4 text-lg leading-[1.6] text-muted">
                                {DESCRIPTION}
                              </span>
                            </motion.p>
                          ) : (
                            <motion.span
                              key="stat"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-lg leading-[1.6] text-muted"
                            >
                              {w.stat}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                    {i < WORKS.length - 1 && (
                      <span className="block h-px w-full bg-gradient-to-r from-line via-line to-transparent" />
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Visual */}
          <Reveal y={30} delay={0.15}>
            <div className="card-shell rounded-[26px]">
              <div className="rounded-[25px] bg-[radial-gradient(60%_40%_at_50%_0%,#ffffff_0%,#f3f3f3_100%)] p-5 md:p-[33px]">
                <div className="relative aspect-[517/303] overflow-hidden rounded-2xl bg-[#0b0b0b]">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={work.image}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: EASE }}
                    >
                      <Image
                        src={work.image}
                        alt={`${work.name} team at work`}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover"
                        priority={active === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={work.name}
                      className="pointer-events-none absolute inset-0"
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      { }
                      <motion.img
                        src={work.logo.src}
                        alt={work.name}
                        width={work.logo.w}
                        height={work.logo.h}
                        className="absolute bottom-[7%] left-[6%] h-auto w-[26%]"
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          show: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
                        }}
                      />
                      { }
                      <motion.img
                        src={work.chart.src}
                        alt=""
                        width={work.chart.w}
                        height={work.chart.h}
                        className="absolute right-[3%] bottom-0 h-auto origin-bottom"
                        style={{ width: `${(work.chart.w / 517) * 100}%` }}
                        variants={{
                          hidden: { opacity: 0, y: 40, scaleY: 0.6 },
                          show: {
                            opacity: 1,
                            y: 0,
                            scaleY: 1,
                            transition: { type: "spring", stiffness: 140, damping: 16, delay: 0.25 },
                          },
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Stats />
      </Container>
    </section>
  );
}
