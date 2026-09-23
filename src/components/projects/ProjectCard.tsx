"use client";

import { ArrowUpRight, Github, ExternalLink, Cpu, Shield, Workflow, Layers, CheckCircle } from "lucide-react";
import { ProjectCaseStudy } from "@/types";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const getIcon = () => {
    switch (project.visualType) {
      case "career-ai":
        return <Cpu className="w-5 h-5 text-cyber-cyan" />;
      case "network-sec":
        return <Shield className="w-5 h-5 text-glow-purple" />;
      case "automation-bot":
        return <Workflow className="w-5 h-5 text-neon-blue" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-space-850/80 border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-sm ${
        project.featured
          ? "border-neon-blue/40 shadow-[0_0_30px_rgba(31,106,225,0.12)] hover:border-cyber-cyan/60"
          : "border-space-600/30 hover:border-space-600/70"
      }`}
    >
      {/* Decorative hairline gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Card Header & Metadata */}
      <div className="p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-space-900 border border-space-700/60">{getIcon()}</div>
            <div>
              <span className="font-mono-tech text-[11px] text-cyber-cyan uppercase tracking-wider block">
                {project.category}
              </span>
              <span className="text-xs font-mono-tech text-text-muted">{project.timeline}</span>
            </div>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-space-900 border border-space-700/50 text-text-secondary">
            {project.status}
          </span>
        </div>

        {/* Title & Short Bio */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">{project.shortDescription}</p>
        </div>

        {/* Visual Telemetry Blueprint Preview */}
        <div className="p-4 rounded-xl bg-space-950/80 border border-space-700/40 font-mono-tech text-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-space-800 pb-2">
            <span className="text-cyber-cyan uppercase tracking-wider">Engineering Snapshot</span>
            <span>Role: {project.role}</span>
          </div>

          <div className="text-xs text-text-secondary space-y-1.5 pt-1">
            <p className="line-clamp-2">
              <span className="text-text-primary font-semibold">Problem: </span>
              {project.problem}
            </p>
            <p className="line-clamp-2">
              <span className="text-cyber-cyan font-semibold">Approach: </span>
              {project.idea}
            </p>
          </div>

          {/* Quick Metrics if present */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-space-800/80">
              {project.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="bg-space-900/60 p-1.5 rounded border border-space-800">
                  <span className="text-[10px] text-text-muted uppercase block">{m.label}</span>
                  <span className="text-[11px] font-semibold text-text-primary">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-space-900 border border-space-700/40 text-[11px] font-mono-tech text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 mt-auto border-t border-space-700/30 bg-space-850/40 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-cyber-cyan hover:text-white transition-colors group/btn"
        >
          <span>Deep Dive Case Study (8 Steps)</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-space-750 text-text-muted hover:text-text-primary transition-colors"
              title="View Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.links.demo && project.links.demo !== "#" && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-space-750 text-text-muted hover:text-cyber-cyan transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
