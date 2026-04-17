import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "xay-dung-portfolio-nextjs",
    title: "Xây dựng Portfolio cá nhân với Next.js App Router",
    date: "2026-04-12",
    content: [
      "Khi bắt đầu với Next.js App Router, mình ưu tiên thiết kế trước cấu trúc layout chung để đảm bảo giao diện nhất quán ở mọi trang.",
      "Việc chia nhỏ từng route theo folder giúp theo dõi luồng điều hướng tốt hơn và dễ mở rộng khi thêm tính năng mới.",
      "Với Portfolio, các route cơ bản như Home, About, Projects, Blog là bộ khung phù hợp để phát triển tiếp các phần nâng cao.",
    ],
  },
  {
    slug: "cach-to-chuc-component",
    title: "Cách tổ chức component để project dễ mở rộng",
    date: "2026-04-09",
    content: [
      "Mình thường chia component theo chức năng: layout component, feature component và reusable UI component.",
      "Những component có logic tương tác sẽ được tách riêng để tránh file page.tsx quá dài và khó bảo trì.",
      "Đặt tên rõ ràng theo ngữ cảnh giúp đội nhóm đọc code nhanh hơn và giảm lỗi khi refactor.",
    ],
  },
  {
    slug: "tailwind-meo-thuc-chien",
    title: "Mẹo dùng Tailwind CSS nhanh và sạch",
    date: "2026-04-05",
    content: [
      "Tailwind giúp dựng UI nhanh nhưng cần giữ consistency bằng cách tái sử dụng các pattern class quen thuộc.",
      "Khi class quá dài, mình tách thành component nhỏ thay vì nhồi toàn bộ vào một chỗ để tăng độ dễ đọc.",
      "Sử dụng responsive class theo mobile-first là cách mình hay áp dụng để giao diện hiển thị tốt trên nhiều thiết bị.",
    ],
  },
];

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
      >
        ← Quay lại danh sách blog
      </Link>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-slate-400">
        {post.date}
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">{post.title}</h1>

      <p className="mt-3 rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600">
        Slug hiện tại từ URL: <span className="font-semibold text-slate-800">{slug}</span>
      </p>

      <div className="mt-6 space-y-4 leading-7 text-slate-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}