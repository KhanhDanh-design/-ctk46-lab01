"use client";

import { useEffect, useRef, useState } from "react";

type CopyButtonProps = {
  textToCopy: string;
};

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Khong the copy vao clipboard:", error);
    }
  };

  return (
    <article className="rounded-none border-4 border-emerald-700 bg-emerald-50 p-5 shadow-md dark:border-emerald-500 dark:bg-emerald-900/30">
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
        Lenh nhanh
      </p>
      <p className="mt-3 rounded-none border-2 border-emerald-700 bg-white px-3 py-2 font-mono text-sm font-bold text-emerald-900 dark:border-emerald-500 dark:bg-gray-900 dark:text-emerald-200">
        {textToCopy}
      </p>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 rounded-none border-2 border-emerald-800 bg-emerald-500 px-3 py-2 text-sm font-black text-emerald-950 transition hover:bg-emerald-400 dark:border-emerald-400 dark:bg-emerald-400"
      >
        {copied ? "Da copy vao ruong!" : "Copy lenh"}
      </button>
    </article>
  );
}
