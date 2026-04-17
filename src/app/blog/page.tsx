import Link from "next/link";
import type { Comment, Post } from "@/types";

const REVALIDATE_SECONDS = 3600;
const USE_NO_STORE = false;

function buildFetchOptions(): RequestInit {
  if (USE_NO_STORE) {
    return { cache: "no-store" };
  }

  return { next: { revalidate: REVALIDATE_SECONDS } };
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    buildFetchOptions(),
  );

  if (!response.ok) {
    throw new Error("Không thể tải danh sách bài viết từ JSONPlaceholder.");
  }

  return (await response.json()) as Post[];
}

async function getCommentCountByPostId(): Promise<Record<number, number>> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    buildFetchOptions(),
  );

  if (!response.ok) {
    return {};
  }

  const comments = (await response.json()) as Comment[];
  return comments.reduce<Record<number, number>>((acc, comment) => {
    acc[comment.postId] = (acc[comment.postId] ?? 0) + 1;
    return acc;
  }, {});
}

export default async function BlogPage() {
  const [posts, commentCountByPostId] = await Promise.all([
    getPosts(),
    getCommentCountByPostId(),
  ]);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="mc-animate-in mc-hover-lift rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c]"
        >
          <div className="mb-3 text-xl">
            <span className="mc-pickaxe">⛏️</span>
            <span className="mc-mob ml-2">🧟</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone-600">
            <span>Bài #{post.id}</span>
            <span className="text-stone-400">|</span>
            <span>Người viết #{post.userId}</span>
            <span className="text-stone-400">|</span>
            <span>{commentCountByPostId[post.id] ?? 0} bình luận</span>
          </div>

          <h2 className="mt-2 text-xl font-black text-stone-900">
            {post.title}
          </h2>

          <p className="mc-line-clamp-3 mt-3 leading-7 text-stone-700">
            {post.body}
          </p>

          <Link
            href={`/blog/${post.id}`}
            className="mt-5 inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
          >
            Mở nhật ký chi tiết
          </Link>
        </article>
      ))}
    </div>
  );
}
