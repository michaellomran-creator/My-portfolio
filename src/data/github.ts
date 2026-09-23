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
  username: "mikiyasbirhanu",
  profileUrl: "https://github.com/mikiyasbirhanu",
  featuredRepos: [
    {
      name: "career-guidance-system",
      description:
        "Explainable rule-based decision support system helping pre-engineering students evaluate Computing vs. Engineering tracks. Final-year project.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 12,
      forks: 3,
      updatedAt: "Recent",
      url: "https://github.com/mikiyasbirhanu/career-guidance-system",
      topics: ["expert-systems", "decision-logic", "python", "education-tech"],
    },
    {
      name: "network-security-scanner",
      description:
        "Asynchronous port enumeration and service banner telemetry tool built from scratch with Python AsyncIO.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 8,
      forks: 1,
      updatedAt: "Recent",
      url: "https://github.com/mikiyasbirhanu/network-security-scanner",
      topics: ["cybersecurity", "asyncio", "socket-programming", "network-analysis"],
    },
    {
      name: "workflow-automation-orchestrator",
      description:
        "Event-driven webhook orchestrator for document parsing and structured AI endpoint transformations.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 15,
      forks: 2,
      updatedAt: "Recent",
      url: "https://github.com/mikiyasbirhanu/workflow-automation-orchestrator",
      topics: ["automation", "typescript", "ai-apis", "webhooks"],
    },
    {
      name: "f1-telemetry-viewer",
      description:
        "Formula 1 telemetry analytics and lap-distance throttle/brake trace comparison dashboard using FastF1 data.",
      language: "TypeScript",
      languageColor: "#3178C6",
      stars: 9,
      forks: 1,
      updatedAt: "Recent",
      url: "https://github.com/mikiyasbirhanu/f1-telemetry-viewer",
      topics: ["f1", "telemetry", "data-visualization", "canvas"],
    },
  ] as GithubRepo[],
  languageBreakdown: [
    { name: "Python", percentage: 48, color: "#3572A5" },
    { name: "TypeScript / JavaScript", percentage: 38, color: "#3178C6" },
    { name: "HTML / CSS", percentage: 10, color: "#E34C26" },
    { name: "Shell & Others", percentage: 4, color: "#89E051" },
  ],
};
