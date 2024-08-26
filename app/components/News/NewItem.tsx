"use client";

import React, { useState } from 'react';

export default function NewItem({data}: any) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{data?.fact}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me! {count}
      </button>
    </div>
  );
}