export const FIRM_DETAILS = {
  name: "Statewide Litigation Group",
  shortName: "SLG",
  tagline: "Chambers & Advocates",
  motto: "Trial-tested standing. Appellate rigor before India's highest benches.",
  phone: "+91 98110 00000",
  email: "advocate@statewidelitigation.com",
  helpline: "advocate@statewidelitigation.com",
  addressDelhi: "Chambers, Supreme Court of India & Delhi High Court Bar, New Delhi, India",
  addressKanpur: "Principal Civil Chambers, District & Sessions Court Complex, Kanpur, Uttar Pradesh, India"
};

export const PARTNERS = [
  {
    id: "hari-singh-gautam",
    name: "Shri Hari Singh Gautam",
    role: "SENIOR PARTNER",
    subRole: "Civil, Revenue & Trial Court Doyen",
    enrolment: "1983 (43+ Years Standing)",
    experience: "43+ years of trial experience in the Kanpur District Court",
    areasOfFocus: "Civil and land disputes; original suits, land laws, mutation and acquisition disputes",
    designation: "Senior Partner • Practicing Since 1983",
    bio: "43+ years of trial experience in the Kanpur District Court. Areas of focus: Civil and land disputes; original suits, land laws, mutation and acquisition disputes.",
    tags: ["Original Suits", "Land Laws", "Mutation & Acquisition", "43+ Yrs Trial Doyen"],
    seat: "Kanpur Principal Civil Chambers"
  },
  {
    id: "sudesh-kumar-singh",
    name: "Sudesh Kumar Singh",
    role: "MANAGING PARTNER",
    subRole: "Appellate, Constitutional & Corporate Counsel",
    designation: "Managing Partner • Supreme Court Bar Association (SCBA)",
    experience: "10+ years of exposure in litigation, statutory compliance and corporate advisory",
    enrolment: "Bar Council of Uttar Pradesh, 2016; Advocate-on-Roll, High Court of Judicature at Allahabad, 2017",
    education: "B.A. LL.B. (Hons.), Lloyd Law College, Greater Noida (2011–2016)",
    standing: "Member, Supreme Court Bar Association (SCBA)",
    credentials: "POSH certified; Diploma in Media Law; Cyber Law Certification / Diploma in Cyber Law; IPR Certification",
    engagements: "Retainer Advocate for Powerstik; Counsel for ATS Builders (ATS Group of Companies, External Counsel)",
    bio: "Advocate and legal consultant advising corporate clients on litigation and regulatory matters. 10+ years of exposure in litigation, statutory compliance and corporate advisory.",
    tags: ["Supreme Court Bar (SCBA)", "Allahabad High Court", "Corporate & Litigation", "POSH & Cyber Law"],
    seat: "Delhi NCR Chambers & Supreme Court"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "mohit-singh",
    name: "Mohit Singh",
    role: "SENIOR CONSULTANT",
    description: "7 years of experience in corporate legal affairs, contract management, legal advisory and dispute resolution. Additionally engaged in providing legal research, contract review, documentation and advisory support. NLU Assam graduate (2019) with expertise in RERA, consumer litigation and NCLT, focusing on drafting and legal research."
  },
  {
    id: "achintya-tiwari",
    name: "Achintya Tiwari",
    role: "ADVOCATE-ON-RECORD, SUPREME COURT OF INDIA",
    description: "Advocate-on-Record (AOR) at the Supreme Court of India."
  },
  {
    id: "ramesh-kumar-jha",
    name: "Ramesh Kumar Jha",
    role: "ASSOCIATE",
    description: "Specialises in cheque dishonour and recovery suits at the Gurugram District Courts; known for client-focused case management."
  },
  {
    id: "vineet-yadav",
    name: "Vineet Yadav",
    role: "ASSOCIATE",
    description: "Six years in financial litigation and recovery, with a strong court presence in Delhi-NCR."
  },
  {
    id: "vibha-singh",
    name: "Vibha Singh",
    role: "ASSOCIATE",
    description: "MBA background; specialises in land and revenue matters, bringing analytical skills to dispute resolution and documentation."
  },
  {
    id: "ishan-agrawal",
    name: "Ishan Agrawal",
    role: "ASSOCIATE",
    description: "Associate member of the firm's litigation team."
  }
];

