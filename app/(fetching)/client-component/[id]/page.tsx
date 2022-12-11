async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
