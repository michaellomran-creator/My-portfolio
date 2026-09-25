import { NowItem } from "@/types";

export const nowData = {
  lastUpdated: "September 2026",
  location: "Addis Ababa / Bahir Dar, Ethiopia",
  statusLine: "Actively building software projects, learning automation systems, and studying defensive cybersecurity.",
  focusAreas: [
    {
      title: "Modern Web Development",
      category: "Building" as const,
      description:
        "Building responsive web applications with React, Next.js, and TypeScript. Focusing on clean component design, state handling, and practical frontend workflows.",
      badge: "Web Development",
    },
    {
      title: "AI & Workflow Automation",
      category: "Exploring" as const,
      description:
        "Experimenting with webhook integrations, structured AI API responses, and scripted task automation to streamline repetitive data handling.",
      badge: "Automation",
    },
    {
      title: "Defensive Cybersecurity Fundamentals",
      category: "Learning" as const,
      description:
        "Studying network protocols, socket programming in Python, packet inspection with Wireshark, and foundational web security practices.",
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
