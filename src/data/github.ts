// ─── Legacy compatibility layer ─────────────────────────────────────────────
// This file previously held hardcoded repository data. It now re-exports the
// centralized GitHub configuration from src/lib/github.ts.
//
// The dynamic GitHub section no longer uses static repos — it fetches live
// data from the GitHub API via /api/github/repos at runtime.
//
// This file is kept so any existing imports of `githubConfig` from other
// components (e.g. old references) continue to work without breaking.

export { GITHUB_USERNAME, GITHUB_PROFILE_URL, getLanguageColor } from "@/lib/github";

import { GITHUB_USERNAME, GITHUB_PROFILE_URL } from "@/lib/github";

export const githubConfig = {
  username: GITHUB_USERNAME,
  profileUrl: GITHUB_PROFILE_URL,
} as const;
