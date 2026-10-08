import type { GlossaryTerm } from "./types";

export const EXTRA_GLOSSARY: GlossaryTerm[] = [
  {
    slug: "tcpa",
    term: "TCPA (Telephone Consumer Protection Act)",
    short:
      "The TCPA is the US federal law that regulates automated calls, prerecorded or artificial-voice calls, and text messages, including consent and opt-out requirements.",
    body: [
      "The Telephone Consumer Protection Act sets the rules for how businesses can use automated systems to call and text people. It distinguishes between informational messages, such as appointment reminders or replies to a customer's own request, and marketing messages, which generally require stronger, documented consent.",
      "Recent rules matter for AI. In February 2024 the FCC ruled that AI-generated voices count as 'artificial' voices under the TCPA, so outbound AI voice calls need the same consent as prerecorded calls. Since April 2025, consumers can revoke consent by any reasonable means, and businesses must honor those requests within 10 business days.",
      "For small businesses using missed-call text-back, lead follow-up or review requests, the practical steps are to message people about their own inquiries, get clear consent for marketing, honor opt-outs immediately and keep records. This is general information, not legal advice.",
    ],
    related: ["a2p-10dlc", "missed-call-text-back", "lead-nurturing", "ai-voice-agent"],
  },
  {
    slug: "a2p-10dlc",
    term: "A2P 10DLC",
    short:
      "A2P 10DLC is the US carrier registration system for businesses that send application-to-person text messages from standard 10-digit local phone numbers.",
    body: [
      "A2P stands for application-to-person, meaning texts sent by software rather than typed by a person on a phone. 10DLC means 10-digit long code, a normal local phone number. Together they describe most business texting, such as appointment reminders, missed-call text-back and follow-up messages.",
      "US carriers require businesses to register their brand and each messaging use case before sending this kind of traffic. Registration typically includes your legal business name, tax ID, website, a description of how customers opt in and sample messages. Unregistered messages are more likely to be filtered or blocked.",
      "Most texting and CRM platforms guide you through 10DLC registration. A clear privacy policy on your website and honest opt-in language make approval smoother.",
    ],
    related: ["tcpa", "missed-call-text-back", "speed-to-lead"],
  },
  {
    slug: "ai-voice-agent",
    term: "AI Voice Agent",
    short:
      "An AI voice agent is software that holds natural spoken phone conversations, answering calls, asking questions, booking appointments and routing callers without a human operator.",
    body: [
      "AI voice agents combine speech recognition, a large language model and natural-sounding speech to talk with callers in real time. Unlike old phone menus that ask callers to press numbers, a voice agent understands ordinary speech and responds conversationally.",
      "For small businesses, the most common use is an AI receptionist: answering every call 24/7, answering common questions, collecting job details, booking appointments into a calendar and transferring urgent calls to a person. Voice agents can also handle overflow during busy periods so no caller waits on hold.",
      "Good voice agents are configured with your scripts, pricing rules and escalation rules, and they clearly offer a path to a human. Outbound AI voice calls are subject to TCPA consent rules.",
    ],
    related: ["conversational-ai", "ai-agent", "missed-call-text-back", "tcpa"],
  },
  {
    slug: "google-business-profile",
    term: "Google Business Profile",
    short:
      "A Google Business Profile is the free listing that shows a business's name, location, hours, reviews and photos in Google Search and Google Maps.",
    body: [
      "Your Google Business Profile, formerly called Google My Business, is what appears in the local map results when someone searches for a service near them. It shows your categories, services, hours, phone number, photos, reviews and updates, and it lets customers call, get directions or visit your website in one tap.",
      "Google ranks local results mainly on relevance, distance and prominence. You improve relevance by choosing the right primary category and listing your services, and you improve prominence through reviews, photos, consistent business information across the web and a strong website.",
      "For local service businesses, a complete, active profile with steady new reviews is often the single biggest source of calls.",
    ],
    related: ["local-seo", "nap-consistency", "review-generation", "service-area-business"],
  },
  {
    slug: "nap-consistency",
    term: "NAP Consistency",
    short:
      "NAP consistency means a business's name, address and phone number appear exactly the same everywhere online, from its website to directories and social profiles.",
    body: [
      "NAP stands for name, address and phone number. Search engines compare this information across your website, Google Business Profile, directories such as Yelp and Bing Places, and social profiles to confirm that your business is real and where it operates.",
      "When details conflict, such as an old phone number on one site or a different suite number on another, search engines and AI assistants are less confident about your business, which can weaken local rankings and cause wrong information to appear.",
      "Fixing NAP consistency usually means choosing one standard format, then updating every major listing to match it exactly.",
    ],
    related: ["local-seo", "google-business-profile", "entity-seo", "schema-markup"],
  },
  {
    slug: "service-area-business",
    term: "Service-Area Business",
    short:
      "A service-area business serves customers at their locations rather than at a storefront, and can hide its address on Google while listing the areas it serves.",
    body: [
      "Plumbers, roofers, cleaners, mobile mechanics and many other trades go to the customer. Google calls these service-area businesses and lets them hide their street address and instead list the cities, ZIP codes or regions they serve.",
      "Setting up correctly matters. Using a virtual office or someone else's address to appear in more locations violates Google's guidelines and can get a profile suspended. A service-area business should use its real base of operations and list realistic service areas.",
      "Service-area businesses still benefit from location-relevant content on their website, such as pages describing the communities they serve and the work they do there.",
    ],
    related: ["google-business-profile", "local-seo", "nap-consistency"],
  },
  {
    slug: "review-generation",
    term: "Review Generation",
    short:
      "Review generation is the practice of systematically asking happy customers for online reviews, usually with an automated text or email right after a completed job.",
    body: [
      "Most satisfied customers are willing to leave a review but rarely do so unprompted. Review generation closes that gap by asking at the right moment, typically right after a job is finished, with a direct link that takes the customer straight to the review form.",
      "Steady, recent reviews help local rankings and increase the chance that a searcher picks you over a competitor. Automating the request means it happens after every job instead of whenever someone remembers.",
      "Review generation should follow platform rules: ask all customers rather than only those you expect to be positive where policies require it, never pay for reviews, and never post fake ones.",
    ],
    related: ["google-business-profile", "local-seo", "customer-lifetime-value"],
  },
  {
    slug: "lead-scoring",
    term: "Lead Scoring",
    short:
      "Lead scoring ranks incoming leads by how likely they are to become customers, so a team can respond to the most valuable opportunities first.",
    body: [
      "Lead scoring assigns points or labels to leads based on details like the service requested, budget, location, timeline and how engaged they are. A homeowner requesting an urgent repair inside your service area might score higher than someone casually asking about pricing for next year.",
      "AI can score leads automatically by reading form answers, call transcripts and messages, then alerting the right person when a high-value lead arrives.",
      "For small businesses, lead scoring works best when it's simple and tied to action, such as call hot leads within five minutes and send everyone else an automated follow-up sequence.",
    ],
    related: ["speed-to-lead", "lead-nurturing", "crm"],
  },
  {
    slug: "no-show-rate",
    term: "No-Show Rate",
    short:
      "No-show rate is the percentage of booked appointments where the customer doesn't show up or cancel in advance, leaving unused time on the schedule.",
    body: [
      "No-show rate is calculated by dividing missed appointments by total booked appointments over a period. It matters most for businesses that sell time, such as clinics, salons, studios and service businesses with scheduled visits.",
      "Every no-show is lost revenue that usually can't be recovered, plus wasted staff time. Common causes include forgetting, scheduling conflicts and friction when rescheduling.",
      "Automated reminders with an easy way to confirm or reschedule, waitlists that fill last-minute openings and clear cancellation policies are the most reliable ways to bring the rate down.",
    ],
    related: ["customer-lifetime-value", "workflow-automation", "conversational-ai"],
  },
  {
    slug: "call-tracking",
    term: "Call Tracking",
    short:
      "Call tracking assigns unique phone numbers to marketing channels so a business can see which ads, listings or pages generate phone calls.",
    body: [
      "Many local service customers call instead of filling out a form, which makes it hard to know which marketing is working. Call tracking solves this by showing a different number on your Google Business Profile, ads and website, then recording which number each call came in on.",
      "Dynamic call tracking can even swap numbers on your website based on how a visitor arrived. Combined with recordings or transcripts, it shows which channels bring real jobs.",
      "To protect local SEO, keep your main business number as the primary number on your Google Business Profile and directories for NAP consistency.",
    ],
    related: ["nap-consistency", "quality-score", "conversion-rate-optimization"],
  },
  {
    slug: "conversion-rate-optimization",
    term: "Conversion Rate Optimization (CRO)",
    short:
      "Conversion rate optimization is the process of improving a website or landing page so a larger share of visitors take a desired action, such as calling or requesting a quote.",
    body: [
      "Conversion rate is the percentage of visitors who do what you want, for example call, book, buy or fill out a form. Conversion rate optimization improves that percentage through clearer messaging, faster pages, stronger calls to action, trust signals like reviews and simpler forms.",
      "For small businesses, CRO often delivers more leads without spending more on ads, because you get more value from the traffic you already have.",
      "Good CRO is measured. Make one change at a time where possible, track calls and form submissions, and keep what works.",
    ],
    related: ["quality-score", "call-tracking", "speed-to-lead"],
  },
  {
    slug: "job-costing",
    term: "Job Costing",
    short:
      "Job costing tracks the labor, materials and overhead spent on each individual job so a business knows which jobs and services are actually profitable.",
    body: [
      "Job costing assigns every expense, such as technician hours, materials, equipment and subcontractors, to the specific job it belongs to. Comparing those costs to what you charged shows the true profit on each job and each type of work.",
      "Without it, businesses often discover too late that a popular service barely breaks even. With it, owners can adjust pricing, spot overruns early and decide which work to pursue.",
      "Automation helps by syncing time, materials and invoices from field-service software into accounting so job cost reports update automatically.",
    ],
    related: ["field-service-management", "back-office-automation", "api-integration"],
  },
];
