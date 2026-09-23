import { SkillCategory, EngineeringStage } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, automation, logic, and web applications.",
    skills: [
      { name: "Python", level: "Advanced", highlight: true, note: "Backend logic, rule engines, automation scripts" },
      { name: "TypeScript", level: "Proficient", highlight: true, note: "Type-safe full-stack application development" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: false, note: "Modern asynchronous client/server programming" },
      { name: "HTML5 & Semantic Markup", level: "Advanced", highlight: false, note: "Accessible and structured document layout" },
      { name: "CSS3 & Modern Layouts", level: "Proficient", highlight: false, note: "Flexbox, Grid, animations, responsive design" },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive, modern, and production-ready interfaces and web apps.",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true, note: "Component lifecycle, hooks, state management" },
      { name: "Next.js (App Router)", level: "Proficient", highlight: true, note: "Server components, routing, fast web applications" },
      { name: "Responsive UI Architecture", level: "Advanced", highlight: false, note: "Mobile-first, high-density dashboard layouts" },
      { name: "REST API Integration", level: "Advanced", highlight: false, note: "Consuming and connecting distributed endpoints" },
      { name: "Tailwind CSS", level: "Proficient", highlight: false, note: "Design system styling and rapid UI consistency" },
    ],
  },
  {
    title: "Backend & Data Handling",
    description: "Architecting reliable APIs, business logic, and structured data stores.",
    skills: [
      { name: "Python Backend Development", level: "Proficient", highlight: true, note: "FastAPI, Flask, and native HTTP services" },
      { name: "RESTful API Design", level: "Proficient", highlight: false, note: "Stateless contracts, validation, status codes" },
      { name: "Relational Databases (SQL)", level: "Proficient", highlight: false, note: "PostgreSQL, SQLite, relational modeling" },
      { name: "Data Handling & Processing", level: "Proficient", highlight: false, note: "JSON pipelines, parsing, data normalization" },
      { name: "Node.js Runtimes", level: "Proficient", highlight: false, note: "Server-side TypeScript and script automation" },
    ],
  },
  {
    title: "AI & Intelligent Systems",
    description: "Translating decision logic, expert knowledge, and AI tools into working systems.",
    skills: [
      { name: "Explainable Rule-Based AI", level: "Advanced", highlight: true, note: "Knowledge-based systems & decision matrices" },
      { name: "AI Concepts & Systems Design", level: "Proficient", highlight: true, note: "Evaluating model suitability and inference constraints" },
      { name: "AI APIs & Tool Calling", level: "Proficient", highlight: false, note: "Structured prompt orchestration & JSON outputs" },
      { name: "Workflow Automation", level: "Proficient", highlight: false, note: "Event triggers, webhooks, pipeline orchestration" },
      { name: "Intelligent Decision Logic", level: "Advanced", highlight: false, note: "Weighted multi-factor scoring systems" },
    ],
  },
  {
    title: "Tools & Development Ecosystem",
    description: "Everyday development, version control, and diagnostic toolchains.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true, note: "Branch management, pull requests, version control" },
      { name: "VS Code & Modern IDEs", level: "Advanced", highlight: false, note: "Extensions, debugging, automated formatting" },
      { name: "Linux / Terminal Command Line", level: "Proficient", highlight: false, note: "Shell scripting, environment setup, package managers" },
      { name: "Modern AI Engineering Tools", level: "Proficient", highlight: false, note: "Accelerating prototyping and code exploration" },
      { name: "Defensive Security Tools", level: "Exploring", highlight: false, note: "Wireshark, Nmap, socket auditing fundamentals" },
    ],
  },
];

export const engineeringWorkflow: EngineeringStage[] = [
  {
    id: 1,
    name: "Problem",
    subtitle: "Define the root constraint",
    description:
      "Clarify the underlying real-world friction before writing a single line of code. Who suffers if this remains unsolved, and what does success actually look like?",
    mindset: "A well-framed problem is already halfway solved. Avoid building solutions looking for a problem.",
    tools: ["Stakeholder Interviews", "Requirements Matrix", "Domain Constraints"],
  },
  {
    id: 2,
    name: "Research",
    subtitle: "Investigate prior art & limits",
    description:
      "Examine existing systems, protocol specifications, algorithms, and architectural tradeoffs to avoid reinventing flawed wheels.",
    mindset: "Read documentation deeply. Understand the trade-offs between simplicity and future extensibility.",
    tools: ["Technical RFCs", "API Documentation", "System Benchmarks"],
  },
  {
    id: 3,
    name: "Design",
    subtitle: "Architect data & component flow",
    description:
      "Draft schemas, state lifecycles, and interface contracts. Model how data transforms from input to execution before touching implementation.",
    mindset: "Modular components with explicit boundaries save weeks of refactoring later.",
    tools: ["Data Flow Diagrams", "Schema Contracts", "System Wireframing"],
  },
  {
    id: 4,
    name: "Build",
    subtitle: "Implement with discipline",
    description:
      "Write clean, strongly typed, self-documenting code in small verifiable increments. Keep functions focused on doing one thing reliably.",
    mindset: "Working code beats clever code. Maintain strict type safety and readable architecture.",
    tools: ["TypeScript", "Python", "Modular Components", "Git Version Control"],
  },
  {
    id: 5,
    name: "Test",
    subtitle: "Break edge cases intentionally",
    description:
      "Subject systems to malformed inputs, edge values, timeout conditions, and real-world failure modes rather than testing only the happy path.",
    mindset: "Assume things will fail across network boundaries. Verify data contracts rigorously.",
    tools: ["Unit Validation", "Edge Case Testing", "Network Simulation"],
  },
  {
    id: 6,
    name: "Improve",
    subtitle: "Profile and refine",
    description:
      "Eliminate bottlenecks, remove unnecessary abstractions, polish accessibility, and optimize perceived responsiveness.",
    mindset: "Refactoring is an ongoing discipline, not a one-time chore.",
    tools: ["Performance Profiling", "Lighthouse", "Code Review"],
  },
  {
    id: 7,
    name: "Deploy",
    subtitle: "Deliver reproducible value",
    description:
      "Ship to reliable production hosting with continuous integration checks, monitoring, and clear documentation for end users and future maintainers.",
    mindset: "A project isn't truly done until someone other than you can run it or use it effortlessly.",
    tools: ["CI/CD Pipelines", "Vercel / Cloud Platforms", "Clean Documentation"],
  },
];
