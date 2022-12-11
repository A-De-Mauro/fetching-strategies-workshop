import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">
        Incremental Static Regeneration (ISR)
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>ISR will statically pre-render components at build time.</li>
          <li>
            Setting up a revalidate option, the page will be revalidated
            whenever it has been requested after the revalidation period the
            first time.
          </li>
          <li>
            Try navigating to each post and noting the timestamp of when the
            page was rendered. Refresh the page after 10 seconds to trigger a
            revalidation for the next request. Refresh again to see the
            revalidated page.
          </li>
        </ul>
      </div>
    </div>
  );
}
