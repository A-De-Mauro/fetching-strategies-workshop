import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">
        Incremental Static Regeneration (ISR)
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            ISR will <b className="text-vercel-cyan">statically generate</b>{' '}
            pages at build time but{' '}
            <b className="text-vercel-cyan">bust the cache</b> when the
            revalidation period is over.
          </li>
          <li>
            Setting up a revalidate option, the page will be revalidated
            whenever it has been requested{' '}
            <b className="text-vercel-cyan">after the revalidation period</b>{' '}
            the first time.
          </li>
          <li>
            Try navigating to each post and noting the timestamp of when the
            page was rendered. Refresh the page{' '}
            <b className="text-vercel-cyan">after 10 seconds</b> to trigger a
            revalidation for the next request. Refresh again to see the actual
            revalidated page.
          </li>
        </ul>
      </div>
    </div>
  );
}
