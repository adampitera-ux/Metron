import type { Metadata } from "next";
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
import { JsonLd, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — AI Automation Agency for Small Businesses` },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
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
