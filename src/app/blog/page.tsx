import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c] transition hover:-translate-y-0.5"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone-600">
            <span>{post.date}</span>
            <span className="text-stone-400">|</span>
            <span>{post.author}</span>
          </div>

          <h2 className="mt-2 text-xl font-black text-stone-900">
            {post.title}
          </h2>

          <p className="mt-3 leading-7 text-stone-700">{post.excerpt}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-none border-2 border-lime-800 bg-lime-200 px-2 py-1 text-xs font-bold text-lime-900"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-5 inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
          >
            Mo Nhat Ky Chi Tiet
          </Link>
        </article>
      ))}
    </div>
  );
}
