import Link from "next/link";
import { getPostBySlug, posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const joinedPath = slug.join("/");
  const lookupKey = slug[slug.length - 1];
  const post = getPostBySlug(lookupKey) ?? getPostBySlug(joinedPath);

  if (!post) {
    return (
      <article className="rounded-none border-4 border-amber-700 bg-amber-50 p-7 shadow-[6px_6px_0_0_#92400e]">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
        >
          ← Quay lại túi đồ (Danh sách Blog)
        </Link>

        <h1 className="mt-5 text-3xl font-black text-amber-900">
          Catch-all route đã bắt đường dẫn này
        </h1>

        <p className="mt-3 text-amber-900">
          Không có bài viết khớp, nhưng route [...slug] vẫn nhận được URL.
        </p>

        <div className="mt-4 rounded-none border-2 border-amber-700 bg-amber-100 p-3 text-sm text-amber-950">
          <p>
            Đường dẫn đầy đủ: <span className="font-black">/blog/{joinedPath}</span>
          </p>
          <p className="mt-1">
            Số segment: <span className="font-black">{slug.length}</span>
          </p>
          <p className="mt-1">
            Danh sách segment: <span className="font-black">[{slug.join(", ")}]</span>
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-none border-4 border-stone-700 bg-stone-100 p-7 shadow-[6px_6px_0_0_#44403c]">
      <Link
        href="/blog"
        className="inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
      >
        ← Quay lại túi đồ (Danh sách Blog)
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone-600">
        <span>{post.date}</span>
        <span className="text-stone-400">|</span>
        <span>{post.author}</span>
      </div>

      <h1 className="mt-2 text-3xl font-black text-stone-900">{post.title}</h1>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-none border-2 border-lime-800 bg-lime-200 px-2 py-1 text-xs font-bold text-lime-900"
          >
            #{tag}
          </span>
        ))}
      </div>

      <p className="mt-4 rounded-none border-2 border-stone-600 bg-stone-200 px-3 py-2 text-sm text-stone-700">
        Slug segments hiện tại: <span className="font-black">[{slug.join(" / ")}]</span>
      </p>

      <div className="mt-6 space-y-4 leading-7 text-stone-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: [post.slug] }));
}
