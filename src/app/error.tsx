"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Global App Router error:", error);
  }, [error]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-950 px-4 py-12 font-mono text-red-100">
      <div className="absolute inset-0 bg-red-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7f1d1d_1px,transparent_1px),linear-gradient(to_bottom,#7f1d1d_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />

      <div className="relative w-full max-w-2xl rounded-none border-4 border-red-900 bg-stone-900/95 p-6 shadow-[8px_8px_0_0_#450a0a] sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
          Danh Nguyễn Tuấn Khanh - 2212390
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase tracking-widest text-red-400 sm:text-5xl">
          You Died!
        </h1>

        <p className="mt-4 text-lg font-bold text-red-100 sm:text-xl">
          Lỗi hệ thống Redstone! Thế giới này đã bị lỗi!
        </p>

        <p className="mt-3 text-sm leading-6 text-red-200 sm:text-base">
          Chunk hiện tại không thể render. Hãy hồi sinh để thử tải lại nội dung.
        </p>

        {error.digest ? (
          <p className="mt-4 border-l-4 border-red-500 pl-3 text-xs font-semibold text-red-300">
            Error digest: {error.digest}
          </p>
        ) : null}

        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex w-full items-center justify-center rounded-none border-4 border-amber-900 bg-linear-to-b from-amber-700 to-amber-900 px-5 py-3 text-sm font-black uppercase tracking-wider text-amber-100 transition hover:brightness-110 sm:w-auto"
        >
          Hồi sinh (Thử lại)
        </button>
      </div>
    </section>
  );
}
