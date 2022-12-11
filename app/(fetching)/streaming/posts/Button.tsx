'use client';

import React, { useState } from 'react';

export function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="whitespace-nowrap rounded-lg bg-vercel-pink px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-vercel-blue hover:text-white"
    >
      Clicks: {count}
    </button>
  );
}
