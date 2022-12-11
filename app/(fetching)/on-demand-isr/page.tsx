export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">On-demand ISR</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            On-demand ISR invalidates the cache of a single url only when{' '}
            <b className="text-vercel-cyan">calling a specific /api</b> url with
            the correct query parameters.
          </li>
          <li>
            On-demand ISR will be evident only if you have{' '}
            <b className="text-vercel-cyan">
              some data changing on an endpoint
            </b>{' '}
            <em>after</em> the pages have been statically generated at build
            time. A classic example would be a content editor changing some
            value on your headless CMS.
          </li>
        </ul>
        <h3>Steps</h3>
        <ul className="list-decimal space-y-2 pl-4 text-sm text-gray-300">
          <li>
            For this example, you will need to create a{' '}
            <b className="text-vercel-cyan">new API on MockAPI.io</b>. Using
            this free API builder will allow you{' '}
            <b className="text-vercel-cyan">to modify the data</b> and
            consequently showcase on-demand ISR.
          </li>
          <li>
            You will need to create a new project in BuildAPI.io and a new API
            route within the project called{' '}
            <b className="text-vercel-cyan">`/posts`</b>, that will have a list
            of elements with a title. Go ahead and{' '}
            <b className="text-vercel-cyan">generate some data</b> for that
            specific url.
          </li>
          <li>
            You will need to create a{' '}
            <b className="text-vercel-cyan">new ENV variable</b> in env.local
            adding your token for REVALIDATION_TOKEN.
          </li>
          <li>
            You will also need to create a new MOCKAPIIO_URL variable in
            env.local for your own personal{' '}
            <b className="text-vercel-cyan">MockAPI.io url</b>.
          </li>
          <li>
            <em>
              Using <b className="text-vercel-cyan">Vercel</b>: these same ENV
              variables will need to be on your Vercel project as well within
              the Vercel Platform.
            </em>
          </li>
          <li>
            Run `yarn build && yarn start` to build and run a{' '}
            <b className="text-vercel-cyan">production deployment</b> on
            localhost (a dev environment will not showcase statically generated
            pages, same as regular ISR).
          </li>
          <li>
            <b className="text-vercel-cyan">Change some data in your API</b>:
            and save the new data on MockAPI.io.
          </li>
          <li>Try to refresh: the page will not change its data.</li>
          <li>
            Call the revalidate function visiting{' '}
            <b className="text-vercel-cyan">
              `/api/revalidate?secret=yourSecretToken&id=yourPostId` url
            </b>{' '}
            on a new browser tab.
          </li>
          <li>
            Now <b className="text-vercel-cyan">refresh</b> the page: data for
            that Post id has been revalidated, on demand.
          </li>
        </ul>
      </div>
    </div>
  );
}
