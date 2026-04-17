"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isNight, setIsNight] = useState(false);

  return (
    <article className="rounded-none border-4 border-gray-500 bg-gray-100 p-5 shadow-md dark:border-gray-600 dark:bg-gray-800">
      <p className="text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300">
        Chuyen doi boi canh
      </p>
      <p className="mt-3 text-base font-black text-gray-900 dark:text-white">
        {isNight ? "Che do Ban dem 🌙 (Nether)" : "Che do Ban ngay ☀️ (Overworld)"}
      </p>

      <button
        type="button"
        onClick={() => setIsNight((prev) => !prev)}
        className="mt-4 rounded-none border-2 border-stone-700 bg-stone-300 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-stone-200 dark:border-stone-400 dark:bg-stone-200"
      >
        {isNight ? "Chuyen ve Overworld" : "Chuyen sang Nether"}
      </button>
    </article>
  );
}
