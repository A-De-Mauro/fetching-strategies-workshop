import BlogPost from './BlogPost';

export default async function Page() {
  return (
    <div className="space-y-4">
      <BlogPost />
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
