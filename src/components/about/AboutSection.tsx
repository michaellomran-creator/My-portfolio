"use client";

import { Cpu, Terminal, Shield, Zap, Sparkles, Compass, Trophy, Camera, BookOpen } from "lucide-react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  const exploringTopics = [
    {
      title: "Artificial Intelligence",
      description: "Explainable rule systems, expert knowledge trees, and deterministic inference architectures.",
      icon: Cpu,
      color: "text-cyber-cyan",
      bg: "bg-cyber-cyan/10 border-cyber-cyan/30",
    },
    {
      title: "AI Automation & Workflows",
      description: "Connecting event webhooks, automated data transforms, and schema-constrained AI APIs.",
      icon: Zap,
      color: "text-neon-blue",
      bg: "bg-neon-blue/10 border-neon-blue/30",
    },
    {
      title: "Cybersecurity & Defenses",
      description: "Network diagnostics, socket programming, packet inspection, and secure backend patterns.",
      icon: Shield,
      color: "text-glow-purple",
      bg: "bg-glow-purple/10 border-glow-purple/30",
    },
    {
      title: "Software Engineering",
      description: "Clean modular architectures, TypeScript safety, REST APIs, and resilient data models.",
      icon: Terminal,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
  ];

  const corePrinciples = [
    {
      title: "Learning by Building",
      desc: "Theory only solidifies when deployed into real systems with edge cases, latency, and constraints.",
    },
    {
      title: "Explainability First",
      desc: "High-stakes problems require transparent decision matrices and audit trails over opaque black-boxes.",
    },
    {
      title: "First-Principles Thinking",
      desc: "Deconstruct problems to their root constraints before choosing frameworks or technical patterns.",
    },
    {
      title: "Disciplined Simplicity",
      desc: "The best engineering is maintainable, well-typed, and easy for future teammates to understand.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-space-900 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              01 // Background & Ethos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Grounding technology in practical execution.
            </h2>
          </div>
          <p className="text-sm font-mono-tech text-text-muted max-w-sm">
            IT Graduate • Bahir Dar University • Independent Systems Builder
          </p>
        </div>

        {/* 3-Column Balanced Grid: Who I Am / What I'm Exploring / How I Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Who I Am (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-space-850/80 border border-space-600/30 backdrop-blur-sm">
            <div className="space-y-4">
              <span className="font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider">
                Who I Am
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-text-primary leading-snug">
                {profileData.about.lead}
              </h3>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed pt-2">
                {profileData.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Quick Metrics / Verification Chips */}
            <div className="mt-8 pt-6 border-t border-space-700/40 grid grid-cols-2 gap-4">
              {profileData.about.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[11px] font-mono-tech text-text-muted uppercase">{item.label}</span>
                  <p className="text-xs font-semibold text-text-primary">{item.value}</p>
                  <p className="text-[11px] text-text-secondary">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Exploring (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-neon-blue uppercase tracking-wider">
                What I&apos;m Exploring
              </span>
              <span className="text-xs font-mono-tech text-text-muted">4 Focus Domains</span>
            </div>

            <div className="grid grid-cols-1 gap-3.5 flex-1">
              {exploringTopics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-space-850/50 hover:bg-space-800/80 border border-space-600/25 hover:border-space-600/60 transition-all flex items-start gap-3.5 group"
                  >
                    <div className={`p-2 rounded-md ${topic.bg} mt-0.5 transition-transform group-hover:scale-105`}>
                      <Icon className={`w-4 h-4 ${topic.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-cyber-cyan transition-colors">
                        {topic.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How I Work & Personal Dimension (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono-tech text-xs text-glow-purple uppercase tracking-wider">
              How I Work
            </span>

            <div className="p-5 rounded-xl bg-space-850/60 border border-space-600/30 space-y-4 flex-1">
              {corePrinciples.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-space-700/30 last:border-none last:pb-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan"></span>
                    <h5 className="text-xs font-semibold text-text-primary font-mono-tech">{item.title}</h5>
                  </div>
                  <p className="text-xs text-text-secondary pl-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Subtle Personal Identity Touch: Formula 1 & Photography */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-space-850 to-space-800 border border-space-600/30 flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-rose-400" />
                <span className="text-text-primary">Formula 1 Enthusiast</span>
              </div>
              <span className="text-space-600">|</span>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-cyber-cyan" />
                <span className="text-text-secondary">Visual Framing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
