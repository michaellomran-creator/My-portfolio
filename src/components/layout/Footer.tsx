"use client";

import { ArrowUp, Github, Linkedin, Mail, Terminal, Shield, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-space-950 border-t border-space-800 text-text-muted font-mono-tech text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-space-800 pb-8">
          {/* Brand Signature */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
              <span>{profileData.name}</span>
            </div>
            <p className="text-text-muted text-[11px]">
              Information Technology Graduate • Bahir Dar University (BiT), Ethiopia
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-lg bg-space-900 hover:bg-space-850 border border-space-750 text-text-secondary hover:text-cyber-cyan transition-colors"
            title="Scroll to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Telemetry Footer Meta */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-text-muted">
          <div>
            <span>© {new Date().getFullYear()} {profileData.name}. Engineered with Next.js & TypeScript.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-cyber-cyan">
              <Cpu className="w-3.5 h-3.5" />
              <span>Rule-Based Systems</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-neon-blue">
              <Shield className="w-3.5 h-3.5" />
              <span>Defensive Security</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
