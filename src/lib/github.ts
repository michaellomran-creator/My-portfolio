import type { GitHubApiRepo, GitHubRepository } from "@/types";

// ─── Centralized GitHub Configuration ───────────────────────────────────────
// Single source of truth for the GitHub username. Used across all API calls,
// profile links, and display text. Change this one constant to reconfigure.

export const GITHUB_USERNAME = "michaellomran-creator" as const;
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}` as const;

export const GITHUB_API_URL =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&direction=desc&per_page=100` as const;

// ─── Well-known language → color mapping (GitHub standard) ──────────────────

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  Java: "#B07219",
  "C++": "#F34B7D",
  C: "#555555",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
  Dockerfile: "#384D54",
  Lua: "#000080",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Jupyter: "#F37626",
  "Jupyter Notebook": "#DA5B0B",
  R: "#198CE7",
  SCSS: "#C6538C",
  Elixir: "#6E4A7E",
  Haskell: "#5E5086",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#8B949E";
  return LANGUAGE_COLORS[language] ?? "#8B949E";
}

// ─── Data normalization ─────────────────────────────────────────────────────

export function normalizeRepo(raw: GitHubApiRepo): GitHubRepository {
  return {
    id: raw.id,
    name: raw.name,
    description: raw.description ?? "No description provided.",
    htmlUrl: raw.html_url,
    homepage: raw.homepage && raw.homepage.trim() !== "" ? raw.homepage : null,
    language: raw.language,
    topics: Array.isArray(raw.topics) ? raw.topics : [],
    stars: raw.stargazers_count ?? 0,
    forks: raw.forks_count ?? 0,
    updatedAt: raw.updated_at,
    pushedAt: raw.pushed_at,
    archived: raw.archived ?? false,
    isFork: raw.fork ?? false,
  };
}

export function normalizeRepos(raw: GitHubApiRepo[]): GitHubRepository[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((repo) => !repo.private)
    .map(normalizeRepo)
    .sort(
      (a, b) =>
        new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
    );
}
