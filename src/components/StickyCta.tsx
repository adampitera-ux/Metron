"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "./icons";

const HIDDEN_ON = ["/contact", "/thank-you", "/welcome"];

/** Mobile bottom bar + desktop floating pill that appear after scrolling. */
export default function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 900;
      setShow(window.scrollY > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* mobile bar */}
          <motion.div
            key="m"
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
          >
            <div className="flex gap-2.5">
              {SITE.phone && (
                <a href={`tel:${SITE.phoneE164}`} className="btn-dark flex h-12 flex-1 items-center justify-center rounded-[10px] text-[15px]">
                  Call Us
                </a>
              )}
              <Link href="/contact" className="btn-orange flex h-12 flex-[2] items-center justify-center gap-1.5 rounded-[10px] text-[15px] font-medium">
                Get Free AI Audit <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>

          {/* desktop pill */}
          <motion.div
            key="d"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed right-6 bottom-6 z-50 hidden md:block"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#111] py-2 pr-2 pl-5 text-[15px] text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] transition-transform hover:-translate-y-0.5"
            >
              <span className="relative flex size-2">
                <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-[#22c55e]" />
                <span className="relative inline-flex size-2 rounded-full bg-[#22c55e]" />
              </span>
              Free AI audit — see what you could save
              <span className="btn-orange grid size-9 place-items-center rounded-full">
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </span>
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
