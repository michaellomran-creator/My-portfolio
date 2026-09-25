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
      "Mikiyas Birhanu is an Information Technology graduate from the Bahir Dar Institute of Technology (BiT) at Bahir Dar University. He is a practical software developer focused on building functional web applications, exploring explainable rule-based decision systems, and studying defensive cybersecurity fundamentals. His goal is to solve real-world problems with maintainable, well-structured technology.",
    relatedLinks: [
      { label: "View About Section", href: "#about" },
      { label: "View Education", href: "#education" },
    ],
  },
  {
    topic: "Work Experience & Internship",
    keywords: ["experience", "work", "job", "internship", "employment", "career", "company"],
    questionExamples: [
      "What work experience does Mikiyas have?",
      "Has he completed an internship?",
      "Where has he worked?",
      "What did he do during his internship?",
    ],
    answer:
      "Mikiyas completed a Website Development Internship, where he worked on website development tasks and gained practical experience with modern web technologies, frontend implementation, and development workflows. He is currently looking for junior software developer or technical roles.",
    relatedLinks: [
      { label: "View Workplace Experience", href: "#experience" },
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
      "Mikiyas's final-year capstone project at Bahir Dar University is an 'AI-Powered Career Guidance System'. It was designed to solve a real challenge for pre-engineering freshmen: choosing whether to branch into Computing disciplines or traditional Engineering fields. Rather than using an opaque black-box model, Mikiyas built a transparent, rule-based expert decision system. It normalizes student assessment scores across cognitive aptitude and domain affinities, evaluating them against department benchmarks using weighted multi-criteria decision matrices with full explainability.",
    relatedLinks: [
      { label: "Inspect Case Study", href: "#projects" },
      { label: "GitHub Repository", href: "https://github.com/michaellomran-creator/AI-powered-career-guidance-system" },
    ],
  },
  {
    topic: "Technologies & Tech Stack",
    keywords: ["technologies", "tech", "stack", "languages", "skills", "tools", "python", "typescript", "react", "nextjs"],
    questionExamples: [
      "What technologies does he use?",
      "What programming languages does Mikiyas know?",
      "Does he know Python and React?",
      "What is his skill level?",
    ],
    answer:
      "Mikiyas is proficient in Python and React.js, and familiar with Next.js, TypeScript, and JavaScript (ES6+), along with HTML5, CSS3, and Tailwind CSS. On the backend and systems side, he writes Python scripts and services, works with relational databases (PostgreSQL, SQLite), and develops rule-based decision logic. He also explores defensive networking tools such as Wireshark and socket programming.",
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
      "Mikiyas's portfolio features:\n1. AI-Powered Career Guidance System: A completed and defended explainable expert decision system for academic stream allocation at Bahir Dar University.\n2. Network Security & Port Diagnostic Scanner: A Python network diagnostic tool currently in development for port auditing and socket inspection.\n3. Task & Workflow Automation Engine: An event-driven pipeline concept currently in development linking webhooks and AI APIs.",
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
      "Mikiyas follows a 7-stage engineering methodology: Problem → Research → Design → Build → Test → Improve → Deploy. He emphasizes deep first-principles understanding: defining the root constraint before writing code, choosing transparent and maintainable architectures over unnecessary complexity, and checking edge cases thoroughly. He values working code over speculative abstractions.",
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
      "Mikiyas has an active interest in defensive cybersecurity and intelligent automation. Having studied computer networks and systems security at Bahir Dar University, he approaches security from the perspective of how protocols, sockets, and network layers operate. He experiments with socket-level diagnostic scripts in Python and builds event-driven pipelines to automate repetitive tasks.",
    relatedLinks: [{ label: "View Current Focus ('Now')", href: "#now" }],
  },
  {
    topic: "Contact & Opportunities",
    keywords: ["contact", "hire", "email", "reach", "collaborate", "linkedin", "touch", "job"],
    questionExamples: [
      "How can I contact Mikiyas?",
      "Is he open to job offers?",
      "What is his email address?",
    ],
    answer:
      "You can contact Mikiyas directly via email at michaellomran@gmail.com, or connect on LinkedIn (https://www.linkedin.com/in/mikiyas-birhanu-845690385) and GitHub (https://github.com/michaellomran-creator). He is actively open to Junior Software Developer, Web Development, and Technical roles.",
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
      "Beyond coding, Mikiyas is a passionate Formula 1 enthusiast, fascinated by the millisecond precision, aerodynamic engineering, real-time tactical strategy, and high-performance execution of modern motorsport. He also practices photography, appreciating how framing, lighting, and composition parallel the intentionality and balance required in clean software design.",
    relatedLinks: [{ label: "View Beyond the Code", href: "#personal" }],
  },
];
