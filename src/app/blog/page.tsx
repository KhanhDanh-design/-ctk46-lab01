import Link from "next/link";

const posts = [
  {
    slug: "xay-dung-portfolio-nextjs",
    title: "Xây dựng Portfolio cá nhân với Next.js App Router",
    excerpt:
      "Tổng quan cấu trúc project, cách chia layout và tổ chức các route cơ bản cho website portfolio.",
    date: "2026-04-12",
  },
  {
    slug: "cach-to-chuc-component",
    title: "Cách tổ chức component để project dễ mở rộng",
    excerpt:
      "Một số nguyên tắc tách component và đặt tên giúp code dễ đọc, dễ maintain hơn khi dự án lớn dần.",
    date: "2026-04-09",
  },
  {
    slug: "tailwind-meo-thuc-chien",
    title: "Mẹo dùng Tailwind CSS nhanh và sạch",
    excerpt:
      "Các pattern class phổ biến để dựng UI nhanh, giữ consistency và tránh lặp code style.",
    date: "2026-04-05",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {post.date}
          </p>

          <h2 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h2>

          <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Đọc chi tiết
          </Link>
        </article>
      ))}
    </div>
  );
}