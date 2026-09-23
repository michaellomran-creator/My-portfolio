"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-space-950 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              04 // Practical Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Experience & Project Milestones.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-text-muted max-w-xs">
            Demonstrated delivery across academic capstone engineering, freelance development, and technical roles.
          </p>
        </div>

        {/* Clean Structured Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-space-700/60 space-y-10">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-space-900 border-2 border-cyber-cyan group-hover:bg-cyber-cyan transition-colors shadow-[0_0_10px_rgba(0,229,255,0.4)]" />

              <div className="p-6 sm:p-7 rounded-2xl bg-space-850/70 border border-space-600/30 hover:border-space-600/60 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-space-800 pb-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-neon-blue/20 text-cyber-cyan border border-cyber-cyan/30 inline-block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary">{item.role}</h3>
                    <p className="text-sm font-semibold text-text-secondary">{item.organization}</p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono-tech text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-text-muted" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 text-sm text-text-secondary">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Applied Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-space-800">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-space-900 border border-space-700/50 text-[11px] font-mono-tech text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
