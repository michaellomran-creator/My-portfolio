export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "AI & Decision Systems" | "Full-Stack Software" | "Cybersecurity & Automation" | "Systems & Tools";
  shortDescription: string;
  featured: boolean;
  status: "Completed (Defended)" | "Active Development" | "Production" | "Experimental";
  timeline: string;
  role: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  problem: string;
  idea: string;
  systemArchitecture: {
    description: string;
    flowSteps: string[];
    diagramText?: string;
  };
  myContribution: string[];
  challenges: string;
  solution: string;
  results: string;
  technologies: {
    name: string;
    category: "Language" | "Framework" | "Architecture" | "Tools";
  }[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  visualType: "career-ai" | "network-sec" | "automation-bot" | "f1-telemetry";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Exploring";
    highlight?: boolean;
    note?: string;
  }[];
}

export interface EngineeringStage {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  mindset: string;
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Academic Project" | "Freelance" | "Technical Role";
  highlights: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  keyCourses: string[];
}

export interface NowItem {
  title: string;
  category: "Building" | "Researching" | "Exploring" | "Reading";
  description: string;
  badge: string;
  linkText?: string;
  linkHref?: string;
}

export interface KnowledgeEntry {
  topic: string;
  keywords: string[];
  questionExamples: string[];
  answer: string;
  relatedLinks?: { label: string; href: string }[];
}
