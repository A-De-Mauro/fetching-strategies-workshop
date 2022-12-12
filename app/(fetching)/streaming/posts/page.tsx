import { Suspense } from 'react';
import { Post } from './Post';
import { PostSkeleton } from './PostSkeleton';

export default async function Page() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<PostSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Post id="1" delay={3000} />
      </Suspense>

      <Suspense fallback={<PostSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Post id="2" delay={6000} />
      </Suspense>
    </div>
  );
}
