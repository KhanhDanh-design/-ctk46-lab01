import Link from "next/link";
import type { Post } from "@/types";

const categories = ["Survival", "Redstone", "Build", "Automation"];

const REVALIDATE_SECONDS = 3600;

async function getFeaturedPosts(): Promise<Post[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
    {
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as Post[];
}

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="minecraft-page space-y-6">
      <section className="mc-animate-in relative overflow-hidden rounded-none border-4 border-stone-700 bg-linear-to-b from-lime-300 to-lime-500 p-7 shadow-[6px_6px_0_0_#292524]">
        <div className="pointer-events-none absolute right-4 top-4 text-2xl">
          <span className="mc-pickaxe">⛏️</span>
          <span className="mc-mob ml-2">🧟</span>
        </div>

        <p className="text-sm uppercase tracking-[0.2em] text-stone-800">
          Minecraft Logbook
        </p>
        <h1 className="mt-2 text-3xl font-black text-stone-900">
          Nhật Ký Thế Giới Block
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-stone-800">
          Nơi lưu trữ hướng dẫn sinh tồn, công trình Redstone và nhật ký xây
          dựng của Danh Nguyễn Tuấn Khanh - 2212390.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="min-w-0">{children}</div>

        <aside className="space-y-4">
          <div className="mc-hover-lift rounded-none border-4 border-stone-700 bg-stone-200 p-5 shadow-[4px_4px_0_0_#44403c]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-700">
              Khu Vực Khám Phá
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

          <div className="mc-hover-lift rounded-none border-4 border-stone-700 bg-stone-200 p-5 shadow-[4px_4px_0_0_#44403c]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-700">
              Nhiệm Vụ Nổi Bật
            </h2>
            <ul className="mt-3 space-y-3">
              {featuredPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.id}`}
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
