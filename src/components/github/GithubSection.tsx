"use client";

import { useState, useMemo } from "react";
import {
  Github,
  ExternalLink,
  Search,
  X,
  ChevronDown,
  AlertCircle,
  Inbox,
} from "lucide-react";
import { GITHUB_USERNAME, GITHUB_PROFILE_URL, getLanguageColor } from "@/lib/github";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { GitHubRepoCard } from "./GitHubRepoCard";
import { GitHubRepoSkeletonGrid } from "./GitHubRepoSkeleton";

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_INCREMENT = 6;
const ALL_FILTER = "All";

export function GithubSection() {
  const { repos, isLoading, error, languages } = useGitHubRepos();

  // ── Local UI state ──────────────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  // ── Derived: filter + search ────────────────────────────────────────────
  const filteredRepos = useMemo(() => {
    let result = repos;

    // Language filter
    if (activeFilter !== ALL_FILTER) {
      result = result.filter((r) => r.language === activeFilter);
    }

    // Search
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          (r.language && r.language.toLowerCase().includes(q)) ||
          r.topics.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [repos, activeFilter, searchQuery]);

  const visibleRepos = filteredRepos.slice(0, displayCount);
  const hasMore = displayCount < filteredRepos.length;

  // ── Derived: language breakdown from real data ──────────────────────────
  const languageBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    let total = 0;
    for (const repo of repos) {
      if (repo.language) {
        counts[repo.language] = (counts[repo.language] || 0) + 1;
        total++;
      }
    }
    if (total === 0) return [];
    return Object.entries(counts)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / total) * 100),
        color: getLanguageColor(name),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }, [repos]);

  // ── Filter pills (dynamically generated) ───────────────────────────────
  const filterOptions = useMemo(() => {
    // Only show filters for languages that have >= 1 repo
    const topLanguages = languages.slice(0, 6); // cap at 6 to keep it clean
    return [ALL_FILTER, ...topLanguages];
  }, [languages]);

  // Reset display count when filter/search changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // ─── Render ─────────────────────────────────────────────────────────────
  return (
    <section
      id="github"
      className="py-24 bg-space-900 border-t border-space-700/40 relative"
      aria-labelledby="github-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── Section Header ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-cyber-cyan uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
              07 // GitHub &amp; Recent Work
            </div>
            <h2
              id="github-section-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary"
            >
              GitHub // Recent Work
            </h2>
            <p className="mt-2 text-sm text-text-secondary max-w-xl leading-relaxed">
              A live view of what I&apos;m building, experimenting with, and
              learning on GitHub.
            </p>
          </div>

          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-space-850 hover:bg-space-800 border border-space-600/50 hover:border-cyber-cyan/50 text-xs font-mono-tech text-text-primary transition-all shadow-sm shrink-0"
          >
            <Github className="w-4 h-4 text-cyber-cyan" aria-hidden="true" />
            <span>github.com/{GITHUB_USERNAME}</span>
            <ExternalLink className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
          </a>
        </div>

        {/* ── Language Breakdown Bar (only when data loaded) ───────── */}
        {!isLoading && !error && languageBreakdown.length > 0 && (
          <div className="p-5 rounded-xl bg-space-850/60 border border-space-700/40 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-tech text-text-muted">
              <span className="uppercase text-cyber-cyan">
                Language Distribution
              </span>
              <span>Based on {repos.length} public repositories</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-space-950 overflow-hidden flex">
              {languageBreakdown.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color,
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                  className="transition-all duration-500"
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
              {languageBreakdown.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-1.5 text-xs font-mono-tech"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary">{lang.name}</span>
                  <span className="text-text-muted">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Filters & Search Bar ────────────────────────────────── */}
        {!isLoading && !error && repos.length > 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filter pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
              role="tablist"
              aria-label="Filter repositories by language"
            >
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleFilterChange(opt)}
                  role="tab"
                  aria-selected={activeFilter === opt}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono-tech whitespace-nowrap transition-all ${
                    activeFilter === opt
                      ? "bg-neon-blue text-white shadow-sm shadow-neon-blue/30"
                      : "bg-space-850 hover:bg-space-800 text-text-muted hover:text-text-primary border border-space-700/40"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search repositories…"
                className="w-full pl-8 pr-8 py-2 rounded-lg bg-space-850 border border-space-600/40 focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/20 text-xs font-mono-tech text-text-primary placeholder:text-text-faint transition-all"
                aria-label="Search repositories"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Loading State ───────────────────────────────────────── */}
        {isLoading && <GitHubRepoSkeletonGrid count={6} />}

        {/* ── Error State ─────────────────────────────────────────── */}
        {!isLoading && error && (
          <div className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-space-850/60 border border-space-700/40 text-center space-y-4">
            <div className="p-3 rounded-full bg-space-900 border border-space-700/50">
              <AlertCircle className="w-6 h-6 text-text-muted" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-text-primary">
                GitHub repositories are temporarily unavailable.
              </p>
              <p className="text-xs text-text-muted max-w-sm">
                The live connection to GitHub could not be established. Please
                check back shortly.
              </p>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-white text-xs font-mono-tech font-semibold transition-all shadow-sm"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              View GitHub Profile
            </a>
          </div>
        )}

        {/* ── Empty State (no repos returned) ─────────────────────── */}
        {!isLoading && !error && repos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-space-850/60 border border-space-700/40 text-center space-y-4">
            <div className="p-3 rounded-full bg-space-900 border border-space-700/50">
              <Inbox className="w-6 h-6 text-text-muted" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-text-primary">
                No public repositories yet.
              </p>
              <p className="text-xs text-text-muted">
                Repositories will appear here automatically as they become
                public.
              </p>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-space-850 hover:bg-space-800 border border-space-600/50 hover:border-cyber-cyan/50 text-xs font-mono-tech text-text-primary transition-all"
            >
              <Github className="w-4 h-4 text-cyber-cyan" aria-hidden="true" />
              View GitHub Profile
            </a>
          </div>
        )}

        {/* ── No Results for Filter/Search ─────────────────────────── */}
        {!isLoading &&
          !error &&
          repos.length > 0 &&
          filteredRepos.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl bg-space-850/40 border border-space-700/30 text-center space-y-3">
              <Search className="w-5 h-5 text-text-muted" aria-hidden="true" />
              <p className="text-sm text-text-secondary">
                No repositories match{" "}
                {searchQuery ? `"${searchQuery}"` : "the selected filter"}.
              </p>
              <button
                onClick={() => {
                  setActiveFilter(ALL_FILTER);
                  setSearchQuery("");
                }}
                className="text-xs font-mono-tech text-cyber-cyan hover:text-white transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

        {/* ── Repository Cards Grid ───────────────────────────────── */}
        {!isLoading && !error && visibleRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleRepos.map((repo) => (
              <GitHubRepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        {/* ── Load More ───────────────────────────────────────────── */}
        {!isLoading && !error && hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() =>
                setDisplayCount((prev) => prev + LOAD_MORE_INCREMENT)
              }
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-space-850 hover:bg-space-800 border border-space-600/50 hover:border-cyber-cyan/50 text-xs font-mono-tech text-text-primary transition-all shadow-sm group"
            >
              <span>
                Load More ({filteredRepos.length - displayCount} remaining)
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-text-muted group-hover:text-cyber-cyan transition-colors" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
