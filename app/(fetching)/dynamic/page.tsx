export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Dynamic data fetching</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            Dynamic data fetching will{' '}
            <b className="text-vercel-cyan">skip the cache</b>, refetch the data
            and re-render each page at{' '}
            <b className="text-vercel-cyan">request time</b>.
          </li>
          <li>
            When setting the{' '}
            <b className="text-vercel-cyan">cache to `no-store`</b> you will ask
            Next.js to always render the page on the server at{' '}
            <b className="text-vercel-cyan">each request</b>.
          </li>
          <li>
            Using dynamic functions such as{' '}
            <b className="text-vercel-cyan">cookies()</b> and{' '}
            <b className="text-vercel-cyan">headers()</b> will{' '}
            <em>automatically</em> opt-in dynamic fetching.
          </li>
        </ul>
      </div>
    </div>
  );
}
