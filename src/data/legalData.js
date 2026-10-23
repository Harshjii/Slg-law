export const FIRM_DETAILS = {
  name: "Statewide Litigation Group",
  shortName: "SLG",
  tagline: "Chambers & Advocates // Estd. 1983",
  motto: "Trial-tested standing. Appellate rigor before India's highest benches.",
  established: 1983,
  udyamReg: "UP-20-0098412",
  phone: "+91 98110 00000",
  email: "registry@statewidelitigation.com",
  helpline: "Registry Helpdesk (New Delhi & Kanpur)",
  addressDelhi: "Chambers, Supreme Court of India & Delhi High Court Bar, New Delhi, India",
  addressKanpur: "Principal Civil Chambers, District & Sessions Court Complex, Kanpur, Uttar Pradesh, India"
};

export const PARTNERS = [
  {
    id: "sudesh-kumar-singh",
    name: "Sudesh Kumar Singh",
    role: "MANAGING PARTNER",
    subRole: "Appellate, Constitutional & Corporate Counsel",
    designation: "Managing Partner • Supreme Court & Delhi High Court",
    experience: "Leading Institutional & High Stakes Litigation",
    bio: "Leads the institutional litigation and appellate dispute resolution practice of Statewide Litigation Group. Regularly briefs and argues before the Supreme Court of India (Special Leave Petitions & Writs), High Courts (Article 226/227 writ petitions), and commercial benches. Specializes in Company Law disputes before the National Company Law Tribunal (NCLT/NCLAT) under the supervision of senior legal precedents.",
    tags: ["Article 32 & 136 SLP", "High Court Writs", "NCLT & NCLAT", "Commercial Benches"],
    linkedIn: "https://www.linkedin.com",
    seat: "Delhi NCR Chambers & Supreme Court"
  },
  {
    id: "hari-singh-gautam",
    name: "Shri Hari Singh Gautam",
    role: "SENIOR PARTNER",
    subRole: "Civil, Revenue & Trial Court Doyen",
    designation: "Senior Partner • Practicing Since 1983 (40+ Years)",
    experience: "40+ Years Trial Court & Revenue Mastery",
    bio: "Practicing actively at the bar since 1983, Shri Hari Singh Gautam commands over four decades of profound trial court experience. Anchored at Kanpur, his practice is recognized for original civil suits, title declarations, permanent injunctions, UP Revenue Code trials, agricultural and tenancy disputes, and complex trial court cross-examinations across District & Sessions Courts.",
    tags: ["Original Civil Suits", "UP Revenue Code", "Title & Injunctions", "Cross-Examination Doyen"],
    linkedIn: "https://www.linkedin.com",
    seat: "Kanpur Principal Chambers"
  }
];

export const BENCH_METRICS = [
  {
    num: "01",
    tag: "ESTABLISHED 1983",
    title: "40+ Years Heritage",
    description: "Continuous trial court authority in civil suits, land title disputes, and revenue appeals anchored at Kanpur chambers."
  },
  {
    num: "02",
    tag: "10+ ADVOCATES CORPS",
    title: "Delhi NCR & Pan-India",
    description: "Coordinated bench strength across Delhi, Gurgaon, Noida, Faridabad, and Bulandshahr with correspondent counsel nationwide across 25 High Courts."
  },
  {
    num: "03",
    tag: "INSTITUTIONAL DESK",
    title: "Civic & Public Law",
    description: "Official civic venture with NGO We Want Change and daily statutory commentary via Law Nest legal knowledge repository."
  }
];

