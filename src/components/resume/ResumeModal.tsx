"use client";

import { useEffect } from "react";
import { X, Download, FileText, Printer, CheckCircle, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { skillCategories } from "@/data/skills";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-space-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-space-900 border border-space-600/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-space-750 bg-space-850/90">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyber-cyan" />
            <h2 id="resume-title" className="text-base font-bold text-text-primary">
              Curriculum Vitae — {profileData.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-space-800 hover:bg-space-750 text-text-secondary hover:text-text-primary text-xs font-mono-tech flex items-center gap-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={profileData.cvPath}
              download="Mikiyas_Birhanu_CV.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-white text-xs font-mono-tech font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-space-750 text-text-muted hover:text-text-primary transition-colors ml-1"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Document View */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-space-950/80 text-text-secondary font-sans leading-relaxed">
          {/* Header */}
          <div className="border-b border-space-800 pb-6 space-y-2">
            <h1 className="text-3xl font-bold text-text-primary">{profileData.name}</h1>
            <p className="text-sm font-mono-tech text-cyber-cyan">{profileData.roleTitle}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono-tech text-text-muted pt-1">
              <span>{profileData.location}</span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="hover:text-text-primary underline">
                {profileData.email}
              </a>
              <span>•</span>
              <a href={profileData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-text-primary underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="hover:text-text-primary underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono-tech uppercase text-cyber-cyan tracking-wider font-bold">
              Summary
            </h3>
            <p className="text-sm text-text-secondary">{profileData.shortBio}</p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech uppercase text-cyber-cyan tracking-wider font-bold">
              Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-text-primary">
                  <span>{edu.degree}</span>
                  <span className="text-xs font-mono-tech text-text-muted">{edu.period}</span>
                </div>
                <p className="text-xs text-text-secondary">{edu.institution} — {edu.faculty}</p>
                <div className="pt-1 space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <p key={hIdx} className="text-xs text-text-muted flex items-start gap-2">
                      <span className="text-cyber-cyan">•</span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience & Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-tech uppercase text-cyber-cyan tracking-wider font-bold">
              Experience & Major Projects
            </h3>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-semibold text-text-primary">
                  <span>{exp.role}</span>
                  <span className="text-xs font-mono-tech text-text-muted">{exp.period}</span>
                </div>
                <p className="text-xs text-cyber-cyan font-mono-tech">{exp.organization} — {exp.location}</p>
                <div className="space-y-1 pt-1">
                  {exp.highlights.map((hl, hlIdx) => (
                    <p key={hlIdx} className="text-xs text-text-secondary flex items-start gap-2">
                      <span className="text-cyber-cyan">•</span>
                      <span>{hl}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-tech uppercase text-cyber-cyan tracking-wider font-bold">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-space-900 border border-space-800">
                  <span className="font-semibold text-text-primary block mb-1 font-mono-tech text-[11px]">
                    {cat.title}:
                  </span>
                  <p className="text-text-muted">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
