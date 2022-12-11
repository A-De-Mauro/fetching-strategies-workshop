export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Data Fetching strategies',
    items: [
      {
        name: 'Server Components (default)',
        slug: 'server-component',
        description: 'Static pages generated server-side',
      },
      {
        name: 'Client Components (SWR)',
        slug: 'client-component',
        description: 'Fetching from a client component',
      },
      {
        name: 'Dynamic fetching',
        slug: 'dynamic',
        description: 'Always re-render at each request',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Bust cache based on a time interval',
      },
      {
        name: 'On-demand Incremental Static Regeneration',
        slug: 'on-demand-isr',
        description: 'Bust cache using a web hook',
      },
      {
        name: 'Streaming',
        slug: 'streaming',
        description: 'Use React Suspense to fetch components in parallel',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'loading.js',
        slug: 'loading',
        description:
          'Create meaningful loading UI for specific parts of an app',
      },
      {
        name: 'error.js',
        slug: 'error-handling',
        description: 'Create error UI for specific parts of an app',
      },
    ],
  },
];
