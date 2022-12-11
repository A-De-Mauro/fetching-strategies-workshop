import React from 'react';
import { TabGroup } from '#/ui/TabGroup';

export const runtime = 'experimental-edge';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/streaming"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Posts',
              slug: 'posts',
            },
          ]}
        />
        <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
