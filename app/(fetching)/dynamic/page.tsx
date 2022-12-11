import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Dynamic data fetching
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            You can always opt-out from the default server-side rendering and
            static generation of pages.
          </li>
          <li>
            When setting the cache to `no-store` you will ask Next.js to always
            render the page on the server at each request.
          </li>
          <li>
            Using dynamic functions such as cookies() and headers() will
            automatically opt-in dynamic fetching.
          </li>
        </ul>
      </div>
    </div>
  );
}
