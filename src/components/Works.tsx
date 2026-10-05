"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Container, Reveal, SectionHeader } from "./ui";
import Stats from "./Stats";
import WorkVisual from "./WorkVisual";

const WORKS = [
  {
    name: "Grapho AI",
    stat: "47% increase in new customers.",
    desc: "An AI receptionist that answers every call, books jobs on the spot and texts back anyone who hangs up.",
    kind: "calls" as const,
  },
  {
    name: "VectraOps",
    stat: "34% increase in online sales.",
    desc: "Instant lead follow-up that replies in under a minute and keeps every quote moving until it closes.",
    kind: "pipeline" as const,
  },
  {
    name: "Signum",
    stat: "61 admin hours saved every month.",
    desc: "Back-office automation that sends invoices, chases payments and keeps the books up to date.",
    kind: "backoffice" as const,
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Works() {
  const [active, setActive] = useState(0);
  const work = WORKS[active];

  return (
    <section id="works" className="scroll-mt-24 pt-10 pb-[60px]">
      <Container>
        <SectionHeader badge="Work We're Proud Of" title="Recent Works, Notable Impact" />

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
                                {w.desc}
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
                <div className="relative aspect-[517/303] overflow-hidden rounded-2xl border border-line">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={work.kind}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <WorkVisual kind={work.kind} />
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
