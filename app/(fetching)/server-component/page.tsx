export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Server components</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-100">
          <li>
            By default, any component created in the{' '}
            <b className="text-vercel-cyan">app directory</b> is a Server
            Component.
          </li>
          <li>
            By default, pages will be{' '}
            <b className="text-vercel-cyan">statically</b> generated at build
            time.
          </li>
          <li>
            Fetching is performed server-side to pre-render the static page.
          </li>
          <li>
            Server-side rendering{' '}
            <b className="text-vercel-cyan">reduces waterfalls</b> and is more
            secure (secrets, DB connections).
          </li>
        </ul>
        <h3>How does it work</h3>
        <ul className="list-decimal space-y-2 pl-4 text-sm text-gray-100">
          <li>
            Run `yarn build && yarn start` to generate a
            <b className="text-vercel-cyan">production build</b> on localhost
          </li>
          <li>
            Navigate the Post tabs to see when that specific page has been
            generated.
          </li>
          <li>
            Try to <b className="text-vercel-cyan">refresh</b> the pages: it
            page should
            <b className="text-vercel-cyan">never re-render</b> after the first
            cached render.
          </li>
        </ul>
        <div className="text-sm text-gray-400">
          If your pages are re-rendering each time, you are probably running the
          server (`yarn dev`) rather than a production build. By default,{' '}
          <b>the dev server will always be dynamic</b>.
        </div>
      </div>
    </div>
  );
}
