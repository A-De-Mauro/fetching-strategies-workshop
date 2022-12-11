import { Button } from './Button';

async function fetchData(id: string, delay: number = 0) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export async function Post({ id, delay }: { id: string; delay: number }) {
  const data = await fetchData(id, delay);

  return (
    <div className="text-gray-100">
      <div className="pb-1 text-gray-100">{data.title}</div>
      <div className="pb-1">
        <Button />
      </div>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
