import LeadForm from "@/components/LeadForm";
import { PageHeader, Section } from "@/components/page/blocks";
import { CheckCircle } from "@/components/icons";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact — Book a Free AI Automation Audit",
  description:
    "Book a free 30-minute AI automation audit. We'll map the calls, follow-ups and admin work AI can handle in your business and what it would cost and save.",
  path: "/contact",
  kicker: "Contact",
});

const EXPECT = [
  "A 30-minute call — no pressure, no jargon",
  "A map of the admin work, calls and follow-ups AI could take over",
  "Ideas for custom tools or integrations that fit your software",
  "Clear estimates of the time and money you could save",
  "An honest recommendation — even if that's \"not yet\"",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          name: `Contact ${SITE.name}`,
          mainEntity: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <PageHeader
        crumbs={[{ name: "Contact", path: "/contact" }]}
        kicker="Let's Talk"
        title={
          <>
            Book Your <span className="text-orange">Free AI Audit</span>
          </>
        }
        lead="Tell us a bit about your business and we'll get back to you within one business day."
      />

      <Section>
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1fr_380px]">
          <LeadForm source="contact-page" />
          <aside className="space-y-6">
            <div className="rounded-[22px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-7">
              <p className="h-display text-[22px] text-fg">What to expect</p>
              <ul className="mt-5 space-y-3.5">
                {EXPECT.map((e) => (
                  <li key={e} className="flex gap-3 text-[15.5px] leading-[1.5] text-muted">
                    <CheckCircle className="mt-0.5 size-[18px] shrink-0 text-orange" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] border border-line bg-white p-7">
              <p className="h-display text-[22px] text-fg">Prefer to talk?</p>
              {SITE.phone && (
                <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="mt-3 block text-[22px] font-medium text-orange hover:underline">
                  {SITE.phone}
                </a>
              )}
              <a href={`mailto:${SITE.email}`} className="mt-2 inline-block text-lg text-fg-2 hover:text-orange hover:underline">
                {SITE.email}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
