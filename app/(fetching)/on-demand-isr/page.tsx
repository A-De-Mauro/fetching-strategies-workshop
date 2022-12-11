import { ExternalLink } from '#/ui/ExternalLink';

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">On-demand ISR</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            On-demand ISR will be evident only if we have a CMS or some data
            changing on an endpoint.
          </li>
          <li>
            For this example, you will need to create a new API at MockAPI.io.
            Using this free API builder will allow you to change the data and
            consequently showcase on-demand ISR.
          </li>
          <li>
            You will need to paste the new API root url and create a new object
            within the project. The new API url `/posts` will have a list of
            elements with a title.
          </li>
          <li>
            You will need to create a new ENV variable in env.local adding your
            token. This same token will need to be on your Vercel project as
            well.
          </li>
          <li>
            Run `yarn build && yarn start` to build and run a production
            deployment on localhost (a dev environment will not showcase
            statically generated pages).
          </li>
          <li>
            Change some data in your API: after saving the new data, you can
            call the `/api/revalidate?secret=yourSecretToken&id=yourPostId` url
            on a new browser tab and refresh the page: data for that Post id has
            been revalidated, on demand.
          </li>
        </ul>
      </div>
    </div>
  );
}
