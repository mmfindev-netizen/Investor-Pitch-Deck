/**
 * Gmaxira Investor Pitch Deck — Centralized Configuration
 * All slide copy, metrics, and contact fields live here.
 * Do not hard-code contact details, names, or URLs in components.
 */

export const pitchDeckConfig = {
  brand: {
    name: "GMAXIRA",
    displayName: "Gmaxira",
    descriptor: "Institutional Digital Asset Exchange",
  },

  theme: {
    background: "#090B10",
    deepNavy: "#071525",
    primaryBlue: "#0F62FE",
    secondaryCyan: "#35D0FF",
    primaryText: "#FFFFFF",
    secondaryText: "#AEB7C2",
  },

  typography: {
    display: "Montserrat",
    body: "Inter",
  },

  animation: {
    totalEntranceMs: 4500,
    runOnce: true,
    respectReducedMotion: true,
  },

  sharedDisclosures: {
    forwardLooking:
      "Forward-looking projections are based on assumptions and involve risk.",
    dataRoom: "Additional detail available in the data room upon request.",
    sourcePrefix: "Source:",
    noGuarantee:
      "Nothing in this presentation constitutes a guarantee of returns, regulatory approval, profitability, or exit outcomes.",
    presentationOnly:
      "This presentation is provided for discussion purposes only and does not constitute an offer, solicitation, investment recommendation, or binding commitment. Any investment is subject to due diligence, negotiation, corporate approvals, applicable law, regulatory requirements, and definitive agreements.",
    liquidityDisclosure:
      "Potential liquidity pathways are illustrative strategic scenarios only and should not be interpreted as guarantees, commitments, forecasts, or representations that any specific liquidity event will occur.",
    strategicInspiration:
      "This represents strategic inspiration only and does not imply affiliation.",
  },

  contact: {
    executiveName: "",
    executiveTitle: "",
    investorRelationsEmail: "",
    corporateWebsite: "",
    dataRoomAccessStatus: "Available upon request under NDA",
    secureQrEnabled: false,
    secureQrValue: "",
  },

  slides: {
    slide01: {
      number: "01",
      label: "Cover",
      brandName: "GMAXIRA",
      descriptor: "Institutional Digital Asset Exchange",
      tagline:
        "Building the Infrastructure for the Next Generation of Digital Capital Markets",
    },

    slide02: {
      number: "02",
      label: "Vision",
      coreMessage:
        "Traditional finance and digital markets remain disconnected. Gmaxira bridges them.",
      problemTitle: "Problem",
      problemItems: [
        "Fragmented infrastructure",
        "Retail-first platforms",
        "Limited institutional controls",
        "Compliance complexity",
        "Weak integration between trading, custody, and finance",
      ],
      visionTitle: "Vision",
      visionItems: [
        "Integrated institutional platform",
        "Trusted infrastructure",
        "Regulated market access",
        "Scalable global architecture",
        "Unified trading, custody, compliance, and enterprise services",
      ],
      bridgeLabel: "Gmaxira",
    },

    slide03: {
      number: "03",
      label: "Market Opportunity",
      title: "Market Opportunity",
      subtitle: "Scale of the global digital capital markets opportunity",
      metrics: [
        {
          id: "tam",
          label: "TAM",
          value: "Configurable",
          sub: "Total addressable digital capital markets",
        },
        {
          id: "sam",
          label: "SAM",
          value: "Configurable",
          sub: "Serviceable institutional segment",
        },
        {
          id: "som",
          label: "SOM",
          value: "Configurable",
          sub: "Near-term obtainable share",
        },
      ],
      themes: [
        {
          title: "Institutional Adoption",
          description: "Growing demand for regulated digital market access",
        },
        {
          title: "Tokenization",
          description: "Expansion of tokenized real-world and financial assets",
        },
        {
          title: "Regulatory Expansion",
          description: "Clearer frameworks enabling institutional participation",
        },
        {
          title: "Digital Capital Markets Growth",
          description: "Structural growth across trading, custody, and infrastructure",
        },
      ],
      segmentation: [
        { label: "Trading Infrastructure", weight: "Core" },
        { label: "Custody & Settlement", weight: "Core" },
        { label: "Institutional Services", weight: "Expanding" },
        { label: "Tokenization & Capital Markets", weight: "Emerging" },
      ],
      sourceNote:
        "Market sizing figures are maintained in configuration and must match approved investor materials / data-room sources. Do not treat placeholder labels as verified numbers.",
    },

    slide04: {
      number: "04",
      label: "Why Now",
      title: "Why Now",
      hub: "Digital Capital Markets",
      drivers: [
        "Institutional Adoption",
        "Regulatory Evolution",
        "Tokenization",
        "Enterprise Technology",
        "Market Infrastructure",
        "Global Demand",
      ],
      timeline: [
        { year: "2020", note: "Early institutional exploration" },
        { year: "2022", note: "Infrastructure maturation" },
        { year: "2024", note: "Regulatory clarity advances" },
        { year: "2026+", note: "Gmaxira timing window" },
      ],
    },

    slide05: {
      number: "05",
      label: "The Platform",
      title: "The Platform",
      hub: "GMAXIRA PLATFORM",
      modules: [
        "Spot Trading",
        "Futures",
        "Custody",
        "Wallet",
        "Compliance",
        "Liquidity",
        "APIs",
        "Administration",
      ],
      capabilities: [
        "Enterprise Security",
        "AI Risk",
        "High Availability",
        "Regulatory Ready",
        "Scalable Architecture",
        "Multi-region",
      ],
    },

    slide06: {
      number: "06",
      label: "Product Ecosystem",
      title: "Product Ecosystem",
      hub: "GMAXIRA ECOSYSTEM",
      products: [
        "Spot",
        "Futures",
        "Custody",
        "Tokenization",
        "OTC",
        "Treasury",
        "APIs",
        "White Label",
      ],
      revenueStreamsLabel: "Revenue Streams",
      revenueStreams: [
        "Trading fees",
        "Institutional services",
        "Custody",
        "Tokenization",
        "OTC",
        "White label",
        "Enterprise APIs",
      ],
    },

    slide07: {
      number: "07",
      label: "Competitive Positioning",
      title: "Competitive Positioning",
      axisX: { low: "Retail", high: "Institutional" },
      axisY: { low: "Limited Ecosystem", high: "Integrated Capital Markets" },
      marketGroups: [
        { id: "retail", label: "Retail exchanges", x: 18, y: 28 },
        { id: "institutional", label: "Institutional platforms", x: 68, y: 42 },
        { id: "traditional", label: "Traditional infrastructure", x: 78, y: 22 },
        { id: "gmaxira", label: "Gmaxira", x: 82, y: 78, highlight: true },
      ],
      whyDifferentTitle: "Why Gmaxira Is Different",
      whyDifferent: [
        "Institutional-first architecture",
        "Integrated trading, custody, and compliance",
        "Enterprise-grade controls and governance",
        "Scalable multi-region infrastructure",
        "Capital markets product expansion path",
      ],
      inspiration: [
        { label: "Nasdaq", weight: "30%" },
        { label: "Bloomberg", weight: "30%" },
        { label: "BlackRock", weight: "20%" },
        { label: "Coinbase Institutional", weight: "20%" },
      ],
      inspirationNote:
        "This represents strategic inspiration only and does not imply affiliation.",
    },

    slide08: {
      number: "08",
      label: "Technology & Architecture",
      title: "Technology & Architecture",
      layers: [
        { name: "Access", items: ["APIs", "Admin", "Client interfaces"] },
        {
          name: "Trading Services",
          items: ["Spot", "Futures", "Liquidity", "Order management"],
        },
        {
          name: "Core Financial Infrastructure",
          items: ["Matching", "Ledger", "Custody interfaces", "Settlement flows"],
        },
        {
          name: "Data & Security",
          items: ["Observability", "Identity", "Risk", "Audit"],
        },
        {
          name: "Deployment",
          items: ["Kubernetes", "Multi-region", "High availability"],
        },
      ],
      backbone: "Event-driven architecture",
      performance: [
        { label: "Matching latency", value: "<20 ms" },
        { label: "Availability", value: "99.95%" },
        { label: "Ledger", value: "Double-entry ledger" },
        { label: "Architecture", value: "Microservices" },
        { label: "Deployment", value: "Multi-region deployment" },
      ],
      stack: [
        "Java 17 + Spring Boot",
        "C++17 Futures Engine",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Kubernetes",
        "Keycloak",
        "ELK",
        "Prometheus / Grafana",
        "Next.js",
        "Flutter",
      ],
    },

    slide09: {
      number: "09",
      label: "Security, Custody & Compliance",
      title: "Security, Custody & Compliance",
      shieldLabel: "Trust Shield",
      controls: [
        "MPC Custody",
        "KYC / KYB",
        "AML / KYT",
        "Travel Rule",
        "Governance",
        "Audit",
        "Risk Monitoring",
        "Infrastructure Security",
      ],
      securityStandards: [
        "Defense-in-depth controls",
        "Segregation of duties",
        "Continuous monitoring",
        "Secure key management practices",
      ],
      complianceLifecycle: [
        "Onboarding",
        "Monitoring",
        "Reporting",
        "Governance review",
        "Audit readiness",
      ],
      cautionNote:
        "Controls described are design objectives and program elements. No certification, license, or regulatory approval is implied.",
    },

    slide10: {
      number: "10",
      label: "Business Model & Revenue Streams",
      title: "Business Model & Revenue Streams",
      hub: "REVENUE ENGINE",
      sources: [
        "Trading",
        "Institutional Services",
        "Custody",
        "Tokenization",
        "OTC",
        "White Label",
        "Enterprise APIs",
        "Listing",
      ],
      panels: [
        {
          title: "Revenue Diversification",
          items: [
            "Multiple institutional product lines",
            "Reduced dependency on a single fee source",
            "Cross-sell across trading and services",
          ],
        },
        {
          title: "Revenue Characteristics",
          items: [
            "Transaction-linked and service-linked mix",
            "Enterprise and recurring service potential",
            "Scalable fee architecture",
          ],
        },
        {
          title: "Operating Leverage",
          items: [
            "Software-led delivery model",
            "Incremental margin as volume scales",
            "Shared platform cost base",
          ],
        },
        {
          title: "Recurring Enterprise Value",
          items: [
            "Institutional relationships",
            "API and white-label programs",
            "Custody and treasury services",
          ],
        },
      ],
    },

    slide11: {
      number: "11",
      label: "Go-to-Market Strategy",
      title: "Go-to-Market Strategy",
      flow: [
        "Market Access",
        "Liquidity Formation",
        "Institutional Acquisition",
        "Product Expansion",
        "Regional Scale",
      ],
      targetCustomers: [
        "Institutional investors",
        "Professional traders",
        "Corporate treasury",
        "Funds",
        "Brokers",
        "FinTech partners",
      ],
      acquisitionChannels: [
        "Strategic partnerships",
        "Liquidity providers",
        "Enterprise APIs",
        "Institutional sales",
        "Regulatory market access",
        "Ecosystem partnerships",
      ],
      bottomSections: [
        {
          title: "Regional Rollout",
          text: "Phased market entry aligned with licensing and liquidity readiness",
        },
        {
          title: "Growth Flywheel",
          text: "Access → liquidity → institutions → products → regional scale",
        },
        {
          title: "Commercial Priorities",
          text: "Institutional channels, partnerships, and disciplined expansion",
        },
      ],
    },

    slide12: {
      number: "12",
      label: "Roadmap & Execution Plan",
      title: "Roadmap & Execution Plan",
      stages: [
        {
          year: "2027",
          title: "Launch",
          items: [
            "Company setup",
            "Core team",
            "Platform completion",
            "Licensing progress",
            "Liquidity integration",
            "Commercial launch",
          ],
        },
        {
          year: "2028",
          title: "Expansion",
          items: [
            "Regional market entry",
            "Client acquisition",
            "Product scaling",
            "Institutional partnerships",
          ],
        },
        {
          year: "2029",
          title: "Institutional Products",
          items: [
            "OTC",
            "Tokenization",
            "Treasury",
            "Enterprise APIs",
            "Institutional custody",
          ],
        },
        {
          year: "2030",
          title: "Global Scale",
          items: [
            "Multi-region operations",
            "Broader institutional coverage",
            "Strategic capital markets infrastructure",
            "International scale",
          ],
        },
      ],
      note: "Roadmap milestones are planned execution objectives and do not constitute guarantees of timing or outcomes.",
    },

    slide13: {
      number: "13",
      label: "Financial Outlook",
      title: "Financial Outlook",
      subtitle: "Execution translating into long-term financial growth",
      headlineMetrics: [
        "Revenue",
        "EBITDA",
        "Net Profit",
        "Trading Volume",
        "Customer Growth",
      ],
      /**
       * Financial series are configuration-driven.
       * Replace with approved management model figures before external distribution.
       * Relative index values (base year = 100) avoid introducing unapproved absolute claims.
       */
      growthSeries: {
        years: ["Y1", "Y2", "Y3", "Y4", "Y5"],
        revenueIndex: [100, 180, 320, 520, 780],
        ebitdaIndex: [20, 60, 140, 260, 420],
      },
      marginCategories: [
        { label: "Gross Margin", trend: "Expansion with scale" },
        { label: "EBITDA Margin", trend: "Operating leverage" },
        { label: "Net Profit Margin", trend: "Long-term improvement" },
      ],
      revenueMix: [
        { label: "Trading", share: 35 },
        { label: "Institutional Services", share: 20 },
        { label: "Custody", share: 15 },
        { label: "Tokenization & OTC", share: 15 },
        { label: "APIs / White Label / Listing", share: 15 },
      ],
      growthDrivers: [
        "Institutional client growth",
        "Product expansion",
        "Regional scale",
        "Operating leverage",
      ],
      assumptions: [
        "Phased commercial launch",
        "Licensing and market-access progress",
        "Liquidity depth development",
        "Disciplined cost scaling",
      ],
      forwardLookingNote:
        "Forward-looking projections are based on assumptions and involve risk.",
      modelNote:
        "Charts reflect configurable model structure. Absolute financial figures must match the approved investor financial model before external use.",
    },

    slide14: {
      number: "14",
      label: "Funding Ask & Use of Funds",
      title: "Funding Ask & Use of Funds",
      fundingTarget: "USD 50 Million",
      fundingTargetShort: "USD 50M",
      executionPeriod: "0–18 Months",
      useOfFunds: [
        { label: "Product & Engineering", percent: 30 },
        { label: "Growth & Marketing", percent: 25 },
        { label: "Liquidity & Strategic Partnerships", percent: 20 },
        { label: "Licensing, Compliance & Legal", percent: 15 },
        { label: "Operations & Working Capital", percent: 10 },
      ],
      milestones: [
        "Platform completion",
        "Team build-out",
        "Licensing progress",
        "Liquidity integration",
        "Commercial launch",
        "Initial market entry",
      ],
      supportingPanels: [
        {
          title: "Capital Governance",
          text: "Board oversight and controlled capital allocation",
        },
        {
          title: "Deployment Logic",
          text: "Priority sequencing across build, compliance, and liquidity",
        },
        {
          title: "Milestone-based release",
          text: "Capital deployment aligned to execution milestones",
        },
        {
          title: "Budget oversight",
          text: "Ongoing monitoring of spend versus plan",
        },
      ],
    },

    slide15: {
      number: "15",
      label: "Investment Opportunity",
      title: "Investment Opportunity",
      coreAreas: [
        "Investor Commitment",
        "Ownership",
        "Share Class",
        "Closing Conditions",
        "Capital Deployment",
      ],
      economicParticipation: [
        "Equity ownership",
        "Profit distributions",
        "Potential capital-return mechanism",
        "Exit participation",
        "Long-term enterprise value",
      ],
      governanceRights: [
        "Voting rights",
        "Board participation",
        "Information rights",
        "Reserved matters",
        "Pre-emption rights",
        "Transfer rights",
      ],
      capitalReturn: {
        title: "Capital Return Mechanism",
        summary:
          "Potential annual capital return may be considered up to 20% of original investment, subject to:",
        conditions: [
          "Board approval",
          "Liquidity availability",
          "Financial performance",
          "Growth plans",
          "Applicable agreements",
        ],
        notGuaranteed: "This is not guaranteed.",
      },
    },

    slide16: {
      number: "16",
      label: "Investment Highlights",
      title: "WHY GMAXIRA",
      subtitle: "Investment Highlights",
      highlights: [
        "Large Market Opportunity",
        "Institutional Platform",
        "Diversified Revenue",
        "Regulatory-First Design",
        "Scalable Technology",
        "Phased Execution",
        "Experienced Execution Model",
        "Long-Term Enterprise Value",
      ],
      investmentSummary: [
        "Institutional Strategy",
        "Global Expansion",
        "High-Margin Infrastructure",
        "Multiple Growth Drivers",
        "Scalable Business Model",
        "Long-Term Investment Horizon",
      ],
      investmentThesis: [
        "Large Addressable Market",
        "Strong Execution Plan",
        "Multiple Revenue Engines",
        "Regulatory Readiness",
        "Scalable Enterprise Infrastructure",
      ],
      bottomStatement:
        "Gmaxira combines institutional infrastructure, scalable technology, diversified revenue, disciplined execution, and long-term market opportunity into a single investment platform designed for sustainable enterprise value creation.",
    },

    slide17: {
      number: "17",
      label: "Exit Opportunities & Investor Liquidity",
      title: "Exit Opportunities & Investor Liquidity",
      coreMessage:
        "Enterprise value creation enables future liquidity opportunities—not guaranteed exit events.",
      liquidityPaths: [
        { title: "Strategic Acquisition", status: "Potential" },
        { title: "Public Listing", status: "Strategic Option" },
        { title: "Secondary Share Transactions", status: "Future Consideration" },
        { title: "Future Investment Rounds", status: "Subject to Market Conditions" },
        { title: "Company Share Repurchase", status: "Subject to Board Approval" },
        { title: "Long-Term Ownership", status: "Strategic Option" },
      ],
      enterpriseValueDrivers: [
        "Institutional Client Growth",
        "Product Expansion",
        "Regional Expansion",
        "Technology Scale",
        "Revenue Growth",
        "Profitability Improvement",
      ],
      conceptualTimeline: [
        "Platform Launch",
        "Revenue Growth",
        "Institutional Scale",
        "Enterprise Expansion",
        "Potential Liquidity Events",
      ],
      investorParticipation: [
        "Investment",
        "Ownership",
        "Profit Participation",
        "Enterprise Value Growth",
        "Potential Liquidity",
      ],
      investorProtections: [
        "Board Governance",
        "Shareholder Agreements",
        "Information Rights",
        "Corporate Controls",
        "Regulatory Compliance",
      ],
      mandatoryDisclosure:
        "Potential liquidity pathways are illustrative strategic scenarios only and should not be interpreted as guarantees, commitments, forecasts, or representations that any specific liquidity event will occur.",
    },

    slide18: {
      number: "18",
      label: "Closing",
      heroEyebrow: "THE OPPORTUNITY",
      mainTitle: "BUILDING THE FUTURE OF DIGITAL CAPITAL MARKETS",
      heroDescription:
        "Gmaxira is being built as an integrated institutional platform connecting trading, custody, liquidity, compliance, technology, and enterprise financial services within one scalable global infrastructure.",
      primaryClosingStatement:
        "We are seeking strategic capital and long-term partners who share the ambition to build trusted, scalable, and institutionally governed digital market infrastructure.",
      opportunityPanel: {
        capitalRaise: { label: "Capital Raise", value: "USD 50 Million" },
        executionPeriod: { label: "Execution Period", value: "0–18 Months" },
        initialObjective: {
          label: "Initial Objective",
          value: "Build and Launch Gmaxira",
        },
        longTermVision: {
          label: "Long-Term Vision",
          value: "Global Institutional Infrastructure",
        },
        investorRole: {
          label: "Investor Role",
          value: "Strategic Capital Partner",
        },
      },
      pillars: [
        "Institutional by Design",
        "Engineered for Scale",
        "Governed for Trust",
        "Positioned for Long-Term Value",
      ],
      formula: [
        "Vision",
        "Institutional Infrastructure",
        "Disciplined Execution",
        "Strategic Capital",
      ],
      formulaResult: "GMAXIRA",
      cta: "Let us build Gmaxira together.",
      ctaSupport:
        "A global institutional platform designed for the next generation of digital capital markets.",
      finalSentence:
        "Let us build the institutional infrastructure for the next generation of digital capital markets.",
      mandatoryDisclosure:
        "This presentation is provided for discussion purposes only and does not constitute an offer, solicitation, investment recommendation, or binding commitment. Any investment is subject to due diligence, negotiation, corporate approvals, applicable law, regulatory requirements, and definitive agreements.",
    },
  },
} as const;

export type PitchDeckConfig = typeof pitchDeckConfig;
export type SlideKey = keyof typeof pitchDeckConfig.slides;
