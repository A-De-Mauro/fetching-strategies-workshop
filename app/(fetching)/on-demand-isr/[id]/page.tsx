export async function generateStaticParams() {
  return [];
}

async function fetchData(params: { id: string }) {
  const res = await fetch(`${process.env.MOCKAPIIO_URL}/posts/${params.id}`);
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
      <h3 className="font-medium text-gray-100">Title: {data.title}</h3>
      <div className="self-start whitespace-nowrap rounded-lg border border-dashed border-gray-600 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
