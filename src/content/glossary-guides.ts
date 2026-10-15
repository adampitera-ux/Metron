import type { GlossaryGuide } from "./types";

/**
 * Long-form guides for the glossary terms Google already shows us for
 * (from Search Console: high impressions, low position). Each one aims to be
 * the most complete, plain-English answer for a small-business reader.
 */
export const GLOSSARY_GUIDES: Record<string, GlossaryGuide> = {
  "ai-integration": {
    seoTitle: "What Is AI Integration? Meaning, Examples & How It Works",
    seoDescription:
      "AI integration explained: what it means, how it works, real small-business examples, costs, risks and a step-by-step way to integrate AI into your existing tools.",
    sections: [
      {
        heading: "How does AI integration work?",
        paragraphs: [
          "AI integration connects an AI model to the systems where work already happens, so the AI can read information, make a decision or draft something, and put the result back without anyone copying and pasting. A typical integration has four parts: a trigger (a new email, call, form or invoice), the data the AI needs, the AI step itself and an action in your software.",
          "For example, when a quote request arrives, an integration can read the form, look up the customer in your CRM, have AI draft a reply and a summary, then create a job in your field-service software and text the customer, with a person approving anything sensitive.",
        ],
        bullets: [
          "Trigger: something happens (call, form, email, invoice).",
          "Context: the AI gets the right data, such as customer history or pricing rules.",
          "AI step: classify, summarize, extract, draft or decide.",
          "Action: update the CRM, book the job, send the message, file the document.",
          "Guardrails: limits on what the AI can do, and human review where it matters.",
        ],
      },
      {
        heading: "Examples of AI integration in a small business",
        paragraphs: ["The most valuable integrations remove repetitive work that already happens every day:"],
        bullets: [
          "An AI receptionist that answers calls and books jobs directly into your calendar.",
          "Instant AI replies to web leads, logged automatically in your CRM.",
          "Invoices and receipts read by AI and entered into QuickBooks.",
          "Call recordings summarized and attached to the customer record.",
          "An internal assistant that answers staff questions from your own SOPs and documents.",
        ],
      },
      {
        heading: "AI integration vs. using ChatGPT",
        paragraphs: [
          "Using ChatGPT means a person opens a chat window, pastes information in and copies the answer out. AI integration puts the AI inside the workflow, so it runs automatically on every lead, call or document. That's the difference between saving a few minutes and changing how much work your team can handle.",
        ],
      },
      {
        heading: "How to integrate AI into your business, step by step",
        paragraphs: ["Start small and measurable:"],
        bullets: [
          "1. List your most repetitive tasks and how many hours they take each week.",
          "2. Pick one with a clear trigger and outcome, such as missed calls or quote follow-up.",
          "3. Check which of your tools have integrations or APIs.",
          "4. Build it with guardrails and a human approval step for anything risky.",
          "5. Test on real work, measure the result, then expand.",
        ],
      },
    ],
    table: {
      caption: "Ways to integrate AI",
      headers: ["Approach", "Best for", "Trade-offs"],
      rows: [
        ["Built-in AI features in your software", "Quick wins inside one tool", "Limited to what that vendor offers"],
        ["No-code tools (Zapier, Make)", "Simple multi-step workflows", "Can get fragile as workflows grow"],
        ["Custom integration via APIs", "Workflows across several systems", "Needs development and maintenance"],
        ["Done-for-you agency", "Owners who want it built and managed", "Ongoing cost; choose a partner carefully"],
      ],
    },
    faqs: [
      {
        q: "What does AI integration mean?",
        a: "AI integration means connecting AI capabilities, such as reading, summarizing, drafting or deciding, to the software and workflows a business already uses, so the AI does useful work automatically inside those systems.",
      },
      {
        q: "How much does AI integration cost for a small business?",
        a: "It ranges from the cost of built-in AI features in software you already pay for, to no-code tool subscriptions, to custom projects. Start with one workflow whose savings you can measure, so the cost is easy to justify.",
      },
      {
        q: "Is AI integration safe?",
        a: "It can be, with the right guardrails: limit what data the AI can access, keep a person in the loop for sensitive actions, use business-grade tools and test before going live.",
      },
      {
        q: "What's an AI integrator?",
        a: "An AI integrator is a person or company that designs and builds AI integrations, connecting AI to your existing tools, setting up guardrails and maintaining the system.",
      },
    ],
  },

  rpa: {
    seoTitle: "What Is RPA (Robotic Process Automation)? Meaning & Examples",
    seoDescription:
      "RPA meaning explained in plain English: what robotic process automation is, how it works, examples, RPA vs AI automation, costs and when a small business should use it.",
    sections: [
      {
        heading: "What does RPA mean?",
        paragraphs: [
          "RPA stands for robotic process automation. The 'robots' aren't physical machines. They're software bots that mimic what a person does on a computer: clicking buttons, copying data between screens, filling in forms and moving files, following exact rules.",
        ],
      },
      {
        heading: "How does robotic process automation work?",
        paragraphs: [
          "An RPA bot is recorded or configured to follow a fixed sequence of steps in one or more applications. It works best when the process is repetitive, rule-based and uses structured data, such as copying order details from an email into an accounting system the same way every time.",
        ],
        bullets: [
          "It follows rules exactly; it doesn't use judgment.",
          "It works through the user interface, like a person would.",
          "It can break when screens or layouts change.",
        ],
      },
      {
        heading: "Examples of RPA",
        paragraphs: ["Common RPA tasks include:"],
        bullets: [
          "Copying data from one system into another that has no integration.",
          "Downloading reports and moving them into shared folders.",
          "Filling in the same web forms with data from a spreadsheet.",
          "Reconciling records between two systems.",
        ],
      },
      {
        heading: "Does a small business need RPA?",
        paragraphs: [
          "Often not. Many small-business tools now offer direct integrations or APIs, which are more reliable than bots that click through screens. RPA is most useful when you're stuck with older software that has no other way to connect. AI automation can also handle messy inputs, like emails and documents, that traditional RPA struggles with.",
        ],
      },
    ],
    table: {
      caption: "RPA vs. AI automation vs. API integration",
      headers: ["", "RPA", "AI automation", "API integration"],
      rows: [
        ["How it works", "Mimics clicks and typing", "Uses AI to read, decide and draft", "Systems talk directly"],
        ["Handles messy input", "Poorly", "Well", "Not by itself"],
        ["Reliability", "Breaks when screens change", "Needs guardrails and testing", "Most reliable"],
        ["Best for", "Legacy software with no API", "Emails, documents, conversations", "Modern tools with APIs"],
      ],
    },
    faqs: [
      {
        q: "What is RPA in simple terms?",
        a: "RPA, or robotic process automation, is software that copies the repetitive clicking and typing a person does on a computer, following exact rules, so the task runs automatically.",
      },
      {
        q: "Is RPA the same as AI?",
        a: "No. Traditional RPA follows fixed rules and doesn't understand content. AI can read and interpret unstructured information like emails and documents. Many modern automations combine both.",
      },
      {
        q: "What are examples of RPA tools?",
        a: "Well-known RPA platforms include UiPath, Automation Anywhere and Microsoft Power Automate. Small businesses often use simpler integration tools like Zapier or Make instead.",
      },
    ],
  },

  "field-service-management": {
    seoTitle: "What Is Field Service Management (FSM) Software? Guide",
    seoDescription:
      "Field service management explained: what FSM software does, key features, examples like Jobber and ServiceTitan, how to choose one and how AI makes it better.",
    sections: [
      {
        heading: "What does field service management software do?",
        paragraphs: [
          "Field service management (FSM) software runs the day-to-day operations of businesses that send technicians or crews to customer locations, such as HVAC, plumbing, electrical, cleaning, pest control and landscaping companies. It replaces whiteboards, paper tickets and spreadsheets with one system.",
        ],
        bullets: [
          "Scheduling and dispatch: assigning jobs to techs and routes.",
          "Customer records and job history.",
          "Estimates, quotes and approvals.",
          "Mobile app for technicians: job details, photos, checklists, signatures.",
          "Invoicing and payments in the field.",
          "Maintenance agreements and recurring jobs.",
          "Reporting on jobs, revenue and technician performance.",
        ],
      },
      {
        heading: "Who needs field service management software?",
        paragraphs: [
          "Any business that schedules work at customer locations benefits once jobs, techs or customers become hard to track by hand. Common signs include double-booked techs, lost paperwork, slow invoicing and no clear view of which jobs are profitable.",
        ],
      },
      {
        heading: "How AI improves field service management",
        paragraphs: [
          "Most FSM tools are only as good as the information going in. AI helps by answering calls and booking jobs directly into the schedule, following up on open estimates, sending reminders and on-the-way texts, summarizing technician notes and keeping customer records up to date automatically.",
        ],
      },
    ],
    table: {
      caption: "Popular field service management software",
      headers: ["Software", "Often chosen by", "Notes"],
      rows: [
        ["Jobber", "Small home service businesses", "Easy to start; strong quoting and invoicing"],
        ["Housecall Pro", "Small to mid-size trades", "Scheduling, marketing and payments in one"],
        ["ServiceTitan", "Larger HVAC, plumbing and electrical shops", "Enterprise depth; bigger investment"],
        ["FieldEdge, Workiz and others", "Specific trades and budgets", "Compare features for your trade"],
      ],
    },
    faqs: [
      {
        q: "What is field service management?",
        a: "Field service management is how a business organizes work done at customer locations: scheduling, dispatching technicians, tracking jobs, invoicing and following up. FSM software handles these tasks in one system.",
      },
      {
        q: "What is the best field service management software for a small business?",
        a: "It depends on your trade, team size and budget. Jobber and Housecall Pro are popular with small teams; ServiceTitan suits larger shops. Pick the one your team will actually use and that connects to your accounting.",
      },
      {
        q: "Does field service software include a CRM?",
        a: "Most include basic CRM features like customer records, job history and communication. Many home service businesses don't need a separate CRM.",
      },
    ],
  },

  "api-integration": {
    seoTitle: "What Is API Integration? Simple Explanation & Examples",
    seoDescription:
      "API integration explained simply: what an API is, how integrations connect your business software, real examples, API vs Zapier, and what small businesses should know.",
    sections: [
      {
        heading: "What is an API?",
        paragraphs: [
          "An API (application programming interface) is a set of rules that lets one piece of software ask another for information or tell it to do something. A simple way to think of it: an API is a menu of requests a system will accept, like 'create a customer,' 'get this invoice' or 'book this appointment.'",
        ],
      },
      {
        heading: "How API integration works",
        paragraphs: [
          "An API integration connects two or more systems so they share data automatically. When something happens in one system, such as a booked job, the integration sends the details to another, such as your accounting software, without anyone re-typing them.",
        ],
        bullets: [
          "Event: something changes in system A.",
          "Request: the integration calls system B's API with the data.",
          "Response: system B confirms or returns information.",
          "Error handling: failures are logged, retried or flagged to a person.",
        ],
      },
      {
        heading: "Examples of API integrations",
        paragraphs: ["Everyday small-business examples:"],
        bullets: [
          "Website form → CRM: every lead created automatically.",
          "Field-service software → QuickBooks: invoices synced.",
          "Payment processor → accounting: payments recorded.",
          "Phone system → CRM: calls logged on the customer record.",
          "Calendar → reminders: confirmations and reminders sent automatically.",
        ],
      },
    ],
    table: {
      caption: "Ways to connect your software",
      headers: ["Option", "How it works", "Best for"],
      rows: [
        ["Native integration", "Built into the software", "Common pairs, like FSM + QuickBooks"],
        ["Zapier / Make", "No-code connectors using APIs", "Simple workflows without developers"],
        ["Custom API integration", "Code that calls each system's API", "Complex or high-volume workflows"],
      ],
    },
    faqs: [
      {
        q: "What does API integration mean?",
        a: "API integration means connecting software systems through their APIs so they can exchange data and trigger actions automatically, without manual re-entry.",
      },
      {
        q: "Is Zapier an API integration?",
        a: "Zapier is a no-code tool that uses software APIs behind the scenes, so it's a simple way to build API integrations without writing code.",
      },
      {
        q: "Do all programs have APIs?",
        a: "Most modern business software offers an API, but access can depend on your plan, and older software may not have one. That's when tools like RPA are sometimes used.",
      },
    ],
  },

  "workflow-automation": {
    seoTitle: "What Is Workflow Automation? Examples for Small Business",
    seoDescription:
      "Workflow automation explained: what it is, how it works, 15 small-business examples, tools to use, and how to pick your first workflow to automate.",
    sections: [
      {
        heading: "How does workflow automation work?",
        paragraphs: [
          "Workflow automation uses software to move work through a series of steps automatically, based on rules. Each workflow has a trigger, conditions and actions. For example: when a job is marked complete (trigger), if the customer paid in full (condition), send a thank-you text and a review request (actions).",
        ],
      },
      {
        heading: "15 workflow automation examples for small businesses",
        paragraphs: ["Workflows most small businesses can automate:"],
        bullets: [
          "Text back every missed call.",
          "Reply instantly to new web leads.",
          "Follow up on quotes that haven't been accepted.",
          "Send appointment confirmations and reminders.",
          "Send 'on the way' texts with arrival times.",
          "Create invoices when jobs are completed.",
          "Remind customers about overdue invoices.",
          "Request reviews after every job.",
          "Add new customers to your CRM and email list.",
          "Notify a manager about high-value leads.",
          "File documents and receipts automatically.",
          "Send maintenance or renewal reminders.",
          "Assign new jobs based on location or skill.",
          "Generate weekly performance reports.",
          "Onboard new clients with a welcome sequence.",
        ],
      },
      {
        heading: "Workflow automation vs. AI automation",
        paragraphs: [
          "Traditional workflow automation follows fixed rules. AI automation adds the ability to handle unstructured information, such as understanding an email, answering a question or summarizing a call. The most useful systems combine both: rules for structure, AI for judgment-light tasks, and people for decisions that matter.",
        ],
      },
      {
        heading: "How to choose your first workflow to automate",
        paragraphs: ["Pick a workflow that happens often, follows a clear pattern and costs you time or revenue when it's missed. Missed-call text-back, quote follow-up and review requests are common first choices because results show up quickly."],
      },
    ],
    faqs: [
      {
        q: "What is workflow automation in simple terms?",
        a: "Workflow automation is using software to handle a sequence of business tasks automatically, based on rules, so work moves forward without someone doing each step manually.",
      },
      {
        q: "What tools are used for workflow automation?",
        a: "Common tools include Zapier, Make and Microsoft Power Automate, plus the automation features built into CRMs and field-service software.",
      },
      {
        q: "What should I automate first?",
        a: "Start with a frequent, repetitive task where delays cost money, like following up with leads or quotes. Measure the result before automating more.",
      },
    ],
  },

  "missed-call-text-back": {
    seoTitle: "What Is Missed-Call Text-Back? How It Works & Examples",
    seoDescription:
      "Missed-call text-back explained: how automatic texts to missed callers work, example messages, setup, texting rules, and how much revenue it can recover.",
    sections: [
      {
        heading: "How does missed-call text-back work?",
        paragraphs: [
          "When a call to your business number goes unanswered, the system detects it and immediately sends the caller a text from your business number, such as: 'Sorry we missed your call! This is Smith Plumbing. How can we help? You can reply here or book a time: [link].' The caller can reply by text, and the conversation goes to your team or an AI assistant.",
        ],
      },
      {
        heading: "Example missed-call text-back messages",
        paragraphs: ["Keep it short, friendly and useful:"],
        bullets: [
          "Home services: 'Hi, this is [Business]. Sorry we missed you — we're on a job. What can we help with? Reply here and we'll get right back to you.'",
          "Clinics: 'Thanks for calling [Practice]. We're with patients right now. Reply with a good time to call back, or book here: [link].'",
          "After hours: 'Thanks for calling [Business]! We're closed right now. Reply with what you need and we'll reach out first thing, or book online: [link].'",
        ],
      },
      {
        heading: "Why missed-call text-back matters",
        paragraphs: [
          "Many callers don't leave voicemails and simply call the next business. An instant text keeps the conversation going and shows the customer you're responsive. It's one of the simplest, highest-return automations for phone-driven businesses. Estimate what missed calls cost you with a missed-call revenue calculator.",
        ],
      },
      {
        heading: "Texting rules to follow",
        paragraphs: [
          "Replying to someone who just called you about their own request is treated differently from marketing texts, but you should still identify your business, keep the message about their inquiry and honor opt-outs like STOP immediately. Business texting from local numbers generally requires A2P 10DLC registration.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is missed-call text-back legal?",
        a: "Generally, a one-time text replying to someone who just called your business about their request is treated differently from marketing. Identify your business, keep it about their inquiry and honor opt-outs. This isn't legal advice; check the rules for your situation.",
      },
      {
        q: "Do I need a new phone number?",
        a: "Usually not. Many systems work with your existing business number through forwarding or your phone provider.",
      },
      {
        q: "Can AI reply to the text conversation?",
        a: "Yes. An AI assistant can answer common questions, collect job details and book appointments by text, then hand off to your team when needed.",
      },
    ],
  },

  "speed-to-lead": {
    seoTitle: "What Is Speed to Lead? Why Response Time Wins Customers",
    seoDescription:
      "Speed to lead explained: what it means, what research says about lead response time, benchmarks, and how to reply to every lead in under a minute, 24/7.",
    sections: [
      {
        heading: "Why speed to lead matters",
        paragraphs: [
          "Interest fades quickly, and many customers contact several businesses at once. A widely cited Harvard Business Review study found that companies contacting leads within an hour were nearly seven times as likely to qualify them as those that waited longer, yet many companies took more than a day to respond, and nearly a quarter never responded at all.",
        ],
      },
      {
        heading: "How to measure your speed to lead",
        paragraphs: ["Test your business like a customer would:"],
        bullets: [
          "Submit your own website form after hours and time the reply.",
          "Call during a busy afternoon and see what happens.",
          "Check average response time for last month's leads in your CRM.",
        ],
      },
      {
        heading: "How to improve speed to lead",
        paragraphs: ["Automate the first response and route qualified leads to a person fast:"],
        bullets: [
          "Missed-call text-back for phone leads.",
          "Instant, personal replies to web forms.",
          "An AI assistant that answers questions and books appointments 24/7.",
          "Instant alerts to the right team member.",
          "Timed follow-ups for leads who don't respond.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a good lead response time?",
        a: "As fast as possible: ideally within five minutes, and at most within an hour. Automation lets you respond instantly even after hours.",
      },
      {
        q: "What is the 5-minute rule for leads?",
        a: "The 5-minute rule is the guideline that you should respond to new leads within five minutes, because the chance of reaching and converting them drops quickly after that.",
      },
    ],
  },

  "entity-seo": {
    seoTitle: "What Is Entity SEO? A Practical Guide for Businesses",
    seoDescription:
      "Entity SEO explained: what entities are, how Google and AI search understand businesses, and practical steps like schema, sameAs links and consistent business info.",
    sections: [
      {
        heading: "What is an entity in SEO?",
        paragraphs: [
          "An entity is a distinct, identifiable thing, such as a business, person, place, product or concept, that search engines can recognize and connect to other things. Instead of only matching keywords, Google and AI assistants try to understand which entity a page is about and how it relates to others.",
        ],
      },
      {
        heading: "Why entity SEO matters for AI search",
        paragraphs: [
          "AI Overviews, ChatGPT and other assistants answer questions by drawing on what they know about entities. If your business is a clear, consistent entity, with the same name, description, location, services and links everywhere, it's easier for these systems to describe and recommend you accurately.",
        ],
      },
      {
        heading: "How to do entity SEO",
        paragraphs: ["Practical steps any business can take:"],
        bullets: [
          "Use the same business name, address, phone and description everywhere (NAP consistency).",
          "Add Organization or LocalBusiness schema markup to your website.",
          "Link your official profiles with sameAs in your schema.",
          "Complete your Google Business Profile and key directory listings.",
          "Create clear pages about your company, services, people and locations.",
          "Earn mentions on reputable sites in your industry and community.",
          "Disambiguate: make it obvious how you differ from similarly named businesses.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between entities and keywords?",
        a: "Keywords are words people type. Entities are the real-world things those words refer to. Entity SEO helps search engines understand exactly which business, person or concept you are, not just which words appear on your page.",
      },
      {
        q: "Does schema markup help entity SEO?",
        a: "Yes. Schema markup gives search engines structured facts about your business, such as name, services, location and official profiles, which helps them understand and connect your entity.",
      },
    ],
  },
  "ai-evals": {
    seoTitle: "What Are AI Evals? How to Test AI Before It Talks to Customers",
    seoDescription:
      "AI evals explained for business owners: what they are, how to build a simple test set, what to measure, and how evals keep an AI receptionist or chatbot accurate.",
    sections: [
      {
        heading: "Why test AI with evals instead of just trying it?",
        paragraphs: [
          "An AI system can answer the same question differently from one day to the next, and it usually handles the easy questions well. The expensive mistakes hide in the unusual ones: the caller with an emergency, the customer asking for a discount, the question about a service you don't offer. Trying an AI a handful of times won't surface those. A repeatable test set will.",
          "Evals also tell you whether a change made things better or worse. When you update the instructions, add a new price list or switch AI models, you re-run the same tests and compare the scores instead of guessing.",
        ],
      },
      {
        heading: "How to build a simple eval set for a small business",
        paragraphs: ["You don't need special software to start. A spreadsheet works:"],
        bullets: [
          "Collect 30–100 real examples: common calls, texts, emails or chat questions, with personal details removed.",
          "Include the hard cases on purpose: emergencies, angry customers, pricing outside your list, out-of-area requests.",
          "For each example, write what a good response must do (for example: books the right appointment type, gives no price, hands off to a person).",
          "Run the AI on every example and mark each result pass or fail against those rules.",
          "Fix the cause of the most common failure first, then re-run the whole set.",
        ],
      },
      {
        heading: "What should an eval check?",
        paragraphs: [
          "Good evals check outcomes that matter to the business, not just whether the answer sounds good. Typical checks are accuracy against your approved information, whether the AI took the right action, whether it handed off when it should, tone, and whether it stayed inside its guardrails.",
        ],
      },
    ],
    table: {
      caption: "Ways to grade an AI eval",
      headers: ["Method", "How it works", "Best for"],
      rows: [
        ["Code checks", "Automatic rules, such as 'the reply contains a booking link' or 'no dollar amounts'", "Format, required fields, forbidden content"],
        ["AI as a judge", "A second AI model scores each answer against written criteria", "Large test sets, tone and helpfulness"],
        ["Human review", "A person reads and grades each result", "Sensitive topics and final sign-off before launch"],
      ],
    },
    faqs: [
      {
        q: "How many test cases does a small business need?",
        a: "Start with 30 to 100 realistic examples that cover your most common requests and your riskiest ones. Add a new case every time the AI makes a mistake in real use, so the same problem can't come back unnoticed.",
      },
      {
        q: "How often should AI evals be run?",
        a: "Before launch, after every change to instructions, data or the AI model, and on a regular schedule such as monthly, because customer questions and business information change over time.",
      },
      {
        q: "Are evals the same as guardrails?",
        a: "No. Guardrails are the rules that limit what an AI can say and do. Evals are the tests that check whether the AI, including its guardrails, actually behaves correctly.",
      },
    ],
  },
  "ai-hallucination": {
    seoTitle: "What Is an AI Hallucination? Examples & How to Prevent It",
    seoDescription:
      "AI hallucinations explained: why AI makes up prices, policies and facts, real business examples, and the practical ways to prevent wrong answers reaching customers.",
    sections: [
      {
        heading: "Why do AI models hallucinate?",
        paragraphs: [
          "Language models are trained to produce the most likely next words, not to check facts. When the information they need is missing, out of date or ambiguous, they still produce a fluent answer, and fluent can look confident even when it's wrong.",
          "In business systems, the most common causes are simple: the AI was never given your current prices or policies, it was given conflicting documents, or its instructions didn't tell it what to do when it doesn't know.",
        ],
      },
      {
        heading: "Examples of AI hallucinations in a small business",
        paragraphs: ["These are the kinds of mistakes that cause real problems:"],
        bullets: [
          "Quoting a price that isn't on your price list.",
          "Promising same-day service you can't deliver.",
          "Inventing a return, refund or warranty policy.",
          "Saying you serve a town that's outside your service area.",
          "Citing a law, rule or product detail that doesn't exist.",
        ],
      },
      {
        heading: "How to prevent AI hallucinations",
        paragraphs: [
          "No method eliminates hallucinations completely, so the goal is to make wrong answers unlikely and low-impact. In practice that means combining several layers rather than relying on one.",
        ],
        bullets: [
          "Ground the AI in your approved information using retrieval (RAG), and remove outdated documents.",
          "Tell it to say it doesn't know and offer a callback when information is missing.",
          "Restrict sensitive answers, such as prices, to an approved list.",
          "Test with evals that include tricky questions before launch.",
          "Route high-stakes topics like refunds, legal or medical questions to a person.",
          "Review real conversations regularly and fix the causes of mistakes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can AI hallucinations be completely eliminated?",
        a: "Not entirely with today's language models. They can be made rare and low-impact by grounding the AI in your own information, limiting what it can say, testing it, and keeping a person involved for sensitive decisions.",
      },
      {
        q: "Does a bigger or newer AI model stop hallucinations?",
        a: "Newer models tend to make fewer mistakes, but no model knows your current prices, schedule or policies unless you give it that information. Grounding and guardrails matter more than the model choice for most business uses.",
      },
      {
        q: "Who is responsible if a business AI gives a customer wrong information?",
        a: "The business that deploys the AI should assume it is responsible for what the AI tells customers. That's why customer-facing AI should be limited to approved information and should hand off anything it isn't sure about.",
      },
    ],
  },
  "prompt-engineering": {
    seoTitle: "What Is Prompt Engineering? Examples & Tips for Business",
    seoDescription:
      "Prompt engineering explained in plain English: what makes a good prompt, a reusable template, before-and-after examples and tips for business AI systems.",
    sections: [
      {
        heading: "What makes a good prompt?",
        paragraphs: [
          "A good prompt removes guesswork. It tells the AI who it is acting as, what the goal is, what information to use, what the output should look like and what to do when something is missing. Vague prompts get generic answers; specific prompts get usable ones.",
        ],
        bullets: [
          "Role: who the AI is acting as (for example, the front desk of a plumbing company).",
          "Goal: the outcome you want (book an appointment, draft a reply, summarize a call).",
          "Context: the facts to use, such as services, hours, service area and policies.",
          "Format: length, tone and structure of the answer.",
          "Limits: what it must never do, and when to hand off to a person.",
          "Examples: one or two samples of a great answer.",
        ],
      },
      {
        heading: "A before-and-after prompt example",
        paragraphs: [
          "Before: \"Write a reply to this customer.\" The AI has to guess the tone, the facts and the next step.",
          "After: \"You are the office manager at a residential HVAC company. Reply to this customer in under 80 words, friendly and plain. Use only the services and prices below. Offer the next two open appointment slots. If they mention gas smell or no heat with young children or elderly people at home, tell them to call our emergency line now.\" The result is consistent, accurate and safe.",
        ],
      },
      {
        heading: "Prompt engineering for business systems vs. everyday chat",
        paragraphs: [
          "When you chat with ChatGPT, you can fix a weak prompt by asking a follow-up. In a business system, like an AI receptionist or lead follow-up assistant, the same prompt runs thousands of times with no one watching each answer. That's why business prompts are written carefully, tested with real examples (evals) and updated over time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is prompt engineering still important with newer AI models?",
        a: "Yes. Newer models follow instructions better, but they still can't know your business rules, tone or limits unless you state them. Clear instructions and good context remain the cheapest way to improve results.",
      },
      {
        q: "Do I need to learn prompt engineering to use AI in my business?",
        a: "For everyday tasks, a few habits go a long way: give context, say what you want, and show an example. For customer-facing systems, it's worth having the prompts written and tested by someone experienced.",
      },
      {
        q: "What's the difference between prompt engineering and fine-tuning?",
        a: "Prompt engineering changes the instructions and context you give a model. Fine-tuning changes the model itself by training it on examples. Most small businesses get what they need from good prompts plus their own data, without fine-tuning.",
      },
    ],
  },
  "fine-tuning": {
    seoTitle: "What Is Fine-Tuning an AI Model? When It's Worth It",
    seoDescription:
      "Fine-tuning explained: what it means to fine-tune an AI model, how it compares to prompting and RAG, what it costs in effort, and when a small business actually needs it.",
    sections: [
      {
        heading: "How does fine-tuning work?",
        paragraphs: [
          "Fine-tuning starts with an existing AI model and trains it further on a set of example inputs and the exact outputs you want. After training, the model produces that style or format more consistently without needing as many instructions in every request.",
          "It does not reliably teach a model new facts that change often, such as prices, schedules or inventory. Information like that belongs in your data, retrieved at the moment of the question.",
        ],
      },
      {
        heading: "When is fine-tuning worth it for a small business?",
        paragraphs: ["Fine-tuning can make sense when all of these are true:"],
        bullets: [
          "You have hundreds or thousands of high-quality examples of the exact output you want.",
          "Good prompts and examples still don't produce consistent enough results.",
          "The task is narrow and repeated at high volume, such as classifying documents into fixed categories.",
          "You can maintain it: re-training when the task or your standards change.",
        ],
      },
      {
        heading: "Better first steps than fine-tuning",
        paragraphs: [
          "For most small-business uses, such as answering customer questions, drafting replies, summarizing calls or extracting data from documents, clear prompts, your own data through retrieval (RAG) and solid guardrails get better results faster, cost less and are easier to update when your business changes.",
        ],
      },
    ],
    table: {
      caption: "Prompting vs. RAG vs. fine-tuning",
      headers: ["Approach", "What it changes", "Best for", "Effort to update"],
      rows: [
        ["Prompt engineering", "The instructions and examples sent with each request", "Tone, format, rules, most business tasks", "Low: edit the prompt"],
        ["RAG (retrieval)", "The information the AI looks up before answering", "Current facts: prices, policies, FAQs, documents", "Low: update the documents"],
        ["Fine-tuning", "The model itself, through extra training", "Very consistent output on a narrow, high-volume task", "High: rebuild the training set and re-train"],
      ],
    },
    faqs: [
      {
        q: "Does fine-tuning make an AI know my business?",
        a: "Only partly, and not for facts that change. Fine-tuning shapes how a model responds. For current information like prices and policies, retrieval (RAG) is the better tool because you can update it instantly.",
      },
      {
        q: "Is fine-tuning expensive?",
        a: "The biggest cost is usually the work of collecting and cleaning enough high-quality examples, then keeping them current. That's why fine-tuning is typically a later step, after prompting and retrieval have been tried.",
      },
    ],
  },
};
