"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isNight, setIsNight] = useState(false);

  return (
    <article className="mc-hover-lift rounded-none border-4 border-gray-500 bg-gray-100 p-5 shadow-md dark:border-gray-600 dark:bg-gray-800">
      <p className="text-sm font-bold uppercase tracking-wide text-gray-700 dark:text-gray-300">
        Chuyển đổi bối cảnh
      </p>
      <p className="mt-3 text-base font-black text-gray-900 dark:text-white">
        {isNight ? "Chế độ ban đêm 🌙 (Nether)" : "Chế độ ban ngày ☀️ (Overworld)"}
      </p>

      <div className="mt-2 text-lg">
        <span className="mc-mob">🐺</span>
        <span className="mc-mob mc-mob-delay ml-2">🧟</span>
      </div>

      <button
        type="button"
        onClick={() => setIsNight((prev) => !prev)}
        className="mt-4 rounded-none border-2 border-stone-700 bg-stone-300 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-stone-200 dark:border-stone-400 dark:bg-stone-200"
      >
        {isNight ? "Chuyển về Overworld" : "Chuyển sang Nether"}
      </button>
    </article>
  );
}
