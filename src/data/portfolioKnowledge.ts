import { KnowledgeEntry } from "@/types";

export const portfolioKnowledgeBase: KnowledgeEntry[] = [
  {
    topic: "Identity & Background",
    keywords: ["who", "identity", "background", "about", "bio", "mikiyas", "degree", "ethiopia"],
    questionExamples: [
      "Who is Mikiyas Birhanu?",
      "What is his background?",
      "Where did he study?",
      "What type of developer is he?",
    ],
    answer:
      "Mikiyas Birhanu is a practical Software Developer, AI & Automation enthusiast, and aspiring Cybersecurity professional from Ethiopia. He is an Information Technology graduate from the Bahir Dar Institute of Technology (BiT) at Bahir Dar University. Mikiyas focuses on building real, working software rather than merely studying theory, prioritizing clean architecture, transparent decision systems, and defensive security practices.",
    relatedLinks: [
      { label: "View About Section", href: "#about" },
      { label: "View Education", href: "#education" },
    ],
  },
  {
    topic: "AI Career Guidance System (Final-Year Capstone)",
    keywords: ["ai", "project", "career", "guidance", "capstone", "final-year", "bdu", "bahir dar", "decision", "rules", "expert"],
    questionExamples: [
      "Tell me about Mikiyas's AI project.",
      "What was his final-year capstone project?",
      "Did he use machine learning for the career guidance system?",
      "How does the career guidance system work?",
    ],
    answer:
      "Mikiyas's final-year capstone project at Bahir Dar University is an 'AI-Powered Career Guidance System'. It was designed to solve a critical problem for pre-engineering freshmen: choosing whether to branch into Computing disciplines (Software Engineering, Computer Science, IT) or traditional Engineering fields. Rather than an unexplainable black-box machine learning model, Mikiyas engineered it as a transparent, rule-based expert system. It normalizes student assessment scores across cognitive aptitude and domain affinities, evaluating them against department profiles using weighted multi-criteria decision matrices with full explainability.",
    relatedLinks: [
      { label: "Inspect Case Study", href: "#projects" },
      { label: "GitHub Repository", href: "https://github.com/mikiyasbirhanu/career-guidance-system" },
    ],
  },
  {
    topic: "Technologies & Tech Stack",
    keywords: ["technologies", "tech", "stack", "languages", "skills", "tools", "python", "typescript", "react", "nextjs"],
    questionExamples: [
      "What technologies does he use?",
      "What programming languages does Mikiyas know?",
      "Does he know Python and TypeScript?",
      "What is his core stack?",
    ],
    answer:
      "Mikiyas's primary programming languages are Python, TypeScript, and JavaScript, paired with modern HTML5 and CSS. For web and application development, he builds with React.js, Next.js (App Router), and Tailwind CSS. On the backend and systems side, he builds Python REST services (FastAPI/Flask), handles relational databases (PostgreSQL, SQLite), and develops automation scripts. In AI and systems, he specializes in explainable rule-based decision logic, API integrations, and defensive network security tools (AsyncIO sockets, Wireshark).",
    relatedLinks: [{ label: "Explore Skills Matrix", href: "#skills" }],
  },
  {
    topic: "Projects Overview",
    keywords: ["projects", "built", "portfolio", "work", "applications", "software", "network", "scanner", "automation"],
    questionExamples: [
      "What projects has he built?",
      "What are his key projects?",
      "Has he built security or automation projects?",
    ],
    answer:
      "Mikiyas's key projects include:\n1. AI-Powered Career Guidance System: An explainable expert decision system for academic stream allocation at Bahir Dar University.\n2. Network Security & Telemetry Scanner: An asynchronous Python tool for port auditing and daemon banner extraction.\n3. Intelligent Workflow Automation Orchestrator: An event-driven pipeline bridging webhooks and structured AI extraction APIs.\n4. F1 Telemetry & Lap Pace Analyzer: An exploratory telemetry visualizer comparing Formula 1 throttle and braking traces via FastF1 data.",
    relatedLinks: [{ label: "View Featured Projects", href: "#projects" }],
  },
  {
    topic: "Engineering Philosophy & Mindset",
    keywords: ["philosophy", "how", "work", "build", "approach", "mindset", "principles"],
    questionExamples: [
      "How does Mikiyas approach problem solving?",
      "How does he work?",
      "What is his engineering philosophy?",
    ],
    answer:
      "Mikiyas follows a 7-stage engineering methodology: Problem → Research → Design → Build → Test → Improve → Deploy. He emphasizes deep first-principles understanding: defining the root constraint before writing code, choosing transparent and maintainable architectures over unnecessary complexity, and breaking edge cases intentionally during testing. He values working code over speculative abstractions.",
    relatedLinks: [{ label: "View 'How I Build' Flow", href: "#skills" }],
  },
  {
    topic: "Cybersecurity & Automation Interest",
    keywords: ["cybersecurity", "security", "automation", "networks", "defensive", "future"],
    questionExamples: [
      "Why is he interested in cybersecurity?",
      "What automation work does he do?",
      "Is he pursuing cybersecurity?",
    ],
    answer:
      "Mikiyas is actively growing toward defensive cybersecurity and intelligent automation. Having studied computer networks and systems security at Bahir Dar University, he approaches security from the perspective of how protocols, sockets, and authentication flows operate under the hood. He develops socket-level diagnostic scripts and builds event-driven pipelines that automate repetitive manual data handling.",
    relatedLinks: [{ label: "View Current Focus ('Now')", href: "#now" }],
  },
  {
    topic: "Contact & Hiring",
    keywords: ["contact", "hire", "email", "reach", "collaborate", "linkedin", "touch"],
    questionExamples: [
      "How can I contact Mikiyas?",
      "Is he open to job offers or freelance work?",
      "What is his email address?",
    ],
    answer:
      "You can contact Mikiyas directly via email at mikiyasbirhanu.dev@gmail.com, or connect on LinkedIn (linkedin.com/in/mikiyas-birhanu) and GitHub (github.com/mikiyasbirhanu). He is actively open to Software Engineering, AI & Automation, and Technical opportunities.",
    relatedLinks: [{ label: "Jump to Contact Form", href: "#contact" }],
  },
  {
    topic: "Personal Interests (Beyond Code)",
    keywords: ["personal", "hobbies", "f1", "formula 1", "photography", "racing", "beyond"],
    questionExamples: [
      "What does he do outside of coding?",
      "What are his hobbies?",
      "Why does he like Formula 1?",
    ],
    answer:
      "Beyond coding, Mikiyas is a passionate Formula 1 enthusiast, fascinated by the millisecond precision, aerodynamic engineering, sensor telemetry, and tactical strategy of modern motorsport. He also practices photography, appreciating how framing, lighting, and composition parallel the intentionality and balance required in clean software design.",
    relatedLinks: [{ label: "View Beyond the Code", href: "#personal" }],
  },
];
