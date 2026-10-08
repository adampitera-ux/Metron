import Link from "next/link";
import { SITE } from "@/lib/site";
import Logo from "@/components/Logo";

/** Distraction-free layout for paid-traffic landing pages: no site nav, one goal. */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1260px] items-center justify-between px-4 py-5">
          <Logo />
          <div className="flex items-center gap-3">
            {SITE.phone && (
              <a href={`tel:${SITE.phoneE164}`} className="hidden text-[15px] font-medium text-fg-2 hover:text-orange sm:block">
                {SITE.phone}
              </a>
            )}
            <a href="#get-started" className="btn-orange rounded-[8px] px-4 py-2 text-[14.5px] font-medium">
              Free AI Audit
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-3 px-4 text-sm text-muted-2 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
          </p>
          <nav className="flex gap-5">
            <Link href="/" className="hover:text-orange">Website</Link>
            <Link href="/privacy" className="hover:text-orange">Privacy</Link>
            <Link href="/terms" className="hover:text-orange">Terms</Link>
            <Link href="/billing" className="hover:text-orange">Billing &amp; Refunds</Link>
            <a href={`mailto:${SITE.email}`} className="hover:text-orange">{SITE.email}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
