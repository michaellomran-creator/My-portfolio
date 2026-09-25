import { NowItem } from "@/types";

export const nowData = {
  lastUpdated: "September 2026",
  location: "Addis Ababa / Bahir Dar, Ethiopia",
  statusLine: "Actively engineering software, deepening AI & automation systems, and practicing defensive cybersecurity.",
  focusAreas: [
    {
      title: "Full-Stack Software Architecture",
      category: "Building" as const,
      description:
        "Refining production-grade Next.js, TypeScript, and Python REST services. Prioritizing modular state boundaries, clean contracts, and high-performance server components.",
      badge: "Core Engineering",
    },
    {
      title: "Pragmatic AI & Workflow Automation",
      category: "Building" as const,
      description:
        "Building automated pipelines connecting event webhooks, structured AI API extractions, and data synchronization to eliminate manual repetitive digital chores.",
      badge: "AI Automation",
    },
    {
      title: "Defensive Cybersecurity Fundamentals",
      category: "Exploring" as const,
      description:
        "Practicing network socket auditing, Wireshark packet inspection, authentication flow hardening, and web application security best practices.",
      badge: "Security",
    },
  ] as NowItem[],
  currentlyReading: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      note: "Reliability, scalability, and maintainability in modern distributed systems.",
    },
    {
      title: "Practical Packet Analysis",
      author: "Chris Sanders",
      note: "Using Wireshark to solve real-world network and security problems.",
    },
  ],
};
