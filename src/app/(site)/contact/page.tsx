import LeadForm from "@/components/LeadForm";
import { PageHeader, Section } from "@/components/page/blocks";
import { CheckCircle, Mail, Phone } from "@/components/icons";
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
              <ul className="mt-5 space-y-3">
                {SITE.phone && (
                  <li>
                    <a href={`tel:${SITE.phoneE164}`} className="group flex items-center gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                        <Phone className="size-[18px]" />
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-[13px] text-muted">Call us</span>
                        <span className="text-[19px] font-medium tracking-[0.01em] text-fg group-hover:text-orange">{SITE.phone}</span>
                      </span>
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                      <Mail className="size-[18px]" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-[13px] text-muted">Email</span>
                      <span className="text-[17px] text-fg group-hover:text-orange">{SITE.email}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
