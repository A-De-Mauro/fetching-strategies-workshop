'use client';
import React from 'react';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';

import { fetcher } from '../../../../lib/fetcher';

export default function BlogPost() {
  const pathname = usePathname();
  const id = pathname?.split('/').slice(2);

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher,
    {
      refreshInterval: 5000,
    },
  );

  return (
    <div className="space-y-4">
      {!data && <h1 className="text-gray-100">Loading...</h1>}
      {!error && data && <h1 className="text-gray-100">Title: {data.title}</h1>}
    </div>
  );
}
