export default function Loading() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-stone-900 via-stone-800 to-lime-950 px-4 py-12 font-mono text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />

      <div className="relative w-full max-w-2xl rounded-none border-4 border-stone-500 bg-stone-900/90 p-6 shadow-[8px_8px_0_0_#1c1917] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
          Danh Nguyen Tuan Khanh - 2212390
        </p>

        <h1 className="mt-3 text-2xl font-black uppercase tracking-widest text-stone-100 sm:text-3xl">
          Đang tạo thế giới...
        </h1>

        <p className="mt-2 text-sm font-semibold text-stone-300 sm:text-base">
          Đang tải chunk và đồng bộ Redstone...
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-14 w-14 animate-spin rounded-none border-4 border-stone-700 bg-lime-600 shadow-[inset_0_0_0_4px_#365314]">
            <span className="absolute inset-2 border-2 border-lime-800 bg-lime-500" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="h-4 overflow-hidden rounded-none border-2 border-stone-600 bg-stone-800">
              <div className="h-full w-2/3 animate-pulse bg-linear-to-r from-lime-500 via-lime-300 to-lime-500" />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 animate-bounce bg-lime-300" />
              <span className="h-2 w-2 animate-bounce bg-lime-300 [animation-delay:120ms]" />
              <span className="h-2 w-2 animate-bounce bg-lime-300 [animation-delay:240ms]" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                Đang tải địa hình
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