export const BENCH_METRICS = [
  {
    num: "01",
    tag: "TRIAL HERITAGE",
    title: "40+ Years Heritage",
    description: "Continuous trial court authority in civil suits, land title disputes, and revenue appeals anchored at Kanpur chambers."
  },
  {
    num: "02",
    tag: "10+ ADVOCATES CORPS",
    title: "Pan-India",
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
    tribunals: "Commercial dispute & arbitration councils, state commercial tax tribunals, district consumer forums.",
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
    badge: "CIVIL & REVENUE",
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
    id: "lok-adalat",
    badge: "ALTERNATIVE DISPUTE RESOLUTION",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    icon: "🤝",
    title: "Lok Adalat",
    subtitle: "Save time, reduce litigation costs, and take a step towards a faster resolution.",
    description: "Resolve your disputes quickly, affordably, and amicably through Lok Adalat. We assist individuals and businesses in understanding the Lok Adalat process, preparing necessary documentation, and seeking mutually acceptable settlements through an accessible and legally recognised dispute resolution mechanism.",
    linkText: "Consult Lok Adalat Facilitation Desk",
    href: "#lok-adalat",
    actionLabel: "Lok Adalat Desk"
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
    question: "Does Statewide Litigation Group handle urgent stay applications or caveat filings?",
    answer: "Yes, the chambers maintain an active filing roster for urgent mentioning before the Supreme Court Vacation/Regular benches and High Courts for caveat lodgement, ad-interim ex-parte stays, and statutory bail applications."
  }
];

export const LEGAL_SERVICES = [
  {
    id: "litigation",
    num: "01",
    title: "Litigation & Dispute Resolution",
    image: "/services/01-litigation.jpg",
    description: "Civil and commercial litigation, criminal litigation, writ petitions, appeals, arbitration, mediation, tribunal proceedings and enforcement of judgments.",
    practiceAreas: ["Civil & Commercial Litigation", "Criminal Litigation", "Writ Petitions & Appeals", "Arbitration & Mediation", "Tribunal Proceedings", "Judgment Enforcement"]
  },
  {
    id: "corporate",
    num: "02",
    title: "Corporate & Commercial Law",
    image: "/services/02-corporate.jpg",
    description: "Company structuring, commercial contracts, mergers and acquisitions, joint ventures, shareholder disputes, corporate governance and due diligence.",
    practiceAreas: ["Company Structuring", "Commercial Contracts", "M&A / Joint Ventures", "Shareholder Disputes", "Corporate Governance", "Due Diligence"]
  },
  {
    id: "banking",
    num: "03",
    title: "Banking, Finance & Insolvency",
    image: "/services/03-banking.jpg",
    description: "Banking disputes, debt recovery, loan documentation, SARFAESI matters, insolvency and bankruptcy proceedings, restructuring and creditor representation.",
    practiceAreas: ["Banking Disputes", "Debt Recovery & DRT", "SARFAESI Proceedings", "Insolvency & Bankruptcy (IBC)", "Debt Restructuring", "Creditor Representation"]
  },
  {
    id: "realestate",
    num: "04",
    title: "Real Estate & Infrastructure",
    image: "/services/04-realestate.jpg",
    description: "Property disputes, title verification, land acquisition, leases, construction contracts, RERA matters, infrastructure projects and project-related arbitration.",
    practiceAreas: ["Property & Title Disputes", "Title Verification", "Land Acquisition", "Commercial Leases", "RERA Matters", "Infrastructure Arbitration"]
  },
  {
    id: "regulatory",
    num: "05",
    title: "Regulatory, Compliance & Investigations",
    image: "/services/05-compliance.jpg",
    description: "Regulatory advisory, statutory compliance, government notices, corporate investigations, anti-bribery matters, economic offences and white-collar crime proceedings.",
    practiceAreas: ["Regulatory Advisory", "Statutory Compliance", "Government Notices", "Corporate Investigations", "Economic Offences", "White-Collar Crime Defense"]
  },
  {
    id: "iptech",
    num: "06",
    title: "Intellectual Property, Technology & Data Protection",
    image: "/services/06-iptech.jpg",
    description: "Trademark and copyright protection, patent-related legal services, licensing, technology contracts, cybersecurity incidents, privacy and data protection advisory.",
    practiceAreas: ["Trademark & Copyright Protection", "Patent-Related Advisory", "Technology Contracts", "Cybersecurity Incidents", "Privacy & Data Protection", "IP Licensing"]
  },
  {
    id: "international",
    num: "07",
    title: "International & Cross-Border Legal Services",
    image: "/services/07-international.jpg",
    description: "Cross-border commercial transactions, international arbitration, foreign investment advisory, jurisdictional disputes and coordination with overseas counsel.",
    practiceAreas: ["Cross-Border Commercial Transactions", "International Commercial Arbitration", "Foreign Investment Advisory", "Jurisdictional Disputes", "Overseas Counsel Coordination"]
  },
  {
    id: "employment",
    num: "08",
    title: "Employment & Labour Law",
    image: "/services/08-employment.jpg",
    description: "Employment contracts, labour compliance, workplace investigations, POSH advisory, termination disputes, employee claims and industrial relations.",
    practiceAreas: ["Employment Contracts", "Labour Statutory Compliance", "Workplace Investigations", "POSH Advisory", "Termination Disputes", "Industrial Relations"]
  },
  {
    id: "family",
    num: "09",
    title: "Family, Succession & Private Client",
    image: "/services/09-family.jpg",
    description: "Matrimonial disputes, divorce, child custody, inheritance, wills, trusts, estate planning, succession and family settlements.",
    practiceAreas: ["Matrimonial & Divorce Disputes", "Child Custody", "Inheritance & Succession", "Wills, Trusts & Probate", "Estate Planning", "Family Settlements"]
  },
  {
    id: "tax",
    num: "10",
    title: "Insurance, Tax & Consumer Law",
    image: "/services/10-tax.jpg",
    description: "Insurance coverage and claim disputes, insurance recovery, direct and indirect tax litigation, GST disputes, consumer complaints and product liability.",
    practiceAreas: ["Insurance Coverage & Claims", "Insurance Recovery Litigation", "Direct & Indirect Tax Litigation", "GST Disputes", "Consumer Commission Claims", "Product Liability"]
  }
];

