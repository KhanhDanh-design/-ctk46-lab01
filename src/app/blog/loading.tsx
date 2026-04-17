export default function BlogLoading() {
  return (
    <section className="space-y-4">
      {[1, 2, 3, 4].map((item) => (
        <article
          key={item}
          className="rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c]"
        >
          <div className="h-5 w-28 animate-pulse bg-stone-300" />
          <div className="mt-3 h-7 w-3/4 animate-pulse bg-stone-300" />
          <div className="mt-3 h-4 w-full animate-pulse bg-stone-300" />
          <div className="mt-2 h-4 w-11/12 animate-pulse bg-stone-300" />
          <div className="mt-2 h-4 w-1/2 animate-pulse bg-stone-300" />
          <div className="mt-5 h-9 w-44 animate-pulse bg-lime-300" />
        </article>
      ))}
    </section>
  );
}
