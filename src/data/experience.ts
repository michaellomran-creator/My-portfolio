import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "capstone-architect",
    role: "Lead Software Architect & Developer (Final-Year Capstone)",
    organization: "Bahir Dar Institute of Technology (BiT) — Final Project",
    location: "Bahir Dar, Ethiopia",
    period: "Academic Capstone (Defended)",
    type: "Academic Project",
    highlights: [
      "Engineered an explainable rule-based decision support system to direct university pre-engineering students between Computing and Engineering divisions.",
      "Codified complex academic department prerequisites and weighting formulas into structured decision logic matrices.",
      "Built full-stack web interface allowing students to interactively complete diagnostic assessments and view transparent recommendation rationale.",
      "Presented and successfully defended the system before the department examination board.",
    ],
    techStack: ["Python", "Decision Logic Engine", "TypeScript", "RESTful Architecture", "Relational Database"],
  },
  {
    id: "freelance-developer",
    role: "Freelance Software & Web Developer",
    organization: "Independent Practice / Client Solutions",
    location: "Remote / Ethiopia",
    period: "2023 — Present",
    type: "Freelance",
    highlights: [
      "Delivered custom responsive web applications, business dashboards, and automated digital workflows for local organizations and independent clients.",
      "Translated client requirements into clean, maintainable user interfaces and reliable backend services.",
      "Optimized website load times, mobile rendering fidelity, and automated data entry pipelines.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python APIs", "Automation"],
  },
  {
    id: "tech-internship-placeholder",
    role: "Software & IT Technical Intern",
    organization: "Practical Internship Experience",
    location: "Ethiopia",
    period: "University Practical Period",
    type: "Internship",
    highlights: [
      "Assisted with local network administration, hardware diagnostics, and enterprise software support.",
      "Collaborated on internal script automation to streamline recurring IT maintenance workflows.",
      "Documented software troubleshooting workflows and conducted system configuration audits.",
    ],
    techStack: ["Network Administration", "Python Scripting", "System Diagnostics", "Technical Documentation"],
  },
];
