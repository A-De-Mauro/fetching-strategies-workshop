export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium">Streaming with Suspense</h1>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-100">
            <li>
              Streaming allows you to{' '}
              <b className="text-vercel-cyan">
                progressively send units of the UI
              </b>{' '}
              from the server to the client.
            </li>

            <li>
              This allows the user to see and{' '}
              <b className="text-vercel-cyan">interact</b> with the most
              essential parts of the page{' '}
              <b className="text-vercel-cyan">
                while the rest of the content loads
              </b>{' '}
              - instead of waiting for the whole page to load before they can
              interact with anything.
            </li>
            <li>
              Try navigating to the Posts tab above: one post will load faster
              than the other one, and it will be{' '}
              <b className="text-vercel-cyan">immediately interactive</b>
            </li>
          </ul>
          <div className="text-sm text-gray-400">
            The fetch for both posts has been manually delayed in the API to
            simulate a real streaming delay.
          </div>
        </div>
      </div>
    </div>
  );
}
