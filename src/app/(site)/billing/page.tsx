import { PageHeader, Section } from "@/components/page/blocks";
import { PLANS, usd } from "@/content/plans";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Billing, Cancellation & Refund Policy",
  description: `How ${SITE.name} plans are billed, how monthly subscriptions renew, how to cancel anytime and when setup fees can be refunded.`,
  path: "/billing",
});

// NOTE: Default policy — confirm these terms match how you run the business, and have an attorney review.
export default function Billing() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Billing & Refunds", path: "/billing" }]}
        title="Billing, Cancellation & Refund Policy"
        lead="Last updated October 7, 2026"
      />
      <Section>
        <div className="prose-article mx-auto max-w-[760px]">
          <p>
            We want you to know exactly what you&apos;re paying for before you buy. This page explains how {SITE.name} plans
            are billed, how they renew and how to cancel.
          </p>

          <h2>What you pay</h2>
          <p>Every plan has a one-time setup fee and a flat monthly fee. Prices are in US dollars.</p>
          <ul>
            {PLANS.map((p) => (
              <li key={p.id}>
                <strong>{p.name}:</strong> {usd(p.setup)} one-time setup + {usd(p.monthly)}/month ({usd(p.setup + p.monthly)}{" "}
                due at checkout, covering setup and your first month)
              </li>
            ))}
          </ul>
          <p>Applicable sales tax, if any, is calculated at checkout based on your address.</p>

          <h2>How billing and renewal work</h2>
          <ul>
            <li>Payments are processed securely by Stripe. We never see or store your full card number.</li>
            <li>
              At checkout you pay the setup fee plus your first month. Your monthly fee then <strong>renews automatically</strong>{" "}
              on the same day each month until you cancel.
            </li>
            <li>There is no long-term contract. Plans are month to month.</li>
            <li>Stripe emails you a receipt and invoice for every payment.</li>
          </ul>

          <h2>How to cancel</h2>
          <p>
            You can cancel anytime by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            {SITE.phone ? (
              <>
                {" "}
                or calling <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a>
              </>
            ) : null}
            . Cancellation stops all future charges. Your services stay active until the end of the month you&apos;ve already
            paid for, and you won&apos;t be billed again.
          </p>

          <h2>Refunds</h2>
          <ul>
            <li>
              <strong>Setup fee:</strong> if you cancel before we&apos;ve started work on your project, we&apos;ll refund your setup
              fee in full. Once work has started, the setup fee covers design and build time already spent and is not
              refundable.
            </li>
            <li>
              <strong>Monthly fees:</strong> monthly fees are not prorated or refunded for partial months, but you can cancel
              anytime to stop future charges.
            </li>
            <li>
              <strong>Billing mistakes:</strong> if you were charged in error, contact us and we&apos;ll correct it promptly.
            </li>
          </ul>
          <p>Approved refunds are returned to your original payment method through Stripe and usually appear within 5 to 10 business days.</p>

          <h2>Changing plans</h2>
          <p>
            You can upgrade or downgrade anytime. We&apos;ll confirm any difference in setup work and the new monthly price
            before making the change.
          </p>

          <h2>Questions</h2>
          <p>
            Questions about a charge or your plan: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            {SITE.phone ? <> · <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a></> : null}.
          </p>
        </div>
      </Section>
    </>
  );
}
