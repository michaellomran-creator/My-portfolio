"use client";

import { GraduationCap, Award, BookCheck, MapPin, Calendar } from "lucide-react";
import { educationData } from "@/data/education";

export function EducationSection() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 bg-space-900 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              05 // Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Formal Education & Technical Training.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-text-muted max-w-xs">
            Comprehensive curriculum bridging computer science theory and applied systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-7 sm:p-9 rounded-2xl bg-space-850/80 border border-space-600/30 backdrop-blur-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-space-800 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neon-blue/15 border border-neon-blue/30 text-cyber-cyan shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-space-900 text-cyber-cyan border border-space-700">
                  {edu.status}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{edu.degree}</h3>
                <p className="text-base font-semibold text-text-secondary">
                  {edu.institution} — <span className="text-text-muted">{edu.faculty}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1 text-xs font-mono-tech text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                {edu.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                {edu.location}
              </span>
            </div>
          </div>

          {/* Academic Highlights & Rigor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-mono-tech text-cyber-cyan uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                Key Academic Achievements & Focus
              </h4>
              <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                {edu.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-space-900/50 border border-space-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0 mt-2"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Coursework Matrix */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-mono-tech text-neon-blue uppercase tracking-wider flex items-center gap-2">
                <BookCheck className="w-4 h-4" />
                Core Technical Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.keyCourses.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-space-900/70 border border-space-750 text-xs font-mono-tech text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
