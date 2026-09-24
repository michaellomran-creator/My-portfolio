export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
  topics: string[];
}

export const githubConfig = {
  username: "michaellomran-creator",
  profileUrl: "https://github.com/michaellomran-creator",
  featuredRepos: [
    {
      name: "AI-powered-career-guidance-system",
      description:
        "Explainable rule-based decision support system helping pre-engineering students evaluate Computing vs. Engineering tracks. Final-year capstone project.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 0,
      forks: 0,
      updatedAt: "Active",
      url: "https://github.com/michaellomran-creator/AI-powered-career-guidance-system",
      topics: ["expert-systems", "decision-logic", "typescript", "education-tech"],
    },
    {
      name: "My-portfolio",
      description:
        "Personal portfolio website engineered with Next.js App Router, TypeScript, and modern telemetry UI.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 0,
      forks: 0,
      updatedAt: "Active",
      url: "https://github.com/michaellomran-creator/My-portfolio",
      topics: ["portfolio", "nextjs", "typescript", "developer"],
    },
    {
      name: "AI-Cyber-Journey",
      description:
        "Weekly notes, experiments, learning logs, and small scripts exploring AI systems and cybersecurity.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 0,
      forks: 0,
      updatedAt: "Active",
      url: "https://github.com/michaellomran-creator/AI-Cyber-Journey",
      topics: ["cybersecurity", "ai", "learning-journey", "notes"],
    },
    {
      name: "freelancer-late-payment-mvp",
      description:
        "Client payment tracking and reminder workflow MVP for independent freelancers.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 0,
      forks: 0,
      updatedAt: "Active",
      url: "https://github.com/michaellomran-creator/freelancer-late-payment-mvp",
      topics: ["freelance", "mvp", "workflow", "automation"],
    },
  ] as GithubRepo[],
  languageBreakdown: [
    { name: "TypeScript / JavaScript", percentage: 60, color: "#3178C6" },
    { name: "Python", percentage: 28, color: "#3572A5" },
    { name: "HTML / CSS", percentage: 8, color: "#E34C26" },
    { name: "Shell & Config", percentage: 4, color: "#89E051" },
  ],
};
