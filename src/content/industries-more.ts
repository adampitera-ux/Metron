import type { Industry } from "./types";

export const MORE_INDUSTRIES: Industry[] = [
  // ---------------------------------------------------------------------------
  // Construction
  // ---------------------------------------------------------------------------
  {
    slug: "construction",
    name: "Construction",
    audience: "construction companies",
    metaTitle: "AI Automation for Construction Companies | Metron",
    metaDescription:
      "AI automation for contractors: faster bid follow-up, automated daily logs, change-order and invoice paperwork, sub coordination and 24/7 lead intake.",
    headline: "AI Automation for Construction Companies: Less Paperwork, More Building",
    answer:
      "AI helps a construction company by capturing and qualifying leads, following up on bids, turning field notes and photos into daily logs, drafting change orders and pay applications, chasing subcontractor paperwork, and syncing project data with accounting. Project managers spend less time at a desk and more time keeping jobs on schedule and on budget.",
    painPoints: [
      {
        title: "Project managers drown in paperwork",
        body: "Daily logs, RFIs, change orders, submittals and pay applications pile up after the workday ends, and PMs end up doing admin at night instead of managing jobs.",
      },
      {
        title: "Bids go out and nobody follows up",
        body: "Estimators spend hours on a bid, send it, then move on to the next one. Without consistent follow-up, winnable jobs quietly go to the contractor who called back.",
      },
      {
        title: "Subcontractor paperwork is always missing something",
        body: "Expired certificates of insurance, unsigned lien waivers and missing W-9s hold up payments and create risk, and tracking them by email is slow.",
      },
      {
        title: "Data lives in too many places",
        body: "Estimates in one tool, schedules in another, costs in QuickBooks and photos on phones. Getting a clear picture of job profitability takes manual spreadsheet work.",
      },
    ],
    automations: [
      {
        title: "Lead intake and qualification",
        body: "Calls, web forms and emails are answered and qualified with your questions about project type, location, budget and timeline, then logged in your CRM with a clean summary for the estimator.",
      },
      {
        title: "Bid and proposal follow-up",
        body: "After a bid is sent, a timed series of emails and texts checks in, answers common questions and flags engaged prospects so your estimator calls the right people first.",
      },
      {
        title: "Daily logs from field notes and photos",
        body: "Foremen send voice notes, texts or photos from the site, and AI drafts a structured daily log with weather, crew, work completed and issues for the PM to review and approve.",
      },
      {
        title: "Change order and pay application drafting",
        body: "AI pulls scope, quantities and pricing from your records to draft change orders and pay applications in your format, so the PM reviews and sends instead of starting from scratch.",
      },
      {
        title: "Subcontractor compliance tracking",
        body: "The system tracks certificate of insurance expirations, lien waivers and W-9s, sends reminders to subs automatically, and alerts your office before a payment goes out with missing documents.",
      },
      {
        title: "Job cost reporting across your software",
        body: "We connect your project management and accounting tools so budget-versus-actual reports update automatically instead of being rebuilt in a spreadsheet each week.",
      },
    ],
    exampleMath: {
      title: "Example: what PM admin time can add up to",
      body: "For example, if each of your 4 project managers spends 6 hours a week on logs, change orders and paperwork chasing, and automation saves half of that, you get back 12 hours a week, or about 624 hours a year. At an illustrative loaded cost of $55 an hour, that is roughly $34,320 in PM time redirected to running jobs. These figures are assumptions for illustration only.",
    },
    tools: [
      "Procore",
      "Buildertrend",
      "JobTread",
      "CoConstruct",
      "QuickBooks",
      "Google Workspace",
      "Microsoft 365",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a construction company?",
        a: "Pricing depends on which workflows you automate and which systems we connect. Many contractors start with lead intake and bid follow-up, then add paperwork automation. We give you a fixed quote after a short discovery call so you know the cost before any work begins.",
      },
      {
        q: "Does it work with Procore, Buildertrend or JobTread?",
        a: "We can integrate with common construction platforms like Procore, Buildertrend and JobTread, typically through their APIs or automation tools like Zapier or Make. The depth of integration depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Will AI write change orders or contracts on its own?",
        a: "No. AI drafts documents from your data and templates, and a PM or owner reviews and approves everything before it goes out. Contracts and anything with legal weight should still be reviewed by you and, where appropriate, your attorney.",
      },
      {
        q: "Can my field crews use it without learning new software?",
        a: "Yes. Most field workflows run through text messages, voice notes or photos sent from a phone. The AI handles the formatting and filing so crews do not need to log in to anything new.",
      },
      {
        q: "How long does setup take?",
        a: "A focused workflow like bid follow-up or lead intake can often go live in a few weeks. Projects that connect several systems, such as project management and accounting, take longer and include testing on real jobs first.",
      },
    ],
    relatedServices: ["ai-automation", "custom-ai-software", "lead-follow-up", "ai-strategy"],
    keywords: [
      "AI automation for construction companies",
      "AI for contractors",
      "construction back office automation",
      "construction bid follow-up automation",
      "AI daily logs construction",
    ],
  },

  // ---------------------------------------------------------------------------
  // Painting
  // ---------------------------------------------------------------------------
  {
    slug: "painting",
    name: "Painting",
    audience: "painting contractors",
    metaTitle: "AI Automation for Painting Contractors | Metron",
    metaDescription:
      "AI receptionists and estimate follow-up for painting contractors. Book more estimates, close more quotes, and fill slow seasons without adding office staff.",
    headline: "AI Automation for Painting Contractors: Book More Estimates, Close More Jobs",
    answer:
      "AI helps a painting contractor by answering calls and web leads instantly, booking estimate appointments, following up on every open quote, sending color and prep reminders before jobs, and reactivating past customers for repaints. You win more of the estimates you already give, and the office spends less time chasing homeowners and more time scheduling crews.",
    painPoints: [
      {
        title: "Leads arrive while you are on a ladder",
        body: "Owners and estimators are on job sites most of the day, so calls and form fills sit for hours. Homeowners who request three quotes usually book the first painter who responds.",
      },
      {
        title: "Quotes sit with no follow-up",
        body: "Painting estimates often need a couple of nudges before a homeowner commits, but busy contractors send the quote and hope for the best.",
      },
      {
        title: "Seasonal swings make crews hard to keep busy",
        body: "Exterior season is packed and winter is slow. Without a steady pipeline of interior work and repeat customers, crews sit idle or leave.",
      },
      {
        title: "Job prep and color details get missed",
        body: "Missing color selections, unmoved furniture and unclear access cause delays on the first morning, costing crew hours.",
      },
    ],
    automations: [
      {
        title: "Instant lead response and estimate booking",
        body: "Calls, texts and web forms get an immediate response that collects project type, rooms or square footage and timeline, then books an estimate appointment on your calendar.",
      },
      {
        title: "Missed-call text-back",
        body: "If you cannot pick up, the caller gets a text within seconds offering to book an estimate, so they are less likely to call the next painter on the list.",
      },
      {
        title: "Quote follow-up sequences",
        body: "After an estimate goes out, a timed series of texts and emails checks in, answers common questions about prep and timing, and makes it easy to approve and schedule.",
      },
      {
        title: "Pre-job prep and color confirmations",
        body: "Customers get automated reminders to confirm colors and sheen, clear furniture and arrange access, so crews can start on time.",
      },
      {
        title: "Past-customer reactivation for repaints",
        body: "Former customers receive seasonal check-ins about touch-ups, exterior repaints or new rooms, helping fill slower months.",
      },
      {
        title: "Invoicing and payment reminders",
        body: "Completed jobs trigger invoices in your accounting software and polite payment reminders, cutting the time your office spends chasing balances.",
      },
    ],
    exampleMath: {
      title: "Example: what better quote follow-up can be worth",
      body: "For example, if you send 30 estimates a month, close 30% of them today, and consistent follow-up lifts that to 36%, that is about 2 extra jobs a month (1.8 rounded). At an illustrative average job of $4,000, that is roughly $7,200 more a month. These numbers are assumptions for illustration only; use your own estimate volume and close rate.",
    },
    tools: [
      "Jobber",
      "Housecall Pro",
      "PaintScout",
      "Estimate Rocket",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a painting company?",
        a: "Pricing depends on which workflows you want and which tools we connect. Most painting contractors start with lead response and quote follow-up because those tie directly to revenue. We provide a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with Jobber, Housecall Pro or PaintScout?",
        a: "We can integrate with common tools like Jobber, Housecall Pro and PaintScout, usually through their APIs or automation platforms like Zapier or Make. What is possible depends on your platform and plan, and we confirm that up front.",
      },
      {
        q: "Can AI give painting estimates over the phone?",
        a: "We generally do not recommend firm prices without seeing the job. The AI can share general ranges you approve, collect project details and photos, and book an on-site or virtual estimate so your estimator can price it properly.",
      },
      {
        q: "Will customers know they are talking to AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It uses your company name, sounds natural, and hands off to a person whenever the customer asks.",
      },
      {
        q: "How long does setup take?",
        a: "Lead response and quote follow-up can often be live in a couple of weeks. We test the messages and scripts with you before anything reaches a real customer.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for painting contractors",
      "AI receptionist for painters",
      "painting estimate follow-up",
      "painting contractor lead response",
      "painting business automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Garage door
  // ---------------------------------------------------------------------------
  {
    slug: "garage-door",
    name: "Garage Door",
    audience: "garage door companies",
    metaTitle: "AI Automation for Garage Door Companies | Metron",
    metaDescription:
      "AI receptionists for garage door companies that answer urgent calls 24/7, book repairs into your software and follow up on new door quotes automatically.",
    headline: "AI Automation for Garage Door Companies: Answer Every Stuck-Door Call",
    answer:
      "AI helps a garage door company by answering every call 24/7, triaging urgent situations like a car trapped in the garage, booking repairs into your field service software, following up on new door and opener quotes, and sending maintenance reminders. You capture more urgent work, keep techs routed efficiently and spend less office time on the phone.",
    painPoints: [
      {
        title: "Urgent calls go to the first company that answers",
        body: "A broken spring or a door stuck open is a same-day problem. Callers who hit voicemail usually move straight to the next listing.",
      },
      {
        title: "Small teams can't cover the phones",
        body: "Many garage door companies run lean, with techs in the field and one person in the office. Calls during installs and lunch breaks are easy to miss.",
      },
      {
        title: "New door quotes stall",
        body: "Door replacements are bigger purchases, and homeowners often compare options. Without follow-up, quotes go cold.",
      },
      {
        title: "Maintenance and repeat business gets ignored",
        body: "Annual tune-ups and opener upgrades are easy revenue, but nobody has time to remind past customers.",
      },
    ],
    automations: [
      {
        title: "24/7 AI receptionist with job booking",
        body: "The AI answers in your company name, collects the issue, door type and address, and books the repair or hands dispatch a clean summary.",
      },
      {
        title: "Urgent-call triage and on-call routing",
        body: "Using rules you approve, the AI flags situations like a door stuck open or a vehicle trapped inside and connects them to your on-call tech right away.",
      },
      {
        title: "Missed-call text-back",
        body: "Every missed call gets an instant text offering to book, so the customer has a reason to wait for you instead of calling a competitor.",
      },
      {
        title: "New door and opener quote follow-up",
        body: "After a quote goes out, automated texts and emails follow up, share style options and make it easy to approve the job.",
      },
      {
        title: "Maintenance reminders",
        body: "Past customers receive annual tune-up reminders and safety check offers, helping fill gaps in the schedule.",
      },
      {
        title: "Invoicing and review requests",
        body: "When a job is closed, the invoice syncs to your accounting software and the customer gets a short review request for your Google Business Profile.",
      },
    ],
    exampleMath: {
      title: "Example: what 6 missed calls a week can cost",
      body: "For example, if you miss 6 calls a week, 3 of those callers would have booked, and your average repair ticket is $300, that is about $900 a week, or roughly $46,800 a year, in work that may go elsewhere. These figures are illustrative assumptions; plug in your own numbers.",
    },
    tools: [
      "ServiceTitan",
      "Housecall Pro",
      "Jobber",
      "Workiz",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does an AI receptionist cost for a garage door company?",
        a: "Pricing depends on call volume, the workflows you add and the software we connect. We scope it on a short call and give a fixed quote up front. Many owners compare it to the cost of an answering service or a part-time hire.",
      },
      {
        q: "Can the AI tell a real emergency from a routine call?",
        a: "It follows the triage questions and rules you approve, such as whether the door is stuck open or a vehicle is trapped. Calls that meet your urgent criteria are routed to your on-call tech immediately.",
      },
      {
        q: "Does it work with ServiceTitan, Housecall Pro, Jobber or Workiz?",
        a: "We can integrate with common field service platforms like ServiceTitan, Housecall Pro, Jobber and Workiz, usually through their APIs or automation tools like Zapier or Make. The exact integration depends on your platform and plan.",
      },
      {
        q: "Will customers know they are talking to AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It uses your company name and can transfer to a person whenever the caller asks.",
      },
      {
        q: "How long does setup take?",
        a: "An AI receptionist with missed-call text-back can often go live in a couple of weeks. We test it with realistic garage door call scenarios before it answers real customers.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation"],
    keywords: [
      "AI receptionist for garage door companies",
      "garage door answering service",
      "AI automation for garage door business",
      "garage door missed call text back",
      "garage door company lead follow-up",
    ],
  },

  // ---------------------------------------------------------------------------
  // Pool service
  // ---------------------------------------------------------------------------
  {
    slug: "pool-service",
    name: "Pool Service",
    audience: "pool service companies",
    metaTitle: "AI Automation for Pool Service Companies | Metron",
    metaDescription:
      "AI automation for pool service companies: answer calls, book openings and repairs, send service reports and automate billing so routes run without office chaos.",
    headline: "AI Automation for Pool Service Companies: Smoother Routes, Faster Billing",
    answer:
      "AI helps a pool service company by answering calls and texts, booking openings, closings and repairs, sending customers automatic service reports after each visit, following up on equipment quotes, and running recurring billing and payment reminders. Techs stay focused on their routes, and the office stops spending hours on calls, invoices and schedule changes.",
    painPoints: [
      {
        title: "Spring openings flood the phones",
        body: "Opening season brings a wave of calls and requests all at once, and small offices cannot keep up with booking, rescheduling and questions.",
      },
      {
        title: "Customers want to know what was done",
        body: "Homeowners often call to ask whether the tech came and what chemicals were added. Answering those calls takes office time every week.",
      },
      {
        title: "Recurring billing is tedious",
        body: "Monthly service plans, chemical charges and add-on repairs make invoicing time-consuming, and late payments are common.",
      },
      {
        title: "Equipment repair quotes get forgotten",
        body: "Techs spot failing pumps, filters and heaters, but the follow-up quote often never gets sent or chased.",
      },
    ],
    automations: [
      {
        title: "AI receptionist for bookings and questions",
        body: "The AI answers calls and texts, books openings, closings and repairs, and answers common questions about service plans and scheduling.",
      },
      {
        title: "Automated service reports",
        body: "After each visit, customers automatically receive a summary of readings, chemicals added and notes or photos from the tech, cutting did-you-come calls.",
      },
      {
        title: "Recurring billing and payment reminders",
        body: "Invoices are generated from completed visits and synced to your accounting software, with automatic reminders for unpaid balances.",
      },
      {
        title: "Repair and equipment quote follow-up",
        body: "When a tech flags an equipment issue, a quote follow-up sequence starts automatically so the repair is not forgotten.",
      },
      {
        title: "Seasonal opening and closing campaigns",
        body: "Past customers get timely reminders to book openings and closings, spreading demand and filling the schedule earlier.",
      },
      {
        title: "Route change and weather notifications",
        body: "When routes shift because of weather or staffing, affected customers are notified automatically instead of by a round of phone calls.",
      },
    ],
    exampleMath: {
      title: "Example: what faster repair follow-up can add",
      body: "For example, if your techs flag 20 equipment issues a month, only 5 become sold repairs today, and consistent follow-up turns 9 into sold jobs, that is 4 more repairs a month. At an illustrative average repair of $600, that is about $2,400 a month, or $28,800 a year. These figures are assumptions for illustration only.",
    },
    tools: [
      "Skimmer",
      "Pool Brain",
      "Jobber",
      "Housecall Pro",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a pool service company?",
        a: "Pricing depends on the workflows you choose and which software we connect. Many pool companies start with call answering and repair quote follow-up, then add billing automation. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with Skimmer or Pool Brain?",
        a: "We can integrate with pool service platforms like Skimmer and Pool Brain, as well as general tools like Jobber and QuickBooks, typically through APIs, exports or automation tools like Zapier or Make. What is possible depends on your platform, and we confirm it during discovery.",
      },
      {
        q: "Can AI answer questions about pool chemistry?",
        a: "The AI can share general information you approve, like service plan details and scheduling. For specific water chemistry or safety concerns, it routes the customer to your team so a trained tech can respond.",
      },
      {
        q: "Will this replace my office manager?",
        a: "It is designed to take repetitive calls, reminders and billing tasks off their plate. Most owners use it so the office can focus on customer issues and route planning instead of answering the same questions.",
      },
      {
        q: "How long does setup take?",
        a: "Call answering and reminders can often launch in a couple of weeks. Billing and service-report automation that connects to your route software takes a bit longer because of testing.",
      },
    ],
    relatedServices: ["ai-automation", "ai-receptionist", "lead-follow-up", "review-automation"],
    keywords: [
      "AI automation for pool service companies",
      "pool service answering service",
      "pool company billing automation",
      "AI receptionist for pool companies",
      "pool service business software automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Moving
  // ---------------------------------------------------------------------------
  {
    slug: "moving",
    name: "Moving",
    audience: "moving companies",
    metaTitle: "AI Automation for Moving Companies | Metron",
    metaDescription:
      "AI automation for movers: answer quote requests instantly, run virtual survey booking, follow up on estimates and confirm moves so fewer leads book elsewhere.",
    headline: "AI Automation for Moving Companies: Win the Quote Before Your Competitors Call Back",
    answer:
      "AI helps a moving company by responding to quote requests within seconds, collecting inventory and move details, booking in-home or virtual surveys, following up on every open estimate, and sending move-day confirmations and reminders. You book more of the leads you already pay for, and your sales team spends time closing instead of chasing.",
    painPoints: [
      {
        title: "Shoppers request quotes from several movers at once",
        body: "People planning a move often submit multiple quote requests in one sitting. The company that responds first with useful information has a strong advantage.",
      },
      {
        title: "Gathering inventory details takes forever",
        body: "Accurate estimates need room counts, large items, stairs and access details. Collecting all of that by phone ties up your sales staff.",
      },
      {
        title: "Estimates go cold before move day",
        body: "Customers often book weeks out and compare prices. Without steady follow-up, they forget you or go with a cheaper quote.",
      },
      {
        title: "Last-minute changes create chaos",
        body: "Date changes, added items and access issues discovered on move day cost crew time and lead to disputes.",
      },
    ],
    automations: [
      {
        title: "Instant quote response",
        body: "Web leads, calls and texts get an immediate reply that starts collecting move date, origin, destination and home size, so the customer hears from you first.",
      },
      {
        title: "Inventory and survey booking",
        body: "The AI walks customers through a short inventory or books an in-home or virtual survey with your estimator, and logs everything in your moving software.",
      },
      {
        title: "Estimate follow-up sequences",
        body: "Open estimates get a timed series of texts and emails that answer common questions about packing, insurance options and timing, and make it easy to book.",
      },
      {
        title: "Move confirmations and pre-move checklists",
        body: "Booked customers receive confirmations, packing reminders and access checklists so surprises on move day are less likely.",
      },
      {
        title: "Crew and dispatch paperwork",
        body: "Job details, inventory and special instructions are compiled into crew sheets automatically instead of being retyped by the office.",
      },
      {
        title: "Post-move review and referral requests",
        body: "After the move, customers get a short review request and an easy way to refer friends, building your Google Business Profile over time.",
      },
    ],
    exampleMath: {
      title: "Example: what faster lead response can be worth",
      body: "For example, if you get 100 quote requests a month, book 15% today, and faster response plus follow-up lifts that to 18%, that is 3 extra moves a month. At an illustrative average move of $1,500, that is about $4,500 a month, or $54,000 a year. These numbers are assumptions for illustration only.",
    },
    tools: [
      "SmartMoving",
      "Supermove",
      "MoveitPro",
      "Yembo",
      "QuickBooks",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a moving company?",
        a: "Pricing depends on lead volume, the workflows you choose and the software we connect. Most movers start with instant lead response and estimate follow-up. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with SmartMoving or Supermove?",
        a: "We can integrate with moving software like SmartMoving and Supermove, usually through their APIs or automation tools like Zapier or Make. The level of integration depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Can the AI give binding moving estimates?",
        a: "No. The AI collects details and can share general ranges you approve, but binding or not-to-exceed estimates should come from your estimator under your company's policies and any rules that apply to your moves.",
      },
      {
        q: "Is texting customers allowed?",
        a: "Yes, with proper consent. We set up opt-in language and opt-out handling and help you register for A2P 10DLC texting so your messages are delivered reliably and follow carrier rules.",
      },
      {
        q: "How long does setup take?",
        a: "Lead response and follow-up can often go live in a couple of weeks. Deeper integrations with your moving software take longer and include testing before launch.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "ai-automation", "review-automation"],
    keywords: [
      "AI automation for moving companies",
      "moving company lead response",
      "AI receptionist for movers",
      "moving estimate follow-up automation",
      "moving company CRM automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Junk removal
  // ---------------------------------------------------------------------------
  {
    slug: "junk-removal",
    name: "Junk Removal",
    audience: "junk removal companies",
    metaTitle: "AI Automation for Junk Removal Companies | Metron",
    metaDescription:
      "AI automation for junk removal: answer calls 24/7, quote from customer photos, book pickups, route trucks and collect reviews, all without adding office staff.",
    headline: "AI Automation for Junk Removal Companies: Book More Pickups, Spend Less Time on the Phone",
    answer:
      "AI helps a junk removal company by answering calls and texts 24/7, collecting photos so you can quote quickly, booking pickups into your schedule, sending arrival updates, following up on open quotes, and requesting reviews after each job. Owners spend less time on the phone and more time running trucks and growing commercial accounts.",
    painPoints: [
      {
        title: "Owners answer the phone from the truck",
        body: "Many junk removal businesses are owner-operated, and the owner is lifting a couch when the next customer calls. Missed calls often mean missed jobs.",
      },
      {
        title: "Quoting takes a lot of back-and-forth",
        body: "Customers describe their load vaguely, so you trade texts and photos before you can give a price, and many leads drop off in the process.",
      },
      {
        title: "Schedules change all day",
        body: "Same-day requests, delays at the dump and longer-than-expected jobs make it hard to keep customers informed.",
      },
      {
        title: "Reviews drive the business but rarely get requested",
        body: "Junk removal is heavily review-driven, yet asking for reviews after every job is easy to forget.",
      },
    ],
    automations: [
      {
        title: "AI receptionist and missed-call text-back",
        body: "Calls are answered in your company name, and any missed call gets an instant text so the customer can describe the job and book.",
      },
      {
        title: "Photo-based quote intake",
        body: "Customers are prompted to text photos of the items, and AI organizes them with the address and access details so you can price the job quickly.",
      },
      {
        title: "Pickup booking and arrival updates",
        body: "Booked jobs go straight into your scheduling tool, and customers get reminders and on-our-way texts automatically.",
      },
      {
        title: "Quote follow-up",
        body: "Unbooked quotes get a short series of friendly follow-ups so price shoppers come back to you.",
      },
      {
        title: "Commercial and repeat customer outreach",
        body: "Property managers, realtors and contractors receive periodic check-ins, building steadier recurring work.",
      },
      {
        title: "Invoicing, bookkeeping sync and review requests",
        body: "Completed jobs sync to your accounting software with dump fees and labor recorded, and customers get a review request for your Google Business Profile.",
      },
    ],
    exampleMath: {
      title: "Example: what 5 missed calls a week can cost",
      body: "For example, if you miss 5 calls a week, 2 of those callers would have booked, and your average job is $400, that is about $800 a week, or roughly $41,600 a year, in pickups that may go to someone else. These numbers are illustrative assumptions only; use your own call volume and ticket size.",
    },
    tools: [
      "Jobber",
      "Housecall Pro",
      "Workiz",
      "QuickBooks",
      "Google Business Profile",
      "Twilio",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a junk removal business?",
        a: "Pricing depends on call volume, workflows and the software we connect. Most junk removal owners start with an AI receptionist and missed-call text-back, then add quote follow-up and reviews. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Can AI quote jobs from photos?",
        a: "AI can organize photos and details and, if you choose, suggest a range based on your pricing rules. We recommend a person approves the final price, especially for large or unusual loads.",
      },
      {
        q: "Does it work with Jobber, Housecall Pro or Workiz?",
        a: "We can integrate with common tools like Jobber, Housecall Pro and Workiz, usually through their APIs or automation platforms like Zapier or Make. What is possible depends on your platform and plan.",
      },
      {
        q: "Will customers know they are talking to AI?",
        a: "We recommend the AI introduce itself as your virtual assistant. It uses your business name and transfers to you whenever a customer asks for a person.",
      },
      {
        q: "How long does setup take?",
        a: "An AI receptionist with missed-call text-back can often go live in a couple of weeks. We test it on realistic junk removal calls and texts before it talks to real customers.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI automation for junk removal companies",
      "junk removal answering service",
      "AI receptionist for junk removal",
      "junk removal quote from photos",
      "junk removal business automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Trucking & logistics
  // ---------------------------------------------------------------------------
  {
    slug: "trucking-logistics",
    name: "Trucking & Logistics",
    audience: "trucking and logistics companies",
    metaTitle: "AI Automation for Trucking & Logistics | Metron",
    metaDescription:
      "AI automation for trucking companies: process rate cons and PODs, speed up invoicing, automate check calls and driver paperwork, and connect TMS and ELD data.",
    headline: "AI Automation for Trucking and Logistics: Cut the Paperwork, Get Paid Faster",
    answer:
      "AI helps a trucking or logistics company by reading rate confirmations, bills of lading and PODs, building loads and invoices in your TMS, automating check calls and status updates, chasing driver paperwork, and connecting ELD and accounting data for reporting. Dispatchers and back-office staff handle more loads with less data entry, and cash comes in faster.",
    painPoints: [
      {
        title: "Paperwork slows down cash flow",
        body: "Rate confirmations, BOLs and PODs arrive as PDFs, photos and emails. Retyping them into your TMS and matching them to invoices delays billing by days.",
      },
      {
        title: "Dispatchers spend hours on check calls",
        body: "Brokers and shippers want constant updates. Dispatchers juggle calls, texts and emails instead of planning loads.",
      },
      {
        title: "Driver documents are always incomplete",
        body: "Missing signatures, blurry photos and late paperwork hold up invoicing and settlement.",
      },
      {
        title: "Data lives in disconnected systems",
        body: "Your TMS, load boards, ELDs and accounting software do not talk to each other, so reports are built by hand in spreadsheets.",
      },
    ],
    automations: [
      {
        title: "Rate confirmation and document processing",
        body: "AI reads rate cons, BOLs and PODs from email or driver uploads, extracts the key fields and creates or updates loads in your TMS for a person to verify.",
      },
      {
        title: "Faster invoicing and factoring packets",
        body: "Once a POD is in, the system matches it to the load, builds the invoice and packet, and sends it to the customer or your factoring company.",
      },
      {
        title: "Automated check calls and status updates",
        body: "Using ELD location data, the system sends brokers and shippers status updates automatically and flags loads at risk of running late.",
      },
      {
        title: "Driver paperwork reminders",
        body: "Drivers get text reminders to upload missing documents, with clear instructions on what is needed for each load.",
      },
      {
        title: "Carrier and driver onboarding",
        body: "Applications, licenses, medical cards and insurance documents are collected and checked for completeness, with expiration reminders built in.",
      },
      {
        title: "Lane and profitability reporting",
        body: "Data from your TMS, ELD and accounting software is combined into regular reports on revenue per mile, lane profitability and days to pay.",
      },
    ],
    exampleMath: {
      title: "Example: what faster invoicing can free up",
      body: "For example, if you run 400 loads a month at an illustrative average of $2,500 per load and get invoices out 3 days sooner, that is about $1,000,000 in monthly billing reaching customers 3 days earlier. On average, that means roughly $100,000 less tied up in unbilled loads at any time (about $33,333 a day times 3 days). These figures are assumptions for illustration only.",
    },
    tools: [
      "McLeod",
      "Truckstop",
      "DAT",
      "Samsara",
      "Motive",
      "QuickBooks",
      "Rose Rocket",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a trucking company?",
        a: "Pricing depends on load volume, the documents involved and which systems we connect. Many carriers and brokers start with document processing and invoicing. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with McLeod, Samsara or Motive?",
        a: "We can integrate with common systems like McLeod, Samsara, Motive, DAT and Truckstop, typically through their APIs, data exports or email-based workflows. The level of integration depends on your platform and account, which we confirm during discovery.",
      },
      {
        q: "How accurate is AI at reading rate confirmations and PODs?",
        a: "Modern document processing handles most clean documents well, but blurry photos and unusual formats can cause errors. We build in a review step so a person confirms key fields like rates and dates before anything is billed.",
      },
      {
        q: "Will this replace my dispatchers or billing staff?",
        a: "It is designed to remove repetitive data entry and status calls, not to replace experienced people. Most companies use it to handle more loads with the same team.",
      },
      {
        q: "How long does setup take?",
        a: "A single workflow like POD processing or automated status updates can often go live in a few weeks. Connecting your TMS, ELD and accounting systems together takes longer and includes testing on real loads.",
      },
    ],
    relatedServices: ["ai-automation", "custom-ai-software", "ai-strategy"],
    keywords: [
      "AI automation for trucking companies",
      "AI for logistics companies",
      "trucking back office automation",
      "rate confirmation processing AI",
      "automate trucking invoicing",
      "freight document processing",
    ],
  },

  // ---------------------------------------------------------------------------
  // Manufacturing
  // ---------------------------------------------------------------------------
  {
    slug: "manufacturing",
    name: "Manufacturing",
    audience: "small manufacturers",
    metaTitle: "AI Automation for Small Manufacturers | Metron",
    metaDescription:
      "AI automation for small manufacturers: faster quoting, order entry from emails and POs, inventory alerts, production reporting and connected ERP and accounting.",
    headline: "AI Automation for Small Manufacturers: Quote Faster, Enter Less, See More",
    answer:
      "AI helps a small manufacturer by reading RFQs and purchase orders, drafting quotes from your pricing rules and past jobs, entering orders into your ERP, flagging low inventory, answering order-status questions, and building production and margin reports automatically. Your team spends less time on data entry and email, and more time on the shop floor and with customers.",
    painPoints: [
      {
        title: "Quoting is slow and depends on one person",
        body: "RFQs pile up while your estimator digs through old jobs and drawings. Slow quotes lose work, and that knowledge often lives in one person's head.",
      },
      {
        title: "Orders arrive in every format",
        body: "POs come by email, PDF and portal. Someone retypes each one into your ERP, and typos cause wrong parts or quantities.",
      },
      {
        title: "Customers keep asking where their order is",
        body: "Sales and office staff spend hours answering status emails by checking the ERP and walking out to the floor.",
      },
      {
        title: "Reporting takes days to assemble",
        body: "Job costs, on-time delivery and margins are spread across systems, so managers make decisions on old or incomplete numbers.",
      },
    ],
    automations: [
      {
        title: "RFQ intake and quote drafting",
        body: "AI reads incoming RFQs and drawings, pulls similar past jobs and your pricing rules, and drafts a quote for your estimator to review and send.",
      },
      {
        title: "PO and order entry",
        body: "Purchase orders from email or PDF are read automatically, and the key fields are entered into your ERP or accounting system for a person to confirm.",
      },
      {
        title: "Order status updates",
        body: "Customers can get automatic updates or ask an AI assistant, which checks your ERP and replies with current status and ship dates.",
      },
      {
        title: "Inventory and reorder alerts",
        body: "The system watches stock levels and lead times and alerts purchasing before materials run short.",
      },
      {
        title: "Production and margin reporting",
        body: "Data from your ERP, time tracking and accounting is combined into regular reports on job costs, throughput and on-time delivery.",
      },
      {
        title: "Internal knowledge assistant",
        body: "An AI assistant trained on your SOPs, work instructions and specs helps new employees find answers without interrupting senior staff.",
      },
    ],
    exampleMath: {
      title: "Example: what faster order entry can save",
      body: "For example, if your office enters 300 POs a month at 10 minutes each, that is 50 hours a month. If automation cuts entry time to 3 minutes for review, you spend 15 hours instead, saving 35 hours a month, or 420 hours a year. At an illustrative $35 an hour, that is about $14,700 a year in staff time. These figures are assumptions for illustration only.",
    },
    tools: [
      "JobBOSS",
      "ProShop",
      "Katana",
      "Fishbowl",
      "QuickBooks",
      "Microsoft 365",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a small manufacturer?",
        a: "Pricing depends on the workflows you choose and the systems we connect. Many manufacturers start with order entry or quote drafting because the time savings are easy to measure. Custom software is quoted per project after a discovery call.",
      },
      {
        q: "Does it work with JobBOSS, ProShop, Katana or QuickBooks?",
        a: "We can integrate with common systems like JobBOSS, ProShop, Katana, Fishbowl and QuickBooks, using APIs, data exports or email-based workflows. The level of integration depends on your system and version, which we confirm during discovery.",
      },
      {
        q: "Can AI quote complex custom parts on its own?",
        a: "No. AI drafts quotes based on your pricing rules and similar past jobs, but your estimator reviews and approves every quote. It speeds up the routine work so your experts can focus on the tricky parts.",
      },
      {
        q: "Is our engineering and customer data safe?",
        a: "We use business-grade tools with appropriate access controls and avoid sending sensitive drawings or data to services that train on it. We also respect any customer confidentiality or export-control requirements you tell us about.",
      },
      {
        q: "How long does setup take?",
        a: "A single workflow like PO entry can often go live in a few weeks. Larger projects that connect your ERP, inventory and reporting take longer and are rolled out in stages.",
      },
    ],
    relatedServices: ["ai-automation", "custom-ai-software", "ai-strategy"],
    keywords: [
      "AI automation for small manufacturers",
      "AI for manufacturing companies",
      "manufacturing quote automation",
      "purchase order processing AI",
      "manufacturing back office automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Property management
  // ---------------------------------------------------------------------------
  {
    slug: "property-management",
    name: "Property Management",
    audience: "property management companies",
    metaTitle: "AI Automation for Property Management | Metron",
    metaDescription:
      "AI for property managers: answer leasing and tenant calls 24/7, triage maintenance requests, and automate rent reminders and owner reports in your software.",
    headline: "AI Automation for Property Management: Fewer Calls, Faster Maintenance, Happier Owners",
    answer:
      "AI helps a property management company by answering leasing inquiries and tenant calls 24/7, scheduling showings, triaging maintenance requests and dispatching vendors, sending rent and renewal reminders, and drafting owner reports from your property management software. Your team handles more doors without burning out, and tenants and owners get faster answers.",
    painPoints: [
      {
        title: "The phone never stops",
        body: "Prospects, tenants, vendors and owners all call the same office. Leasing questions and maintenance requests compete for the same staff time.",
      },
      {
        title: "After-hours maintenance is a headache",
        body: "Tenants call at night about leaks, lockouts and outages. Sorting true emergencies from issues that can wait is stressful and expensive.",
      },
      {
        title: "Leasing leads go cold",
        body: "Rental inquiries arrive from listing sites around the clock. Slow responses mean prospects tour other properties first.",
      },
      {
        title: "Owner reporting and renewals eat admin time",
        body: "Monthly owner updates, lease renewals and rent reminders are repetitive, but mistakes damage trust.",
      },
    ],
    automations: [
      {
        title: "24/7 leasing assistant and showing scheduling",
        body: "AI answers questions about available units, pricing and requirements from your approved information and books showings, applying the same process to every prospect.",
      },
      {
        title: "Maintenance request intake and triage",
        body: "Tenants report issues by phone, text or portal, and the AI collects details and photos, flags emergencies under your rules and creates work orders.",
      },
      {
        title: "Vendor dispatch and updates",
        body: "Work orders are routed to the right vendor, and tenants receive automatic updates on scheduling and completion.",
      },
      {
        title: "Rent, renewal and move-out reminders",
        body: "Tenants receive timely rent reminders, renewal offers and move-out checklists without your staff sending each one.",
      },
      {
        title: "Owner report drafting",
        body: "AI pulls data from your property management software to draft monthly owner summaries for your team to review and send.",
      },
      {
        title: "Tenant FAQ assistant",
        body: "Common questions about parking, trash schedules, amenities and policies are answered instantly from your documents.",
      },
    ],
    exampleMath: {
      title: "Example: what call handling time can add up to",
      body: "For example, if your office handles 600 tenant and prospect calls a month at 5 minutes each, that is 50 hours. If AI fully handles 40% of them, you free up about 20 hours a month, or 240 hours a year. At an illustrative $30 an hour, that is roughly $7,200 a year in staff time, before counting faster leasing. These figures are assumptions for illustration only.",
    },
    tools: [
      "AppFolio",
      "Buildium",
      "Yardi Breeze",
      "Rent Manager",
      "Propertyware",
      "QuickBooks",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a property management company?",
        a: "Pricing depends on your door count, the workflows you choose and the software we connect. Many companies start with maintenance intake or a leasing assistant. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with AppFolio, Buildium or Yardi Breeze?",
        a: "We can integrate with common property management platforms like AppFolio, Buildium, Yardi Breeze and Rent Manager, using APIs, email-based workflows or approved connectors. What is possible depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "How do you handle fair housing compliance?",
        a: "We configure the AI to give every prospect the same approved information, avoid steering, and not ask about or comment on protected characteristics. Your team reviews the scripts, and your company remains responsible for fair housing compliance. This is not legal advice.",
      },
      {
        q: "Can the AI handle emergency maintenance calls?",
        a: "Yes. You define what counts as an emergency, such as active flooding, no heat in winter or a gas smell, and the AI follows those rules to reach your on-call staff or vendor immediately.",
      },
      {
        q: "How long does setup take?",
        a: "Maintenance intake or a leasing assistant can often go live in a few weeks. Deeper integrations with your property management software and owner reporting take longer and include testing.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "custom-ai-software", "lead-follow-up"],
    keywords: [
      "AI for property management",
      "property management automation",
      "AI leasing assistant",
      "maintenance request automation",
      "property management answering service AI",
    ],
  },

  // ---------------------------------------------------------------------------
  // Accounting firms
  // ---------------------------------------------------------------------------
  {
    slug: "accounting-firms",
    name: "Accounting",
    audience: "accounting and bookkeeping firms",
    metaTitle: "AI Automation for Accounting Firms | Metron",
    metaDescription:
      "AI automation for accounting and bookkeeping firms: chase client documents, sort uploads, draft client emails and get through tax season with less overtime.",
    headline: "AI Automation for Accounting and Bookkeeping Firms: Less Chasing, More Advising",
    answer:
      "AI helps an accounting or bookkeeping firm by chasing missing client documents, sorting and categorizing uploads, drafting client emails and engagement letters, answering routine questions, and preparing first-pass reconciliations for staff review. Your team spends less time on admin during busy season and more time on review, advisory work and growing the firm.",
    painPoints: [
      {
        title: "Chasing client documents never ends",
        body: "Staff send reminder after reminder for bank statements, receipts and tax forms, and missing documents push work into the last weeks of the deadline.",
      },
      {
        title: "Busy season burns out the team",
        body: "Tax season and month-end close bring long hours, and much of that time goes to admin rather than actual accounting.",
      },
      {
        title: "Client emails flood inboxes",
        body: "Status questions, simple how-do-I requests and scheduling consume partner and staff time every day.",
      },
      {
        title: "Onboarding new clients is manual",
        body: "Engagement letters, intake questionnaires and system access requests are handled one at a time.",
      },
    ],
    automations: [
      {
        title: "Automated document requests and reminders",
        body: "Clients receive personalized checklists and reminders for missing items, and the system tracks what has arrived so staff stop sending manual follow-ups.",
      },
      {
        title: "Document sorting and data extraction",
        body: "Uploaded receipts, statements and tax forms are classified, renamed and filed, with key figures extracted for staff to verify.",
      },
      {
        title: "First-pass categorization and reconciliation",
        body: "AI suggests transaction categories and flags anomalies in client books so bookkeepers review exceptions instead of every line.",
      },
      {
        title: "Client email drafting and triage",
        body: "Incoming emails are sorted by client and urgency, and AI drafts replies to routine questions for staff to approve.",
      },
      {
        title: "Client onboarding workflows",
        body: "New clients receive engagement letters, intake forms and next steps automatically, with tasks created in your practice management system.",
      },
      {
        title: "Internal knowledge assistant",
        body: "Staff can ask an AI assistant about firm procedures and client notes, drawing only from your approved internal documents.",
      },
    ],
    exampleMath: {
      title: "Example: what document chasing can cost",
      body: "For example, if your firm has 300 clients and staff spend 30 minutes per client each year chasing documents, that is 150 hours. If automation cuts that by two-thirds, you save 100 hours a season. At an illustrative $60 an hour of staff cost, that is about $6,000 a year, plus fewer late nights. These numbers are assumptions for illustration only.",
    },
    tools: [
      "QuickBooks Online",
      "Xero",
      "Karbon",
      "Canopy",
      "TaxDome",
      "Microsoft 365",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for an accounting firm?",
        a: "Pricing depends on your client count, the workflows you choose and the systems we connect. Many firms start with document collection and email triage. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with QuickBooks Online, Xero, Karbon or Canopy?",
        a: "We can integrate with common tools like QuickBooks Online, Xero, Karbon, Canopy and TaxDome, typically through their APIs or automation platforms like Zapier or Make. What is possible depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Is client financial data kept confidential?",
        a: "We design workflows with access controls, business-grade AI services that do not train on your data, and minimal data movement between systems. Your firm keeps its own confidentiality and data security obligations, and we build around your policies and any written information security plan you maintain.",
      },
      {
        q: "Will AI prepare tax returns or give tax advice?",
        a: "No. AI handles admin and first-pass work like sorting documents and drafting routine emails. A CPA or qualified staff member reviews all accounting work, and tax advice always comes from your professionals.",
      },
      {
        q: "How long does setup take?",
        a: "Document request automation can often go live in a few weeks, ideally before busy season. Larger projects that connect several systems take longer and are rolled out in stages.",
      },
    ],
    relatedServices: ["ai-automation", "custom-ai-software", "ai-strategy"],
    keywords: [
      "AI automation for accounting firms",
      "AI for bookkeeping firms",
      "accounting firm document collection automation",
      "AI for CPA firms",
      "accounting practice automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Insurance agencies
  // ---------------------------------------------------------------------------
  {
    slug: "insurance-agencies",
    name: "Insurance",
    audience: "independent insurance agencies",
    metaTitle: "AI Automation for Insurance Agencies | Metron",
    metaDescription:
      "AI automation for independent insurance agencies: respond to quote requests fast, collect renewal info, process service requests and cut data entry in your AMS.",
    headline: "AI Automation for Insurance Agencies: Faster Quotes, Smoother Renewals",
    answer:
      "AI helps an independent insurance agency by responding to quote requests instantly, collecting applicant information, handling routine service requests like certificates and ID cards, sending renewal reminders, and reducing data entry into your agency management system. Licensed staff spend less time on admin and more time advising clients and writing new business.",
    painPoints: [
      {
        title: "Quote requests wait too long",
        body: "Online shoppers request quotes from several agencies. If your team is busy, the lead often goes to whoever responds first.",
      },
      {
        title: "Service requests clog the day",
        body: "Certificates of insurance, ID cards, address changes and billing questions take time away from selling and retaining accounts.",
      },
      {
        title: "Renewals need data you do not have",
        body: "Gathering updated vehicles, drivers, payroll or property details before renewal is slow and often happens at the last minute.",
      },
      {
        title: "Double data entry into the AMS",
        body: "Information arrives by email, PDF and phone and is retyped into your agency management system and carrier portals.",
      },
    ],
    automations: [
      {
        title: "Instant quote intake",
        body: "Quote requests get an immediate response that collects the basic information your producers need, then creates a lead in your AMS or CRM.",
      },
      {
        title: "Routine service request handling",
        body: "Requests for certificates, ID cards and simple policy changes are captured, organized and queued for your service team, with status updates to the client.",
      },
      {
        title: "Renewal information collection",
        body: "Clients receive reminders and simple forms to update their details before renewal, so your team can remarket with complete information.",
      },
      {
        title: "Document processing into your AMS",
        body: "Applications, dec pages and loss runs are read and key fields extracted for staff to verify before entering or attaching them in your system.",
      },
      {
        title: "Cross-sell and rounding outreach",
        body: "Clients with a single line of coverage receive periodic check-ins inviting a review with a licensed agent.",
      },
      {
        title: "After-hours call and message handling",
        body: "The AI answers after-hours calls, takes messages and routes claims-related calls to the right carrier claims line or your team.",
      },
    ],
    exampleMath: {
      title: "Example: what faster service handling can save",
      body: "For example, if your agency handles 400 routine service requests a month at 12 minutes each, that is 80 hours a month. If automation cuts handling time in half, you get back about 40 hours a month, or 480 hours a year. At an illustrative $30 an hour, that is roughly $14,400 a year in CSR time. These figures are assumptions for illustration only.",
    },
    tools: [
      "Applied Epic",
      "HawkSoft",
      "EZLynx",
      "AMS360",
      "QQCatalyst",
      "Microsoft 365",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for an insurance agency?",
        a: "Pricing depends on your book size, the workflows you choose and the systems we connect. Many agencies start with quote intake and service request handling. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with Applied Epic, HawkSoft or EZLynx?",
        a: "We can integrate with common agency management systems like Applied Epic, HawkSoft, EZLynx and AMS360, using APIs, email-based workflows or approved connectors. What is possible depends on your system and plan, which we confirm during discovery.",
      },
      {
        q: "Will the AI give coverage advice or bind policies?",
        a: "No. The AI collects information and handles routine admin, but it does not recommend coverage, interpret policies or bind anything. Those conversations stay with your licensed agents, in line with your state licensing requirements.",
      },
      {
        q: "How is client data protected?",
        a: "We design workflows with access controls, business-grade AI services that do not train on your data, and minimal data movement. Your agency keeps its own privacy and data security obligations, and we build around your policies.",
      },
      {
        q: "How long does setup take?",
        a: "Quote intake or service request automation can often go live in a few weeks. Deeper AMS integrations take longer and include testing before launch.",
      },
    ],
    relatedServices: ["ai-automation", "lead-follow-up", "ai-receptionist", "custom-ai-software"],
    keywords: [
      "AI automation for insurance agencies",
      "AI for independent insurance agents",
      "insurance agency workflow automation",
      "insurance quote lead response",
      "AI for insurance agency service",
    ],
  },

  // ---------------------------------------------------------------------------
  // Restaurants
  // ---------------------------------------------------------------------------
  {
    slug: "restaurants",
    name: "Restaurants",
    audience: "restaurants",
    metaTitle: "AI Automation for Restaurants | Metron",
    metaDescription:
      "AI for restaurants: answer calls and take reservations, handle catering inquiries, automate supplier invoice entry and get more reviews without extra staff.",
    headline: "AI Automation for Restaurants: Answer Every Call, Simplify the Back Office",
    answer:
      "AI helps a restaurant by answering calls during the rush, handling reservations and common questions, capturing catering and event inquiries, processing supplier invoices, flagging inventory and food cost changes, and requesting reviews from guests. Staff stay focused on guests in the room, and owners spend less time on paperwork after close.",
    painPoints: [
      {
        title: "The phone rings during the rush",
        body: "Hours, reservations and takeout questions come in exactly when staff are busiest, so calls get missed or guests on the floor wait.",
      },
      {
        title: "Catering and event leads slip through",
        body: "Large-order and private event inquiries are high value, but they arrive by phone, email and social media and often get a slow reply.",
      },
      {
        title: "Supplier invoices pile up",
        body: "Owners and managers enter vendor invoices by hand, and price increases on key ingredients go unnoticed until margins shrink.",
      },
      {
        title: "Reviews and repeat guests are left to chance",
        body: "Happy guests rarely leave reviews unless asked, and there is little follow-up to bring them back.",
      },
    ],
    automations: [
      {
        title: "AI phone answering for hours, reservations and FAQs",
        body: "The AI answers calls, shares hours and menu details, takes or directs reservations through your booking system, and texts links for online ordering.",
      },
      {
        title: "Catering and private event inquiry handling",
        body: "Inquiries are captured with date, headcount and budget, answered with your packages, and followed up until a manager closes the booking.",
      },
      {
        title: "Supplier invoice processing",
        body: "Vendor invoices are read automatically, line items are extracted and sent to your accounting software, and unusual price changes are flagged.",
      },
      {
        title: "Food cost and sales reporting",
        body: "Data from your POS and invoices is combined into simple weekly reports on sales, food cost and labor so you can spot problems early.",
      },
      {
        title: "Review requests and guest follow-up",
        body: "Guests who opt in receive a short thank-you and review request, and lapsed regulars can get occasional invitations to return.",
      },
      {
        title: "Staff scheduling and shift reminders",
        body: "Shift reminders and swap requests are handled by text, reducing the manager's time spent on the phone with staff.",
      },
    ],
    exampleMath: {
      title: "Example: what catering inquiries can be worth",
      body: "For example, if you receive 12 catering inquiries a month, book 3 today, and faster responses plus follow-up help you book 5, that is 2 extra orders a month. At an illustrative average catering order of $800, that is about $1,700 a month, or $19,200 a year. These numbers are assumptions for illustration only.",
    },
    tools: [
      "Toast",
      "Square",
      "OpenTable",
      "Resy",
      "QuickBooks",
      "7shifts",
      "Google Business Profile",
    ],
    faqs: [
      {
        q: "How much does AI automation cost for a restaurant?",
        a: "Pricing depends on call volume, the workflows you choose and the systems we connect. Many restaurants start with phone answering or invoice processing. We give a fixed quote after a short discovery call.",
      },
      {
        q: "Does it work with Toast, Square, OpenTable or Resy?",
        a: "We can integrate with common restaurant tools like Toast, Square, OpenTable and Resy, typically through their APIs, partner connectors or automation tools like Zapier or Make. What is possible depends on your platform and plan, which we confirm during discovery.",
      },
      {
        q: "Can the AI take phone orders?",
        a: "In many setups it is simpler and more accurate to text the caller a link to your online ordering. Where your POS supports it, phone ordering can be explored, and we test accuracy carefully before going live.",
      },
      {
        q: "Can the AI answer allergy questions?",
        a: "It can share the menu information you approve, but we set it up to direct specific allergy and dietary safety questions to your staff, since kitchen practices and ingredients can change.",
      },
      {
        q: "How long does setup take?",
        a: "Phone answering or review requests can often go live in a couple of weeks. Invoice processing and reporting that connect your POS and accounting software take longer and include testing.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "review-automation", "lead-follow-up"],
    keywords: [
      "AI for restaurants",
      "AI phone answering for restaurants",
      "restaurant automation",
      "restaurant invoice processing",
      "restaurant catering inquiry automation",
    ],
  },
];
