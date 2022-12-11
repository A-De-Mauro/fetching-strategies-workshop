async function fetchData(id: string, delay: number = 0) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export async function Post({ id, delay }: { id: string; delay: number }) {
  const data = await fetchData(id, delay);

  return <div className="space-y-2">{data.title}</div>;
}
