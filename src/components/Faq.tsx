"use client";

import { motion } from "motion/react";
import { HOME_FAQS as FAQS } from "@/content/home-faqs";
import { useState } from "react";
import { ChevronDown } from "./icons";
import { Container, Reveal, SectionHeader } from "./ui";


const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="faq" className="scroll-mt-24 pt-[160px] pb-[50px]">
      <Container>
        <SectionHeader badge="Need to Know" title="Frequently Asked Questions" />

        <ul className="mx-auto mt-[60px] max-w-[782px]">
          {FAQS.map((f, i) => {
            const isOpen = open.has(i);
            return (
              <Reveal as="li" key={f.q} delay={0.08 * i} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-[25px] text-left"
                >
                  <span
                    className={`h-display text-[20px] leading-[1.25] capitalize transition-colors duration-300 md:text-[26px] ${
                      isOpen ? "text-fg" : "text-muted-2 group-hover:text-fg-2"
                    }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={`shrink-0 ${isOpen ? "text-orange" : "text-muted-2"}`}
                  >
                    <ChevronDown className="size-5" />
                  </motion.span>
                </button>
                {/* answers stay in the DOM (collapsed) so crawlers and AI engines can read them */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <p className="max-w-[720px] pb-7 text-lg leading-[1.6] text-muted">{f.a}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
