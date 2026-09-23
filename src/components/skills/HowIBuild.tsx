"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { engineeringWorkflow } from "@/data/skills";

export function HowIBuild() {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const activeStage = engineeringWorkflow.find((s) => s.id === activeStageId) || engineeringWorkflow[0];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-space-850/80 border border-space-600/30 backdrop-blur-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider block">
            Methodology & Systems Thinking
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
            How I Build Software
          </h3>
        </div>
        <p className="text-xs font-mono-tech text-text-muted">
          Select any phase to examine engineering constraints & tools
        </p>
      </div>

      {/* Interactive Pipeline Stages Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {engineeringWorkflow.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                isActive
                  ? "bg-neon-blue/20 border-cyber-cyan shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                  : "bg-space-900/60 border-space-700/40 hover:bg-space-800/80 hover:border-space-600"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`font-mono-tech text-[10px] font-bold ${
                    isActive ? "text-cyber-cyan" : "text-text-muted"
                  }`}
                >
                  0{stage.id}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>}
              </div>
              <span
                className={`text-xs font-semibold block truncate ${
                  isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                }`}
              >
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="p-6 rounded-xl bg-space-900 border border-space-700/50 space-y-4 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-space-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-neon-blue/20 text-cyber-cyan font-mono-tech font-bold text-sm flex items-center justify-center border border-cyber-cyan/30">
              0{activeStage.id}
            </span>
            <div>
              <h4 className="text-base font-bold text-text-primary">{activeStage.name}</h4>
              <p className="text-xs font-mono-tech text-cyber-cyan">{activeStage.subtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono-tech text-text-muted">
            Stage {activeStage.id} of {engineeringWorkflow.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1">
          <div className="md:col-span-8 space-y-3">
            <h5 className="text-xs font-mono-tech text-text-muted uppercase">Execution Strategy:</h5>
            <p className="text-sm text-text-secondary leading-relaxed">{activeStage.description}</p>

            <div className="p-3.5 rounded-lg bg-space-850/80 border border-space-700/40 text-xs text-text-primary flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-cyber-cyan font-mono-tech">Engineering Mindset: </span>
                <span>{activeStage.mindset}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3 border-t md:border-t-0 md:border-l border-space-800 pt-4 md:pt-0 md:pl-6">
            <h5 className="text-xs font-mono-tech text-text-muted uppercase">Tools & Artefacts:</h5>
            <div className="flex flex-wrap gap-1.5">
              {activeStage.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-space-850 border border-space-700/50 text-[11px] font-mono-tech text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
