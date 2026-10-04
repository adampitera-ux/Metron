import type { GlossaryTerm } from "./types";

export const MORE_GLOSSARY: GlossaryTerm[] = [
  {
    slug: "ai-integration",
    term: "AI Integration",
    short:
      "AI integration is the process of connecting AI capabilities to the software and workflows a business already uses so AI does useful work inside those systems.",
    body: [
      "AI integration means putting AI where the work already happens rather than asking employees to switch to a separate chat window. In practice, that can mean an AI model reading incoming emails and creating jobs in your field service software, summarizing calls into your CRM, or categorizing bills before they reach QuickBooks. The AI is one part of a connected system that also includes your existing tools, rules, and people.",
      "For a small business, integration is usually what separates an AI experiment from real savings. A standalone AI tool can draft a message, but someone still has to copy it, paste it, and update the record. When AI is integrated, the output lands in the right system automatically, and a person only steps in to review or approve.",
      "Good AI integration starts with a specific workflow, uses the integrations or APIs your software already offers, and includes guardrails such as human approval for sensitive steps and clear rules about which data the AI can access.",
    ],
    related: ["api-integration", "workflow-automation", "back-office-automation", "large-language-model"],
  },
  {
    slug: "back-office-automation",
    term: "Back-Office Automation",
    short:
      "Back-office automation uses software and AI to handle administrative tasks such as invoicing, data entry, scheduling, and reporting that keep a business running behind the scenes.",
    body: [
      "The back office covers the work customers rarely see: entering job details, sending invoices and payment reminders, reconciling receipts, updating schedules, filing paperwork, and pulling together reports. These tasks are necessary but repetitive, and in many small businesses they fall on the owner or one overloaded office manager.",
      "Back-office automation moves that work into software. A completed job can trigger an invoice automatically, overdue invoices can receive polite reminders, documents can be read and filed by AI, and weekly numbers can be compiled into a report without anyone building a spreadsheet. The goal is fewer hours spent on admin and fewer errors from re-typing information.",
      "The best candidates for automation are tasks that happen often, follow a recognizable pattern, and currently involve copying information from one place to another. Tasks that require judgment, such as approving a large refund, are usually kept with a person, with automation preparing the information for a faster decision.",
    ],
    related: ["workflow-automation", "document-processing", "rpa", "ai-integration"],
  },
  {
    slug: "api-integration",
    term: "API Integration",
    short:
      "An API integration connects two software systems through their application programming interfaces (APIs) so they can exchange data and trigger actions automatically.",
    body: [
      "An API, or application programming interface, is a set of rules that lets one piece of software request data or actions from another. An API integration uses those rules to connect systems, for example sending a new customer from a website form into a CRM, or creating an invoice in accounting software when a job is marked complete.",
      "Many tools small businesses use, such as QuickBooks, HubSpot, Jobber, and Google Workspace, offer APIs, and automation platforms like Zapier and Make provide ready-made connections on top of them. When a ready-made connector does not exist or is too limited, a custom API integration can fill the gap.",
      "API integrations are generally more reliable than screen-scraping or manual exports because they use a supported, structured channel. They still need monitoring, since APIs change over time and connections can fail, so a well-built integration logs errors and alerts someone when data does not move as expected.",
    ],
    related: ["ai-integration", "workflow-automation", "rpa", "crm"],
  },
  {
    slug: "document-processing",
    term: "Document Processing",
    short:
      "Document processing uses AI to read documents such as invoices, receipts, forms, and contracts, extract the key information, and send it to the right system.",
    body: [
      "Document processing, often called intelligent document processing, combines optical character recognition (OCR), which turns scanned or photographed text into machine-readable text, with AI models that understand what the text means. The system can identify a vendor name, invoice number, line items, totals, and due dates, even when every vendor uses a different layout.",
      "Small businesses deal with a steady stream of paperwork: supplier bills, receipts, work orders, permits, bills of lading, insurance certificates, and intake forms. Document processing can pull the needed fields from these files and enter them into accounting, field service, or document management systems, replacing hours of manual data entry.",
      "AI extraction is not perfect, especially with poor scans or handwriting. Reliable setups flag low-confidence fields for human review, check totals and required fields automatically, and keep the original document attached to the record so anyone can verify the data.",
    ],
    related: ["back-office-automation", "rpa", "workflow-automation", "large-language-model"],
  },
  {
    slug: "rpa",
    term: "RPA (Robotic Process Automation)",
    short:
      "Robotic process automation (RPA) is software that mimics the clicks and keystrokes a person makes in applications to complete repetitive, rule-based tasks.",
    body: [
      "RPA uses software \"bots\" that operate applications the way a person would: opening screens, copying values, filling in fields, and clicking buttons. Despite the name, there are no physical robots involved. RPA became popular in larger companies for automating high-volume tasks in older systems that lack modern integrations.",
      "For small businesses, RPA is useful when a necessary system has no API or integration, such as an older industry portal or a desktop application. A bot can log in, download a report, or enter data on a schedule. When an API is available, a direct API integration is usually more reliable, because RPA bots can break when a screen layout changes.",
      "Traditional RPA follows fixed rules and struggles with unstructured information like emails and varied documents. Combining RPA with AI, for example using AI to read a document and RPA to enter the results into an older system, extends what can be automated.",
    ],
    related: ["api-integration", "workflow-automation", "document-processing", "back-office-automation"],
  },
  {
    slug: "ai-chatbot",
    term: "AI Chatbot",
    short:
      "An AI chatbot is software that uses AI to hold text conversations with people, answering questions and completing simple tasks on a website, app, or messaging channel.",
    body: [
      "Older chatbots followed rigid scripts and decision trees, so they failed whenever a visitor asked something unexpected. Modern AI chatbots are typically built on large language models, which let them understand questions phrased in many different ways and respond in natural language.",
      "Small businesses use AI chatbots on websites and messaging channels to answer common questions about services, hours, service areas, and pricing ranges, collect contact details, qualify leads, and book appointments outside business hours. A chatbot connected to a CRM or calendar can turn a late-night website visit into a scheduled job.",
      "A chatbot is only as good as the information and rules it is given. It should draw on an approved knowledge base, avoid inventing prices or promises, identify itself as automated, and hand off to a person when a question is sensitive or outside its scope.",
    ],
    related: ["conversational-ai", "knowledge-base", "large-language-model", "ai-agent"],
  },
  {
    slug: "knowledge-base",
    term: "Knowledge Base",
    short:
      "A knowledge base is an organized collection of approved information, such as FAQs, procedures, and policies, that people or AI tools use to find accurate answers.",
    body: [
      "A knowledge base can be customer-facing, like a help center with answers about services and policies, or internal, like a library of procedures, price guides, and troubleshooting steps for employees. Its value comes from being organized, current, and treated as the single trusted source for each topic.",
      "Knowledge bases have become more important with AI. AI chatbots, AI receptionists, and internal assistants work best when they draw answers from an approved knowledge base rather than general information from the internet. This approach, often called retrieval-augmented generation, reduces the chance that the AI invents an answer and allows it to link to the source.",
      "For a small business, building a knowledge base often starts with writing down what currently lives in the owner's head: how to price common jobs, how to handle warranty calls, and answers to the questions customers ask most. That same material can then train new hires and power AI tools.",
    ],
    related: ["sop", "ai-chatbot", "large-language-model", "conversational-ai"],
  },
  {
    slug: "field-service-management",
    term: "Field Service Management (FSM)",
    short:
      "Field service management (FSM) software helps businesses that send technicians or crews to job sites schedule, dispatch, track, quote, and invoice their work.",
    body: [
      "Field service management covers everything involved in doing work at a customer's location: booking the job, assigning the right technician, routing them, tracking job status, capturing photos and notes, creating estimates, and collecting payment. FSM software brings those steps into one system with a mobile app for the field team.",
      "Common FSM platforms for trades and home services include ServiceTitan, Jobber, Housecall Pro, and FieldEdge, among others. They are widely used by HVAC, plumbing, electrical, pest control, cleaning, and landscaping companies, and many include CRM features, customer communication, and integrations with accounting software like QuickBooks.",
      "AI and automation build on top of FSM software. An AI receptionist can book directly into the schedule, completed jobs can trigger review requests and invoices, and job data can feed dashboards that show revenue per technician or average ticket size without manual reporting.",
    ],
    related: ["crm", "workflow-automation", "api-integration", "missed-call-text-back"],
  },
  {
    slug: "sop",
    term: "SOP (Standard Operating Procedure)",
    short:
      "A standard operating procedure (SOP) is a written, step-by-step description of how a recurring task should be done so it is completed consistently every time.",
    body: [
      "An SOP documents the agreed way to do a task, such as opening a new customer account, closing out a job, handling an after-hours emergency call, or running month-end invoicing. A good SOP lists who is responsible, the steps in order, the tools involved, and what a finished result looks like.",
      "SOPs help a small business reduce mistakes, train new employees faster, and stop depending on one person who knows how everything works. They are also a prerequisite for automation: a process that is written down clearly is far easier to automate than one that changes depending on who is doing it.",
      "AI can help create and use SOPs. It can turn a recorded walkthrough or rough notes into a clean draft for review, and an internal AI assistant connected to your SOP library can answer employee questions like \"what is our process for a warranty callback\" with the approved steps.",
    ],
    related: ["knowledge-base", "workflow-automation", "back-office-automation"],
  },
  {
    slug: "customer-lifetime-value",
    term: "Customer Lifetime Value (CLV)",
    short:
      "Customer lifetime value (CLV) is an estimate of the total revenue or profit a business can expect from one customer over the entire relationship.",
    body: [
      "A simple way to estimate customer lifetime value is to multiply the average purchase amount by how many times a customer buys per year and by how many years they typically stay. For example, if a customer spends an average of $300 per visit, buys twice a year, and stays for five years, their estimated lifetime revenue is $3,000. Using gross profit instead of revenue gives a more conservative figure.",
      "CLV matters because it changes how much a business can sensibly spend to win and keep a customer. A cleaning company or HVAC contractor with recurring maintenance customers may find that a lead worth one small job is actually worth many jobs over several years.",
      "Automation can raise customer lifetime value by keeping customers engaged between purchases. Service reminders, maintenance plan renewals, review requests, and reactivation messages to past customers help turn one-time buyers into repeat customers.",
    ],
    related: ["crm", "lead-nurturing", "speed-to-lead"],
  },
  {
    slug: "lead-nurturing",
    term: "Lead Nurturing",
    short:
      "Lead nurturing is the process of staying in helpful, relevant contact with potential customers who are not ready to buy yet until they are ready to book.",
    body: [
      "Not every inquiry turns into a sale right away. A homeowner may be collecting quotes, waiting on a budget, or planning a project for next season. Lead nurturing keeps your business in the conversation with a planned series of useful touches, such as follow-up texts, emails with answers to common questions, or a check-in when the season changes.",
      "For small businesses, lead nurturing usually means estimate follow-up and periodic outreach to leads that went quiet. Without a system, these steps depend on someone remembering, and they are often the first task dropped when the schedule is busy.",
      "Automation makes nurturing consistent. Sequences can be triggered by CRM stage, personalized with AI, and stopped as soon as the lead replies or books. Every message should include an easy opt-out, and texting requires appropriate consent and carrier registration.",
    ],
    related: ["speed-to-lead", "crm", "customer-lifetime-value", "workflow-automation"],
  },
  {
    slug: "quality-score",
    term: "Quality Score (Google Ads)",
    short:
      "Quality Score is a 1 to 10 keyword-level diagnostic in Google Ads that estimates how relevant and useful your ads and landing pages are compared with other advertisers.",
    body: [
      "Google Ads reports Quality Score for each keyword on a scale of 1 to 10, based on three components: expected click-through rate, ad relevance, and landing page experience. Each component is rated as above average, average, or below average compared with other advertisers who showed ads for the same keyword.",
      "Quality Score is a diagnostic tool, not a direct input into the ad auction. Google uses real-time signals at auction time to determine ad rank and cost, and Quality Score summarizes how those quality factors have looked historically. A low score is still a useful warning that your ads, keywords, or landing page may be costing you more per click or limiting how often your ads show.",
      "For local businesses, improving Quality Score usually means grouping keywords tightly by service, writing ads that match what the searcher typed, and sending clicks to a fast, mobile-friendly landing page that clearly answers the search and makes it easy to call or book.",
    ],
    related: ["local-seo", "speed-to-lead", "lead-nurturing"],
  },
];
