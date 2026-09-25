"use client";

import { Activity, BookOpen, Clock, Flame, Radio } from "lucide-react";
import { nowData } from "@/data/now";

export function NowSection() {
  return (
    <section id="now" className="py-24 bg-space-950 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              06 // Active Pursuits
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              What I&apos;m Doing Now.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono-tech text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
              Updated: {nowData.lastUpdated}
            </span>
            <span>•</span>
            <span>{nowData.location}</span>
          </div>
        </div>

        {/* Live Status Lead */}
        <div className="p-4 rounded-xl bg-space-900 border border-cyber-cyan/30 text-sm font-mono-tech text-text-primary flex items-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.06)]">
          <Radio className="w-4 h-4 text-cyber-cyan animate-pulse shrink-0" />
          <span>{nowData.statusLine}</span>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nowData.focusAreas.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-space-850/80 border border-space-600/30 hover:border-space-600/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono-tech bg-space-900 text-cyber-cyan border border-space-700">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono-tech text-text-muted uppercase">
                    [{item.category}]
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Reading / Research Corner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-space-900/80 border border-space-700/50 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-neon-blue uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Currently Reading & Systems Inquiries</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {nowData.currentlyReading.map((book, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-space-850/60 border border-space-750 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">{book.title}</h4>
                  <p className="text-xs text-text-muted font-mono-tech">by {book.author}</p>
                </div>
                <p className="text-xs text-text-secondary mt-2 pt-2 border-t border-space-750">{book.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
