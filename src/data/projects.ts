import { ProjectCaseStudy } from "@/types";

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "career-guidance-ai",
    title: "AI-Powered Career Guidance System",
    category: "AI & Decision Systems",
    shortDescription:
      "An explainable rule-based decision engine helping Bahir Dar University pre-engineering students evaluate their aptitude and select between Computing and Engineering divisions.",
    featured: true,
    status: "Completed (Defended)",
    timeline: "Final-Year Capstone Project",
    role: "Capstone Developer & Implementer",
    tags: ["Rule-Based AI", "Expert Systems", "Decision Logic", "Python", "Web Application"],
    metrics: [
      { label: "Target Cohort", value: "Pre-Engineering Students" },
      { label: "Evaluation Criteria", value: "Multi-dimensional Aptitude" },
      { label: "Decision Model", value: "Deterministic Rule Matrix" },
      { label: "Transparency", value: "100% Explainable Recommendations" },
    ],
    problem:
      "At Bahir Dar University, pre-engineering freshmen face a pivotal division milestone: choosing whether to branch into Computing disciplines (Software Engineering, Computer Science, IT) or traditional Engineering fields (Electrical, Mechanical, Civil). Students frequently make this decision based on peer influence or incomplete information. No localized, objective tool existed to guide them based on their strengths and academic affinities.",
    idea:
      "To design and engineer an interactive, explainable career recommendation system that assesses students across multidimensional criteria (computational thinking, physical sciences, spatial visualization, problem-solving habits) and maps their responses against verified academic profiles using an expert decision matrix.",
    systemArchitecture: {
      description:
        "The architecture was intentionally designed around an explainable expert knowledge system rather than a black-box machine learning model. Because student academic trajectories are significant, every recommendation provides a transparent breakdown of why a division was suggested.",
      flowSteps: [
        "Interactive Student Assessment Module: Captures responses across cognitive aptitude, course performance vectors, and domain affinity.",
        "Weight & Calibration Engine: Normalizes raw scores across standardized scales and weights questions according to curriculum benchmarks.",
        "Department Profile Knowledge Base: Codified domain requirements formulated based on university department profiles.",
        "Weighted Decision Rule Evaluator: Executes deterministic conditional matrices comparing Computing vs. Engineering affinity indexes.",
        "Explainability & Insight Generator: Outputs recommendation accompanied by a transparent breakdown of contributing factors.",
      ],
      diagramText: `
[Student Assessment] 
       │
       ▼
[Response Normalization & Weighting]
       │
       ├──► [Department Profile Matrix]
       │
       ▼
[Rule-Based Inference Engine]
       │
       ▼
[Explainable Recommendation + Factor Breakdown]
      `,
    },
    myContribution: [
      "Formulated and implemented the core inference engine in Python using weighted multi-attribute decision logic.",
      "Codified department capability metrics and academic prerequisites into structured JSON knowledge trees.",
      "Built the web interface allowing students to complete assessments with immediate feedback.",
      "Engineered the explainability layer that generates plain-language rationales for each recommendation.",
      "Conducted usability testing with peers and advisors to validate question clarity and logic weighting.",
    ],
    challenges:
      "The primary hurdle was ensuring question weighting remained impartial and accurately distinguished between computational aptitude and general quantitative skill, while presenting clear, actionable feedback without confusing jargon.",
    solution:
      "Iterated through weighting matrices with faculty input. Established separate orthogonal scoring axes for abstract algorithmic reasoning versus applied physical sciences, preventing one high score from skewing the outcome inappropriately.",
    results:
      "Successfully defended as our final-year capstone project at Bahir Dar University. The system proved that deterministic, explainable rule-based systems provide transparent, trustworthy guidance for academic counseling.",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "Rule-Based Inference", category: "Architecture" },
      { name: "JavaScript / TypeScript", category: "Language" },
      { name: "REST APIs", category: "Framework" },
      { name: "Relational Database", category: "Tools" },
      { name: "Web Interface", category: "Framework" },
    ],
    githubUrl: "https://github.com/michaellomran-creator/AI-powered-career-guidance-system",
    links: {
      github: "https://github.com/michaellomran-creator/AI-powered-career-guidance-system",
    },
    visualType: "career-ai",
  },
  {
    id: "network-security-scanner",
    title: "Network Security & Port Diagnostic Scanner",
    category: "Cybersecurity & Automation",
    shortDescription:
      "A modular Python network diagnostic tool designed for asynchronous port auditing, service banner interrogation, and network security exploration.",
    featured: true,
    status: "In Development",
    timeline: "Independent Project (In Development)",
    role: "Developer",
    tags: ["Cybersecurity", "Python", "Socket Programming", "AsyncIO", "CLI"],
    metrics: [
      { label: "Architecture", value: "Non-blocking AsyncIO" },
      { label: "Inspection", value: "TCP/UDP Port Profiling" },
      { label: "Output", value: "JSON & Formatted CLI Logs" },
    ],
    problem:
      "Understanding network attack surfaces requires hands-on exploration of transport layer protocols, open socket behavior, and service fingerprinting without solely relying on heavy third-party software.",
    idea:
      "Construct a lightweight, transparent network auditing utility from scratch using Python's native socket and asyncio libraries to demystify port enumeration and service fingerprinting.",
    systemArchitecture: {
      description:
        "Designed with concurrent socket workers managed via Python asyncio event loops, delivering fast packet interrogation with configurable throttling to prevent network congestion.",
      flowSteps: [
        "Target Validation & DNS Resolution: Verifies hostnames and addresses against security boundaries.",
        "Asynchronous Socket Dispatcher: Dispatches non-blocking connection probes across designated port pools.",
        "Banner Grabbing & Handshake Probing: Captures raw response headers to deduce running daemons and version fingerprints.",
        "Signature Matching: Cross-references detected services against known configuration patterns.",
        "Log Exporter: Outputs formatted CLI summaries and machine-readable JSON logs.",
      ],
    },
    myContribution: [
      "Engineered asynchronous TCP connect scan routines with socket timeout handling.",
      "Implemented banner grab parsing routines for standard protocols (HTTP, SSH, SMTP, FTP).",
      "Created structured command-line summaries with customizable verbosity flags.",
    ],
    challenges:
      "Handling TCP connection timeouts efficiently without triggering false positives or hanging on unresponsive hosts.",
    solution:
      "Leveraged Python's asyncio.wait_for wrappers with adaptive round-trip-time (RTT) estimators to prune dead socket attempts swiftly.",
    results:
      "Designed and implemented core socket routines for local lab reconnaissance and understanding network layer defense mechanisms.",
    technologies: [
      { name: "Python 3", category: "Language" },
      { name: "AsyncIO & Sockets", category: "Architecture" },
      { name: "Network Protocols", category: "Tools" },
      { name: "CLI Tools", category: "Tools" },
    ],
    githubUrl: undefined,
    links: {},
    visualType: "network-sec",
  },
  {
    id: "workflow-automation-engine",
    title: "Task & Workflow Automation Engine",
    category: "Full-Stack Software",
    shortDescription:
      "An automated pipeline concept linking webhooks, document processing, and AI summarization APIs to reduce manual repetitive digital tasks.",
    featured: true,
    status: "In Development",
    timeline: "Development Project",
    role: "Developer",
    tags: ["Automation", "AI APIs", "Node.js / TypeScript", "Webhooks", "REST"],
    metrics: [
      { label: "Workflow Type", value: "Event-Driven Pipeline" },
      { label: "API Integration", value: "AI API Integration" },
      { label: "Goal", value: "Automated Data Ingestion" },
    ],
    problem:
      "Users often spend unnecessary time manually extracting unstructured information from PDFs, emails, and forms into spreadsheets or databases.",
    idea:
      "Create an extensible event-driven service that listens to ingest webhooks, extracts structured JSON from semi-structured documents, applies schema-constrained AI transforms, and notifies target endpoints.",
    systemArchitecture: {
      description:
        "A modular pipeline pattern with retry queues, strict input schema validation using Zod, and rate-limited API dispatchers.",
      flowSteps: [
        "Webhook Listener: Accepts payload with signature verification.",
        "Document Parsing & Normalization: Sanitizes input text and isolates key metadata fields.",
        "Structured Extraction Engine: Prompts AI APIs with strict JSON schemas to ensure parseable output.",
        "Dispatch & Logging: Dispatches validated entities into target databases and alerts relevant channels.",
      ],
    },
    myContribution: [
      "Designed TypeScript schemas and webhook handlers with failure retry policies.",
      "Integrated AI endpoint prompting with structured JSON output enforcement.",
      "Built a prototype monitoring interface displaying pipeline status and execution logs.",
    ],
    challenges:
      "Dealing with third-party API latency and handling schema variation across different input documents.",
    solution:
      "Enforced fallback validation using Zod schemas and automatic retry logic with exponential backoff.",
    results:
      "Architected the workflow pipeline to explore event-driven processing and structured AI API interactions.",
    technologies: [
      { name: "TypeScript", category: "Language" },
      { name: "Node.js / Next.js", category: "Framework" },
      { name: "AI APIs", category: "Tools" },
      { name: "PostgreSQL / SQLite", category: "Tools" },
    ],
    githubUrl: undefined,
    links: {},
    visualType: "automation-bot",
  },
];
