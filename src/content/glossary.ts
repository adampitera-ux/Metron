import type { GlossaryTerm } from "./types";
import { MORE_GLOSSARY } from "./glossary-more";

const BASE_GLOSSARY: GlossaryTerm[] = [
  {
    slug: "ai-agent",
    term: "AI Agent",
    short:
      "An AI agent is software that uses an AI model to pursue a goal by planning steps, using tools or other software, and acting with limited human input.",
    body: [
      "An AI agent goes beyond answering a single question. It is given a goal, such as booking an appointment or qualifying a lead, and it decides which steps to take, calls tools like a calendar, CRM, or email system, checks the results, and continues until the task is done or it needs help from a person. Most AI agents are built on a large language model combined with access to specific tools and rules.",
      "For a small business, agents are useful for multi-step tasks that follow a recognizable pattern but vary in the details. An AI receptionist that answers a call, asks follow-up questions, checks availability, and books a job is a practical example of an agent at work.",
      "Agents can make mistakes, so well-designed systems limit what an agent is allowed to do, log its actions, and require human approval for sensitive steps such as issuing refunds or quoting prices. The most reliable business uses keep agents focused on narrow, well-defined jobs rather than open-ended autonomy.",
    ],
    related: ["large-language-model", "workflow-automation", "conversational-ai"],
  },
  {
    slug: "ai-overviews",
    term: "AI Overviews",
    short:
      "AI Overviews are AI-generated summaries that Google Search shows above or among results for some queries, with links to the web sources used.",
    body: [
      "AI Overviews are Google's feature for answering some searches with a generated summary at the top of the results page. They grew out of Google's earlier Search Generative Experience experiment and draw on Google's index to compose an answer, typically with links to supporting pages. Google decides when an AI Overview appears, and it does not appear for every query.",
      "For small businesses, AI Overviews change how people encounter information. A searcher may get a summary of what a service involves, what affects cost, or what to look for in a provider without clicking a result. Businesses whose pages are cited as sources can gain visibility, while others may see fewer clicks for informational queries.",
      "There is no special markup that guarantees inclusion. Google has stated that the same fundamentals used for regular search apply: crawlable pages, helpful and accurate content, and clear structure. Answer-first writing, FAQ content, and strong local signals make it easier for your pages to be understood and potentially cited.",
    ],
    related: ["aeo", "geo", "zero-click-search", "schema-markup"],
  },
  {
    slug: "aeo",
    term: "Answer Engine Optimization (AEO)",
    short:
      "Answer engine optimization (AEO) is the practice of structuring content so search engines, voice assistants, and AI tools can extract it as a direct answer to a question.",
    body: [
      "Answer engine optimization focuses on being the answer rather than just one of many links. Answer engines include featured snippets and AI Overviews in Google, voice assistants, and AI chat tools that respond to questions directly. AEO techniques include leading with a concise, direct answer, using clear question-based headings, writing FAQ sections, and adding structured data that describes the content.",
      "For a small business, AEO matters because many customers now ask questions like \"how much does a furnace tune-up cost\" or \"do I need a lawyer for a small claims case\" and receive an answer without visiting several websites. If your content clearly answers those questions, your business has a better chance of being referenced in that answer.",
      "AEO builds on traditional SEO rather than replacing it. Pages still need to be crawlable, accurate, and trustworthy. No one can guarantee that a specific answer engine will use your content, but clear, well-structured answers improve the odds.",
    ],
    related: ["geo", "schema-markup", "zero-click-search", "ai-overviews"],
  },
  {
    slug: "conversational-ai",
    term: "Conversational AI",
    short:
      "Conversational AI is technology that lets computers understand and respond to human language in natural back-and-forth dialogue through text or voice.",
    body: [
      "Conversational AI combines several capabilities: speech recognition to turn spoken words into text, language understanding to interpret what someone wants, a system for generating a response, and, for voice, speech synthesis to speak the reply. Modern conversational AI is often powered by large language models, which make conversations more flexible than older menu-based phone trees and scripted chatbots.",
      "Small businesses use conversational AI in website chat, text messaging, and AI phone receptionists. It can answer common questions, collect details about a job or appointment, and book time on a calendar at any hour, which helps when the owner and staff are busy or the office is closed.",
      "Quality depends on configuration. The system should be given accurate, approved information about your business, clear rules about what it should not answer, and an easy path to a human. Being transparent that customers are talking to an automated assistant is widely recommended and may be required in some places.",
    ],
    related: ["large-language-model", "ai-agent", "missed-call-text-back"],
  },
  {
    slug: "crm",
    term: "CRM (Customer Relationship Management)",
    short:
      "A CRM (customer relationship management) system is software that stores contacts, leads, and customer interactions in one place to manage sales, follow-up, and service.",
    body: [
      "A CRM keeps a record of every person who has contacted or bought from your business, along with calls, emails, texts, quotes, jobs, and notes. Most CRMs organize leads into a pipeline with stages, such as new inquiry, estimate sent, and booked, so you can see where each opportunity stands.",
      "For a small business, a CRM is the backbone of consistent follow-up. Without one, leads live in inboxes, notebooks, and memory, and it is easy to forget to call someone back or follow up on an estimate. Many field service and practice management tools include CRM features, so a separate system is not always necessary.",
      "A CRM becomes much more valuable when it is connected to automation. New leads can be created automatically from forms and calls, follow-up messages can be triggered by pipeline stage, and reports can show which marketing sources produce booked work.",
    ],
    related: ["speed-to-lead", "workflow-automation", "missed-call-text-back"],
  },
  {
    slug: "e-e-a-t",
    term: "E-E-A-T",
    short:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness, the concepts Google's Search Quality Rater Guidelines use to evaluate content quality.",
    body: [
      "E-E-A-T comes from Google's Search Quality Rater Guidelines, the document Google gives to human reviewers who evaluate search results. Google added the first \"E\" for Experience in late 2022, recognizing the value of first-hand experience. Trustworthiness is described as the most important of the four.",
      "E-E-A-T is not a single ranking factor or score. Instead, it describes the qualities Google says its systems aim to reward. Content about health, finances, legal matters, and safety, which Google calls \"Your Money or Your Life\" topics, is held to a higher standard.",
      "For a small business, demonstrating E-E-A-T is mostly about showing real-world credibility: naming who wrote or reviewed content, listing licenses and certifications, showing photos of real work, publishing accurate contact details, and earning genuine reviews. These same signals help AI systems judge whether your business is a reliable source.",
    ],
    related: ["entity-seo", "local-seo", "geo"],
  },
  {
    slug: "entity-seo",
    term: "Entity SEO",
    short:
      "Entity SEO is optimizing how search engines and AI systems identify a business, person, or thing as a distinct entity and connect it to accurate facts.",
    body: [
      "Search engines increasingly think in terms of entities, which are distinct, identifiable things such as a business, a person, a place, or a service, rather than just keywords. Google maintains a Knowledge Graph of entities and their relationships, and AI models also form associations between names and facts.",
      "For a small business, entity SEO means making your identity unambiguous. That includes using the exact same business name, address, and phone number everywhere, adding Organization or LocalBusiness schema markup with sameAs links to your official profiles, keeping your Google Business Profile complete, and being mentioned accurately on reputable third-party sites.",
      "When systems are confident about who you are, they are less likely to confuse you with a similarly named business and more likely to describe your services, location, and reputation correctly, both in search results and in AI-generated answers.",
    ],
    related: ["schema-markup", "local-seo", "geo", "e-e-a-t"],
  },
  {
    slug: "geo",
    term: "Generative Engine Optimization (GEO)",
    short:
      "Generative engine optimization (GEO) is the practice of improving how generative AI tools like ChatGPT, Perplexity, and Google AI Overviews understand, summarize, and cite your content.",
    body: [
      "Generative engines produce written answers instead of a list of links. Some, such as Perplexity and Google AI Overviews, retrieve web pages in real time and cite them, while others also rely on what a model learned during training. GEO aims to make your business and content easy for these systems to find, interpret correctly, and reference.",
      "Common GEO practices include writing clear, self-contained answers, using structured data, keeping business information consistent across the web, earning reviews and mentions on reputable third-party sites, and making sure AI crawlers are not unintentionally blocked in robots.txt. Many of these overlap with good SEO and AEO.",
      "For small businesses, GEO matters because customers increasingly ask AI assistants for recommendations and explanations. It is an evolving field: AI providers change how they select sources, results vary between users and sessions, and no one can guarantee placement. Measuring AI referral traffic and periodically checking how AI tools describe your business helps track progress.",
    ],
    related: ["aeo", "llms-txt", "entity-seo", "ai-overviews"],
  },
  {
    slug: "large-language-model",
    term: "Large Language Model (LLM)",
    short:
      "A large language model (LLM) is an AI model trained on very large amounts of text to understand and generate human language.",
    body: [
      "Large language models learn statistical patterns in language from enormous text datasets. Given a prompt, they generate a response by predicting likely text, which allows them to answer questions, summarize documents, draft messages, extract information, and hold conversations. Well-known examples include the models behind ChatGPT, Claude, and Gemini.",
      "LLMs power most modern AI tools a small business might use, including AI receptionists, chat assistants, writing tools, and AI search engines. They are flexible and can handle tasks that older rule-based software could not, such as reading a free-form customer message and figuring out what service is needed.",
      "LLMs can also produce confident but incorrect information, often called hallucinations, and their built-in knowledge can be out of date. Reliable business uses give the model accurate source information, limit what it can do, and keep a human involved for important decisions.",
    ],
    related: ["conversational-ai", "ai-agent", "geo"],
  },
  {
    slug: "llms-txt",
    term: "llms.txt",
    short:
      "llms.txt is a proposed convention for a Markdown file at a website's root that gives AI tools a concise guide to the site's most important content.",
    body: [
      "The llms.txt proposal, published in 2024, suggests placing a plain Markdown file at /llms.txt that summarizes what a website is about and links to its key pages. The idea is to give language models a clean, compact overview instead of making them parse complex HTML, navigation, and scripts.",
      "llms.txt is not an official web standard, and it is not the same as robots.txt. It does not control crawler access, and support among major AI providers is limited and inconsistent. Some tools and documentation sites have adopted it, but there is no assurance that a given AI system reads or uses it.",
      "For a small business, adding an llms.txt file is a low-cost, optional step that may help as the convention matures. It should not replace fundamentals that clearly matter for AI visibility: crawlable pages, accurate structured data, consistent business information, and helpful answer-first content.",
    ],
    related: ["geo", "aeo", "schema-markup"],
  },
  {
    slug: "local-seo",
    term: "Local SEO",
    short:
      "Local SEO is the practice of improving a business's visibility in location-based searches, such as map results and \"near me\" queries.",
    body: [
      "Local SEO helps a business appear when people search for services in a specific area, for example \"emergency plumber near me\" or \"dentist in [city]\". Google has said local results are based mainly on relevance, distance, and prominence, which is shaped by factors like reviews, links, and how well-known a business is.",
      "Core local SEO tasks include completing and maintaining your Google Business Profile, keeping your name, address, and phone number consistent across directories, earning genuine reviews and responding to them, building service and location pages on your website, and adding LocalBusiness schema markup.",
      "For service businesses that depend on nearby customers, local SEO is often one of the most direct paths to calls and bookings. The same signals also feed AI assistants, which frequently draw on business profiles, reviews, and directory data when recommending local providers.",
    ],
    related: ["entity-seo", "schema-markup", "e-e-a-t"],
  },
  {
    slug: "missed-call-text-back",
    term: "Missed-Call Text-Back",
    short:
      "Missed-call text-back is an automation that sends an immediate text message to anyone whose call to a business goes unanswered.",
    body: [
      "When a call is missed, the system automatically texts the caller, usually within seconds, with a short message such as an apology for missing the call and a question about how the business can help. The caller can reply by text, and the conversation is routed to the business or an AI assistant and logged in a CRM.",
      "For small businesses whose owners and technicians are often on job sites, missed calls are common. A caller who reaches voicemail may simply call the next business on the list. Texting back right away gives them a convenient way to continue the conversation and signals that the business is responsive.",
      "Business text messaging is subject to carrier registration requirements and consent and opt-out rules that vary by country and region. A well-built missed-call text-back setup accounts for these requirements, includes opt-out handling, and works with the business's existing phone number.",
    ],
    related: ["speed-to-lead", "conversational-ai", "crm"],
  },
  {
    slug: "schema-markup",
    term: "Schema Markup",
    short:
      "Schema markup is structured data, usually written in JSON-LD using the Schema.org vocabulary, that describes a page's content in a machine-readable way.",
    body: [
      "Schema.org is a shared vocabulary created by major search engines for describing things like businesses, services, products, events, articles, and FAQs. Schema markup applies that vocabulary to a page, typically as a JSON-LD script, which Google recommends. It tells machines explicitly that, for example, a page is about a LocalBusiness with a specific address, phone number, hours, and service area.",
      "For small businesses, useful types include LocalBusiness or a more specific subtype such as Plumber or Dentist, Organization with sameAs links to official profiles, Service, FAQPage, and BreadcrumbList. Correct markup can make pages eligible for some rich results in search and reduces ambiguity about who you are and what you offer.",
      "Schema markup does not guarantee rankings, rich results, or citations in AI answers, and it must accurately reflect content visible on the page. It is best viewed as a foundation that helps search engines and AI systems interpret your site correctly.",
    ],
    related: ["entity-seo", "aeo", "local-seo"],
  },
  {
    slug: "speed-to-lead",
    term: "Speed to Lead",
    short:
      "Speed to lead is the amount of time between a new inquiry arriving and the business making its first meaningful response.",
    body: [
      "Speed to lead measures how quickly a business responds after someone submits a form, calls, sends a text, or messages through a listing or ad. It is usually tracked in minutes, and it is one of the simplest sales metrics a small business can monitor.",
      "It matters because people looking for a service often contact several providers at once, and the first business to respond helpfully has an advantage in earning the job. For urgent services like a broken air conditioner or a burst pipe, the customer may book whoever answers first.",
      "Small teams struggle with speed to lead because the people who would respond are busy doing the work. Automation helps by sending an immediate, personalized acknowledgment, asking qualifying questions, and alerting the right person, so every inquiry receives a fast response even when nobody is at a desk.",
    ],
    related: ["missed-call-text-back", "crm", "workflow-automation"],
  },
  {
    slug: "workflow-automation",
    term: "Workflow Automation",
    short:
      "Workflow automation is the use of software to carry out a sequence of business tasks automatically based on triggers and rules, reducing manual work.",
    body: [
      "A workflow is a series of steps that happens repeatedly, such as receiving a booking request, creating a job, confirming with the customer, and sending a reminder. Workflow automation connects the tools involved so that one event, the trigger, automatically starts the next steps without someone copying information between systems.",
      "Adding AI extends what can be automated. Traditional automation follows fixed rules, while AI can read unstructured information such as emails, forms, and messages, categorize requests, extract details, and draft replies. The result is that more of a small business's back-office work can run in the background.",
      "For small businesses, the value is time and consistency: fewer hours spent on admin, fewer errors, and processes that run the same way every time. Good automation still includes alerts when something fails and human approval for steps that require judgment.",
    ],
    related: ["ai-agent", "crm", "speed-to-lead"],
  },
  {
    slug: "zero-click-search",
    term: "Zero-Click Search",
    short:
      "A zero-click search is a search where the user gets the information they need on the results page itself and does not click through to any website.",
    body: [
      "Zero-click searches happen when the search results page answers the question directly, through features like featured snippets, knowledge panels, map results, and AI Overviews. A searcher might see a business's hours, phone number, or a summarized answer and act on it without visiting a website.",
      "For small businesses, zero-click search changes what visibility means. A customer may call you directly from your Google Business Profile or learn about your services from an AI summary, so website traffic alone understates your search presence. Calls, direction requests, and profile interactions become important measures.",
      "The practical response is to make sure the information shown on results pages is accurate and compelling: a complete Google Business Profile, strong reviews, answer-first content, and structured data. When the results page answers for you, you want it to answer correctly and point customers to you.",
    ],
    related: ["ai-overviews", "aeo", "local-seo"],
  },
];

export const GLOSSARY: GlossaryTerm[] = [...BASE_GLOSSARY, ...MORE_GLOSSARY].sort((a, b) =>
  a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
);
