import React from 'react';
import { TabGroup } from '#/ui/TabGroup';

export const dynamic = 'force-dynamic';

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
