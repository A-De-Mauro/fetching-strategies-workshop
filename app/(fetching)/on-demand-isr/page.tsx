import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">On-demand ISR</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            In this example, you will need to create a new API at
            <ExternalLink href="https://mockapi.io/">MockAPI.io</ExternalLink>.
          </li>
          <li>
            You will need to paste the new API root url and create a new object
            within the project. The new API url `/on-demand-isr` will have a
            list of elements with a title and a body.
          </li>
          <li>
            After a change, you can call the `/api/revalidate` url and refresh
            the page: data has been revalidated, on demand.
          </li>
        </ul>
      </div>
    </div>
  );
}