export const JURISDICTION_NODES = {
  delhi: {
    key: "delhi",
    name: "Delhi (Apex & HC)",
    code: "LOCATOR // NCR-DELHI-01",
    badge: "PRIMARY APEX SEAT",
    title: "Delhi NCR & Apex Chambers",
    subtitle: "SUPREME COURT OF INDIA & DELHI HIGH COURT",
    x: 220,
    y: 150,
    benches: "Supreme Court of India, Delhi High Court, Rouse Avenue Special Courts, Patiala House, Saket, Tis Hazari, Dwarka, Rohini & Karkardooma Courts.",
    tribunals: "NCLT Principal Bench (New Delhi), NCLAT, National Green Tribunal (NGT Central), APTEL, NCDRC, Central Administrative Tribunal (CAT).",
    oversight: "Managing Partner Sudesh Kumar Singh directly orchestrates Supreme Court filings (SLP / Article 32) and High Court writ matters."
  },
  gurgaon: {
    key: "gurgaon",
    name: "Gurgaon",
    code: "LOCATOR // NCR-GURGAON-02",
    badge: "SESSIONS & ARBITRATION BENCH",
    title: "Gurgaon Commercial Chambers",
    subtitle: "DISTRICT COURT & ARBITRATION TRIBUNALS",
    x: 130,
    y: 240,
    benches: "Gurgaon District & Sessions Court, Cyber City Commercial Arbitration Forums, Consumer Disputes Redressal Forum.",
    tribunals: "MSME facilitation councils, state commercial tax tribunals, district consumer forums.",
    oversight: "Coordinated by senior NCR litigation associates under direct partner supervision."
  },
  faridabad: {
    key: "faridabad",
    name: "Faridabad",
    code: "LOCATOR // NCR-FARIDABAD-03",
    badge: "CIVIL & SESSIONS BENCH",
    title: "Faridabad Trial Chambers",
    subtitle: "DISTRICT SESSIONS & INDUSTRIAL TRIBUNALS",
    x: 250,
    y: 270,
    benches: "Faridabad District Court Complex, Labour Courts, Industrial Tribunal-cum-Labour Court.",
    tribunals: "Haryana State Industrial Disputes Tribunals and civil appeal boards.",
    oversight: "Led by seasoned trial advocates specializing in civil title suits and recovery proceedings."
  },
  noida: {
    key: "noida",
    name: "Noida (UP RERA)",
    code: "LOCATOR // NCR-NOIDA-04",
    badge: "RERA & COMMERCIAL SEAT",
    title: "Noida RERA & Corporate Desk",
    subtitle: "UP RERA TRIBUNAL & COMMERCIAL BENCH",
    x: 330,
    y: 200,
    benches: "UP Real Estate Regulatory Authority (Greater Noida Bench), Gautam Budh Nagar District Court.",
    tribunals: "UP RERA Appellate Tribunal, National Company Law benches liaison.",
    oversight: "Dedicated real estate litigation team addressing builder-buyer default cases and refund execution."
  },
  bulandshahr: {
    key: "bulandshahr",
    name: "Bulandshahr",
    code: "LOCATOR // UP-BULANDSHAHR-05",
    badge: "DISTRICT & REVENUE SEAT",
    title: "Bulandshahr Civil & Sessions",
    subtitle: "DISTRICT SESSIONS & SIKANDRABAD BENCH",
    x: 410,
    y: 200,
    benches: "Bulandshahr District & Sessions Court, Civil Judge Senior Division, Revenue Courts.",
    tribunals: "District Revenue Board, Commissioner Meerut Division appellate jurisdiction.",
    oversight: "Corresponded closely with regional trial specialists under Shri Hari Singh Gautam guidance."
  },
  kanpur: {
    key: "kanpur",
    name: "Kanpur Seat",
    code: "LOCATOR // UP-KANPUR-06",
    badge: "CIVIL & REVENUE (ESTD. 1983)",
    title: "Kanpur Principal Seat",
    subtitle: "DISTRICT SESSIONS, HIGH COURT BENCH LIAISON & REVENUE BOARD",
    x: 460,
    y: 350,
    benches: "Kanpur Nagar District & Sessions Court, Small Causes Court, Revenue Board of Uttar Pradesh.",
    tribunals: "UP Revenue Code appellate boards, Debt Recovery Tribunal (DRT) liaison.",
    oversight: "Senior Partner Shri Hari Singh Gautam personally leads original civil suits, title matters, and revenue trials."
  }
};

export const PRACTICE_AREAS = [
  {
    id: "supreme-court",
    number: "01",
    tag: "CONSTITUTIONAL & APPELLATE",
    title: "Supreme Court of India",
    description: "Special Leave Petitions (SLP under Article 136), Original Suits (Article 131), Writ Petitions (Article 32), and review/curative petitions before the apex court.",
    forums: ["Article 136 SLP", "Article 32 Writs", "Curative Petitions"]
  },
  {
    id: "high-courts",
    number: "02",
    tag: "HIGH COURT JURISDICTION",
    title: "High Courts (Article 226/227)",
    description: "Writ petitions for enforcement of fundamental & statutory rights, civil/criminal revisions, arbitration petitions, and intra-court appeals (Letters Patent Appeals).",
    forums: ["Article 226 Writs", "Section 11 Arbitration", "First & Second Appeals"]
  },
  {
    id: "nclt-corporate",
    number: "03",
    tag: "CORPORATE & INSOLVENCY",
    title: "NCLT & NCLAT",
    description: "Corporate insolvency resolution process (IBC), oppression and mismanagement petitions under Companies Act, mergers, amalgamations, and appellate tribunals.",
    forums: ["Insolvency & Bankruptcy Code", "Section 241/242 Companies Act", "NCLAT Appeals"]
  },
  {
    id: "consumer-ncdrc",
    number: "04",
    tag: "CONSUMER & REGULATORY",
    title: "NCDRC & Consumer Commissions",
    description: "National Commission representation for complex commercial real estate disputes, medical negligence, banking defaults, and insurance claim litigation.",
    forums: ["National Commission (NCDRC)", "State Commissions", "Commercial Consumer Claims"]
  },
  {
    id: "rera-property",
    number: "05",
    tag: "REAL ESTATE & PROPERTY",
    title: "RERA Real Estate Tribunals",
    description: "UP RERA and Delhi NCR regulatory authority litigation, builder-buyer disputes, refund execution, and statutory compliance advisory.",
    forums: ["UP RERA", "Delhi RERA", "RERA Appellate Tribunal"]
  },
  {
    id: "civil-revenue",
    number: "06",
    tag: "CIVIL & REVENUE BOARDS",
    title: "District & Revenue Courts",
    description: "Original title suits, injunctions, partition suits, UP Revenue Code board proceedings, and trial court cross-examination strategies anchored at Kanpur & NCR courts.",
    forums: ["Original Title Suits", "UP Revenue Code", "Sessions & Trial Courts"]
  }
];

