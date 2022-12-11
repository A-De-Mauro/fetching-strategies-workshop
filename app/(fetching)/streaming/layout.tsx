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
      </div>
      <div>{children}</div>
    </div>
  );
}
