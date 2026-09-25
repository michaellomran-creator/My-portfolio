"use client";

import { Star, GitFork, ExternalLink, Code2, Globe, Archive } from "lucide-react";
import type { GitHubRepository } from "@/types";
import { getLanguageColor } from "@/lib/github";

interface GitHubRepoCardProps {
  repo: GitHubRepository;
}

/** Formats an ISO date string into a human-friendly relative label */
function formatRelativeDate(isoDate: string): string {
  try {
    const diff = Date.now() - new Date(isoDate).getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y ago`;
    if (months > 0) return `${months}mo ago`;
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return "just now";
  } catch {
    return "";
  }
}

export function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  const langColor = getLanguageColor(repo.language);
  const updatedLabel = formatRelativeDate(repo.pushedAt || repo.updatedAt);

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl bg-space-850/80 border border-space-600/30 hover:border-space-600/60 transition-all duration-300 overflow-hidden backdrop-blur-sm"
      role="article"
      aria-label={`GitHub repository: ${repo.name}`}
    >
      {/* Hover gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 sm:p-6 space-y-3">
        {/* Repository header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Code2 className="w-4 h-4 text-cyber-cyan shrink-0" aria-hidden="true" />
            <a
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-text-primary hover:text-cyber-cyan transition-colors font-mono-tech truncate flex items-center gap-1"
              title={repo.name}
            >
              <span className="truncate">{repo.name}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Stars & forks */}
          <div className="flex items-center gap-2.5 text-xs font-mono-tech text-text-muted shrink-0">
            {repo.stars > 0 && (
              <span className="flex items-center gap-1" title={`${repo.stars} stars`}>
                <Star className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                {repo.stars}
              </span>
            )}
            {repo.forks > 0 && (
              <span className="flex items-center gap-1" title={`${repo.forks} forks`}>
                <GitFork className="w-3.5 h-3.5" aria-hidden="true" />
                {repo.forks}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
          {repo.description}
        </p>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 rounded bg-space-900 border border-space-750 text-[10px] font-mono-tech text-text-muted"
              >
                #{topic}
              </span>
            ))}
            {repo.topics.length > 4 && (
              <span className="px-2 py-0.5 rounded bg-space-900 border border-space-750 text-[10px] font-mono-tech text-text-faint">
                +{repo.topics.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer metadata + actions */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-space-700/30 bg-space-850/40 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs font-mono-tech text-text-muted overflow-hidden">
          {/* Language */}
          {repo.language && (
            <span className="flex items-center gap-1.5 shrink-0">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: langColor }}
                aria-hidden="true"
              />
              <span className="text-text-secondary">{repo.language}</span>
            </span>
          )}

          {/* Updated */}
          {updatedLabel && (
            <span className="text-text-faint shrink-0" title={`Last pushed: ${repo.pushedAt}`}>
              {updatedLabel}
            </span>
          )}

          {/* Archived badge */}
          {repo.archived && (
            <span className="flex items-center gap-1 text-amber-400/80 shrink-0" title="Archived">
              <Archive className="w-3 h-3" aria-hidden="true" />
              <span className="text-[10px]">Archived</span>
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-space-900 hover:bg-space-750 border border-space-600/40 hover:border-cyber-cyan/40 text-[11px] font-mono-tech text-text-secondary hover:text-cyber-cyan transition-all"
              title="Live Demo"
            >
              <Globe className="w-3 h-3" aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-space-900 hover:bg-space-750 border border-space-600/40 hover:border-neon-blue/40 text-[11px] font-mono-tech text-text-secondary hover:text-text-primary transition-all"
            title="View Repository"
          >
            <Code2 className="w-3 h-3" aria-hidden="true" />
            <span>View</span>
          </a>
        </div>
      </div>
    </div>
  );
}
