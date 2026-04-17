export default function BlogDetailLoading() {
  return (
    <article className="rounded-none border-4 border-stone-700 bg-stone-100 p-7 shadow-[6px_6px_0_0_#44403c]">
      <div className="h-10 w-56 animate-pulse bg-amber-700/60" />
      <div className="mt-6 h-4 w-52 animate-pulse bg-stone-300" />
      <div className="mt-3 h-9 w-3/4 animate-pulse bg-stone-300" />
      <div className="mt-5 h-4 w-full animate-pulse bg-stone-300" />
      <div className="mt-2 h-4 w-full animate-pulse bg-stone-300" />
      <div className="mt-2 h-4 w-5/6 animate-pulse bg-stone-300" />

      <div className="mt-8">
        <div className="h-6 w-40 animate-pulse bg-stone-300" />
        <div className="mt-3 grid gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-none border-2 border-stone-600 bg-stone-200 p-4"
            >
              <div className="h-4 w-2/3 animate-pulse bg-stone-300" />
              <div className="mt-2 h-3 w-1/2 animate-pulse bg-stone-300" />
              <div className="mt-3 h-4 w-full animate-pulse bg-stone-300" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
