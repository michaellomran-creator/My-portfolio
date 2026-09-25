"use client";

import { useState } from "react";
import { ArrowDown, FileText, Github, Linkedin, Mail, Shield, Cpu, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { SystemCanvas } from "./SystemCanvas";

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenAI: () => void;
}

export function HeroSection({ onOpenResume, onOpenAI }: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-space-950 bg-grid-cyber"
    >
      {/* Interactive System Canvas */}
      <SystemCanvas />

      {/* Radial Gradient Glow Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyber-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Status Telemetry Indicator */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-space-850/80 border border-cyber-cyan/30 text-xs font-mono-tech text-text-secondary mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
          </span>
          <span className="font-semibold text-cyber-cyan">{profileData.status.badge}:</span>
          <span className="text-text-muted hidden sm:inline">|</span>
          <span className="tracking-wide text-text-secondary">{profileData.status.currentFocus}</span>
        </div>

        {/* Identity & Main Headline */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <h2 className="text-sm uppercase tracking-widest font-mono-tech text-text-muted font-medium">
              {profileData.name}
            </h2>
            <span className="text-space-600 font-mono-tech text-xs">•</span>
            <span className="text-xs font-mono-tech text-text-muted">Bahir Dar University (BiT) Graduate</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
            I build software, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-text-primary via-cyber-cyan to-neon-blue bg-clip-text text-transparent">
              explore AI,
            </span>{" "}
            and solve problems with technology.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed pt-2">
            {profileData.shortBio}
          </p>
        </div>

        {/* Primary and Secondary Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(31,106,225,0.35)] hover:shadow-[0_0_28px_rgba(31,106,225,0.55)] hover:-translate-y-0.5"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-space-850 hover:bg-space-750 border border-space-600/50 hover:border-cyber-cyan/40 text-text-primary font-medium text-sm transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-cyber-cyan" />
            <span>Download CV / Resume</span>
          </button>

          <button
            onClick={onOpenAI}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-space-850/60 hover:bg-space-800 border border-cyber-cyan/20 hover:border-cyber-cyan/50 text-text-secondary text-sm font-mono-tech transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Ask AI About Me</span>
          </button>
        </div>

        {/* Social Proof & Quick Channels */}
        <div className="mt-10 pt-6 border-t border-space-700/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-text-muted font-mono-tech">
            <span className="text-text-secondary font-medium">CONNECT:</span>
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyber-cyan transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyber-cyan transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-1.5 hover:text-cyber-cyan transition-colors"
              title={`Email ${profileData.email}`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="hover:text-cyber-cyan transition-colors text-left text-[11px]"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <span className="text-emerald-400 font-semibold">[Copied!]</span>
              ) : (
                <span className="text-text-muted hover:text-cyber-cyan">[Copy]</span>
              )}
            </button>
          </div>

          {/* Micro Telemetry Badges */}
          <div className="hidden md:flex items-center gap-4 text-xs font-mono-tech text-text-muted">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Rule-Based AI</span>
            </div>
            <span className="text-space-600">•</span>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-neon-blue" />
              <span>Web Development</span>
            </div>
            <span className="text-space-600">•</span>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-glow-purple" />
              <span>Security Mindset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
