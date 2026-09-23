"use client";

import { skillCategories } from "@/data/skills";
import { HowIBuild } from "./HowIBuild";
import { Code2, Globe, Database, Cpu, Wrench } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-cyber-cyan" />;
      case 1:
        return <Globe className="w-4 h-4 text-neon-blue" />;
      case 2:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Cpu className="w-4 h-4 text-glow-purple" />;
      case 4:
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyber-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-space-900 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              03 // Technical Proficiencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Structured capabilities & engineering toolset.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-text-muted max-w-xs">
            Practiced through project implementations and systems engineering.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-space-850/70 border border-space-600/30 hover:border-space-600/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-space-700/50">
                  <div className="p-1.5 rounded-md bg-space-900 border border-space-700">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{category.title}</h3>
                    <p className="text-[11px] text-text-muted">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-space-900/60 hover:bg-space-900 border border-space-700/30 hover:border-space-600/50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                          )}
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono-tech px-2 py-0.5 rounded ${
                            skill.level === "Advanced"
                              ? "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/25"
                              : skill.level === "Proficient"
                              ? "bg-neon-blue/10 text-text-secondary border border-neon-blue/25"
                              : "bg-space-800 text-text-muted"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-text-muted mt-1 leading-snug">{skill.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive "How I Build" Section */}
        <HowIBuild />
      </div>
    </section>
  );
}
