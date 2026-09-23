"use client";

import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { githubConfig } from "@/data/github";

export function GithubSection() {
  return (
    <section id="github" className="py-24 bg-space-900 border-t border-space-700/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan"></span>
              07 // Code & Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
              Public Repositories & Implementation.
            </h2>
          </div>

          <a
            href={githubConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-space-850 hover:bg-space-800 border border-space-600/50 hover:border-cyber-cyan/50 text-xs font-mono-tech text-text-primary transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-cyber-cyan" />
            <span>github.com/{githubConfig.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
          </a>
        </div>

        {/* Language Distribution Telemetry Bar */}
        <div className="p-5 rounded-xl bg-space-850/60 border border-space-700/40 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono-tech text-text-muted">
            <span className="uppercase text-cyber-cyan">Primary Language Footprint</span>
            <span>Based on active repository codebase</span>
          </div>

          {/* Progress bar segments */}
          <div className="h-2 w-full rounded-full bg-space-950 overflow-hidden flex">
            {githubConfig.languageBreakdown.map((lang, idx) => (
              <div
                key={idx}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 pt-1">
            {githubConfig.languageBreakdown.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs font-mono-tech">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-text-secondary">{lang.name}</span>
                <span className="text-text-muted">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubConfig.featuredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-space-850/80 border border-space-600/30 hover:border-space-600/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyber-cyan" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-text-primary hover:text-cyber-cyan transition-colors font-mono-tech flex items-center gap-1"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono-tech text-text-muted">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{repo.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-space-750 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-text-secondary">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  <span>{repo.language}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-space-900 border border-space-750 text-[10px] font-mono-tech text-text-muted"
                    >
                      #{topic}
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
