import type { Metadata } from "next";
import BookWithEthan from "@/components/BookWithEthan";
import Faq from "@/components/Faq";
import { HOME_FAQS } from "@/content/home-faqs";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";
import { JsonLd, ethanSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

const HOME_DESCRIPTION =
  "Metron builds AI receptionists, lead follow-up, websites and SEO for small businesses. Answer every call, book more jobs and cut admin. Plans from $500.";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — AI Automation Agency for Small Businesses` },
  description: HOME_DESCRIPTION,
  // Explicit absolute canonical + og:url so Google treats www as the one true home page.
  alternates: { canonical: `${SITE.url}/` },
  openGraph: { url: `${SITE.url}/`, title: `${SITE.name} — AI Automation Agency for Small Businesses`, description: HOME_DESCRIPTION },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <JsonLd data={ethanSchema()} />
      <Hero />
      <div className="pt-[100px]">
        <BookWithEthan />
      </div>
      <WhoWeHelp />
      <WhyUs />
      <Mission />
      <Works />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
    </>
  );
}
