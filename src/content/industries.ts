import type { Industry } from "./types";
import { MORE_INDUSTRIES } from "./industries-more";

const BASE_INDUSTRIES: Industry[] = [
  // ---------------------------------------------------------------------------
  // HVAC
  // ---------------------------------------------------------------------------
  {
    slug: "hvac",
    name: "HVAC",
    audience: "HVAC companies",
    metaTitle: "AI Automation for HVAC Companies | Automatix",
    metaDescription:
      "AI receptionists, missed-call text-back and dispatch automation for HVAC companies. Book more jobs during heat waves and cold snaps without hiring more CSRs.",
    headline: "AI Automation for HVAC Companies: Book Every Call, Even in Peak Season",
    answer:
      "AI helps an HVAC business by answering every call and text 24/7, booking service calls straight into your scheduling software, triaging after-hours emergencies, and following up on estimates and maintenance-agreement renewals automatically. That means fewer missed jobs during heat waves and cold snaps, less office overtime, and more time for owners to run crews and grow.",
    painPoints: [
      {
        title: "Seasonal call spikes swamp the office",
        body: "The first hot week of summer or the first freeze of winter can bury your CSRs. Calls go to voicemail, and many of those homeowners simply call the next company on Google.",
      },
      {
        title: "After-hours emergencies go unanswered or overpaid",
        body: "No-heat and no-cool calls come in at night and on weekends. You either pay an answering service that just takes messages, or the on-call tech gets woken up for calls that could have waited until morning.",
      },
      {
        title: "Maintenance agreements quietly lapse",
        body: "Club memberships and tune-up plans are recurring revenue, but renewal reminders and seasonal tune-up scheduling often fall through the cracks when the office is busy.",
      },
      {
        title: "Replacement estimates go cold",
        body: "System replacement quotes are big-ticket decisions. Without consistent follow-up, homeowners shop around and the job goes to whoever called back last.",
      },
    ],
    automations: [
      {
        title: "24/7 AI receptionist that books service calls",
        body: "An AI voice agent answers in your company name, collects the address, equipment issue and availability, and books the appointment into your field service software or hands it to a dispatcher.",
      },
      {
        title: "After-hours emergency triage",
        body: "The AI asks a short set of questions you define (no heat, no cooling, water leak, gas smell) and routes true emergencies to the on-call tech while scheduling routine calls for the next business day.",
      },
      {
        title: "Missed-call text-back",
        body: "If a call is missed, the caller gets a text within seconds offering to book online or by reply, so they are less likely to move on to a competitor.",
      },
      {
        title: "Maintenance-agreement renewals and tune-up scheduling",
        body: "Automated texts and emails remind members before their plan expires and prompt them to book spring and fall tune-ups, filling slower weeks on the calendar.",
      },
      {
        title: "Estimate follow-up sequences",
        body: "After a replacement or install quote is sent, a timed series of texts and emails checks in, answers common questions and offers a quick call with the comfort advisor.",
      },
      {
        title: "Review requests after completed jobs",
        body: "When a job is marked complete, customers get a short text asking for a Google review, helping your Google Business Profile stay active and current.",
      },
    ],
    exampleMath: {
      title: "Example: what 5 missed calls a week can cost",
      body: "For example, if your shop misses 5 calls a week, 2 of those callers would have booked, and your average service ticket is $350, that is about $700 a week, or roughly $36,400 a year, in jobs that may go to competitors. These numbers are illustrative assumptions only; plug in your own call volume, booking rate and ticket size.",
    },
    tools: [
      "ServiceTitan",
      "Housecall Pro",
      "Jobber",
      "FieldEdge",
      "Google Business Profile",
      "QuickBooks",
      "Twilio",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for an HVAC company?",
        a: "Cost depends on how many workflows you want and which software we connect to. Most HVAC shops start with an AI receptionist and missed-call text-back, then add follow-up and renewals. We give you a fixed quote after a short discovery call so you know the price before any work begins.",
      },
      {
        q: "Will my customers know they are talking to AI?",
        a: "We recommend being upfront, and the AI can introduce itself as your virtual assistant. It speaks naturally, uses your company name and can transfer to a person whenever a caller asks or the situation needs a human.",
      },
      {
        q: "Does it work with ServiceTitan, Housecall Pro or Jobber?",
        a: "We can connect with common field service platforms like ServiceTitan, Housecall Pro, Jobber and FieldEdge, typically through their APIs or tools like Zapier or Make. The exact level of integration depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Can the AI handle emergency calls after hours?",
        a: "Yes. You decide which situations count as emergencies, and the AI follows those rules to reach your on-call tech right away. Anything that is not urgent gets booked for the next available slot instead of waking someone up.",
      },
      {
        q: "How long does setup take?",
        a: "A focused setup like an AI receptionist with missed-call text-back can often go live in a couple of weeks. Larger projects with several integrations take longer, and we test with real call scenarios before switching anything on.",
      },
      {
        q: "Will this replace my CSRs or dispatchers?",
        a: "It is designed to take repetitive calls and follow-ups off their plate, not to replace good people. Most owners use it to cover overflow, after-hours and peak-season volume so the team can focus on customers who need a human touch.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "ai-automation", "review-automation"],
    keywords: [
      "AI automation for HVAC companies",
      "AI receptionist for HVAC",
      "HVAC answering service AI",
      "HVAC missed call text back",
      "HVAC maintenance agreement automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Plumbing
  // ---------------------------------------------------------------------------
  {
    slug: "plumbing",
    name: "Plumbing",
    audience: "plumbing companies",
    metaTitle: "AI Automation for Plumbing Companies | Automatix",
    metaDescription:
      "AI receptionists for plumbers that answer emergency calls 24/7, book jobs into your software and follow up on quotes, so fewer leaks turn into lost revenue.",
    headline: "AI Receptionist and Automation for Plumbers Who Can't Stop to Answer the Phone",
    answer:
      "AI helps a plumbing business by answering calls while your plumbers are under a sink, triaging burst pipes and backups after hours, booking jobs directly into your scheduling software, and following up on water heater and repipe quotes. You capture more urgent work, cut answering-service costs, and keep the office focused on dispatch and billing.",
    painPoints: [
      {
        title: "Plumbers can't answer with their hands full",
        body: "Owner-operators and small crews often miss calls while on a job. Customers with a leak rarely leave a voicemail; they call the next plumber.",
      },
      {
        title: "Emergency calls at all hours",
        body: "Burst pipes, sewer backups and no-hot-water calls come in nights and weekends. Sorting real emergencies from routine requests is hard for a basic answering service.",
      },
      {
        title: "Big quotes stall without follow-up",
        body: "Water heater replacements, repipes and sewer line jobs often need a few touches before the customer says yes, and busy offices rarely have time to chase them.",
      },
      {
        title: "Too much time on scheduling back-and-forth",
        body: "Confirming arrival windows, rescheduling and answering where-is-my-plumber calls eats into office time that could go to billing and dispatch.",
      },
    ],
    automations: [
      {
        title: "AI phone answering with job booking",
        body: "The AI answers in your business name, gathers the problem, address and access details, and books into your schedule or passes a clean summary to dispatch.",
      },
      {
        title: "Emergency triage and on-call routing",
        body: "Using rules you set, the AI identifies urgent issues like active leaks or sewage backups and connects them to your on-call plumber, while routine requests get scheduled.",
      },
      {
        title: "Missed-call text-back",
        body: "Every missed call gets an immediate text so the customer can describe the issue and book, even if you are mid-job.",
      },
      {
        title: "Quote follow-up for water heaters, repipes and sewer work",
        body: "Automated texts and emails follow up on open estimates, answer common questions, and offer to book the job or a quick call.",
      },
      {
        title: "Appointment reminders and on-my-way texts",
        body: "Customers get reminders before their window and an update when the plumber is heading over, reducing calls to the office and no-access visits.",
      },
      {
        title: "Post-job review requests",
        body: "After a completed job, customers receive a short review request link to help keep your Google Business Profile reviews fresh.",
      },
    ],
    exampleMath: {
      title: "Example: what 4 missed emergency calls a week can cost",
      body: "For example, if you miss 4 calls a week, half of them are emergency jobs you could have booked, and an emergency visit averages $450, that is about $900 a week, or roughly $46,800 a year, in work going elsewhere. These figures are illustrative assumptions; your own numbers will differ.",
    },
    tools: [
      "ServiceTitan",
      "Housecall Pro",
      "Jobber",
      "FieldEdge",
      "Google Business Profile",
      "QuickBooks",
    ],
    faqs: [
      {
        q: "How much does an AI receptionist cost for a plumbing company?",
        a: "Pricing depends on call volume, how many workflows you add and which software we connect to. We scope it on a short call and give a fixed quote up front. Many plumbers compare it to what they spend on an answering service or a part-time office hire.",
      },
      {
        q: "Will customers know they are talking to AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It sounds natural, uses your business name, and can transfer the caller to you or your office whenever they ask for a person.",
      },
      {
        q: "Can it tell a real emergency from a routine call?",
        a: "It follows the triage questions and rules you approve, such as whether water is actively leaking or a drain is backing up. When a call meets your emergency criteria, it routes to your on-call plumber right away.",
      },
      {
        q: "Does it work with my scheduling software?",
        a: "We can connect with common tools like ServiceTitan, Housecall Pro, Jobber and FieldEdge, usually through their APIs or automation platforms like Zapier or Make. What is possible varies by platform and plan, and we confirm that before you commit.",
      },
      {
        q: "How quickly can I get set up?",
        a: "A basic AI receptionist with missed-call text-back can often be live in a couple of weeks. We test it with realistic plumbing call scenarios and adjust the script before it answers real customers.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI receptionist for plumbers",
      "AI automation for plumbing companies",
      "plumbing answering service AI",
      "24/7 answering service for plumbers",
      "missed call text back for plumbers",
    ],
  },

  // ---------------------------------------------------------------------------
  // Electrical
  // ---------------------------------------------------------------------------
  {
    slug: "electrical",
    name: "Electrical",
    audience: "electrical contractors",
    metaTitle: "AI Automation for Electrical Contractors | Automatix",
    metaDescription:
      "AI automation for electricians: answer every call, qualify panel upgrade and EV charger leads, book estimates and follow up on bids without adding office staff.",
    headline: "AI Automation for Electricians: Qualify Leads and Book Estimates Automatically",
    answer:
      "AI helps an electrical contracting business by answering calls and web leads instantly, asking qualifying questions about panel upgrades, EV chargers, generators and service calls, booking estimates into your calendar, and following up on open bids. Your electricians stay on the tools while the AI handles intake, reminders and the repetitive office work.",
    painPoints: [
      {
        title: "Calls missed while electricians are on the job",
        body: "Small electrical shops often have the owner or lead electrician answering the phone. Every call missed on a jobsite is a potential lead lost.",
      },
      {
        title: "Unqualified estimate requests waste drive time",
        body: "Without basic questions up front, like panel size, home age or permit needs, you can spend hours on site visits that never turn into work.",
      },
      {
        title: "Bids for bigger jobs go unanswered",
        body: "Panel upgrades, EV charger installs, generator installs and remodel wiring often need follow-up before the customer commits, and that follow-up gets skipped when the schedule is full.",
      },
      {
        title: "Permit and inspection coordination eats time",
        body: "Keeping customers updated on permit status and inspection dates creates a stream of calls and texts that pull you off billable work.",
      },
    ],
    automations: [
      {
        title: "AI receptionist for service and estimate calls",
        body: "The AI answers every call, separates service calls from project estimates, and books the right appointment type in your calendar or field service software.",
      },
      {
        title: "Lead qualification for panels, EV chargers and generators",
        body: "Web forms and calls get a short set of questions about the home, existing panel and project goals, so you show up prepared or can quote remotely when it makes sense.",
      },
      {
        title: "Instant response to web and ad leads",
        body: "New leads from your website, Google or lead platforms get a text and email within moments, with a link to book an estimate.",
      },
      {
        title: "Bid follow-up sequences",
        body: "Open estimates trigger timed check-ins that answer common questions and make it easy to approve the job or ask for a call.",
      },
      {
        title: "Permit and inspection status updates",
        body: "When you update a job stage, customers automatically get a plain-English text about what is next, cutting down on status-check calls.",
      },
      {
        title: "Review requests after job completion",
        body: "Completed jobs trigger a polite review request to help build your presence on Google.",
      },
    ],
    exampleMath: {
      title: "Example: what slow follow-up on 10 bids a month can cost",
      body: "For example, if you send 10 panel upgrade or EV charger bids a month at an average of $2,500, and consistent follow-up helps you close just 1 more of them, that is $2,500 a month, or $30,000 a year, in added revenue. This is an illustrative scenario, not a promised result.",
    },
    tools: [
      "ServiceTitan",
      "Housecall Pro",
      "Jobber",
      "Google Business Profile",
      "QuickBooks",
      "Zapier",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for an electrical contractor?",
        a: "It depends on which workflows you need and which systems we connect. Many electricians start with an AI receptionist and lead follow-up. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "Can the AI give customers price quotes?",
        a: "We generally recommend the AI share only ranges or starting prices you approve, and leave final pricing to you. Electrical work varies too much by site to quote blindly, so the AI focuses on gathering details and booking the estimate.",
      },
      {
        q: "Will customers know it is AI?",
        a: "The AI can introduce itself as your virtual assistant, and we recommend that transparency. It speaks naturally and transfers to you or your office whenever a caller asks for a person.",
      },
      {
        q: "Does it integrate with my field service software?",
        a: "We can connect with tools like ServiceTitan, Housecall Pro and Jobber, usually through their APIs or automation platforms such as Zapier or Make. We confirm what your specific platform and plan support before starting.",
      },
      {
        q: "How long until it is live?",
        a: "A basic setup, such as an AI receptionist plus instant lead response, can often go live in a couple of weeks. More complex projects with several integrations take longer, and we test everything before it touches real customers.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "ai-automation", "website-refresh"],
    keywords: [
      "AI automation for electricians",
      "AI receptionist for electrical contractors",
      "electrician answering service AI",
      "electrical contractor lead follow up",
      "AI for electrical business",
    ],
  },

  // ---------------------------------------------------------------------------
  // Roofing
  // ---------------------------------------------------------------------------
  {
    slug: "roofing",
    name: "Roofing",
    audience: "roofing companies",
    metaTitle: "AI Automation for Roofing Companies | Automatix",
    metaDescription:
      "AI automation for roofers: instant lead response, inspection booking after storms, estimate follow-up and insurance-claim updates that keep homeowners informed.",
    headline: "AI Automation for Roofing Companies: Respond First, Book More Inspections",
    answer:
      "AI helps a roofing business by responding to new leads within seconds, booking roof inspections around your crews, handling storm-driven call surges, following up on estimates, and keeping homeowners updated through insurance claims and production. You win more of the leads you already pay for and spend less time chasing homeowners by phone.",
    painPoints: [
      {
        title: "Storm surges overwhelm the phones",
        body: "After hail or wind events, call and form volume can jump overnight. Leads that wait hours for a callback often book with whoever responded first.",
      },
      {
        title: "Expensive leads go cold",
        body: "Roofing leads from ads and lead platforms cost real money. Slow or inconsistent response wastes a large share of that spend.",
      },
      {
        title: "Long sales cycles need steady follow-up",
        body: "Replacement decisions can take weeks, especially when insurance is involved. Without a system, follow-up depends on how busy your sales reps are.",
      },
      {
        title: "Homeowners constantly ask for status",
        body: "Between adjuster meetings, material delivery and install dates, homeowners call often for updates, tying up project managers.",
      },
    ],
    automations: [
      {
        title: "Instant lead response and inspection booking",
        body: "New web, ad and phone leads get an immediate text or call that asks a few qualifying questions and books an inspection on your calendar.",
      },
      {
        title: "Storm-surge AI receptionist",
        body: "During high-volume periods, the AI answers every call, collects address and damage details, and schedules inspections so nothing sits in voicemail.",
      },
      {
        title: "Estimate and proposal follow-up",
        body: "After a proposal is sent, a timed sequence of texts and emails checks in, answers common questions about materials and timelines, and offers a call with your rep.",
      },
      {
        title: "Insurance claim and production updates",
        body: "When a job moves stages, like adjuster scheduled, materials ordered or install date set, homeowners get an automatic plain-English update.",
      },
      {
        title: "Old lead and past customer reactivation",
        body: "Campaigns reach out to past estimates that never closed and past customers due for an inspection, especially after a storm in their area.",
      },
      {
        title: "Review and referral requests",
        body: "After the final walkthrough, homeowners get a review request and an easy way to refer neighbors.",
      },
    ],
    exampleMath: {
      title: "Example: what faster lead response could be worth",
      body: "For example, if you get 40 leads a month and faster response helps you book just 2 more inspections, and 1 of those turns into a $12,000 roof replacement, that is $12,000 a month in added revenue. This is an illustrative scenario only; your close rates and job sizes will vary.",
    },
    tools: [
      "AccuLynx",
      "JobNimbus",
      "Roofr",
      "CompanyCam",
      "HubSpot",
      "GoHighLevel",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a roofing company?",
        a: "It depends on lead volume, which workflows you want and which CRM we connect to. We scope your setup on a short call and give a fixed quote before any work begins.",
      },
      {
        q: "Does it work with AccuLynx or JobNimbus?",
        a: "We can connect with roofing CRMs like AccuLynx and JobNimbus, as well as tools like HubSpot and GoHighLevel, typically through APIs or Zapier and Make. Integration depth depends on your platform and plan, which we confirm up front.",
      },
      {
        q: "Can the AI handle a storm surge of calls?",
        a: "Yes. An AI receptionist can answer many calls at once, so a spike after a hail or wind event does not mean callers hit voicemail. It collects the details your team needs and books inspections based on your availability.",
      },
      {
        q: "Will homeowners know they are dealing with AI?",
        a: "We recommend the AI identify itself as your virtual assistant. It speaks and texts naturally, and it hands the conversation to your team whenever a homeowner wants a person.",
      },
      {
        q: "Can it talk to homeowners about insurance claims?",
        a: "It can share status updates and general process information you approve, but it should not give insurance or legal advice. We set it up to route claim-specific questions to your team.",
      },
      {
        q: "How long does setup take?",
        a: "Instant lead response and inspection booking can often go live in a couple of weeks. Larger builds with production updates and reactivation campaigns take longer and are rolled out in phases.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for roofing companies",
      "roofing lead follow up automation",
      "AI receptionist for roofers",
      "roofing CRM automation",
      "roofing lead response",
    ],
  },

  // ---------------------------------------------------------------------------
  // Landscaping
  // ---------------------------------------------------------------------------
  {
    slug: "landscaping",
    name: "Landscaping",
    audience: "landscaping companies",
    metaTitle: "AI Automation for Landscaping Companies | Automatix",
    metaDescription:
      "AI automation for landscapers: answer quote requests fast, book estimates, renew seasonal contracts and upsell services while your crews stay in the field.",
    headline: "AI Automation for Landscaping Companies: Fill the Route Without Living on the Phone",
    answer:
      "AI helps a landscaping business by responding to quote requests instantly, booking property walk-throughs, sending seasonal renewal and upsell offers like aeration, mulch and leaf cleanup, and handling rain-delay notices automatically. Owners spend less time on the phone and paperwork, and more time running crews and growing recurring maintenance contracts.",
    painPoints: [
      {
        title: "Spring rush buries the office",
        body: "Quote requests pile up at the start of the season, right when owners and crew leads are busiest in the field. Slow replies mean lost contracts.",
      },
      {
        title: "Seasonal contracts are not renewed proactively",
        body: "Recurring maintenance customers often need a nudge to renew each year. Without reminders, some quietly drift to another provider.",
      },
      {
        title: "Upsells are left on the table",
        body: "Aeration, overseeding, mulch, cleanups and snow removal are easy add-ons, but only if someone remembers to offer them at the right time.",
      },
      {
        title: "Weather changes create a flood of messages",
        body: "Rain delays and reschedules mean calling or texting dozens of customers, often at the last minute.",
      },
    ],
    automations: [
      {
        title: "Instant quote-request response",
        body: "New inquiries from your website, Google or social get an immediate reply that asks about property size and services, then books a walk-through or sends next steps.",
      },
      {
        title: "AI receptionist for calls and texts",
        body: "The AI answers common questions, collects property details and books estimates while your team is on the mower.",
      },
      {
        title: "Seasonal renewal campaigns",
        body: "Before each season, existing customers get a reminder to renew their maintenance plan with an easy way to confirm or ask questions.",
      },
      {
        title: "Timed upsell offers",
        body: "Automated campaigns offer aeration and overseeding in fall, mulch and cleanups in spring, and snow services before winter, based on what each customer already buys.",
      },
      {
        title: "Weather delay and reschedule notices",
        body: "When you push a route, affected customers get an automatic text with the new expected date, cutting down on calls.",
      },
      {
        title: "Invoice reminders and review requests",
        body: "Unpaid invoices get polite reminders, and happy customers get a review request after a completed project.",
      },
    ],
    exampleMath: {
      title: "Example: what renewal reminders could protect",
      body: "For example, if you have 150 maintenance customers averaging $1,800 a season and automated reminders help keep just 5 more of them from lapsing, that is $9,000 in retained revenue for the season. These numbers are illustrative assumptions, not a guarantee.",
    },
    tools: [
      "Jobber",
      "LMN",
      "Aspire",
      "Service Autopilot",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a landscaping company?",
        a: "Cost depends on which workflows you choose and which software we connect. Many landscapers start with instant quote response and seasonal renewals. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with Jobber, LMN or Aspire?",
        a: "We can connect with common landscaping platforms like Jobber, LMN, Aspire and Service Autopilot, usually through their APIs or tools like Zapier and Make. What is possible depends on your platform and plan, which we check first.",
      },
      {
        q: "Can the AI give price estimates?",
        a: "It can share starting prices or ranges you approve for simple services like mowing. For larger projects, it gathers property details and books a walk-through so you can quote accurately.",
      },
      {
        q: "Will customers know it is AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It communicates naturally and passes the conversation to a person whenever a customer asks.",
      },
      {
        q: "How long does it take to set up?",
        a: "Quote response and an AI receptionist can often be live in a couple of weeks, ideally before your busy season starts. Renewal and upsell campaigns can be added in the following weeks.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "ai-automation", "review-automation"],
    keywords: [
      "AI automation for landscaping companies",
      "landscaping lead follow up",
      "AI receptionist for landscapers",
      "landscaping business automation",
      "lawn care customer automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Cleaning services
  // ---------------------------------------------------------------------------
  {
    slug: "cleaning-services",
    name: "Cleaning Services",
    audience: "cleaning companies",
    metaTitle: "AI Automation for Cleaning Companies | Automatix",
    metaDescription:
      "AI automation for cleaning companies: instant quotes, online booking, recurring-client follow-up, visit reminders and review requests to keep schedules full.",
    headline: "AI Automation for Cleaning Companies: Quote, Book and Rebook on Autopilot",
    answer:
      "AI helps a cleaning business by answering quote requests instantly, collecting home size and service details, booking cleanings into your schedule, sending reminders that reduce lockouts and cancellations, and following up to turn one-time cleans into recurring clients. Owners spend less time texting back and forth and more time managing teams and quality.",
    painPoints: [
      {
        title: "Quote requests need answers fast",
        body: "People shopping for a cleaner often contact several companies at once. The first one to reply with a clear price and open slot usually wins.",
      },
      {
        title: "Endless back-and-forth to book",
        body: "Collecting bedrooms, bathrooms, pets, access instructions and preferred times by text takes hours each week.",
      },
      {
        title: "Lockouts and last-minute cancellations",
        body: "When clients forget an appointment, your team arrives to a locked door and loses paid time.",
      },
      {
        title: "One-time cleans rarely convert to recurring",
        body: "Move-out and deep-clean customers are a great source of recurring clients, but only with timely follow-up.",
      },
    ],
    automations: [
      {
        title: "Instant quote and booking assistant",
        body: "An AI assistant on your website, phone and text collects home details and service type, shares pricing you approve, and books the cleaning.",
      },
      {
        title: "Appointment reminders with access confirmations",
        body: "Clients get reminders before each visit that confirm entry instructions, pets and parking, reducing lockouts.",
      },
      {
        title: "One-time to recurring follow-up",
        body: "After a deep clean or move-out clean, an automated sequence offers a recurring plan at the right moment.",
      },
      {
        title: "Missed-call text-back",
        body: "Any missed call gets an immediate text so the prospect can get a quote without waiting for a callback.",
      },
      {
        title: "Review requests and issue catching",
        body: "After each clean, clients get a quick check-in. Happy clients are invited to leave a review, and any complaints go straight to you to fix.",
      },
      {
        title: "Commercial bid follow-up",
        body: "Office and commercial walkthroughs trigger follow-up emails with your proposal and a simple way to approve or ask questions.",
      },
    ],
    exampleMath: {
      title: "Example: what converting a few more one-time cleans could add",
      body: "For example, if you do 30 one-time cleans a month and automated follow-up converts 3 more of them into clients who book twice a month at $150 a visit, that is $900 a month in new recurring revenue, or roughly $10,800 a year. These are illustrative assumptions only.",
    },
    tools: [
      "Jobber",
      "Housecall Pro",
      "Launch27",
      "BookingKoala",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a cleaning company?",
        a: "It depends on the workflows you want and the tools we connect. Many cleaning companies start with instant quoting and reminders. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "Can the AI give accurate quotes?",
        a: "It quotes using pricing rules you define, such as rates by bedrooms, bathrooms and service type. For anything outside those rules, like heavy move-out jobs or commercial spaces, it collects details and hands off to you.",
      },
      {
        q: "Does it work with my booking software?",
        a: "We can connect with tools like Jobber, Housecall Pro, Launch27 and BookingKoala, usually through APIs or Zapier and Make. We confirm what your specific setup supports before we start.",
      },
      {
        q: "Will clients know they are chatting with AI?",
        a: "We recommend the assistant introduce itself as your virtual assistant. It communicates naturally and hands off to a person whenever a client asks.",
      },
      {
        q: "How long does setup take?",
        a: "A quoting and booking assistant with reminders can often go live in a couple of weeks. We test it on realistic requests before it talks to real clients.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for cleaning companies",
      "cleaning business automation",
      "AI booking for cleaning services",
      "house cleaning lead follow up",
      "AI receptionist for cleaning company",
    ],
  },

  // ---------------------------------------------------------------------------
  // Pest control
  // ---------------------------------------------------------------------------
  {
    slug: "pest-control",
    name: "Pest Control",
    audience: "pest control companies",
    metaTitle: "AI Automation for Pest Control Companies | Automatix",
    metaDescription:
      "AI automation for pest control: answer calls 24/7, book inspections, turn one-time treatments into recurring plans and cut cancellations with smart follow-up.",
    headline: "AI Automation for Pest Control: Turn Urgent Calls Into Recurring Plans",
    answer:
      "AI helps a pest control business by answering calls and texts 24/7, identifying the pest problem and booking inspections, sending pre-treatment prep instructions, following up to convert one-time services into quarterly plans, and reaching out before customers cancel. You capture more urgent calls and build steadier recurring revenue with less office work.",
    painPoints: [
      {
        title: "Urgent callers will not wait",
        body: "Someone with wasps, rodents or bed bugs wants help now. If you do not answer, they call the next company.",
      },
      {
        title: "Seasonal spikes strain the office",
        body: "Spring and summer bring sharp increases in calls for ants, mosquitoes and stinging insects, often more than a small office can handle.",
      },
      {
        title: "One-time treatments do not become plans",
        body: "Recurring service plans are the core of a healthy pest business, but converting one-time customers takes consistent follow-up.",
      },
      {
        title: "Prep instructions get missed",
        body: "When customers do not prepare properly for treatments like bed bugs or roaches, visits get delayed or results suffer.",
      },
    ],
    automations: [
      {
        title: "AI receptionist with pest identification questions",
        body: "The AI asks what the customer is seeing, where and for how long, then books the right service type and passes a clear summary to your team.",
      },
      {
        title: "Missed-call text-back",
        body: "Missed calls get an instant text so urgent customers can describe the problem and book without waiting.",
      },
      {
        title: "Pre-treatment prep instructions",
        body: "Before each service, customers automatically receive your prep checklist and a reminder, with a way to ask questions.",
      },
      {
        title: "One-time to recurring plan conversion",
        body: "After a one-time treatment, a timed follow-up explains your quarterly or monthly plan and makes it easy to sign up.",
      },
      {
        title: "Cancellation save and win-back",
        body: "When a customer signals they want to cancel or a plan lapses, automated outreach checks in and routes them to your team to address concerns.",
      },
      {
        title: "Review requests after service",
        body: "Satisfied customers get an easy review link after each visit to strengthen your Google presence.",
      },
    ],
    exampleMath: {
      title: "Example: what converting more one-time customers could add",
      body: "For example, if you perform 40 one-time treatments a month and follow-up converts 4 more into quarterly plans at $125 per visit, each new plan is worth $500 a year, so one month of conversions adds about $2,000 in annual recurring revenue. These are illustrative assumptions only.",
    },
    tools: [
      "PestPac",
      "GorillaDesk",
      "FieldRoutes",
      "Jobber",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a pest control company?",
        a: "Pricing depends on call volume, workflows and the software we connect to. We scope it on a short call and provide a fixed quote before starting.",
      },
      {
        q: "Does it work with PestPac, FieldRoutes or GorillaDesk?",
        a: "We can connect with common pest control platforms like PestPac, FieldRoutes and GorillaDesk, typically through APIs or tools like Zapier and Make. Integration options vary by platform and plan, so we confirm them during discovery.",
      },
      {
        q: "Can the AI give advice about pesticides or safety?",
        a: "We set it up to share only general information you approve, like prep instructions, and to route questions about chemicals, health concerns or safety to your licensed technicians.",
      },
      {
        q: "Will customers know it is AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It speaks naturally and transfers callers to a person whenever they ask.",
      },
      {
        q: "How fast can it be set up?",
        a: "An AI receptionist with missed-call text-back can often go live in a couple of weeks. Plan conversion and win-back campaigns can be layered on after that.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for pest control companies",
      "AI receptionist for pest control",
      "pest control answering service",
      "pest control customer retention automation",
      "pest control lead follow up",
    ],
  },

  // ---------------------------------------------------------------------------
  // Dental
  // ---------------------------------------------------------------------------
  {
    slug: "dental",
    name: "Dental",
    audience: "dental practices",
    metaTitle: "AI Automation for Dental Practices | Automatix",
    metaDescription:
      "AI automation for dental offices: answer calls, book new patients, run recall and reactivation, gather insurance details and cut no-shows with smart reminders.",
    headline: "AI Automation for Dental Practices: Fuller Schedules, Lighter Front Desk",
    answer:
      "AI helps a dental practice by answering calls when the front desk is busy, booking new-patient appointments, running recall and reactivation outreach for overdue patients, collecting insurance details before visits, and sending reminders that reduce no-shows. Your team spends less time on the phone and more time caring for the patients in the chair.",
    painPoints: [
      {
        title: "Front desk can't answer every call",
        body: "When the team is checking patients in and out, phones ring through to voicemail. New patients who reach voicemail often try another practice.",
      },
      {
        title: "Overdue recall patients slip away",
        body: "Patients who are past due for hygiene visits are easy to lose track of, and manual recall calls are one of the first tasks dropped on busy days.",
      },
      {
        title: "Insurance verification eats staff time",
        body: "Gathering subscriber details, member IDs and plan information before appointments takes time and leads to surprises at checkout when it is missed.",
      },
      {
        title: "No-shows and late cancellations leave gaps",
        body: "Empty chairs cost production, and backfilling short-notice openings by phone is slow.",
      },
      {
        title: "Treatment plans go unscheduled",
        body: "Patients often leave with recommended treatment but never book, and follow-up calls are inconsistent.",
      },
    ],
    automations: [
      {
        title: "AI receptionist for overflow and after-hours calls",
        body: "The AI answers when your team is busy or the office is closed, handles common questions, and books or requests appointments based on your rules.",
      },
      {
        title: "Recall and reactivation campaigns",
        body: "Overdue hygiene and lapsed patients get friendly texts and emails inviting them to book, with a direct link to available times.",
      },
      {
        title: "Insurance detail collection before visits",
        body: "New and returning patients receive a secure form to submit insurance information ahead of time, so your team can verify eligibility before the appointment.",
      },
      {
        title: "Appointment reminders and confirmations",
        body: "Multi-step reminders by text and email ask patients to confirm, and flag unconfirmed appointments for your team.",
      },
      {
        title: "Short-notice opening fill",
        body: "When a cancellation opens a slot, the system can text patients on your waitlist so the chair is more likely to be filled.",
      },
      {
        title: "Unscheduled treatment follow-up",
        body: "Patients with pending treatment plans receive gentle reminders and an easy way to book or ask questions.",
      },
      {
        title: "Post-visit review requests",
        body: "After appointments, patients get a short review request to help your practice's Google Business Profile.",
      },
    ],
    exampleMath: {
      title: "Example: what reactivating overdue patients could be worth",
      body: "For example, if your practice has 400 patients overdue for hygiene and a reactivation campaign brings back 5% of them, that is 20 visits. At an illustrative $200 per hygiene visit, that is about $4,000 in production, before any follow-on treatment. These numbers are assumptions for illustration only.",
    },
    tools: [
      "Dentrix",
      "Open Dental",
      "Eaglesoft",
      "Weave",
      "Google Business Profile",
      "Twilio",
    ],
    faqs: [
      {
        q: "Is AI automation HIPAA compliant for dental offices?",
        a: "We configure workflows using HIPAA-appropriate tools and sign Business Associate Agreements where the vendors involved support them. We also limit what patient information flows through each step. Your practice remains responsible for its overall HIPAA program, and we design around your policies.",
      },
      {
        q: "Does it work with Dentrix, Open Dental or Eaglesoft?",
        a: "We can connect with common practice management systems like Dentrix, Open Dental and Eaglesoft, often through their APIs or approved third-party connectors. What can be automated varies by system and version, which we confirm during discovery.",
      },
      {
        q: "How much does AI automation cost for a dental practice?",
        a: "Pricing depends on the workflows you choose, such as AI phone answering, recall campaigns or reminders, and the systems we connect. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "Will patients know they are talking to AI?",
        a: "We recommend the AI introduce itself as the practice's virtual assistant. It can answer routine questions and book appointments, and it transfers to your team for anything clinical or sensitive.",
      },
      {
        q: "Can the AI answer clinical questions?",
        a: "No. We set it up to avoid giving clinical advice and to route clinical questions or dental emergencies to your team or your after-hours protocol.",
      },
      {
        q: "How long does setup take?",
        a: "Reminders and recall campaigns can often launch in a few weeks. AI phone answering connected to your practice management system usually takes longer because of integration and testing.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "review-automation", "lead-follow-up"],
    keywords: [
      "AI automation for dental practices",
      "AI receptionist for dental office",
      "dental patient reactivation automation",
      "dental recall automation",
      "reduce dental no-shows",
      "HIPAA compliant AI for dentists",
    ],
  },

  // ---------------------------------------------------------------------------
  // Law firms
  // ---------------------------------------------------------------------------
  {
    slug: "law-firms",
    name: "Law Firms",
    audience: "law firms",
    metaTitle: "AI Automation for Law Firms | Automatix",
    metaDescription:
      "AI automation for small law firms: 24/7 intake, lead qualification, conflict-check data gathering, consultation scheduling and follow-up built for ethics rules.",
    headline: "AI Automation for Law Firms: Faster Intake, Fewer Lost Consultations",
    answer:
      "AI helps a law firm by answering inquiries 24/7, asking intake questions to qualify potential clients by practice area, gathering the names needed for conflict checks, scheduling consultations, and following up with prospects who have not booked or signed. Attorneys spend less time on unqualified calls, and staff spend less time on repetitive intake work.",
    painPoints: [
      {
        title: "Potential clients call other firms first",
        body: "People with legal problems often contact several firms. If your phone goes to voicemail after hours or during court, they may retain someone else.",
      },
      {
        title: "Unqualified inquiries eat attorney time",
        body: "Calls about matters outside your practice area or jurisdiction still take time to screen.",
      },
      {
        title: "Conflict-check information is gathered inconsistently",
        body: "Staff need the names of adverse parties and related individuals before a consultation, and collecting them by phone is slow and error-prone.",
      },
      {
        title: "Consultation scheduling takes too many messages",
        body: "Finding a time that works for both the attorney and the prospect often takes several emails or calls.",
      },
    ],
    automations: [
      {
        title: "24/7 AI intake for calls and web forms",
        body: "An AI assistant answers inquiries at any hour, collects contact details and a summary of the matter, and logs everything to your practice management or intake system.",
      },
      {
        title: "Practice-area and jurisdiction qualification",
        body: "Intake questions you approve screen for practice area, location and key facts, so qualified leads are prioritized and others are politely referred out.",
      },
      {
        title: "Conflict-check data gathering",
        body: "The assistant collects names of opposing parties and related individuals so your team can run conflict checks before the consultation. The attorney still makes all conflict decisions.",
      },
      {
        title: "Consultation scheduling",
        body: "Qualified prospects can book directly on the attorney's calendar, with reminders and any intake forms sent automatically.",
      },
      {
        title: "Prospect follow-up",
        body: "Prospects who did not book or have not signed an engagement letter receive timed, professional follow-ups that your firm approves.",
      },
      {
        title: "Document request reminders for new clients",
        body: "Once engaged, clients receive reminders to upload requested documents, reducing chasing by paralegals.",
      },
    ],
    exampleMath: {
      title: "Example: what after-hours intake could be worth",
      body: "For example, if your firm receives 10 after-hours inquiries a month and 24/7 intake helps you retain just 1 more client at an average fee of $3,500, that is $3,500 a month, or $42,000 a year. This is an illustrative scenario; your matter types and fees will vary.",
    },
    tools: ["Clio", "MyCase", "Lawmatics", "PracticePanther", "Calendly", "Zapier"],
    faqs: [
      {
        q: "Is AI intake compatible with attorney ethics and advertising rules?",
        a: "We design intake so the AI does not give legal advice, does not create an attorney-client relationship, and clearly identifies itself as an assistant. Your firm reviews and approves all scripts and messages, since ethics and advertising rules vary by state and responsibility stays with the attorneys.",
      },
      {
        q: "Does it work with Clio, MyCase or Lawmatics?",
        a: "We can connect with common legal platforms like Clio, MyCase, Lawmatics and PracticePanther, typically through their APIs or tools like Zapier. The level of integration depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "How is confidential information protected?",
        a: "We choose tools with appropriate security controls, limit what data each step collects, and configure access to match your firm's policies. We review the data flow with you so you can assess it against your confidentiality obligations.",
      },
      {
        q: "Can the AI run conflict checks?",
        a: "It gathers the names and details your team needs and can pass them into your system, but the conflict decision always stays with your firm.",
      },
      {
        q: "How much does AI automation cost for a law firm?",
        a: "Pricing depends on intake volume, the number of practice areas and which systems we connect. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "How long does setup take?",
        a: "A basic AI intake and scheduling setup can often launch in a few weeks, including time for your attorneys to review and approve scripts. More complex integrations take longer.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "ai-automation", "aeo-geo"],
    keywords: [
      "AI automation for law firms",
      "AI legal intake",
      "AI receptionist for law firms",
      "law firm client intake automation",
      "consultation scheduling for attorneys",
    ],
  },

  // ---------------------------------------------------------------------------
  // Real estate
  // ---------------------------------------------------------------------------
  {
    slug: "real-estate",
    name: "Real Estate",
    audience: "real estate agents and teams",
    metaTitle: "AI Automation for Real Estate Agents | Automatix",
    metaDescription:
      "AI automation for real estate agents and teams: instant lead response, showing scheduling, long-term nurture and CRM updates so no buyer or seller slips away.",
    headline: "AI Automation for Real Estate Agents: Respond Instantly, Nurture Forever",
    answer:
      "AI helps a real estate business by responding to new buyer and seller leads within seconds, asking qualifying questions about timeline, budget and pre-approval, scheduling showings and listing appointments, and nurturing long-term leads with relevant follow-up. Agents spend less time on cold leads and admin and more time with clients ready to move.",
    painPoints: [
      {
        title: "Leads go cold while agents are in showings",
        body: "Portal and ad leads often contact several agents at once. If you are in a showing or a closing, a slow reply can mean losing the lead.",
      },
      {
        title: "Most leads are not ready yet",
        body: "Many inquiries are months away from buying or selling, and agents rarely have time for consistent long-term follow-up.",
      },
      {
        title: "Showing scheduling is a time sink",
        body: "Coordinating times between buyers, listing agents and your own calendar takes a steady stream of texts and calls.",
      },
      {
        title: "CRM data gets messy",
        body: "Notes, stages and tags often go un-updated, which makes it hard to know who to call next.",
      },
    ],
    automations: [
      {
        title: "Instant lead response",
        body: "New leads from portals, your website and ads get a personalized text or email within moments, starting a conversation in your name.",
      },
      {
        title: "Buyer and seller qualification",
        body: "The AI asks about timeline, price range, pre-approval status and whether they need to sell first, then flags hot leads for immediate agent follow-up.",
      },
      {
        title: "Showing and listing appointment scheduling",
        body: "Qualified leads can request showings or book listing consultations directly into your calendar, with reminders sent automatically.",
      },
      {
        title: "Long-term nurture",
        body: "Leads that are not ready receive periodic, relevant check-ins and market updates you approve, so you stay top of mind.",
      },
      {
        title: "Past client and sphere follow-up",
        body: "Home anniversaries and periodic check-ins keep you in touch with past clients for repeat and referral business.",
      },
      {
        title: "Automatic CRM updates",
        body: "Conversation summaries, tags and stages are written back to your CRM so you always know where each lead stands.",
      },
    ],
    exampleMath: {
      title: "Example: what one extra closing from faster response could mean",
      body: "For example, if you receive 60 online leads a month and faster response plus nurture helps you close just 1 more deal a quarter on a $400,000 home at a 2.5% commission side, that is $10,000 in gross commission per quarter, before splits. These figures are illustrative assumptions only.",
    },
    tools: [
      "Follow Up Boss",
      "kvCORE",
      "Lofty",
      "Sierra Interactive",
      "Calendly",
      "Zapier",
    ],
    faqs: [
      {
        q: "Does it work with Follow Up Boss, kvCORE or Lofty?",
        a: "We can connect with common real estate CRMs like Follow Up Boss, kvCORE, Lofty and Sierra Interactive, usually through their APIs or Zapier. The exact integration depends on your CRM and plan, which we confirm before starting.",
      },
      {
        q: "Will leads know they are texting with AI?",
        a: "We recommend the assistant identify itself as your virtual assistant. It communicates naturally and hands the conversation to you as soon as a lead is ready to talk or asks for a person.",
      },
      {
        q: "Is AI texting compliant with real estate and messaging rules?",
        a: "We build in opt-out handling and follow messaging best practices, and we write messages to avoid fair housing issues and unapproved claims. Your brokerage should review scripts to make sure they match its compliance policies.",
      },
      {
        q: "How much does AI automation cost for a real estate agent or team?",
        a: "Pricing depends on lead volume, the number of agents and which tools we connect. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "How fast can it be set up?",
        a: "Instant lead response and qualification can often go live in a couple of weeks. Long-term nurture and past-client campaigns can be added in the following weeks.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-automation", "ai-receptionist", "website-refresh"],
    keywords: [
      "AI automation for real estate agents",
      "real estate lead follow up automation",
      "AI assistant for realtors",
      "AI lead response for real estate",
      "real estate CRM automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Auto repair
  // ---------------------------------------------------------------------------
  {
    slug: "auto-repair",
    name: "Auto Repair",
    audience: "auto repair shops",
    metaTitle: "AI Automation for Auto Repair Shops | Automatix",
    metaDescription:
      "AI automation for auto repair shops: answer calls while advisors are busy, book appointments, follow up on declined work and send service reminders for you.",
    headline: "AI Automation for Auto Repair Shops: Keep Bays Full Without Tying Up Advisors",
    answer:
      "AI helps an auto repair shop by answering calls when service advisors are busy, booking appointments, sending vehicle status updates, following up on declined repairs, and reminding customers about oil changes and scheduled maintenance. Advisors spend more time with customers at the counter, and the shop sees fewer empty bays and missed callbacks.",
    painPoints: [
      {
        title: "Advisors can't answer every call",
        body: "Service advisors juggle the counter, technicians and parts. Calls go unanswered at the busiest times of day.",
      },
      {
        title: "Status calls interrupt everyone",
        body: "Customers call repeatedly to ask when their car will be ready, pulling advisors away from other work.",
      },
      {
        title: "Declined work is never followed up",
        body: "Recommended repairs customers decline today are often needed later, but without follow-up those jobs go to another shop.",
      },
      {
        title: "Maintenance reminders are inconsistent",
        body: "Oil changes and scheduled maintenance keep customers coming back, but reminders are easy to neglect.",
      },
    ],
    automations: [
      {
        title: "AI receptionist for appointments and common questions",
        body: "The AI answers calls, books appointments, and handles common questions like hours, services and drop-off procedures.",
      },
      {
        title: "Vehicle status updates by text",
        body: "When a repair order moves stages, customers get an automatic text, reducing status-check calls.",
      },
      {
        title: "Declined repair follow-up",
        body: "Customers who declined recommended work receive timed, friendly reminders with an easy way to schedule.",
      },
      {
        title: "Maintenance and oil change reminders",
        body: "Reminders based on time or mileage bring customers back for routine service.",
      },
      {
        title: "Missed-call text-back",
        body: "Any missed call gets an immediate text so the customer can book or ask questions without waiting.",
      },
      {
        title: "Review requests after pickup",
        body: "Customers receive a review request after picking up their vehicle to support your Google Business Profile.",
      },
    ],
    exampleMath: {
      title: "Example: what following up on declined work could recover",
      body: "For example, if your shop has $20,000 a month in declined recommended repairs and follow-up brings back just 10% of it, that is $2,000 a month, or $24,000 a year, in recovered work. These numbers are illustrative assumptions only.",
    },
    tools: ["Tekmetric", "Shopmonkey", "Mitchell 1", "AutoLeap", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Does it work with Tekmetric or Shopmonkey?",
        a: "We can connect with common shop management systems like Tekmetric, Shopmonkey, Mitchell 1 and AutoLeap, typically through their APIs or tools like Zapier. What can be automated depends on your system and plan, which we confirm first.",
      },
      {
        q: "Can the AI give repair estimates over the phone?",
        a: "We set it up to share only prices you approve, such as oil change or inspection pricing. For diagnostics and repairs, it books the appointment so your advisor can quote accurately.",
      },
      {
        q: "Will customers know they are talking to AI?",
        a: "We recommend the AI introduce itself as your shop's virtual assistant. It sounds natural and transfers to an advisor whenever a customer asks.",
      },
      {
        q: "How much does AI automation cost for an auto repair shop?",
        a: "Pricing depends on call volume, workflows and the systems we connect. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "How long does setup take?",
        a: "An AI receptionist and missed-call text-back can often go live in a couple of weeks. Declined-work and maintenance campaigns can be added after that.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for auto repair shops",
      "AI receptionist for auto repair",
      "auto repair declined work follow up",
      "auto shop appointment reminders",
      "auto repair shop answering service",
    ],
  },

  // ---------------------------------------------------------------------------
  // Med spas
  // ---------------------------------------------------------------------------
  {
    slug: "med-spas",
    name: "Med Spas",
    audience: "med spas",
    metaTitle: "AI Automation for Med Spas | Automatix",
    metaDescription:
      "AI automation for med spas: answer inquiries 24/7, book consultations, send treatment reminders, rebook Botox and filler clients and cut no-shows automatically.",
    headline: "AI Automation for Med Spas: Book More Consultations and Rebook Every Client",
    answer:
      "AI helps a med spa by answering inquiries 24/7 from calls, texts and social messages, booking consultations, sending pre- and post-treatment instructions, reminding clients when they are due for Botox, filler or facial follow-ups, and reducing no-shows with confirmations. Your front desk handles fewer repetitive messages, and more clients come back on schedule.",
    painPoints: [
      {
        title: "Inquiries arrive at all hours and on every channel",
        body: "Prospective clients message through Instagram, text, web forms and phone, often in the evening. Slow replies mean lost consultations.",
      },
      {
        title: "Rebooking depends on memory",
        body: "Neuromodulators, fillers and series treatments have natural rebooking windows, but clients often forget and staff rarely have time to remind them.",
      },
      {
        title: "No-shows hurt high-value appointments",
        body: "A missed consultation or treatment leaves expensive provider time unused.",
      },
      {
        title: "Repeating the same answers",
        body: "Front desk staff answer the same questions about pricing, downtime and prep over and over.",
      },
    ],
    automations: [
      {
        title: "24/7 inquiry response across channels",
        body: "An AI assistant replies to calls, texts and website chats, answers common questions you approve, and books consultations.",
      },
      {
        title: "Consultation booking and deposit requests",
        body: "Qualified prospects can book directly, with deposit or card-on-file requests sent according to your policy.",
      },
      {
        title: "Pre- and post-treatment instructions",
        body: "Clients automatically receive your prep and aftercare instructions at the right time, with a way to reach staff with questions.",
      },
      {
        title: "Treatment-based rebooking reminders",
        body: "Clients receive reminders when they are typically due for their next neuromodulator, filler or series appointment, with a link to book.",
      },
      {
        title: "Confirmations and waitlist fill",
        body: "Appointment confirmations reduce no-shows, and cancellations can trigger texts to waitlisted clients.",
      },
      {
        title: "Review requests and membership follow-up",
        body: "Happy clients get a review request, and those who fit your membership program receive information about joining.",
      },
    ],
    exampleMath: {
      title: "Example: what better rebooking could add",
      body: "For example, if 200 clients a year receive neuromodulator treatments averaging $450 and timely reminders bring 20 of them back for one extra visit each, that is about $9,000 in added revenue for the year. These numbers are illustrative assumptions only.",
    },
    tools: ["Boulevard", "Vagaro", "Mangomint", "Zenoti", "Google Business Profile", "GoHighLevel"],
    faqs: [
      {
        q: "Is AI automation HIPAA compliant for med spas?",
        a: "We configure workflows with HIPAA-appropriate tools and sign Business Associate Agreements where the vendors involved support them. We also limit what health information each step collects. Your med spa remains responsible for its overall compliance program, and we design around your policies.",
      },
      {
        q: "Does it work with Boulevard, Vagaro or Mangomint?",
        a: "We can connect with common med spa platforms like Boulevard, Vagaro, Mangomint and Zenoti, usually through their APIs or automation tools. What is possible depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Can the AI answer medical questions about treatments?",
        a: "No. It shares general information you approve, like pricing ranges and prep instructions, and routes medical questions, contraindications and adverse reactions to your licensed providers.",
      },
      {
        q: "Will clients know they are talking to AI?",
        a: "We recommend the assistant introduce itself as your virtual assistant. It communicates in your brand's tone and hands off to staff whenever a client asks.",
      },
      {
        q: "How much does AI automation cost for a med spa?",
        a: "Pricing depends on inquiry volume, the workflows you choose and the systems we connect. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "How long does setup take?",
        a: "Inquiry response and booking can often launch in a couple of weeks. Rebooking and membership campaigns can be added after that.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for med spas",
      "AI receptionist for med spa",
      "med spa booking automation",
      "med spa client rebooking",
      "HIPAA compliant AI for med spas",
    ],
  },
];

export const INDUSTRIES: Industry[] = [...BASE_INDUSTRIES, ...MORE_INDUSTRIES];
