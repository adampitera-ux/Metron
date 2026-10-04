import { INDUSTRIES } from "@/content/industries";
import { AnswerBox, CtaBand, PageHeader, PointGrid, Section, SectionTitle } from "@/components/page/blocks";
import { Button } from "@/components/ui";
import { JsonLd, pageMetadata } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: `About ${SITE.name} — AI Automation for Small Businesses`,
  description:
    "We help small businesses integrate AI to grow faster and save capital on back-office workflows, so owners can focus on the work they do best.",
  path: "/about",
  kicker: "About",
});

const VALUES = [
  { title: "Results over hype", body: "We start with the calls, leads and admin hours you have today, and only build AI where it clearly saves time or wins revenue." },
  { title: "Done for you", body: "You run your business. We design, build, monitor and improve the automations — no new software for your team to learn." },
  { title: "Honest by default", body: "No fake reviews, no guaranteed rankings, no black boxes. You see what the AI says and does, and you can change it anytime." },
  { title: "Built on your stack", body: "We connect to the phone system, calendar, CRM and field-service software you already use instead of replacing them." },
];

const PROCESS = [
  { title: "Free AI audit", body: "A 30-minute call to map your calls, lead flow and repetitive admin work, and size the opportunity." },
  { title: "Build & launch", body: "We configure your AI receptionist, follow-ups and workflows, test them with you, then go live." },
  { title: "Run & improve", body: "We monitor conversations and results every month, and keep refining scripts, workflows and content." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: `About ${SITE.name}`,
          about: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <PageHeader
        crumbs={[{ name: "About", path: "/about" }]}
        kicker="About Us"
        title={
          <>
            We Help Small Businesses <span className="text-orange">Grow With AI</span>
          </>
        }
        lead="AI shouldn't be a luxury for big companies. We bring the same automation to the HVAC shop, the dental office and the law firm down the street."
      >
        <Button href="/contact" variant="orange">
          Book Free Audit
        </Button>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-[900px]">
          <AnswerBox label={`What is ${SITE.name}?`}>{SITE.description}</AnswerBox>
          <div className="prose-article mt-10">
            <p>
              Most small businesses don&apos;t lose to competitors because their work is worse. They
              lose because a call went to voicemail, a quote never got a follow-up, or the owner spent
              the evening on data entry instead of growing the business.
            </p>
            <p>
              We started {SITE.name} to fix exactly that. We build AI systems that answer every call
              and lead instantly, take repetitive back-office work off your team, and make sure your
              business shows up when customers ask Google, ChatGPT or Perplexity who to hire. The goal
              is simple: rapid growth, lower overhead, and more time for the work you do best.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Our principles" title="How we work" />
        <div className="mt-8">
          <PointGrid items={VALUES} cols={2} />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Process" title="From first call to fully automated" />
        <div className="mt-8">
          <PointGrid items={PROCESS} numbered />
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle kicker="Who we serve" title="Industries we work with" />
        <div className="mt-8 flex flex-wrap gap-3">
          {INDUSTRIES.map((i) => (
            <a key={i.slug} href={`/industries/${i.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-[15px] text-fg-2 transition-colors hover:border-orange/40 hover:text-orange">
              {i.audience}
            </a>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand />
      </Section>
    </>
  );
}
