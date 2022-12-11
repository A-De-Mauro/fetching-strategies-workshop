export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Client components</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            You can use a Client Component whenever you need some client-side
            tool or functionality:{' '}
            <b className="text-vercel-cyan">window, useState(), useEffect()</b>.
          </li>
          <li>
            <b className="text-vercel-cyan">Fetching data</b> from a Client
            Component is possible using <b className="text-vercel-cyan">SWR</b>.
          </li>
          <li>
            <b className="text-vercel-cyan">Pages and Layouts</b> will always
            need to be <b className="text-vercel-cyan">Server Components</b>,
            regardless.
          </li>
        </ul>
        <div className="text-sm text-gray-400">
          In the future, it will be possible to perform native data fetching
          using hooks.
        </div>
      </div>
    </div>
  );
}
