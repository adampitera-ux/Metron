import { PageHeader, Section } from "@/components/page/blocks";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms governing use of the ${SITE.name} website, free tools and content, including intellectual property, third-party links, liability and how to contact us.`,
  path: "/terms",
});

// NOTE: Template terms — have them reviewed by a qualified attorney before launch.
export default function Terms() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Terms of Use", path: "/terms" }]} title="Terms of Use" lead="Last updated October 4, 2026" />
      <Section>
        <div className="prose-article mx-auto max-w-[760px]">
          <p>
            These terms govern your use of the {SITE.name} website, content and free tools. Plan purchases are also covered by
            our <a href="/billing">Billing, Cancellation &amp; Refund Policy</a>, and any custom project may have its own written
            agreement.
          </p>
          <h2>Informational content</h2>
          <p>
            Articles, calculators and tools are provided for general information. Calculator results are estimates based on
            the numbers you enter, not guarantees. Nothing on this site is legal, tax, financial or compliance advice — consult
            a qualified professional for your situation.
          </p>
          <h2>Free tools</h2>
          <p>
            You agree to use our tools only for websites you own or are authorized to analyze, and not to misuse, overload or
            attempt to circumvent them. We may limit or change tools at any time.
          </p>
          <h2>No guarantees</h2>
          <p>
            We work hard to deliver results, but we do not guarantee specific outcomes such as revenue, cost savings, search
            rankings or placement in AI-generated answers.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Site content is owned by {SITE.name} or its licensors. You may share links and short quotes with attribution; please
            don&apos;t republish full articles without permission.
          </p>
          <h2>Third-party links</h2>
          <p>We link to other websites for convenience and aren&apos;t responsible for their content or practices.</p>
          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, the site is provided &quot;as is&quot; and {SITE.name} is not liable for indirect or
            consequential damages arising from its use.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