export const VENTURES = [
  {
    id: "we-want-change",
    badge: "CIVIC & PRO-BONO INITIATIVE",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200",
    icon: "⚖",
    title: "We Want Change",
    subtitle: "Institutional NGO Venture Partner",
    description: "Our official institutional association with the NGO We Want Change facilitates community legal awareness, pro-bono defense for indigent litigants, and public interest social welfare advocacy.",
    linkText: "facebook.com/share/1CXb8Mf5qS",
    href: "https://www.facebook.com/share/1CXb8Mf5qS/?mibextid=wwXIfr",
    actionLabel: "Civic Rights Facebook"
  },
  {
    id: "law-nest",
    badge: "LEGAL NEWS & UPDATES",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
    icon: "📖",
    title: "Law Nest",
    subtitle: "Public Knowledge & Intelligence Library",
    description: "Statewide Litigation Group's designated public knowledge repository. Provides updates on landmark Supreme Court verdicts, High Court precedents, legislative enactments, and procedural case summaries.",
    linkText: "instagram.com/law.nest",
    href: "https://www.instagram.com/invites/contact/?utm_content=s4h1oyg&dlrf=ftbvsg1lvwqr",
    actionLabel: "Knowledge Instagram"
  },
  {
    id: "msme-registered",
    badge: "GOVERNMENT RECOGNITION",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    icon: "✓",
    title: "MSME Registered",
    subtitle: "Ministry of MSME, Govt. of India",
    description: "The firm is formally certified as an MSME registered enterprise under the statutory regulations of the Government of India, ensuring formalized governance, transparent billing practices, and institutional compliance.",
    linkText: "UDYAM: UP-20-0098412",
    href: "#",
    actionLabel: "Statutory Compliance"
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq1",
    question: "How does Statewide Litigation Group take up a new brief?",
    answer: "In strict compliance with Bar Council of India guidelines, prospective litigants or referring counsel submit case summaries for preliminary statutory merit evaluation. Our chambers do not solicit litigation; brief acceptance is confirmed solely upon verifying statutory merits and executing a formal vakalatnama."
  },
  {
    id: "faq2",
    question: "Who personally conducts court appearances and final arguments?",
    answer: "Managing Partner Sudesh Kumar Singh personally directs Supreme Court SLPs, High Court writ matters, and commercial tribunal hearings. Senior Partner Shri Hari Singh Gautam leads trial court cross-examinations and civil/revenue hearings at Kanpur and NCR sessions courts."
  },
  {
    id: "faq3",
    question: "How are matters handled outside Delhi NCR across other High Courts?",
    answer: "Through our established pan-India correspondent counsel network, we coordinate filings and briefing counsel across all 25 Indian High Courts while maintaining direct partner supervision and draft oversight from our Delhi NCR chambers."
  },
  {
    id: "faq4",
    question: "What is the significance of the firm's MSME registration?",
    answer: "Our Ministry of MSME registration (Udyam: UP-20-0098412) guarantees transparent professional fee structures, structured billing invoices, and formalized institutional accountability in accordance with government enterprise standards."
  },
  {
    id: "faq5",
    question: "Does Statewide Litigation Group handle urgent stay applications or caveat filings?",
    answer: "Yes, the chambers maintain an active filing roster for urgent mentioning before the Supreme Court Vacation/Regular benches and High Courts for caveat lodgement, ad-interim ex-parte stays, and statutory bail applications."
  }
];
