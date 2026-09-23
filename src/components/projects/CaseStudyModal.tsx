"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Network, Workflow, ArrowRight } from "lucide-react";
import { ProjectCaseStudy } from "@/types";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const sections = [
    { id: 1, title: "01 The Problem" },
    { id: 2, title: "02 The Idea" },
    { id: 3, title: "03 The System" },
    { id: 4, title: "04 Contribution" },
    { id: 5, title: "05 Challenges" },
    { id: 6, title: "06 Solution" },
    { id: 7, title: "07 Result" },
    { id: 8, title: "08 Tech Stack" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-space-900 border border-space-600/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-space-700/50 bg-space-850/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-neon-blue/20 text-cyber-cyan border border-cyber-cyan/30 text-xs font-mono-tech uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono-tech text-text-muted">{project.status}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-space-750 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Title & Context Bar */}
        <div className="px-6 pt-6 pb-4 border-b border-space-800 bg-space-900">
          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-text-primary">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">{project.shortDescription}</p>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-space-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-space-850/60 p-2.5 rounded-lg border border-space-700/30">
                  <span className="text-[10px] font-mono-tech text-text-muted uppercase block">{m.label}</span>
                  <span className="text-xs font-semibold text-cyber-cyan">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Navigation Tabs (8 steps) */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 mt-3 border-t border-space-800/80 no-scrollbar">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`px-3 py-1 rounded text-xs font-mono-tech whitespace-nowrap transition-colors ${
                  activeTab === sec.id
                    ? "bg-neon-blue text-white shadow-sm shadow-neon-blue/40"
                    : "text-text-muted hover:text-text-primary hover:bg-space-800"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-text-secondary leading-relaxed bg-space-900/60">
          {activeTab === 1 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-cyber-cyan" />
                01 — The Problem Statement
              </h3>
              <p>{project.problem}</p>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <Workflow className="w-4 h-4 text-neon-blue" />
                02 — The Architectural Idea
              </h3>
              <p>{project.idea}</p>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <Cpu className="w-4 h-4 text-glow-purple" />
                03 — The System Architecture & Mechanics
              </h3>
              <p>{project.systemArchitecture.description}</p>

              <div className="space-y-2 mt-4">
                <h4 className="text-xs uppercase font-mono-tech text-text-muted tracking-wider">
                  Pipeline Execution Flow:
                </h4>
                <div className="space-y-2">
                  {project.systemArchitecture.flowSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-space-850/80 border border-space-700/40 flex items-start gap-3"
                    >
                      <span className="font-mono-tech text-xs text-cyber-cyan font-bold">{idx + 1}.</span>
                      <span className="text-xs text-text-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.systemArchitecture.diagramText && (
                <div className="mt-4 p-4 rounded-lg bg-space-950 border border-space-700 font-mono-tech text-xs text-cyber-cyan overflow-x-auto whitespace-pre">
                  {project.systemArchitecture.diagramText}
                </div>
              )}
            </div>
          )}

          {activeTab === 4 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                04 — My Personal Contribution
              </h3>
              <div className="space-y-2">
                {project.myContribution.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 5 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                05 — Engineering Challenges
              </h3>
              <p>{project.challenges}</p>
            </div>
          )}

          {activeTab === 6 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
                06 — How It Was Solved
              </h3>
              <p>{project.solution}</p>
            </div>
          )}

          {activeTab === 7 && (
            <div className="space-y-3 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                07 — Practical Result & Validation
              </h3>
              <p>{project.results}</p>
            </div>
          )}

          {activeTab === 8 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-base font-semibold text-text-primary font-mono-tech flex items-center gap-2">
                <Network className="w-4 h-4 text-neon-blue" />
                08 — Applied Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.technologies.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-space-850 border border-space-700/50 flex flex-col justify-between"
                  >
                    <span className="text-xs font-semibold text-text-primary">{t.name}</span>
                    <span className="text-[10px] font-mono-tech text-cyber-cyan">{t.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-space-700/50 bg-space-850/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-space-800 hover:bg-space-750 border border-space-600 text-xs font-mono-tech text-text-secondary hover:text-cyber-cyan transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            {project.links.demo && project.links.demo !== "#" && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/40 text-xs font-mono-tech text-cyber-cyan transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live System</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab((prev) => (prev > 1 ? prev - 1 : 8))}
              className="px-3 py-1.5 rounded bg-space-800 hover:bg-space-750 text-xs font-mono-tech text-text-muted hover:text-text-primary"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveTab((prev) => (prev < 8 ? prev + 1 : 1))}
              className="px-3 py-1.5 rounded bg-neon-blue text-white text-xs font-mono-tech flex items-center gap-1"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
