"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { EducationSection } from "@/components/education/EducationSection";
import { NowSection } from "@/components/now/NowSection";
import { GithubSection } from "@/components/github/GithubSection";
import { BeyondCode } from "@/components/personal/BeyondCode";
import { ContactSection } from "@/components/contact/ContactSection";
import { AskPortfolioModal } from "@/components/ai-assistant/AskPortfolioModal";
import { DevTerminal } from "@/components/terminal/DevTerminal";
import { ResumeModal } from "@/components/resume/ResumeModal";

export default function Home() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-space-950 text-text-primary selection:bg-neon-blue selection:text-white">
      {/* Scroll telemetry progress */}
      <ScrollProgress />

      {/* Dynamic Blur Navigation */}
      <Navbar
        onOpenAI={() => setIsAIOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Hero Section with Interactive System Canvas */}
      <HeroSection
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* 01: About / Who I am, What I explore, How I work */}
      <AboutSection />

      {/* 02: Featured Projects & 8-Step Case Study Modal */}
      <ProjectsSection />

      {/* 03: Skills Matrix & Interactive "How I Build" Pipeline */}
      <SkillsSection />

      {/* 04: Practical Experience Timeline */}
      <ExperienceSection />

      {/* 05: Academic Foundation (Bahir Dar University / BiT) */}
      <EducationSection />

      {/* 06: Currently Building ("NOW") */}
      <NowSection />

      {/* 07: Public GitHub Repositories & Language Breakdown */}
      <GithubSection />

      {/* 08: Beyond the Code (F1 Telemetry & Photography) */}
      <BeyondCode />

      {/* 09: Final Milestone (Contact & Collaboration) */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <AskPortfolioModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

      <DevTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
