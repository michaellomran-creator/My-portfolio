"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { GitHubRepository } from "@/types";

interface UseGitHubReposReturn {
  repos: GitHubRepository[];
  isLoading: boolean;
  error: string | null;
  /** All unique languages found across fetched repos (sorted alphabetically) */
  languages: string[];
  refetch: () => void;
}

/**
 * Client-side hook that fetches GitHub repos from our internal API route.
 * This avoids exposing the raw GitHub API to the browser and centralizes
 * caching + error handling on the server side.
 */
export function useGitHubRepos(): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchRepos = useCallback(async () => {
    // Cancel any in-flight request
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/github/repos", {
        signal: controller.signal,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error || "GitHub repositories are temporarily unavailable."
        );
      }

      const data = await res.json();

      if (!Array.isArray(data.repos)) {
        throw new Error("Unexpected response format.");
      }

      setRepos(data.repos);

      // Derive unique language list
      const langSet = new Set<string>();
      for (const repo of data.repos as GitHubRepository[]) {
        if (repo.language) langSet.add(repo.language);
      }
      setLanguages(Array.from(langSet).sort());
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setError(
        err instanceof Error
          ? err.message
          : "GitHub repositories are temporarily unavailable."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
    return () => abortControllerRef.current?.abort();
  }, [fetchRepos]);

  return { repos, isLoading, error, languages, refetch: fetchRepos };
}
