import { DefaultTags } from '#/ui/DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>Next.js workshop</title>
      <meta
        name="description"
        content="Fetching strategies workshop to explore new Next.js 13 app directory features"
      />
    </>
  );
}
