import type { Industry } from "./types";

/** Umbrella page for "home service business automation" searches; links out to each trade page. */
export const HOME_SERVICE_INDUSTRIES: Industry[] = [
  {
    slug: "home-services",
    name: "Home Services",
    audience: "home service businesses",
    metaTitle: "AI Automation for Home Service Businesses | Metron",
    metaDescription:
      "Home service business automation: an AI receptionist, missed-call text-back, quote follow-up, scheduling, reviews and invoicing for HVAC, plumbing, cleaning and more.",
    headline: "Home Service Business Automation: Answer Every Call, Follow Up on Every Quote",
    answer:
      "Home service business automation uses AI to handle the work that piles up around the jobs: answering calls and texts 24/7, texting back missed callers, following up on quotes, booking and confirming appointments, asking for reviews after each job, and sending invoice reminders. It works the same way for HVAC, plumbing, electrical, roofing, cleaning, landscaping, pest control, pool service and other trades.",
    painPoints: [
      {
        title: "You're on a job when the phone rings",
        body: "Owners and techs can't answer mid-job, and a caller who reaches voicemail often calls the next company on Google instead.",
      },
      {
        title: "Quotes go out and nobody follows up",
        body: "Estimates sit in inboxes for days because following up is nobody's job, and the customer books whoever called back first.",
      },
      {
        title: "Evenings disappear into admin",
        body: "Scheduling, confirmations, invoices, payment chasing and review requests end up done at night or not at all.",
      },
      {
        title: "Reviews don't keep up with the work",
        body: "Happy customers rarely leave a review unless they're asked at the right moment, so your Google profile undersells your real reputation.",
      },
    ],
    automations: [
      {
        title: "AI receptionist and missed-call text-back",
        body: "Calls are answered 24/7. Missed callers get a text within seconds asking what they need, and urgent requests are routed to your on-call phone.",
      },
      {
        title: "Instant replies to web and ad leads",
        body: "Form, Google and Facebook leads get a reply in seconds with questions to qualify the job and a link to book.",
      },
      {
        title: "Quote and estimate follow-up",
        body: "Every estimate starts a short text and email sequence that stops as soon as the customer replies or books.",
      },
      {
        title: "Booking, confirmations and reminders",
        body: "Appointments go into your calendar or field service software with confirmations and reminders that cut no-shows.",
      },
      {
        title: "Review requests after every job",
        body: "Each completed job triggers a review request with a direct Google link and one reminder, sent to every customer.",
      },
      {
        title: "Invoice and payment reminders",
        body: "Unpaid invoices get polite automatic reminders with a payment link, so you're not chasing money by hand.",
      },
    ],
    exampleMath: {
      title: "Example: what slow follow-up can cost",
      body: "For example, if you send 20 quotes a month at an average job of $1,200 and consistent follow-up wins just 2 more of them, that's $2,400 a month, or about $28,800 a year. These numbers are illustrative assumptions only; use your own quote volume, close rate and job size.",
    },
    tools: ["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "QuickBooks", "Google Calendar", "Google Business Profile", "Gmail and Outlook"],
    faqs: [
      {
        q: "What is home service business automation?",
        a: "It's using software and AI to handle the repetitive tasks around your jobs, such as answering calls, replying to leads, following up on quotes, scheduling, reminders, review requests and invoice reminders, so owners and techs can focus on the work.",
      },
      {
        q: "Which home service businesses can use it?",
        a: "Any trade that books jobs by phone or form: HVAC, plumbing, electrical, roofing, cleaning, landscaping, pest control, pool service, garage door, handyman, painting, flooring, moving, junk removal, tree service, appliance repair, locksmiths and more.",
      },
      {
        q: "What should a home service business automate first?",
        a: "Usually missed calls and lead replies, because they're the fastest way to stop losing jobs you already paid to attract. Quote follow-up and review requests are typically next.",
      },
      {
        q: "Does it work with ServiceTitan, Housecall Pro or Jobber?",
        a: "We connect with common field service platforms, typically through their APIs or tools like Zapier or Make. The exact level of integration depends on your platform and plan, which we confirm during the free audit.",
      },
      {
        q: "How much does home service automation cost with Metron?",
        a: "The AI receptionist, missed-call text-back, lead follow-up, booking, reminders and review requests are included in our Scale plan at $1,700 setup plus $500 a month. Website and SEO plans start at $500 setup plus $100 a month.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: ["home service business automation", "AI for home service businesses", "home services AI receptionist", "automation for contractors"],
  },
];
