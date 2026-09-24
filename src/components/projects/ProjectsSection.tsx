"use client";

import { useState } from "react";
import { Cpu, Sparkles, Filter, Layers } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCaseStudy } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "AI & Decision Systems", "Cybersecurity & Automation", "Full-Stack Software", "Systems & Tools"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const starProject = projectsData.find((p) => p.id === "career-guidance-ai") || projectsData[0];

  return (
    <section id="projects" className="py-24 bg-space-950 border-t border-space-700/40 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
              02 // Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Systems built with intent and transparent logic.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-tech whitespace-nowrap transition-all ${
                  activeFilter === cat
                    ? "bg-neon-blue text-white shadow-sm shadow-neon-blue/30"
                    : "bg-space-850 hover:bg-space-800 text-text-muted hover:text-text-primary border border-space-700/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Banner for Star Capstone Project */}
        {activeFilter === "All" && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-space-850 via-space-800 to-space-850 border border-cyber-cyan/30 shadow-[0_0_35px_rgba(0,229,255,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Cpu className="w-56 h-56 text-cyber-cyan" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="cyber-badge">
                  <Sparkles className="w-3 h-3" />
                  CAPSTONE DEFENDED PROJECT
                </span>
                <span className="text-xs font-mono-tech text-text-muted">
                  Bahir Dar Institute of Technology (BiT)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                {starProject.title}
              </h3>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                An explainable rule-based decision engine solving pre-engineering division selection (Computing vs. Engineering) through weighted cognitive mappings and academic profiles — intentionally engineered with transparent logic rather than opaque black-box models.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(starProject)}
                  className="px-5 py-2.5 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-white text-xs font-mono-tech font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(31,106,225,0.4)]"
                >
                  Inspect Complete Case Study (8 Sections) →
                </button>
                {(starProject.githubUrl || starProject.links?.github) && (
                  <a
                    href={starProject.githubUrl || starProject.links?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-space-900 hover:bg-space-750 border border-space-600/50 text-xs font-mono-tech text-text-secondary hover:text-cyber-cyan transition-colors"
                  >
                    View GitHub Source
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
