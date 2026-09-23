"use client";

import { useState, useCallback } from "react";
import { portfolioKnowledgeBase } from "@/data/portfolioKnowledge";
import { KnowledgeEntry } from "@/types";

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  relatedLinks?: { label: string; href: string }[];
  isStreaming?: boolean;
}

export function usePortfolioAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I am Mikiyas's Portfolio Assistant. I can answer inquiries regarding his software engineering background, his AI-Powered Career Guidance Capstone at Bahir Dar University, his technical skills, and how to get in touch.",
      timestamp: "Now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const queryAssistant = useCallback((questionText: string) => {
    if (!questionText.trim()) return;

    const userMsgId = Date.now().toString();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: "user",
      text: questionText,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsTyping(true);

    // Deterministic semantic scoring across knowledge base
    const queryTokens = questionText
      .toLowerCase()
      .replace(/[?.,!]/g, "")
      .split(/\s+/)
      .filter((t) => t.length > 1);

    let bestEntry: KnowledgeEntry | null = null;
    let highestScore = 0;

    for (const entry of portfolioKnowledgeBase) {
      let score = 0;

      // Check keywords
      for (const kw of entry.keywords) {
        if (queryTokens.includes(kw)) score += 4;
        else if (questionText.toLowerCase().includes(kw)) score += 2;
      }

      // Check example questions similarity
      for (const ex of entry.questionExamples) {
        const exLower = ex.toLowerCase();
        for (const token of queryTokens) {
          if (exLower.includes(token)) score += 1.5;
        }
      }

      // Check answer text overlap
      for (const token of queryTokens) {
        if (entry.answer.toLowerCase().includes(token)) score += 0.5;
      }

      if (score > highestScore) {
        highestScore = score;
        bestEntry = entry;
      }
    }

    // Simulate subtle processing delay for natural feel
    setTimeout(() => {
      let replyText = "";
      let links: { label: string; href: string }[] | undefined = undefined;

      if (bestEntry && highestScore >= 2) {
        replyText = bestEntry.answer;
        links = bestEntry.relatedLinks;
      } else {
        replyText =
          "I only provide verified information regarding Mikiyas Birhanu's actual background. You can ask about his final-year capstone AI project, his software and web development stack, his education at Bahir Dar University, or his direct contact details.";
        links = [
          { label: "Explore Projects", href: "#projects" },
          { label: "Contact Mikiyas", href: "#contact" },
        ];
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: replyText,
        timestamp: "Just now",
        relatedLinks: links,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  }, []);

  const resetChat = useCallback(() => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "assistant",
        text: "Conversation refreshed. Ask anything about Mikiyas's engineering background or projects.",
        timestamp: "Now",
      },
    ]);
  }, []);

  return {
    messages,
    isTyping,
    queryAssistant,
    resetChat,
  };
}
