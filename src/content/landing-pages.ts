import type { Point, QA } from "./types";

/**
 * Google Ads landing pages (/lp/<slug>). One per ad group/campaign theme so the
 * headline matches the search query and ad copy ("message match"), which
 * improves Quality Score's landing page experience and ad relevance.
 */
export type LandingPage = {
  slug: string;
  campaign: string; // internal note: which ad group / keywords point here
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  accent: string; // highlighted part of the headline (appended in orange)
  sub: string;
  bullets: string[]; // 3–4 outcome bullets beside the form
  interest: string; // pre-selected interest in the lead form
  formCta: string;
  automate: Point[]; // 6 cards
  objections: QA[]; // 4–5 FAQs that remove friction
};

const STEPS: Point[] = [
  { title: "Free 30-minute AI audit", body: "We map where your time and money go — phones, admin, follow-up, data entry — and find the biggest wins." },
  { title: "We build it for you", body: "We set up and connect the AI to the phone system, calendar and software you already use. No new apps for your team to learn." },
  { title: "You save time every week", body: "We monitor results, fix edge cases and keep improving it month after month, so the savings keep compounding." },
];

export const LP_STEPS = STEPS;

export const LP_TRUST: string[] = [
  "Done-for-you setup and support",
  "Works with the software you already use",
  "Plans from $500 setup + $100/month · secure checkout",
  "Free audit — no obligation",
];

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "ai-automation",
    campaign: "Broad: ai automation small business, ai agency, ai for my business, automate my business",
    metaTitle: "AI Automation for Small Businesses — Free AI Audit",
    metaDescription:
      "We integrate AI into your small business to cut admin work, answer every lead and save money. Done-for-you setup. Book a free 30-minute AI audit today.",
    eyebrow: "AI automation for small & medium businesses",
    headline: "Put AI To Work In Your Business.",
    accent: "Save Hours Every Week.",
    sub: "We find the repetitive work slowing your team down — then build and run the AI that handles it. You keep doing what you do best.",
    bullets: [
      "Automate admin, scheduling, invoicing and data entry",
      "Answer every call and follow up with every lead instantly",
      "Custom AI tools built around how your business runs",
      "Set up, connected and maintained for you",
    ],
    interest: "Not sure yet",
    formCta: "Get My Free AI Audit",
    automate: [
      { title: "Back office & admin", body: "Invoices, payment reminders, data entry between tools, paperwork and reports — handled automatically." },
      { title: "Phones & front desk", body: "An AI receptionist answers, books and routes calls 24/7, and texts back every missed call." },
      { title: "Lead follow-up", body: "Every inquiry and quote gets a fast, personal follow-up by text and email until they book." },
      { title: "Scheduling & reminders", body: "Bookings, confirmations, reminders and rescheduling without the back-and-forth." },
      { title: "Custom AI tools", body: "Quoting calculators, internal assistants, dashboards and portals built for your exact process." },
      { title: "Reviews & reputation", body: "Automatic review requests after every job, plus help responding to every review." },
    ],
    objections: [
      { q: "We're a small business. Is AI really for us?", a: "Yes — small teams usually benefit the most, because every hour of admin or every missed call matters more. We start with the two or three workflows that save the most time and grow from there." },
      { q: "Do we need to change our software?", a: "Usually not. We connect AI to the phone system, calendar, CRM, accounting and field-service software you already use, and only recommend changes if they clearly pay off." },
      { q: "How much does it cost?", a: "Plans start at $500 setup + $100/month for a managed website, up to $2,800 setup + $1,000/month for full AI automation with custom software. The free audit tells you exactly what we'd build and what it would cost before you commit." },
      { q: "How long does it take to get started?", a: "It depends on scope. Simple automations like missed-call text-back or review requests can go live quickly; larger integrations and custom tools take longer. We give you a timeline during the audit." },
      { q: "Will it sound robotic to our customers?", a: "We write the scripts and messages in your voice, test them with you before launch, and keep refining them. Customers can always reach a person when they need one." },
    ],
  },
  {
    slug: "back-office-automation",
    campaign: "Back office: automate admin, back office automation, automate invoicing, reduce admin costs",
    metaTitle: "Back-Office Automation for Small Businesses | Free Audit",
    metaDescription:
      "Stop drowning in admin. We automate invoicing, data entry, scheduling and paperwork with AI so your team saves hours every week. Book a free AI audit.",
    eyebrow: "Back-office automation",
    headline: "Cut The Admin.",
    accent: "Keep The Profit.",
    sub: "Invoices, data entry, paperwork, scheduling and reports eat your week. We automate them with AI and connect your tools so the busywork disappears.",
    bullets: [
      "Invoices and payment reminders sent automatically",
      "No more re-typing data between QuickBooks, CRM and job software",
      "Paperwork, forms and receipts read and filed by AI",
      "Reports and dashboards that build themselves",
    ],
    interest: "Back-office automation",
    formCta: "Find My Admin Savings",
    automate: [
      { title: "Invoicing & collections", body: "Invoices go out when the job closes, with friendly automatic reminders until they're paid." },
      { title: "Data entry", body: "Work orders, leads and payments sync between your systems — no copy-and-paste." },
      { title: "Document processing", body: "AI reads invoices, receipts, forms and permits and files the data where it belongs." },
      { title: "Scheduling & dispatch", body: "Bookings, confirmations and reschedules handled without phone tag." },
      { title: "Reporting", body: "Daily or weekly snapshots of revenue, jobs, cash and leads delivered to your inbox." },
      { title: "Internal AI assistant", body: "An assistant trained on your SOPs that answers your team's questions instantly." },
    ],
    objections: [
      { q: "Will this replace my office staff?", a: "It's designed to take repetitive tasks off their plate so they can focus on customers and higher-value work. Many businesses use automation to grow without adding headcount rather than to cut people." },
      { q: "Is our financial data safe?", a: "We use business-grade tools with access controls, only connect what's needed, and document how data flows. Your accountant still reviews the books — AI does the prep work." },
      { q: "We use QuickBooks / Jobber / ServiceTitan — will it work?", a: "Most popular business software can be connected through built-in integrations or APIs. We confirm exactly what's possible with your stack during the free audit." },
      { q: "How do we know it's worth it?", a: "We estimate the hours and costs saved for each workflow before you commit. You can also try our free AI Automation ROI Calculator to get a quick estimate." },
    ],
  },
  {
    slug: "ai-receptionist",
    campaign: "Phones: ai receptionist, ai answering service, missed call text back, virtual receptionist small business",
    metaTitle: "AI Receptionist for Small Business — Never Miss a Call",
    metaDescription:
      "An AI receptionist that answers every call 24/7, books appointments and texts back missed calls. Set up and managed for you. Book a free AI audit today.",
    eyebrow: "AI receptionist & missed-call text-back",
    headline: "Never Miss Another Call.",
    accent: "Book More Jobs.",
    sub: "Every missed call can be a lost customer. Our AI receptionist answers 24/7, books appointments, handles common questions and texts back anyone you couldn't reach.",
    bullets: [
      "Answers calls 24/7, including nights, weekends and busy season",
      "Books directly into your calendar or scheduling software",
      "Instant text-back for every missed call",
      "Urgent calls routed to your on-call person",
    ],
    interest: "AI receptionist / phones",
    formCta: "Stop Missing Calls",
    automate: [
      { title: "24/7 call answering", body: "Greets callers in your business name, answers common questions and captures the details you need." },
      { title: "Appointment booking", body: "Checks availability and books jobs or appointments directly into your calendar." },
      { title: "Missed-call text-back", body: "Anyone who hits voicemail gets a text within seconds so they don't call a competitor." },
      { title: "Emergency routing", body: "Rules you set decide what's urgent and who gets the call or alert." },
      { title: "Call summaries", body: "Every conversation is summarized and logged to your CRM or inbox." },
      { title: "Follow-up", body: "Callers who don't book get a polite follow-up sequence until they do." },
    ],
    objections: [
      { q: "Will callers know they're talking to AI?", a: "We recommend being transparent, and many callers simply care that they get fast, helpful answers. Callers can always ask for a person, and urgent calls are routed to your team." },
      { q: "Can I keep my business phone number?", a: "Yes. The AI typically works with your existing number through call forwarding — for after-hours, overflow, or all calls, depending on what you prefer." },
      { q: "What about texting rules?", a: "We set up texting with proper consent language and carrier registration (A2P 10DLC) so your messages are compliant and actually get delivered." },
      { q: "How much revenue are we losing to missed calls?", a: "Use our free Missed-Call Revenue Calculator for a quick estimate, then we'll go deeper on your real call data in the free audit." },
    ],
  },
  {
    slug: "custom-ai-software",
    campaign: "Custom: custom ai software, ai development small business, custom business software, internal tools",
    metaTitle: "Custom AI Software for Small Businesses | Free Consult",
    metaDescription:
      "Custom AI tools, dashboards, portals and integrations built for how your business actually runs. Replace spreadsheets and manual work. Free consultation.",
    eyebrow: "Custom AI software & integrations",
    headline: "Software Built Around",
    accent: "How You Actually Work.",
    sub: "Off-the-shelf apps never quite fit. We build custom AI tools, dashboards and integrations that replace spreadsheets, kill double entry and make your team faster.",
    bullets: [
      "Replace spreadsheets with simple custom apps",
      "AI assistants trained on your SOPs and documents",
      "Connect the systems that don't talk to each other",
      "Scoped and quoted upfront — no surprise invoices",
    ],
    interest: "Custom AI software",
    formCta: "Scope My Custom Tool",
    automate: [
      { title: "Quoting & estimating tools", body: "Turn your pricing rules into an instant, consistent quote generator." },
      { title: "Internal knowledge assistant", body: "Your team asks questions and gets answers from your SOPs, manuals and past jobs." },
      { title: "Dashboards", body: "Live numbers from your accounting, CRM and job software in one place." },
      { title: "Client & vendor portals", body: "Let customers check status, upload documents and pay without calling." },
      { title: "System integrations", body: "Custom connections between tools when off-the-shelf integrations fall short." },
      { title: "Document AI", body: "Extract data from invoices, forms, contracts and work orders automatically." },
    ],
    objections: [
      { q: "Isn't custom software expensive?", a: "It can be, which is why we scope tightly around the highest-value workflow first and quote upfront. Often a focused tool that removes hours of weekly work pays for itself faster than another subscription." },
      { q: "Should we build or buy?", a: "If good software already exists for the job, we'll tell you to buy it. We build only when your process is a competitive advantage or nothing on the market fits." },
      { q: "Who maintains it?", a: "We can host, monitor and maintain what we build as part of an ongoing plan, or hand it off to your team. Ownership and hand-off terms are written into each project agreement." },
      { q: "How long does a build take?", a: "It depends on scope. We break projects into small releases so you start getting value early instead of waiting months for a big launch." },
    ],
  },
  {
    slug: "home-services",
    campaign: "Home services: ai for hvac, ai for plumbers, ai for electricians, ai for contractors, home service automation",
    metaTitle: "AI for HVAC, Plumbing & Home Service Businesses",
    metaDescription:
      "AI that answers every call, books jobs, follows up on quotes and automates your office — built for HVAC, plumbing, electrical and home service companies.",
    eyebrow: "AI for home service businesses",
    headline: "Book More Jobs.",
    accent: "Spend Less Time In The Office.",
    sub: "Built for HVAC, plumbing, electrical, roofing, cleaning and other home service companies. Answer every call, follow up on every estimate, and automate the office work.",
    bullets: [
      "Every call answered — even when your crew is on a job",
      "Estimates followed up automatically until they book",
      "Maintenance plans renewed and past customers reactivated",
      "Works with ServiceTitan, Housecall Pro, Jobber and more",
    ],
    interest: "AI receptionist / phones",
    formCta: "Get My Free AI Audit",
    automate: [
      { title: "AI receptionist", body: "Answers, triages and books calls 24/7 — including after-hours emergencies." },
      { title: "Estimate follow-up", body: "Automatic, personal follow-ups on open quotes so fewer jobs slip away." },
      { title: "Dispatch & reminders", body: "Confirmations, on-my-way texts and reschedules handled automatically." },
      { title: "Invoicing & payments", body: "Invoices and payment reminders sent the moment the job closes." },
      { title: "Reviews", body: "Review requests after every completed job to build your Google Business Profile." },
      { title: "Seasonal campaigns", body: "Tune-up reminders and reactivation messages that fill slow weeks." },
    ],
    objections: [
      { q: "Will it work with our field service software?", a: "We regularly connect with tools like ServiceTitan, Housecall Pro, Jobber and FieldEdge, plus calendars and QuickBooks. We confirm the exact setup for your stack in the audit." },
      { q: "What about emergency calls at 2 a.m.?", a: "You set the rules. The AI identifies urgent issues like no heat, leaks or outages and routes them to your on-call tech, while routine requests get booked for business hours." },
      { q: "Our customers like talking to a real person.", a: "They still can. The AI handles the overflow, after-hours calls and repetitive questions so your team has more time for the conversations that matter." },
      { q: "How fast can we see results?", a: "Quick wins like missed-call text-back and review requests can go live early. We prioritize those first, then build the bigger workflows." },
    ],
  },
  {
    slug: "contractors",
    campaign: "Construction/trades: ai for construction, ai for contractors, construction admin automation, contractor software automation",
    metaTitle: "AI for Contractors & Construction Companies | Free Audit",
    metaDescription:
      "AI that handles bids follow-up, paperwork, scheduling, client updates and invoicing for contractors and construction companies. Book a free AI audit today.",
    eyebrow: "AI for contractors & construction",
    headline: "Less Paperwork.",
    accent: "More Time On The Job Site.",
    sub: "Bids, change orders, permits, client updates, sub coordination and invoicing — AI takes the office work off your plate so you can run more projects.",
    bullets: [
      "Faster responses to every new lead and bid request",
      "Client and sub updates sent automatically",
      "Paperwork and documents read and organized by AI",
      "Invoices, draws and payment reminders on autopilot",
    ],
    interest: "Back-office automation",
    formCta: "Get My Free AI Audit",
    automate: [
      { title: "Lead & bid intake", body: "Every inquiry gets a fast response, the right questions and a scheduled site visit." },
      { title: "Bid follow-up", body: "Automatic follow-ups on outstanding bids so decisions don't stall." },
      { title: "Client updates", body: "Progress updates and next steps sent to clients without the phone tag." },
      { title: "Document handling", body: "Permits, change orders, invoices and lien waivers read and filed automatically." },
      { title: "Scheduling", body: "Crew and sub scheduling reminders and confirmations." },
      { title: "Billing", body: "Invoices and payment reminders tied to milestones and completion." },
    ],
    objections: [
      { q: "We use Procore / Buildertrend / JobTread. Does that work?", a: "Those platforms offer integrations and APIs we can often build around. We'll confirm what's possible with your exact setup during the free audit." },
      { q: "We're not tech people.", a: "You don't need to be. We do the setup, connect your tools and train your team on the few things that change for them." },
      { q: "Can AI really handle construction paperwork?", a: "AI is good at reading documents, pulling out key details and filing them. Anything with legal or financial consequences still gets a human review — we build that step in." },
      { q: "What does it cost?", a: "AI automation plans start at $1,700 setup + $500/month (Scale), and custom tools are included in Enterprise ($2,800 setup + $1,000/month). The audit shows you the expected time savings before you spend anything." },
    ],
  },
  {
    slug: "ai-consultant",
    campaign: "Consulting: ai consultant small business, ai agency near me, ai integration services, ai implementation",
    metaTitle: "AI Consultant & Integration Agency for Small Businesses",
    metaDescription:
      "Get a practical AI plan for your business — and the team to implement it. Strategy, tools, integrations and training for small and medium businesses.",
    eyebrow: "AI strategy & integration",
    headline: "AI Without The Hype.",
    accent: "Just Results.",
    sub: "Everyone's talking about AI. We help you figure out exactly where it pays off in your business — then we implement it, connect it to your tools and train your team.",
    bullets: [
      "A clear, prioritized AI roadmap for your business",
      "The right tools chosen for you — no shiny-object syndrome",
      "Implementation and integration done for you",
      "Team training and simple AI usage policies",
    ],
    interest: "AI strategy & integration",
    formCta: "Get My AI Roadmap",
    automate: [
      { title: "AI audit & roadmap", body: "We map your workflows and rank AI opportunities by time and money saved." },
      { title: "Tool selection", body: "Honest recommendations on what to buy, what to build and what to skip." },
      { title: "Integration", body: "AI connected to your CRM, accounting, scheduling, phone and job software." },
      { title: "Automation builds", body: "We build the workflows and custom tools that deliver the biggest wins." },
      { title: "Team training", body: "Practical training so your team uses AI safely and effectively." },
      { title: "Ongoing optimization", body: "Monthly reviews to measure results and find the next opportunity." },
    ],
    objections: [
      { q: "How is this different from a typical consultant?", a: "We don't hand you a slide deck and leave. We build, connect and maintain the systems ourselves, so the plan actually turns into saved hours." },
      { q: "We've tried ChatGPT. Isn't that enough?", a: "ChatGPT is a great tool, but the biggest savings come when AI is connected to your phones, software and data so work happens automatically. That's the part we handle." },
      { q: "Is our data safe?", a: "We use business-grade tools, limit access to what's needed, and help you set clear rules about what data can be used with AI." },
      { q: "What industries do you work with?", a: "Small and medium businesses of all kinds — especially trades, home services, construction, logistics, manufacturing and local service businesses, plus offices, clinics and firms." },
    ],
  },
];
