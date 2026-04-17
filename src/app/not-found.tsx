import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-stone-900 via-stone-800 to-stone-950 px-4 py-12 font-mono text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />

      <div className="relative w-full max-w-2xl rounded-none border-4 border-stone-500 bg-stone-900/90 p-6 shadow-[8px_8px_0_0_#1c1917] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
          Danh Nguyen Tuan Khanh - 2212390
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase tracking-widest text-stone-100 sm:text-4xl">
          404 - Chunk Not Found
        </h1>

        <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">
          Block bạn tìm không tồn tại trong thế giới này. Có thể bạn đã đi lạc
          ra khỏi map hoặc đường dẫn đã bị thay đổi.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex w-full items-center justify-center rounded-none border-4 border-lime-800 bg-linear-to-b from-lime-500 to-lime-700 px-5 py-3 text-sm font-black uppercase tracking-wider text-lime-950 transition hover:brightness-110 sm:w-auto"
        >
          Quay lại điểm Spawn (Trang chủ)
        </Link>
      </div>
    </section>
  );
}
