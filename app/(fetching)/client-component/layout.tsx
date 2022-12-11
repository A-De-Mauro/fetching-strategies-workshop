import { TabGroup } from '#/ui/TabGroup';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }];
  if (!ids) return null;

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/client-component"
          items={[
            {
              text: 'Home',
            },
            ...ids.map((x) => ({
              text: `Post ${x.id}`,
              slug: x.id,
            })),
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
