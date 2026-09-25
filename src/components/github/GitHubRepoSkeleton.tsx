"use client";

/** Skeleton placeholder card shown while repo data is loading */
export function GitHubRepoSkeleton() {
  return (
    <div className="rounded-2xl bg-space-850/80 border border-space-600/20 overflow-hidden animate-pulse">
      <div className="p-5 sm:p-6 space-y-3">
        {/* Title skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-space-700/60" />
          <div className="h-4 w-36 rounded bg-space-700/60" />
        </div>
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-space-700/40" />
          <div className="h-3 w-3/4 rounded bg-space-700/40" />
        </div>
        {/* Topics skeleton */}
        <div className="flex gap-1.5">
          <div className="h-4 w-14 rounded bg-space-700/30" />
          <div className="h-4 w-16 rounded bg-space-700/30" />
          <div className="h-4 w-12 rounded bg-space-700/30" />
        </div>
      </div>
      {/* Footer skeleton */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-space-700/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-space-700/40" />
          <div className="h-3 w-16 rounded bg-space-700/30" />
        </div>
        <div className="h-6 w-14 rounded bg-space-700/30" />
      </div>
    </div>
  );
}

/** Renders a grid of skeleton cards */
export function GitHubRepoSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <GitHubRepoSkeleton key={i} />
      ))}
    </div>
  );
}
