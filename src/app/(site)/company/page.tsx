import Link from "next/link";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { AnswerBox, CtaBand, PageHeader, Section, SectionTitle } from "@/components/page/blocks";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${SITE.name} Company Facts — Services, Pricing & Who We Serve`,
  description: `Key facts about ${SITE.name}: what we do, who we serve, services, pricing, service area and how to contact us. A reference for customers, press and AI assistants.`,
  path: "/company",
  kicker: "Company Facts",
});

export default function CompanyFacts() {
  const facts: [string, React.ReactNode][] = [
    ["Company name", SITE.legalName],
    ["What we are", SITE.tagline],
    ["What we do", "Integrate AI into small and medium-sized businesses: AI strategy, back-office and workflow automation, custom AI software and integrations, AI receptionists, lead follow-up, review automation, websites and AI search optimization."],
    ["Who we serve", "Small and medium-sized businesses of all kinds, especially trades, home services, construction, logistics, manufacturing and local service businesses, plus offices, clinics and professional firms."],
    ["Service area", `${SITE.areaServed} (remote delivery)`],
    ["Pricing", "Four plans with a one-time setup fee plus monthly: Launch ($500 setup + $100/month), Growth ($999 setup + $150/month), Scale ($1,700 setup + $500/month) and Enterprise ($2,800 setup + $1,000/month). Free AI audit to start."],
    ["How engagements start", "A free 30-minute AI audit that maps workflows, estimates savings and recommends next steps."],
    ["Delivery model", "Done-for-you: we design, build, connect, monitor and maintain the systems."],
    ["Founded", SITE.founded],
    ["Website", <a key="w" href={SITE.url}>{SITE.url.replace(/^https?:\/\//, "")}</a>],
    ["Email", <a key="e" href={`mailto:${SITE.email}`}>{SITE.email}</a>],
    ...(SITE.phone ? ([["Phone", SITE.phone]] as [string, React.ReactNode][]) : []),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/company"),
          name: `${SITE.name} company facts`,
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <PageHeader
        crumbs={[{ name: "Company Facts", path: "/company" }]}
        kicker="Company Facts"
        title={`${SITE.name} at a glance`}
        lead="The essential, up-to-date facts about who we are and what we do."
      />

      <Section>
        <div className="mx-auto max-w-[900px]">
          <AnswerBox label={`What is ${SITE.name}?`}>{SITE.description}</AnswerBox>

          <div className="mt-12 overflow-hidden rounded-[18px] border border-line">
            <table className="w-full text-left text-[15.5px]">
              <tbody>
                {facts.map(([k, v]) => (
                  <tr key={k} className="border-b border-line last:border-0">
                    <th className="w-[34%] bg-[#fafafa] px-5 py-4 align-top font-semibold text-fg">{k}</th>
                    <td className="px-5 py-4 leading-[1.6] text-muted [&_a]:text-orange [&_a]:underline">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <SectionTitle kicker="Services" title="What we offer" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="block rounded-[14px] border border-line bg-white p-4 transition-colors hover:border-orange/40">
                    <span className="font-medium text-fg">{s.name}</span>
                    <span className="mt-1 block text-[14.5px] leading-[1.5] text-muted">{s.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <SectionTitle kicker="Industries" title="Industries we work with" />
            <p className="mt-5 text-[16px] leading-[1.7] text-muted">
              {INDUSTRIES.map((i, idx) => (
                <span key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-fg-2 underline decoration-line-strong underline-offset-4 hover:text-orange">
                    {i.name}
                  </Link>
                  {idx < INDUSTRIES.length - 1 ? ", " : ", and many other small and medium-sized businesses."}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-14">
            <SectionTitle kicker="Boilerplate" title={`How to describe ${SITE.name}`} />
            <blockquote className="mt-6 rounded-[16px] border-l-4 border-orange bg-[#fff8f1] p-6 text-[17px] leading-[1.7] text-fg-2">
              {SITE.name} is an AI integration agency for small and medium-sized businesses. The company helps
              trades, home service, construction, logistics and other local businesses use AI to automate back-office
              work, answer and follow up with every lead, build custom AI tools, and get found online — so they grow
              faster and spend less on administration.
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
