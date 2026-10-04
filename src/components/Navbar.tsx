"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { RollText } from "./ui";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 top-[21px] z-50 flex justify-center px-4"
    >
      <nav className="relative w-full max-w-[852px] rounded-[40px] border border-line bg-white/80 px-6 py-[13px] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl md:px-[46px]">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Automatix home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Automatix" width={101} height={30} />
          </Link>

          <ul className="hidden items-center gap-[18px] md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group block text-base transition-colors hover:text-fg ${
                    pathname.startsWith(l.href) ? "text-fg" : "text-muted"
                  }`}
                >
                  <RollText>{l.label}</RollText>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-[7px] bg-[#f1f1f1] px-[21px] py-2 text-base text-fg-2 shadow-[inset_0_0_0_1px_var(--line)] md:inline-flex"
          >
            {/* orange glow in the bottom-right corner */}
            <span className="pointer-events-none absolute -right-3 -bottom-4 size-10 rounded-full bg-orange/50 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <RollText>Let&apos;s Talk</RollText>
            <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-full text-fg md:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 pt-4 pb-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link href={l.href} onClick={close} className="block rounded-lg px-2 py-2 text-lg text-fg-2">
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    onClick={close}
                    className="btn-orange flex items-center justify-center gap-2 rounded-[7px] py-3"
                  >
                    Let&apos;s Talk <ArrowUpRight className="size-4" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
