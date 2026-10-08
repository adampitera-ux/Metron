import Link from "next/link";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/site";
import FooterCta from "./FooterCta";

const COLUMNS = [
  {
    title: "Services",
    links: SERVICES.map((s) => ({ label: s.shortName, href: `/services/${s.slug}` })),
  },
  {
    title: "Industries",
    links: [
      ...INDUSTRIES.slice(0, 11).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
      { label: `All ${INDUSTRIES.length} industries →`, href: "/industries" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "AI Search Readiness Checker", href: "/tools/ai-search-readiness-checker" },
      { label: "Missed-Call Revenue Calculator", href: "/tools/missed-call-revenue-calculator" },
      { label: "AI Automation ROI Calculator", href: "/tools/ai-automation-roi-calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "AI Glossary", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
      { label: "Company Facts", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 pt-[60px]">
      <div className="mx-auto w-full max-w-[1260px] px-4">
        <div className="relative overflow-hidden rounded-t-[28px] border-x border-t border-line bg-bg-soft">
          <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_55%_60%_at_50%_20%,#000_15%,transparent_80%)]" />
          <div className="pointer-events-none absolute top-[60px] left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,177,104,0.22),transparent)]" />

          <FooterCta />

          <div className="mx-auto h-px w-full max-w-[440px] bg-gradient-to-r from-transparent via-line-strong to-transparent" />

          <nav
            aria-label="Footer"
            className="relative mx-auto grid max-w-[1060px] grid-cols-2 gap-x-8 gap-y-10 px-6 pt-12 pb-12 md:grid-cols-4"
          >
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="h-display text-base text-fg">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[15px] text-muted transition-colors hover:text-orange">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="relative flex flex-col items-center justify-between gap-3 border-t border-line px-6 py-6 text-sm text-muted-2 md:flex-row md:px-10">
            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p>
              {SITE.phone && (
                <>
                  <a href={`tel:${SITE.phoneE164}`} className="hover:text-orange">
                    {SITE.phone}
                  </a>
                  <span className="mx-2">·</span>
                </>
              )}
              <a href={`mailto:${SITE.email}`} className="hover:text-orange">
                {SITE.email}
              </a>
              <span className="mx-2">·</span>
              <Link href="/privacy" className="hover:text-orange">
                Privacy
              </Link>
              <span className="mx-2">·</span>
              <Link href="/terms" className="hover:text-orange">
                Terms
              </Link>
              <span className="mx-2">·</span>
              <Link href="/sitemap.xml" className="hover:text-orange">
                Sitemap
              </Link>
              <span className="mx-2">·</span>
              <Link href="/llms.txt" className="hover:text-orange">
                llms.txt
              </Link>
            </p>
          </div>
        </div>
        <div className="mx-4 h-px bg-line" />
        <div className="h-[60px]" />
      </div>
    </footer>
  );
}
