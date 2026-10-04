import { PageHeader, Section } from "@/components/page/blocks";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects information submitted through this website, including contact forms, analytics and advertising.`,
  path: "/privacy",
});

const UPDATED = "October 4, 2026";

// NOTE: Template policy — have it reviewed by a qualified attorney before launch.
export default function Privacy() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Privacy Policy", path: "/privacy" }]} title="Privacy Policy" lead={`Last updated ${UPDATED}`} />
      <Section>
        <div className="prose-article mx-auto max-w-[760px]">
          <p>
            This policy explains how {SITE.name} (&quot;we&quot;, &quot;us&quot;) collects and uses information when you visit{" "}
            {SITE.url.replace(/^https?:\/\//, "")} or contact us. We keep it short and plain.
          </p>
          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Information you give us</strong> — such as your name, business name, email, phone number, business
              type and message when you fill out a form or email us.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, device and browser type, approximate location, and how you arrived
              (for example, the search engine, ad or website that referred you, including ad click identifiers and UTM
              parameters).
            </li>
            <li>
              <strong>Website tools</strong> — when you use a free tool such as the AI Search Readiness Checker, the URL you
              enter is fetched to produce results. We don&apos;t store it.
            </li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to you, schedule your audit and provide our services.</li>
            <li>To understand which pages, ads and campaigns are useful so we can improve them.</li>
            <li>To measure advertising performance, including reporting conversions to advertising platforms such as Google Ads.</li>
            <li>To send occasional related emails, which you can opt out of at any time.</li>
          </ul>
          <p>We do not sell your personal information.</p>
          <h2>Cookies, analytics and advertising</h2>
          <p>
            We may use Google Analytics and Google Ads, which use cookies or similar technologies to measure site usage and
            ad conversions. Where required by law, we ask for consent before these are used. You can opt out of personalized
            Google ads at{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              adssettings.google.com
            </a>{" "}
            and of Google Analytics with the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics opt-out add-on
            </a>
            .
          </p>
          <h2>Text messages</h2>
          <p>
            If you provide your phone number, we may contact you by phone or text about your inquiry. Message and data rates
            may apply. Reply STOP to opt out of texts at any time. We don&apos;t share your mobile number with third parties for
            their marketing.
          </p>
          <h2>Who we share it with</h2>
          <p>
            Service providers that help us run our business (for example hosting, email, CRM and analytics providers), only
            as needed to provide their services; and authorities when required by law.
          </p>
          <h2>Retention and security</h2>
          <p>
            We keep information only as long as needed for the purposes above and use reasonable safeguards to protect it. No
            method of transmission or storage is completely secure.
          </p>
          <h2>Your choices and rights</h2>
          <p>
            You can ask us to access, correct or delete your personal information by emailing{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Depending on where you live (for example California or the
            EU/UK), you may have additional rights, which we will honor as required by law.
          </p>
          <h2>Children</h2>
          <p>This website is intended for businesses and is not directed to children under 13.</p>
          <h2>Changes</h2>
          <p>We may update this policy. The date at the top shows the latest version.</p>
          <h2>Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
