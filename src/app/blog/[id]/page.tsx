import Link from "next/link";
import { notFound } from "next/navigation";
import type { Comment, Post, User } from "@/types";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

const REVALIDATE_SECONDS = 3600;

async function getPostById(id: number): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    return null;
  }

  const post = (await response.json()) as Partial<Post>;
  if (typeof post.id !== "number") {
    return null;
  }

  return post as Post;
}

async function getCommentsByPostId(id: number): Promise<Comment[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as Comment[];
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    return [];
  }

  return (await response.json()) as User[];
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const postId = Number(id);
  const [post, users, comments] = await Promise.all([
    getPostById(postId),
    getUsers(),
    getCommentsByPostId(postId),
  ]);

  if (!post) {
    notFound();
  }

  const author = users.find((user) => user.id === post.userId);

  return (
    <article className="mc-animate-in rounded-none border-4 border-stone-700 bg-stone-100 p-7 shadow-[6px_6px_0_0_#44403c]">
      <Link
        href="/blog"
        className="inline-flex items-center rounded-none border-4 border-amber-900 bg-linear-to-b from-amber-700 to-amber-900 px-4 py-2 text-sm font-black uppercase tracking-wider text-amber-100 transition hover:brightness-110"
      >
        ← Quay lại túi đồ (Back to Blog)
      </Link>

      <div className="mt-3 text-2xl">
        <span className="mc-pickaxe">⛏️</span>
        <span className="mc-mob mc-mob-delay ml-2">🧟</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone-600">
        <span>Bài #{post.id}</span>
        <span className="text-stone-400">|</span>
        <span>Tác giả #{post.userId}</span>
        <span className="text-stone-400">|</span>
        <span>{comments.length} bình luận</span>
      </div>

      <h1 className="mt-2 text-3xl font-black text-stone-900">{post.title}</h1>

      {author ? (
        <section className="mt-6 rounded-none border-2 border-emerald-700 bg-emerald-100 p-4 text-sm text-emerald-900">
          <h2 className="text-sm font-black uppercase tracking-wide">
            Thông tin tác giả
          </h2>
          <p className="mt-2">
            <span className="font-black">{author.name}</span> (@
            {author.username}) - {author.email}
          </p>
          <p className="mt-1 text-emerald-800">{author.company.name}</p>
          <p className="text-emerald-700">{author.company.catchPhrase}</p>
        </section>
      ) : null}

      <p className="mt-6 leading-8 whitespace-pre-line text-stone-700">{post.body}</p>

      <section className="mt-8">
        <h2 className="text-lg font-black text-stone-900">
          Bình luận ({comments.length})
        </h2>

        <div className="mt-3 grid gap-3">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-none border-2 border-stone-600 bg-stone-200 p-4"
            >
              <p className="text-sm font-black text-stone-900">{comment.name}</p>
              <p className="text-xs font-semibold text-stone-600">
                {comment.email}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
