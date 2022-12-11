const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export function PostSkeleton() {
  return <div className={`h-20 rounded-lg bg-gray-900 ${shimmer}`} />;
}
