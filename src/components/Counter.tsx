"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <article className="rounded-none border-4 border-emerald-700 bg-gray-50 p-5 shadow-md dark:border-emerald-500 dark:bg-gray-800">
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
        Bo dem tai nguyen
      </p>
      <p className="mt-3 text-base font-black text-gray-900 dark:text-white">
        So block kim cuong da dao: {count}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-none border-2 border-emerald-800 bg-emerald-500 px-3 py-2 text-sm font-black text-emerald-950 transition hover:bg-emerald-400 dark:border-emerald-400 dark:bg-emerald-400"
        >
          +1 Block
        </button>
        <button
          type="button"
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          className="rounded-none border-2 border-amber-800 bg-amber-400 px-3 py-2 text-sm font-black text-amber-950 transition hover:bg-amber-300 dark:border-amber-500 dark:bg-amber-300"
        >
          Vut di (-1)
        </button>
      </div>
    </article>
  );
}
