import Link from "next/link";
import { posts } from "@/data/posts";

const categories = ["Survival", "Redstone", "Build", "Automation"];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-none border-4 border-stone-700 bg-linear-to-b from-lime-300 to-lime-500 p-7 shadow-[6px_6px_0_0_#292524]">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-800">
          Minecraft Logbook
        </p>
        <h1 className="mt-2 text-3xl font-black text-stone-900">
          Nhat Ky The Gioi Block
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-stone-800">
          Noi luu tru huong dan sinh ton, cong trinh redstone va nhat ky xay dung
          cua Danh Nguyen Tuan Khanh - 2212390.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="min-w-0">{children}</div>

        <aside className="space-y-4">
          <div className="rounded-none border-4 border-stone-700 bg-stone-200 p-5 shadow-[4px_4px_0_0_#44403c]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-700">
              Khu Vuc Kham Pha
            </h2>
            <ul className="mt-3 space-y-2">
              {categories.map((item) => (
                <li
                  key={item}
                  className="rounded-none border-2 border-stone-600 bg-lime-100 px-3 py-2 text-sm font-semibold text-stone-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-none border-4 border-stone-700 bg-stone-200 p-5 shadow-[4px_4px_0_0_#44403c]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-700">
              Nhiem Vu Noi Bat
            </h2>
            <ul className="mt-3 space-y-3">
              {posts.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-stone-800 transition hover:text-lime-700"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
