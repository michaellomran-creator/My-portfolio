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
    role: "Lead Developer & System Architect",
    tags: ["Rule-Based AI", "Expert Systems", "Decision Logic", "Python", "Full-Stack Web"],
    metrics: [
      { label: "Target Cohort", value: "Pre-Engineering Students" },
      { label: "Evaluation Criteria", value: "Multi-dimensional Aptitude" },
      { label: "Decision Model", value: "Deterministic Rule Matrix" },
      { label: "Transparency", value: "100% Explainable Recommendations" },
    ],
    problem:
      "At Bahir Dar University (and Ethiopian higher education institutions broadly), pre-engineering freshmen face a pivotal division milestone: choosing whether to branch into Computing disciplines (Software Engineering, Computer Science, IT) or traditional Engineering fields (Electrical, Mechanical, Civil). Students frequently make this decision based on peer pressure or incomplete information, leading to high transfer rates and career mismatch. No localized, objective tool existed to guide them based on their actual strengths and academic affinities.",
    idea:
      "To design and engineer an interactive, explainable career recommendation system that assesses students across multidimensional criteria (computational thinking, physical sciences, spatial visualization, problem-solving habits) and maps their responses against verified academic profiles using an expert decision matrix.",
    systemArchitecture: {
      description:
        "The architecture was intentionally designed around an explainable expert knowledge system rather than a black-box machine learning model. Because student academic trajectories are high-stakes, every recommendation must provide an audit trail of why a division was suggested.",
      flowSteps: [
        "Interactive Student Assessment Module: Captures responses across cognitive aptitude, course performance vectors, and domain affinity.",
        "Weight & Calibration Engine: Normalizes raw scores across standardized scales and weights questions according to faculty curriculum benchmarks.",
        "Department Profile Knowledge Base: Codified domain requirements formulated in collaboration with university department profiles.",
        "Weighted Decision Rule Evaluator: Executes deterministic conditional matrices comparing Computing vs. Engineering affinity indexes.",
        "Explainability & Insight Generator: Outputs recommendation accompanied by a transparent breakdown of contributing factors and alternative career paths.",
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
      "Built the full-stack web interface allowing students to complete assessments with immediate visual feedback.",
      "Engineered the explainability layer that generates plain-language rationales for each student's recommendation.",
      "Conducted usability testing with peers and faculty advisors to validate question clarity and logic weighting.",
    ],
    challenges:
      "The primary engineering hurdle was ensuring question weighting remained impartial and accurately distinguished between computational aptitude and general quantitative skill. Another major challenge was building an explainability report that was clear and actionable for freshmen without using intimidating jargon.",
    solution:
      "Iterated through multiple weighting matrices with feedback from IT and Engineering faculty. Established separate orthogonal scoring axes for abstract algorithmic reasoning versus applied physical sciences, preventing one high score from skewing the entire recommendation inappropriately.",
    results:
      "Successfully defended as our final-year capstone project at Bahir Dar University. The prototype proved that deterministic, explainable rule-based systems are superior to opaque models for academic counseling because students and advisors can inspect the exact reasoning behind the outcome.",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "Rule-Based Inference", category: "Architecture" },
      { name: "JavaScript / TypeScript", category: "Language" },
      { name: "REST APIs", category: "Framework" },
      { name: "Relational Database", category: "Tools" },
      { name: "Modern Web UI", category: "Framework" },
    ],
    links: {
      github: "https://github.com/mikiyasbirhanu/career-guidance-system",
      demo: "#",
      docs: "#",
    },
    visualType: "career-ai",
  },
  {
    id: "network-telemetry-scanner",
    title: "Network Security & Service Telemetry Scanner",
    category: "Cybersecurity & Automation",
    shortDescription:
      "A modular Python network diagnostic tool performing asynchronous port auditing, service banner interrogation, and automated security posture reporting.",
    featured: true,
    status: "Active Development",
    timeline: "Independent Security Project",
    role: "Sole Developer",
    tags: ["Cybersecurity", "Python", "Socket Programming", "AsyncIO", "CLI"],
    metrics: [
      { label: "Architecture", value: "Non-blocking AsyncIO" },
      { label: "Inspection", value: "TCP/UDP Port Profiling" },
      { label: "Output", value: "JSON & Clean Telemetry" },
    ],
    problem:
      "Understanding network attack surfaces requires hands-on exploration of transport layer protocols, open socket behavior, and service fingerprinting without solely relying on heavy third-party GUI software.",
    idea:
      "Construct a lightweight, transparent network auditing utility from scratch using Python's native socket and asyncio libraries to demystify port enumeration and service fingerprinting.",
    systemArchitecture: {
      description:
        "Engineered with concurrent socket workers managed via Python asyncio event loops, delivering high-speed packet interrogation with configurable throttling to prevent network congestion.",
      flowSteps: [
        "Target Validation & DNS Resolution: Verifies CIDR ranges or hostnames against security boundaries.",
        "Asynchronous Socket Dispatcher: Dispatches non-blocking connection probes across designated port pools.",
        "Banner Grabbing & Handshake Probing: Captures raw response headers to deduce running daemons and version fingerprints.",
        "Vulnerability Signature Mapping: Cross-references detected services against known insecure configuration patterns.",
        "Telemetry Exporter: Outputs formatted CLI summaries and machine-readable JSON logs.",
      ],
    },
    myContribution: [
      "Engineered asynchronous TCP connect scan routines with granular socket timeout handling.",
      "Implemented banner grab parsing routines for standard protocols (HTTP, SSH, SMTP, FTP).",
      "Created structured command-line telemetry dashboards with customizable verbosity flags.",
    ],
    challenges:
      "Handling TCP connection timeouts efficiently without triggering false positives or getting hung on unresponsive hosts.",
    solution:
      "Leveraged Python's `asyncio.wait_for` wrappers with adaptive round-trip-time (RTT) estimators to prune dead socket attempts swiftly.",
    results:
      "Built a reliable diagnostic tool used for local lab reconnaissance and understanding network layer defense mechanisms.",
    technologies: [
      { name: "Python 3", category: "Language" },
      { name: "AsyncIO & Sockets", category: "Architecture" },
      { name: "Network Protocols", category: "Tools" },
      { name: "CLI Telemetry", category: "Tools" },
    ],
    links: {
      github: "https://github.com/mikiyasbirhanu/network-security-scanner",
    },
    visualType: "network-sec",
  },
  {
    id: "workflow-automation-orchestrator",
    title: "Intelligent Workflow & Task Automation Engine",
    category: "Full-Stack Software",
    shortDescription:
      "An automated pipeline linking webhooks, document processing, and AI summarization APIs to eliminate repetitive digital tasks and data transcription.",
    featured: true,
    status: "Production",
    timeline: "Engineering Project",
    role: "Full-Stack Developer",
    tags: ["Automation", "AI APIs", "Node.js / TypeScript", "Webhooks", "REST"],
    metrics: [
      { label: "Workflow Type", value: "Event-Driven Pipeline" },
      { label: "API Integration", value: "OpenAI / Claude / Custom APIs" },
      { label: "Efficiency Gain", value: "Automated Data Ingestion" },
    ],
    problem:
      "Developers and administrative users waste hours manually extracting unstructured information from PDFs, emails, and tickets into databases and communication channels.",
    idea:
      "Create an extensible event-driven service that listens to ingest webhooks, extracts structured JSON from semi-structured documents, applies schema-constrained AI transforms, and notifies target endpoints.",
    systemArchitecture: {
      description:
        "A modular micro-service pattern with retry queues, strict input schema validation using Zod, and rate-limited API dispatchers.",
      flowSteps: [
        "Webhook Listener: Accepts payload with cryptographic signature verification.",
        "Document Parsing & Normalization: Sanitizes input text and isolates key metadata fields.",
        "Structured Extraction Engine: Prompts LLM APIs with strict JSON schemas to guarantee parseable output.",
        "Dispatch & Logging: Dispatches validated entities into target databases and alerts relevant channels.",
      ],
    },
    myContribution: [
      "Designed TypeScript schemas and webhook handlers with robust failure backoff policies.",
      "Integrated AI endpoint prompting with structured JSON output enforcement.",
      "Built a monitoring interface displaying pipeline throughput, error logs, and execution times.",
    ],
    challenges:
      "Dealing with unpredictable third-party API latency and occasional schema hallucination.",
    solution:
      "Enforced deterministic fallback validation using Zod schemas and automatic retry logic with exponential backoff.",
    results:
      "Streamlined recurring document parsing routines into automated, reliable sub-second pipeline executions.",
    technologies: [
      { name: "TypeScript", category: "Language" },
      { name: "Node.js / Next.js", category: "Framework" },
      { name: "AI APIs", category: "Tools" },
      { name: "PostgreSQL / SQLite", category: "Tools" },
    ],
    links: {
      github: "https://github.com/mikiyasbirhanu/workflow-automation-orchestrator",
    },
    visualType: "automation-bot",
  },
  {
    id: "f1-telemetry-visualizer",
    title: "F1 Precision Telemetry & Lap Pace Analyzer",
    category: "Systems & Tools",
    shortDescription:
      "An exploratory high-performance telemetry dashboard comparing Formula 1 throttle traces, braking points, and sector delta times using official timing telemetry.",
    featured: false,
    status: "Experimental",
    timeline: "Personal Exploration",
    role: "Data & UI Developer",
    tags: ["Data Visualization", "Python", "FastF1", "React", "Telemetry"],
    problem:
      "F1 race strategy and lap differentials are often buried in dense timing data. Visualizing micro-deltas between drivers across specific apexes requires fast, synchronized charting.",
    idea:
      "Build a minimalist telemetry viewer pulling FastF1 session data to compare sector deltas, throttle profiles, and tire degradation curves.",
    systemArchitecture: {
      description:
        "Python backend processing session telemetry caches, exposed via lightweight REST endpoints to a responsive canvas/SVG telemetry chart interface.",
      flowSteps: [
        "Data Ingestion: Fetches lap timing and car telemetry vectors from FastF1 APIs.",
        "Downsampling & Syncing: Aligns distance markers across car data channels.",
        "Interactive Overlay: Renders synchronized speed, gear, throttle, and delta traces.",
      ],
    },
    myContribution: [
      "Wrote Python data cleaning scripts to synchronize inconsistent GPS sample intervals.",
      "Constructed custom canvas graphs for high-frame-rate scrubbing across lap distance.",
    ],
    challenges: "Distance alignment across laps with differing apex lines.",
    solution: "Normalized telemetry data by lap distance rather than raw time timestamps.",
    results: "Personal showcase combining deep interest in Formula 1 engineering with data visualization.",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "FastF1 Library", category: "Tools" },
      { name: "TypeScript / React", category: "Framework" },
      { name: "HTML5 Canvas", category: "Framework" },
    ],
    links: {
      github: "https://github.com/mikiyasbirhanu/f1-telemetry-viewer",
    },
    visualType: "f1-telemetry",
  },
];
