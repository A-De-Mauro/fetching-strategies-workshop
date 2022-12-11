export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium">Client components</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>Fetching from a Client Component is possible using SWR.</li>
          <li>
            In the future, it will be possible to perform native data fetching
            using hooks.
          </li>
          <li>
            Pages and Layouts will always need to be Server Components,
            regardless.
          </li>
        </ul>
      </div>
    </div>
  );
}
