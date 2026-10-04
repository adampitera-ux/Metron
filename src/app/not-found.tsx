import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
    <Navbar />
    <main>
    <section className="px-0 md:px-5">
      <div className="relative overflow-hidden bg-bg-soft pt-[180px] pb-28 text-center">
        <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_30%,#000_10%,transparent_80%)]" />
        <div className="relative mx-auto max-w-[640px] px-4">
          <p className="animate-rise h-display text-[110px] leading-none text-orange">404</p>
          <h1 className="animate-rise h-display mt-4 text-[40px] leading-[1.2] text-fg [animation-delay:100ms]">This page took the day off</h1>
          <p className="animate-rise mt-4 text-lg text-muted [animation-delay:180ms]">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3 [animation-delay:260ms]">
            <Button href="/" variant="orange">
              Back Home
            </Button>
            <Button href="/services">Our Services</Button>
          </div>
          <p className="mt-8 text-[15px] text-muted-2">
            Or read the <Link href="/blog" className="text-orange underline">blog</Link> · try a{" "}
            <Link href="/tools" className="text-orange underline">free tool</Link>
          </p>
        </div>
      </div>
    </section>
    </main>
    <Footer />
    </>
  );
}
