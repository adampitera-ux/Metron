import type { Service } from "./types";
import { MORE_SERVICES } from "./services-more";

const BASE_SERVICES: Service[] = [
  {
    slug: "ai-automation",
    name: "AI Workflow & Back-Office Automation",
    shortName: "AI Automation",
    icon: "flow",
    summary:
      "We automate the repetitive back-office work in your business, from scheduling and invoicing to data entry and reporting, so your team can focus on customers.",
    metaTitle: "AI Workflow & Back-Office Automation | Metron",
    metaDescription:
      "AI workflow automation for small businesses: scheduling, invoicing, data entry, and reporting handled automatically so your team can focus on paying work.",
    headline: "AI Back-Office Automation That Gives Owners Their Time Back",
    answer:
      "AI workflow automation connects the software a small business already uses, such as its CRM, scheduling, invoicing, and email, and uses rules plus AI models to handle repetitive tasks automatically. Typical examples include entering job details, sending invoices and reminders, routing requests, and summarizing reports, reducing manual admin work and data-entry errors.",
    benefits: [
      {
        title: "Less time on admin",
        body: "Repetitive tasks like copying job details between systems, sending reminders, and chasing paperwork run in the background instead of eating evenings and weekends.",
      },
      {
        title: "Fewer manual errors",
        body: "When data moves between tools automatically, there are fewer typos, missed fields, and duplicate records to clean up later.",
      },
      {
        title: "Grow without adding overhead",
        body: "Automations handle higher volume without a proportional increase in office staff, which helps you take on more work while protecting your margins.",
      },
      {
        title: "Works with your existing tools",
        body: "We build on top of the software you already pay for, such as your CRM, field service platform, accounting system, and email, rather than forcing a rip-and-replace.",
      },
      {
        title: "Consistent processes",
        body: "Every job, client, or patient follows the same steps every time, so nothing depends on someone remembering to do it.",
      },
    ],
    useCases: [
      {
        title: "Job intake to schedule",
        body: "A new booking request is parsed by AI, created as a job in your field service or scheduling software, and confirmed to the customer by text and email.",
      },
      {
        title: "Invoice and payment reminders",
        body: "When a job is marked complete, an invoice is generated in your accounting system and polite reminders go out automatically until it is paid.",
      },
      {
        title: "Document and form processing",
        body: "Intake forms, PDFs, and emailed attachments are read by AI, key fields are extracted, and the data is filed into the right record for review.",
      },
      {
        title: "Inbox triage",
        body: "Incoming emails are categorized, urgent requests are flagged for a human, and routine questions get a drafted reply ready for approval.",
      },
      {
        title: "Daily and weekly reporting",
        body: "Bookings, revenue, open estimates, and outstanding invoices are pulled together into a plain-language summary delivered to the owner on a schedule.",
      },
    ],
    process: [
      {
        title: "Free AI audit",
        body: "We map how work currently moves through your business and identify the tasks that are repetitive, rules-based, and worth automating first.",
      },
      {
        title: "Design and prioritize",
        body: "We propose specific automations, the tools they connect, and where a human stays in the loop, then agree on what to build first.",
      },
      {
        title: "Build and test",
        body: "We build the workflows, test them against real scenarios, and run them alongside your current process before switching over.",
      },
      {
        title: "Launch and refine",
        body: "After launch we monitor for errors, gather feedback from your team, and adjust or expand the automations as your needs change.",
      },
    ],
    deliverables: [
      "Workflow audit and automation roadmap",
      "Integrations between your CRM, scheduling, accounting, and email tools",
      "AI-assisted data extraction and entry",
      "Automated invoicing, reminders, and follow-ups",
      "Human-in-the-loop approval steps where they matter",
      "Error alerts and monitoring",
      "Plain-language documentation of every workflow",
      "Team walkthrough and training",
    ],
    faqs: [
      {
        q: "What kinds of tasks can AI automation handle for a small business?",
        a: "Good candidates are repetitive, rules-based tasks that happen often, such as entering job or client details, sending confirmations and reminders, generating invoices, sorting email, and compiling reports. Tasks that require judgment can still be partly automated, with AI drafting and a person approving.",
      },
      {
        q: "Do I need to switch software to use your automations?",
        a: "Usually not. We build on top of the tools you already use whenever they offer an integration or API. If a tool cannot be connected, we will tell you during the audit and discuss alternatives.",
      },
      {
        q: "Will automation replace my office staff?",
        a: "The goal is to remove repetitive admin so your team can spend more time on customers and higher-value work. Most businesses use automation to handle growth without adding overhead rather than to cut people.",
      },
      {
        q: "How long does it take to set up?",
        a: "It depends on the number of workflows and tools involved. Simple automations can often be live within a few weeks, while multi-system workflows take longer. We give you a timeline after the free audit.",
      },
      {
        q: "What happens if an automation makes a mistake?",
        a: "We build in error alerts, logging, and human approval steps for sensitive actions such as sending money-related messages. If something fails, you are notified and we fix the workflow.",
      },
      {
        q: "Which plan includes AI workflow automation?",
        a: "Automations start with the Scale plan ($1,700 setup + $500/month), which covers AI lead follow-up, booking, reminders, reviews and CRM integration. The Enterprise plan ($2,800 setup + $1,000/month) adds back-office automation, custom workflows, advanced analytics and a dedicated account manager.",
      },
    ],
    relatedIndustries: ["hvac", "plumbing", "law-firms", "dental", "real-estate", "auto-repair"],
    keywords: [
      "ai workflow automation for small business",
      "back office automation",
      "small business process automation",
      "automate invoicing and scheduling",
      "ai automation agency",
    ],
  },
  {
    slug: "ai-receptionist",
    name: "AI Receptionist & Missed-Call Text-Back",
    shortName: "AI Receptionist",
    icon: "chat",
    summary:
      "An AI receptionist answers calls and texts around the clock, and missed-call text-back replies to callers you could not reach so leads do not go to a competitor.",
    metaTitle: "AI Receptionist & Missed-Call Text-Back | Metron",
    metaDescription:
      "An AI receptionist that answers calls, books appointments, and texts back missed callers 24/7, so local service businesses stop losing leads to voicemail.",
    headline: "Never Miss Another Call With an AI Receptionist",
    answer:
      "An AI receptionist is software that answers phone calls and messages using conversational AI. It can greet callers, answer common questions, collect job details, and book appointments at any hour. Missed-call text-back automatically sends a text to anyone whose call went unanswered, giving them a fast way to continue the conversation instead of calling a competitor.",
    benefits: [
      {
        title: "Answer every call, 24/7",
        body: "After-hours, weekend, and busy-season calls get a response instead of voicemail, including when your team is on a job site.",
      },
      {
        title: "Recover missed calls",
        body: "Anyone who reaches voicemail receives an immediate text, so the conversation continues even when nobody can pick up.",
      },
      {
        title: "Book appointments directly",
        body: "The receptionist can check availability and book or request appointments in your calendar or scheduling software.",
      },
      {
        title: "Consistent, on-brand answers",
        body: "Callers get accurate answers about services, hours, service areas, and next steps, based on information you approve.",
      },
      {
        title: "Clean handoffs to your team",
        body: "Urgent calls can be transferred to a person, and every conversation is summarized and logged so your team has the context.",
      },
    ],
    useCases: [
      {
        title: "After-hours emergency intake",
        body: "A homeowner calls at night about a leak or no heat. The AI collects the address and problem, flags it as urgent, and alerts the on-call technician.",
      },
      {
        title: "Missed call while on a job",
        body: "A caller hits voicemail while your crew is busy. Within moments they receive a text asking how you can help, and the reply thread is logged in your CRM.",
      },
      {
        title: "New patient or client booking",
        body: "A caller asks about availability. The AI answers common questions, collects contact details, and books an appointment or consultation request.",
      },
      {
        title: "FAQ deflection",
        body: "Routine questions about hours, pricing ranges you approve, service areas, and directions are answered without tying up front-desk staff.",
      },
      {
        title: "Call summaries for the office",
        body: "Every call produces a short written summary with caller details and next steps, sent to your inbox or CRM.",
      },
    ],
    process: [
      {
        title: "Gather your playbook",
        body: "We document your services, service area, hours, booking rules, escalation contacts, and the questions callers ask most.",
      },
      {
        title: "Configure and connect",
        body: "We set up the AI receptionist, the missed-call text-back flow, and connections to your phone system, calendar, and CRM.",
      },
      {
        title: "Test with real scenarios",
        body: "We run test calls covering common, tricky, and urgent situations and tune responses before going live.",
      },
      {
        title: "Launch and review",
        body: "After launch we review call transcripts, refine answers, and adjust escalation rules based on what callers actually ask.",
      },
    ],
    deliverables: [
      "AI voice receptionist configured for your business",
      "Missed-call text-back automation",
      "Calendar or scheduling integration for bookings",
      "Urgent-call escalation and live transfer rules",
      "Call summaries logged to your CRM or inbox",
      "Approved knowledge base of services, hours, and FAQs",
      "Ongoing transcript review and tuning",
    ],
    faqs: [
      {
        q: "What is an AI receptionist?",
        a: "An AI receptionist is software that uses conversational AI to answer phone calls and messages for a business. It can answer common questions, collect caller details, book appointments, and route urgent calls to a person.",
      },
      {
        q: "How does missed-call text-back work?",
        a: "When a call to your business goes unanswered, the system automatically sends the caller a text message, typically within seconds. The caller can reply by text, and the conversation is logged so your team can follow up.",
      },
      {
        q: "Will callers know they are talking to AI?",
        a: "We recommend being transparent, and the receptionist can identify itself as an automated assistant. Disclosure requirements vary by location, so we configure greetings to fit your situation.",
      },
      {
        q: "Can it transfer calls to a real person?",
        a: "Yes. You decide which situations, such as emergencies or existing customers, should be transferred to a person or trigger an immediate alert.",
      },
      {
        q: "Does it work with my current phone number?",
        a: "In most cases yes, through call forwarding or an integration with your phone provider. We confirm the best setup for your phone system during onboarding.",
      },
      {
        q: "Is texting customers automatically allowed?",
        a: "Business texting is subject to carrier registration rules and consent requirements that vary by region. We set up messaging with registration and opt-out handling in mind, but you should confirm requirements for your business with a legal advisor.",
      },
    ],
    relatedIndustries: ["hvac", "plumbing", "electrical", "dental", "med-spas", "law-firms"],
    keywords: [
      "ai receptionist for small business",
      "missed call text back",
      "ai answering service",
      "24/7 ai phone answering",
      "virtual receptionist ai",
    ],
  },
  {
    slug: "lead-follow-up",
    name: "AI Lead Follow-Up & CRM Automation",
    shortName: "Lead Follow-Up",
    icon: "bolt",
    summary:
      "We respond to new leads in minutes, follow up automatically until they book, and keep your CRM organized without manual data entry.",
    metaTitle: "AI Lead Follow-Up & CRM Automation | Metron",
    metaDescription:
      "AI lead follow-up and CRM automation that responds to new inquiries fast, nurtures quotes until they book, and keeps every contact organized for your team.",
    headline: "Respond to Every Lead Fast and Follow Up Until They Book",
    answer:
      "AI lead follow-up automatically responds to new inquiries from web forms, calls, texts, and ad platforms within minutes, then sends personalized follow-up messages until the lead books or opts out. CRM automation logs every contact, updates deal stages, and assigns tasks, so no lead or open estimate is forgotten.",
    benefits: [
      {
        title: "Faster speed to lead",
        body: "New inquiries get a reply in minutes, not hours, while the customer is still actively looking for help.",
      },
      {
        title: "Persistent, polite follow-up",
        body: "Leads and open estimates receive a planned sequence of texts and emails instead of a single attempt that is easy to ignore.",
      },
      {
        title: "A CRM that stays current",
        body: "Contacts, notes, and pipeline stages update automatically, so your CRM reflects reality without manual data entry.",
      },
      {
        title: "Every source in one place",
        body: "Leads from your website, phone, Google Business Profile, directories, and ads flow into a single pipeline.",
      },
      {
        title: "Clear visibility",
        body: "See where every lead stands and which sources produce booked jobs, so you can spend marketing dollars with more confidence.",
      },
    ],
    useCases: [
      {
        title: "Instant web form response",
        body: "A visitor submits a quote request. They immediately receive a personalized text and email, and the lead is created in your CRM with its source.",
      },
      {
        title: "Estimate follow-up sequence",
        body: "After an estimate is sent, the customer receives scheduled check-ins over the following days, and your team is alerted when they reply.",
      },
      {
        title: "Lead qualification",
        body: "AI asks a few qualifying questions by text, such as service needed, location, and timeline, and routes qualified leads to the right person.",
      },
      {
        title: "Old lead reactivation",
        body: "Past inquiries that never booked receive a relevant, opt-out-friendly message about seasonal service or availability.",
      },
      {
        title: "Pipeline hygiene",
        body: "Stale deals are flagged, duplicates are merged, and follow-up tasks are created automatically for anything waiting on a human.",
      },
    ],
    process: [
      {
        title: "Map your lead sources",
        body: "We identify where leads come from today, how fast they get a response, and where they fall through the cracks.",
      },
      {
        title: "Set up the CRM pipeline",
        body: "We configure or clean up your CRM with clear stages, fields, and lead source tracking.",
      },
      {
        title: "Write and build sequences",
        body: "We draft follow-up messages in your voice for you to approve, then build the automated sequences and routing rules.",
      },
      {
        title: "Launch and optimize",
        body: "We monitor reply and booking activity, adjust timing and wording, and report on how each source performs.",
      },
    ],
    deliverables: [
      "Lead source audit and pipeline design",
      "CRM setup or cleanup with lead source tracking",
      "Instant response automation for forms, calls, and texts",
      "Multi-step text and email follow-up sequences",
      "AI lead qualification and routing",
      "Estimate and quote follow-up automation",
      "Opt-out and do-not-contact handling",
      "Pipeline reporting dashboard",
    ],
    faqs: [
      {
        q: "What is AI lead follow-up?",
        a: "AI lead follow-up is the use of automation and AI-written messages to respond to new inquiries quickly and continue contacting them until they book, decline, or opt out. It replaces manual follow-up that often gets skipped when a team is busy.",
      },
      {
        q: "Why does responding quickly to leads matter?",
        a: "Customers looking for a service provider often contact several businesses at once and tend to go with whoever responds and is easiest to book. A fast, helpful reply keeps you in the conversation while the customer is still deciding.",
      },
      {
        q: "Which CRMs do you work with?",
        a: "We work with many common CRMs and field service platforms, as long as they offer an integration or API. If you do not have a CRM yet, we can recommend and set one up that fits your business.",
      },
      {
        q: "Will automated follow-up annoy my leads?",
        a: "Sequences are designed to be helpful, spaced out, and easy to stop. Every message includes an opt-out, and the sequence ends as soon as the lead replies or books.",
      },
      {
        q: "Can I approve the messages before they go out?",
        a: "Yes. We draft all templates in your voice and you approve them before launch. For sensitive situations, AI-drafted replies can wait for human approval before sending.",
      },
    ],
    relatedIndustries: ["roofing", "hvac", "real-estate", "law-firms", "med-spas", "landscaping"],
    keywords: [
      "ai lead follow up",
      "crm automation for small business",
      "speed to lead automation",
      "automated estimate follow up",
      "lead nurturing automation",
    ],
  },
  {
    slug: "website-refresh",
    name: "Website Refresh & Conversion Optimization",
    shortName: "Website Refresh",
    icon: "globe",
    summary:
      "We rebuild or refresh your website so it loads fast, works on every phone, ranks locally, and turns more visitors into calls and bookings.",
    metaTitle: "Website Refresh & Conversion Optimization | Metron",
    metaDescription:
      "A website refresh for small businesses: faster load times, mobile-first design, clear calls to action, and structured content built for search and AI answers.",
    headline: "A Faster Website That Turns Visitors Into Booked Jobs",
    answer:
      "A website refresh updates an existing small business site's design, speed, content, and structure without starting from scratch. Conversion optimization makes it easier for visitors to take action, using clear calls to action, click-to-call buttons, short forms, and online booking, so more of the traffic you already get becomes calls and appointments.",
    benefits: [
      {
        title: "Built for mobile visitors",
        body: "Many local service searches happen on phones, so we design for small screens first with tap-to-call and easy booking.",
      },
      {
        title: "Faster load times",
        body: "Modern, lightweight builds and optimized images help pages load quickly and support Core Web Vitals.",
      },
      {
        title: "Clear paths to contact",
        body: "Every page makes the next step obvious, whether that is calling, requesting a quote, or booking online.",
      },
      {
        title: "Ready for search and AI answers",
        body: "Clean structure, schema markup, and answer-first service pages make your content easier for search engines and AI systems to understand.",
      },
      {
        title: "Connected to your automations",
        body: "Forms and booking widgets feed directly into your CRM and follow-up automations, so no inquiry sits in an inbox.",
      },
    ],
    useCases: [
      {
        title: "Outdated site modernization",
        body: "An older site that is slow and hard to use on phones is rebuilt with a modern design while keeping the URLs and content that still perform.",
      },
      {
        title: "Service and location pages",
        body: "Dedicated pages for each core service and service area explain what you do, where, and how to book.",
      },
      {
        title: "Online booking and quote forms",
        body: "Short forms and booking widgets replace long contact forms, and submissions route straight to your CRM.",
      },
      {
        title: "Trust signals",
        body: "Licenses, certifications, real reviews, guarantees you actually offer, and photos of your team are placed where visitors make decisions.",
      },
      {
        title: "Conversion tracking",
        body: "Calls, form submissions, and bookings are tracked so you can see which pages and sources produce results.",
      },
    ],
    process: [
      {
        title: "Site and conversion audit",
        body: "We review speed, mobile usability, content, search visibility, and how easy it is for a visitor to contact you.",
      },
      {
        title: "Plan structure and content",
        body: "We plan the page structure, service and location pages, and calls to action, and preserve existing rankings with proper redirects.",
      },
      {
        title: "Design and build",
        body: "We design and build the refreshed site, write or edit the copy, and add schema markup and tracking.",
      },
      {
        title: "Launch and improve",
        body: "After launch we monitor performance and conversions and make ongoing improvements based on real visitor behavior.",
      },
    ],
    deliverables: [
      "Website, speed, and conversion audit",
      "Mobile-first design refresh",
      "Service and service-area page structure",
      "Click-to-call, quote forms, and online booking",
      "On-page SEO and schema markup",
      "Redirect plan to protect existing rankings",
      "Call and form conversion tracking",
      "Form and booking integration with your CRM",
    ],
    faqs: [
      {
        q: "What is the difference between a website refresh and a full redesign?",
        a: "A refresh improves an existing site's design, speed, content, and structure while keeping what already works, such as established URLs and content. A full redesign starts over. We recommend the option that fits your current site after an audit.",
      },
      {
        q: "Will a new website hurt my Google rankings?",
        a: "Any major site change carries some risk, which is why we plan redirects, preserve important URLs and content, and monitor search performance after launch. Done carefully, a refresh can improve how search engines understand your site.",
      },
      {
        q: "What is conversion optimization?",
        a: "Conversion optimization is the practice of making it easier for website visitors to take a desired action, such as calling, requesting a quote, or booking. It involves clear calls to action, simple forms, fast load times, and trust signals.",
      },
      {
        q: "Is a website refresh included in your plans?",
        a: "Yes. Every plan includes a professionally built, hosted and maintained website, starting with Launch at $500 setup + $100/month. Growth ($999 + $150/month) adds full SEO and AI search optimization, and Scale and Enterprise add AI lead capture and automation on top.",
      },
      {
        q: "Can I keep my current domain and hosting?",
        a: "You keep your domain. We will review your current hosting and recommend whether to keep it or move to a faster option, and we handle the transition with you.",
      },
    ],
    relatedIndustries: ["roofing", "landscaping", "cleaning-services", "dental", "med-spas", "auto-repair"],
    keywords: [
      "small business website refresh",
      "website redesign for contractors",
      "conversion rate optimization small business",
      "local service business website",
      "website that generates leads",
    ],
  },
  {
    slug: "aeo-geo",
    name: "AEO & GEO: AI Search Optimization",
    shortName: "AEO & GEO",
    icon: "search",
    summary:
      "We make your business easier for AI assistants and answer engines like ChatGPT, Perplexity, and Google AI Overviews to find, understand, and cite.",
    metaTitle: "AEO & GEO: AI Search Optimization | Metron",
    metaDescription:
      "AEO and GEO services that help AI assistants and Google AI Overviews understand and cite your business through schema, answer-first content, and citations.",
    headline: "Get Your Business Understood and Cited by AI Search",
    answer:
      "Answer engine optimization (AEO) and generative engine optimization (GEO) improve how AI-powered search tools such as Google AI Overviews, ChatGPT, and Perplexity understand and cite a business. The work combines structured data, consistent business information, answer-first content, AI crawler access, and third-party reviews and citations. No provider can guarantee placement in AI answers.",
    benefits: [
      {
        title: "Be understood by AI systems",
        body: "Schema markup and consistent business details help search engines and AI models correctly identify who you are, what you do, and where you operate.",
      },
      {
        title: "Content that can be quoted",
        body: "Answer-first service pages and FAQs give AI systems clear, self-contained passages they can summarize or cite.",
      },
      {
        title: "Stronger local signals",
        body: "An optimized Google Business Profile, reviews, and accurate directory listings support both traditional local search and AI-generated answers.",
      },
      {
        title: "Control over AI crawler access",
        body: "You decide which AI crawlers can access your site, with clear robots.txt rules instead of accidental blocking.",
      },
      {
        title: "Measurable visibility",
        body: "We track referral traffic from AI assistants and monitor how your business appears in AI answers for important queries.",
      },
    ],
    useCases: [
      {
        title: "Schema markup implementation",
        body: "We add structured data such as LocalBusiness or a more specific type, Service, FAQPage, and Organization with sameAs links to your official profiles.",
      },
      {
        title: "Entity consistency cleanup",
        body: "We align your business name, address, and phone number across your website, Google Business Profile, and major directories so systems see one consistent entity.",
      },
      {
        title: "Answer-first content rewrite",
        body: "Service pages are restructured so each opens with a direct, quotable answer, followed by detail, FAQs, and clear next steps.",
      },
      {
        title: "AI crawler and llms.txt setup",
        body: "We review robots.txt rules for crawlers like GPTBot, PerplexityBot, ClaudeBot, and the Google-Extended token, and can add an llms.txt file as an optional, emerging convention.",
      },
      {
        title: "Reviews and citations",
        body: "We set up review request automation and help you earn accurate mentions on relevant directories, associations, and local publications.",
      },
      {
        title: "AI visibility monitoring",
        body: "We segment AI assistant referrals in analytics and periodically check how AI tools describe your business for your key services.",
      },
    ],
    process: [
      {
        title: "AI visibility audit",
        body: "We check how AI assistants currently describe your business, review your schema, entity data, content, crawler rules, and review profile.",
      },
      {
        title: "Technical foundation",
        body: "We implement schema markup, fix name, address, and phone inconsistencies, set AI crawler rules, and ensure key pages are crawlable.",
      },
      {
        title: "Content and FAQs",
        body: "We rewrite or create answer-first service, location, and FAQ content based on the questions your customers actually ask.",
      },
      {
        title: "Off-site signals",
        body: "We optimize your Google Business Profile, support review generation, and work on accurate third-party citations.",
      },
      {
        title: "Measure and iterate",
        body: "We track AI referral traffic and AI answer appearances over time and adjust priorities based on what we observe.",
      },
    ],
    deliverables: [
      "AI search visibility audit",
      "Schema markup (LocalBusiness, Service, FAQPage, Organization with sameAs)",
      "Name, address, and phone consistency cleanup across key listings",
      "Answer-first rewrites of core service pages",
      "FAQ content based on real customer questions",
      "robots.txt review for AI crawlers and optional llms.txt file",
      "Google Business Profile optimization",
      "AI referral traffic tracking and periodic reporting",
    ],
    faqs: [
      {
        q: "What is the difference between AEO and GEO?",
        a: "Answer engine optimization (AEO) focuses on getting your content selected as a direct answer, such as in featured snippets, voice assistants, and AI answers. Generative engine optimization (GEO) focuses specifically on how generative AI tools like ChatGPT, Perplexity, and Google AI Overviews understand, summarize, and cite sources. In practice the two overlap heavily.",
      },
      {
        q: "Can you guarantee my business will appear in ChatGPT or Google AI Overviews?",
        a: "No. Nobody can guarantee placement in AI-generated answers, because the companies that run these systems control how sources are selected and their behavior changes over time. What we can do is improve the signals these systems rely on, such as clear content, structured data, consistent business information, and reputable citations.",
      },
      {
        q: "Should I block AI crawlers like GPTBot in robots.txt?",
        a: "It depends on your goals. Blocking crawlers such as GPTBot, ClaudeBot, PerplexityBot, or the Google-Extended token can limit how your content is used by those companies, but may also reduce the chance your business is referenced by their AI products. We explain the tradeoffs and set rules you are comfortable with.",
      },
      {
        q: "What is llms.txt and do I need it?",
        a: "llms.txt is a proposed convention for a plain-text file at the root of a website that points AI tools to its most important content. It is not an official standard, and support among AI companies is limited and inconsistent, so we treat it as a low-cost, optional addition rather than a priority.",
      },
      {
        q: "Does traditional SEO still matter for AI search?",
        a: "Yes. Many AI answer tools draw on web search results and well-indexed pages, so crawlability, quality content, local SEO, and reputable links remain the foundation. AEO and GEO build on that foundation rather than replacing it.",
      },
      {
        q: "How do you measure results from AEO and GEO?",
        a: "We track referral traffic from AI assistants in your analytics, monitor how AI tools describe your business for priority queries, and watch related signals like Google Business Profile activity and branded searches. Some AI exposure does not produce a click, so measurement is directional rather than exact.",
      },
    ],
    relatedIndustries: ["dental", "law-firms", "med-spas", "hvac", "real-estate", "plumbing"],
    keywords: [
      "aeo services",
      "generative engine optimization",
      "how to show up in chatgpt answers",
      "google ai overviews optimization",
      "ai search optimization for local business",
    ],
  },
  {
    slug: "review-automation",
    name: "Review & Reputation Automation",
    shortName: "Review Automation",
    icon: "star",
    summary:
      "We automatically ask happy customers for reviews at the right moment, help you respond to every review, and alert you to problems fast.",
    metaTitle: "Review & Reputation Automation | Metron",
    metaDescription:
      "Review automation for local businesses: timely review requests after every job, AI-drafted responses, and instant alerts so you can protect your reputation.",
    headline: "Earn More Reviews Automatically and Respond to Every One",
    answer:
      "Review and reputation automation sends review requests by text or email after a completed job or appointment, makes leaving a review a one-tap process, and monitors new reviews across platforms. AI can draft personalized responses for approval, and negative feedback triggers an alert so the owner can address problems quickly.",
    benefits: [
      {
        title: "A steady flow of reviews",
        body: "Every completed job triggers a request, so reviews accumulate consistently rather than depending on someone remembering to ask.",
      },
      {
        title: "Better local visibility",
        body: "Reviews are a known factor in local search and a common source of information for AI assistants describing local businesses.",
      },
      {
        title: "Responses without the busywork",
        body: "AI drafts thoughtful, specific replies to reviews, and you approve or edit them before they are posted.",
      },
      {
        title: "Catch problems early",
        body: "Negative reviews and low ratings trigger an instant alert so you can reach out and resolve the issue quickly.",
      },
    ],
    useCases: [
      {
        title: "Post-job review request",
        body: "When a job is marked complete in your field service software, the customer receives a thank-you text with a direct link to your Google review page.",
      },
      {
        title: "Gentle reminder",
        body: "If the customer has not left a review after a few days, they receive one polite reminder, then no further messages.",
      },
      {
        title: "AI-drafted review replies",
        body: "New reviews are pulled in, and AI drafts a reply that references the specific feedback for you to approve.",
      },
      {
        title: "Negative review alerts",
        body: "A low rating sends an immediate notification to the owner or manager with the review text and customer record.",
      },
      {
        title: "Reputation reporting",
        body: "A monthly summary shows new reviews, average rating trends, and common themes customers mention.",
      },
    ],
    process: [
      {
        title: "Review profile audit",
        body: "We review your current profiles, rating, review volume, and response history across the platforms that matter for your industry.",
      },
      {
        title: "Connect and configure",
        body: "We connect your job or appointment system so review requests trigger automatically at the right moment.",
      },
      {
        title: "Write messages and replies",
        body: "We draft request messages and response guidelines in your voice for your approval.",
      },
      {
        title: "Launch and report",
        body: "We launch the automation, monitor delivery and responses, and report on review activity each month.",
      },
    ],
    deliverables: [
      "Review profile audit",
      "Automated review requests by text and email",
      "Direct review links for Google and other key platforms",
      "Single follow-up reminder sequence",
      "AI-drafted review responses for approval",
      "Negative review alerts",
      "Monthly reputation summary",
    ],
    faqs: [
      {
        q: "Is it allowed to ask customers for reviews?",
        a: "Yes, asking customers for honest reviews is generally fine. What platforms like Google prohibit includes offering incentives for reviews, posting fake reviews, and selectively soliciting positive reviews. We design request flows to follow platform policies.",
      },
      {
        q: "Do you filter out unhappy customers before they leave a review?",
        a: "No. Review gating, which steers only satisfied customers to public review sites, conflicts with Google's policies. We send the same request to every customer and alert you to negative feedback so you can respond and resolve it.",
      },
      {
        q: "Will AI post review responses automatically?",
        a: "By default, AI drafts responses and a person approves them before posting. You can choose to auto-post replies to simple positive reviews if you prefer.",
      },
      {
        q: "Which review platforms do you support?",
        a: "We focus on Google first because of its role in local search, and can include other platforms relevant to your industry, such as Facebook, Yelp, or industry-specific directories, where their tools allow it.",
      },
      {
        q: "How do reviews affect AI search?",
        a: "AI assistants that describe local businesses often draw on public information such as Google Business Profile data and reviews. A steady stream of genuine, detailed reviews gives these systems more accurate information about your business, although no one can control exactly what they say.",
      },
    ],
    relatedIndustries: ["auto-repair", "cleaning-services", "pest-control", "dental", "landscaping", "roofing"],
    keywords: [
      "review automation software",
      "how to get more google reviews",
      "reputation management for small business",
      "automated review requests",
      "ai review response",
    ],
  },
];

// Custom software + strategy lead the list: they're the broadest offers.
export const SERVICES: Service[] = [
  ...MORE_SERVICES.filter((s) => s.slug === "ai-strategy"),
  BASE_SERVICES.find((s) => s.slug === "ai-automation")!,
  ...MORE_SERVICES.filter((s) => s.slug === "custom-ai-software"),
  ...BASE_SERVICES.filter((s) => s.slug !== "ai-automation"),
];
