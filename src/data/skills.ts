import { SkillCategory, EngineeringStage } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, automation, logic, and web applications.",
    skills: [
      { name: "Python", level: "Proficient", highlight: true, note: "Backend logic, rule engines, automation scripts" },
      { name: "TypeScript", level: "Familiar", highlight: true, note: "Typed JavaScript development for modern web apps" },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: false, note: "Modern asynchronous client/server programming" },
      { name: "HTML5 & Semantic Markup", level: "Proficient", highlight: false, note: "Structured, accessible document layout" },
      { name: "CSS3 & Modern Layouts", level: "Proficient", highlight: false, note: "Flexbox, Grid, and responsive design" },
    ],
  },
  {
    title: "Web Development",
    description: "Building responsive, modern, and accessible web interfaces.",
    skills: [
      { name: "React.js", level: "Proficient", highlight: true, note: "Component structure, hooks, state handling" },
      { name: "Next.js (App Router)", level: "Familiar", highlight: true, note: "Modern routing, server components, and web applications" },
      { name: "Responsive UI Design", level: "Familiar", highlight: false, note: "Mobile-first, clean layout implementations" },
      { name: "REST API Integration", level: "Familiar", highlight: false, note: "Consuming and connecting application endpoints" },
      { name: "Tailwind CSS", level: "Proficient", highlight: false, note: "Utility-first styling and component design" },
    ],
  },
  {
    title: "Backend & Data Handling",
    description: "Building reliable APIs, business logic, and structured data handling.",
    skills: [
      { name: "Python Backend Scripting", level: "Proficient", highlight: true, note: "Lightweight services and request handling" },
      { name: "RESTful API Concepts", level: "Familiar", highlight: false, note: "Stateless contracts, JSON payloads, status codes" },
      { name: "Relational Databases (SQL)", level: "Familiar", highlight: false, note: "PostgreSQL, SQLite, relational modeling" },
      { name: "Data Handling & Processing", level: "Familiar", highlight: false, note: "JSON parsing, file handling, data normalization" },
      { name: "Node.js Basics", level: "Familiar", highlight: false, note: "Server runtime basics and script automation" },
    ],
  },
  {
    title: "Intelligent Decision Systems",
    description: "Translating decision logic, expert knowledge, and AI tools into functional systems.",
    skills: [
      { name: "Explainable Rule-Based Systems", level: "Proficient", highlight: true, note: "Knowledge-based systems & deterministic decision logic" },
      { name: "Decision Logic Modeling", level: "Proficient", highlight: true, note: "Weighted multi-factor scoring & evaluation matrices" },
      { name: "AI APIs & Tool Integration", level: "Familiar", highlight: false, note: "Structured prompt orchestration & JSON outputs" },
      { name: "Task Automation", level: "Familiar", highlight: false, note: "Event triggers, webhooks, pipeline workflows" },
      { name: "Machine Learning Fundamentals", level: "Exploring", highlight: false, note: "Core concepts, terminology, and practical limitations" },
    ],
  },
  {
    title: "Tools & Development Ecosystem",
    description: "Everyday development, version control, and diagnostic toolchains.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: true, note: "Branch management, commits, pull requests, repository hosting" },
      { name: "VS Code & Editor Tooling", level: "Proficient", highlight: false, note: "Extensions, debugging, automated formatting" },
      { name: "Linux / Terminal Command Line", level: "Familiar", highlight: false, note: "Shell navigation, environment setup, package managers" },
      { name: "AI Productivity Tools", level: "Familiar", highlight: false, note: "Accelerating prototyping and code exploration" },
      { name: "Network & Diagnostic Tools", level: "Exploring", highlight: false, note: "Wireshark packet inspection, socket auditing fundamentals" },
    ],
  },
];

export const engineeringWorkflow: EngineeringStage[] = [
  {
    id: 1,
    name: "Problem",
    subtitle: "Define the root constraint",
    description:
      "Clarify the underlying real-world friction before writing code. Who is affected, and what does a functional solution look like?",
    mindset: "A well-framed problem is already halfway solved. Avoid building solutions looking for a problem.",
    tools: ["Requirements Gathering", "Domain Constraints", "Use-Case Outlines"],
  },
  {
    id: 2,
    name: "Research",
    subtitle: "Investigate prior art & limits",
    description:
      "Examine existing systems, protocol specifications, algorithms, and architectural tradeoffs to choose appropriate approaches.",
    mindset: "Read documentation deeply. Understand the trade-offs between simplicity and future extensibility.",
    tools: ["Technical Docs", "API References", "System Benchmarks"],
  },
  {
    id: 3,
    name: "Design",
    subtitle: "Map data & component flow",
    description:
      "Draft schemas, state lifecycles, and interface contracts. Model how data moves from input to execution before implementing.",
    mindset: "Modular components with explicit boundaries save weeks of refactoring later.",
    tools: ["Data Flow Outlines", "Schema Contracts", "Wireframing"],
  },
  {
    id: 4,
    name: "Build",
    subtitle: "Implement with discipline",
    description:
      "Write clean, strongly typed, readable code in small verifiable increments. Keep functions focused on doing one thing reliably.",
    mindset: "Working code beats clever code. Maintain strict type safety and readable architecture.",
    tools: ["TypeScript", "Python", "Modular Components", "Git Version Control"],
  },
  {
    id: 5,
    name: "Test",
    subtitle: "Check edge cases carefully",
    description:
      "Subject systems to malformed inputs, edge values, timeout conditions, and real-world failure modes rather than testing only the happy path.",
    mindset: "Assume things will fail across network boundaries. Verify data contracts rigorously.",
    tools: ["Unit Validation", "Edge Case Checks", "Manual Testing"],
  },
  {
    id: 6,
    name: "Improve",
    subtitle: "Refine and simplify",
    description:
      "Eliminate bottlenecks, remove unnecessary abstractions, polish accessibility, and optimize responsiveness.",
    mindset: "Refactoring is an ongoing discipline, not a one-time chore.",
    tools: ["Code Review", "Lighthouse", "Performance Checks"],
  },
  {
    id: 7,
    name: "Deploy",
    subtitle: "Deliver reproducible value",
    description:
      "Host on reliable platforms with automated build verification and clear documentation for users and future maintainers.",
    mindset: "A project isn't truly done until someone other than you can run it or use it effortlessly.",
    tools: ["Vercel / Cloud Platforms", "Build Checks", "Clean Documentation"],
  },
];
