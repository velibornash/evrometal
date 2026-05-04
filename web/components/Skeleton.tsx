export function ProductGridSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="border border-white/10 bg-white/[0.04] p-6">
          <div className="h-48 bg-white/10 rounded animate-pulse mb-4" />
          <div className="h-6 bg-white/10 rounded animate-pulse mb-2 w-3/4" />
          <div className="h-4 bg-white/5 rounded animate-pulse mb-4 w-full" />
          <div className="h-4 bg-white/5 rounded animate-pulse w-1/2" />
        </div>
      ))}
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-8 w-8 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