export const REGIONAL_STANDING_DESKS = [
  {
    id: "delhi-ncr",
    badge: "APEX STANDING",
    image: "/desks/delhi.jpg",
    title: "DELHI-NCR CHAMBERS",
    subtitle: "New Delhi • Noida Secretariat",
    tags: [
      "Supreme Court of India",
      "Delhi High Court",
      "NCLT Principal"
    ],
    details: [
      {
        label: "Chamber Registry",
        value: "Patiala House Courts Complex, New Delhi"
      },
      {
        label: "Central Consultation",
        value: "Sector 45, Noida, Uttar Pradesh"
      },
      {
        label: "Lead Oversight",
        value: "Appellate briefings, SLP drafting & corporate arbitrations"
      }
    ],
    cta: "DIRECT DELHI DESK FILING",
    forumValue: "Supreme Court of India"
  },
  {
    id: "prayagraj",
    badge: "PRINCIPAL HIGH COURT",
    image: "/desks/prayagraj.jpg",
    title: "PRAYAGRAJ CHAMBER",
    subtitle: "High Court of Judicature at Allahabad",
    tags: [
      "Writ C & Writ A",
      "First & Second Appeals",
      "High Court Benches"
    ],
    details: [
      {
        label: "High Court Desk",
        value: "Dedicated Allahabad High Court registry clearance unit"
      },
      {
        label: "Appellate Capacity",
        value: "Regular civil & criminal writ rosters, special appeal division benches"
      },
      {
        label: "Registry Coordination",
        value: "Immediate listing mentions and certified stamp reporting"
      }
    ],
    cta: "DIRECT PRAYAGRAJ DESK FILING",
    forumValue: "Allahabad High Court & Lucknow Bench"
  },
  {
    id: "kanpur",
    badge: "INDUSTRIAL HUB",
    image: "/desks/kanpur.jpg",
    title: "KANPUR COMMERCIAL DESK",
    subtitle: "District & Commercial Courts Complex",
    tags: [
      "Commercial Suits",
      "Sec 138 NI Act",
      "Execution Petitions"
    ],
    details: [
      {
        label: "Court Registry",
        value: "Civil Court Complex, Kanpur Nagar"
      },
      {
        label: "Practice Emphasis",
        value: "High-volume recovery proceedings, commercial contract suits, debtor asset tracing"
      },
      {
        label: "Trial Capacity",
        value: "Complete evidence examination & trial advocacy"
      }
    ],
    cta: "DIRECT KANPUR DESK FILING",
    forumValue: "District & Sessions Courts (Delhi NCR / Kanpur)"
  }
];

