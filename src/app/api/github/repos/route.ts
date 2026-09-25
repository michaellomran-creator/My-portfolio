import { NextResponse } from "next/server";
import { GITHUB_API_URL, normalizeRepos } from "@/lib/github";
import type { GitHubApiRepo } from "@/types";

// ─── In-memory cache ────────────────────────────────────────────────────────
// Holds the last successful response for up to CACHE_TTL_MS. This means:
// • The very first visitor after a cache miss triggers a fresh fetch.
// • Subsequent visitors within the TTL window get the cached result instantly.
// • If GitHub is down, we serve the stale cache with a warning header.

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

let cachedData: ReturnType<typeof normalizeRepos> | null = null;
let cachedAt = 0;

// Force Next.js to treat this as a dynamic route (not statically rendered)
export const dynamic = "force-dynamic";

export async function GET() {
  const now = Date.now();
  const isCacheValid = cachedData !== null && now - cachedAt < CACHE_TTL_MS;

  if (isCacheValid) {
    return NextResponse.json(
      { repos: cachedData, cached: true, fetchedAt: new Date(cachedAt).toISOString() },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  }

  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json", // enables topics
        "User-Agent": "portfolio-github-integration",
      },
      next: { revalidate: 1800 }, // Next.js fetch-level revalidation hint
    });

    if (response.status === 403 || response.status === 429) {
      // Rate limited — serve stale cache if available
      if (cachedData) {
        return NextResponse.json(
          { repos: cachedData, cached: true, rateLimited: true, fetchedAt: new Date(cachedAt).toISOString() },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { repos: [], error: "GitHub API rate limit reached. Please try again later." },
        { status: 429 }
      );
    }

    if (!response.ok) {
      if (cachedData) {
        return NextResponse.json(
          { repos: cachedData, cached: true, fetchedAt: new Date(cachedAt).toISOString() },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { repos: [], error: "Failed to fetch repositories from GitHub." },
        { status: response.status }
      );
    }

    const raw: GitHubApiRepo[] = await response.json();
    const repos = normalizeRepos(raw);

    // Update cache
    cachedData = repos;
    cachedAt = now;

    return NextResponse.json(
      { repos, cached: false, fetchedAt: new Date(now).toISOString() },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    // Network failure — serve stale cache if available
    if (cachedData) {
      return NextResponse.json(
        { repos: cachedData, cached: true, stale: true, fetchedAt: new Date(cachedAt).toISOString() },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { repos: [], error: "Unable to connect to GitHub. Please try again later." },
      { status: 503 }
    );
  }
}
