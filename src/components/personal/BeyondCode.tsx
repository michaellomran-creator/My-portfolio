"use client";

import { Gauge, Camera, BookOpen, Compass, Zap, Activity } from "lucide-react";
import { profileData } from "@/data/profile";

export function BeyondCode() {
  const f1 = profileData.beyondCode.f1;
  const photo = profileData.beyondCode.photography;

  const photoStrips = [
    {
      title: "Urban Geometry & Angles",
      caption: "High-contrast architectural lines and depth",
      camera: "35mm • f/2.0 • 1/640s • ISO 100",
      accent: "from-blue-600/30 via-slate-900 to-space-900",
    },
    {
      title: "Atmospheric Lighting",
      caption: "Twilight shadows and directional light studies",
      camera: "50mm • f/1.8 • 1/200s • ISO 200",
      accent: "from-cyan-600/25 via-slate-900 to-space-900",
    },
    {
      title: "Symmetry in Motion",
      caption: "Capturing fleeting kinetic balance and reflections",
      camera: "28mm • f/4.0 • 1/1000s • ISO 100",
      accent: "from-purple-600/25 via-slate-900 to-space-900",
    },
  ];

  return (
    <section id="personal" className="py-24 bg-space-950 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              08 // Dimensions Beyond Code
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Interests that shape my engineering lens.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-text-muted max-w-xs">
            Precision engineering, observational composition, and relentless curiosity.
          </p>
        </div>

        {/* 2-Column Grid: F1 Telemetry Card & Photography Visual Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formula 1 Card (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-space-850 via-space-900 to-space-850 border border-rose-500/25 shadow-[0_0_30px_rgba(244,63,94,0.06)] flex flex-col justify-between space-y-6 relative overflow-hidden group">
            {/* Subtle background speedline graphic */}
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gauge className="w-36 h-36 text-rose-500" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-400">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <span className="font-mono-tech text-xs text-rose-400 uppercase tracking-wider font-semibold">
                    Motorsport Telemetry
                  </span>
                </div>
                <span className="font-mono-tech text-[10px] text-text-muted">F1 OBSERVER</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                {f1.title}
              </h3>

              <blockquote className="p-3 rounded-lg bg-space-950/70 border-l-2 border-rose-500 text-xs font-mono-tech text-text-secondary italic">
                &quot;{f1.quote}&quot;
              </blockquote>

              <p className="text-sm text-text-secondary leading-relaxed">
                {f1.description}
              </p>
            </div>

            {/* F1 Engineering Traits */}
            <div className="pt-4 border-t border-space-800 space-y-2 relative z-10">
              <span className="text-[11px] font-mono-tech text-text-muted uppercase block">
                Engineering Overlap:
              </span>
              <div className="flex flex-wrap gap-2">
                {f1.traits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-space-950 border border-rose-500/30 text-xs font-mono-tech text-rose-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Photography & Visual Framing (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-space-850/80 border border-space-600/30 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider font-semibold">
                  Visual Framing & Composition
                </span>
              </div>
              <span className="font-mono-tech text-[10px] text-text-muted">OBSERVATION</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                {photo.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {photo.description}
              </p>
            </div>

            {/* Viewfinder Composition Frames */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {photoStrips.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-b from-space-900 to-space-950 border border-space-700/50 hover:border-cyber-cyan/40 transition-colors flex flex-col justify-between min-h-[140px] relative corner-bracket"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-tech text-cyber-cyan block">
                      FRAME // 0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>
                    <p className="text-[11px] text-text-muted leading-tight">{item.caption}</p>
                  </div>

                  <div className="pt-3 border-t border-space-800 text-[10px] font-mono-tech text-text-muted">
                    {item.camera}
                  </div>
                </div>
              ))}
            </div>

            {/* Viewfinder metadata strip */}
            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono-tech text-[11px] text-text-muted border-t border-space-800">
              <span className="text-cyber-cyan">OPTICAL METRICS:</span>
              {photo.metadataTags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-space-900 border border-space-750">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
