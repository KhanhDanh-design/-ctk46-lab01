import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="rounded-none border-4 border-amber-700 bg-amber-50 p-7 shadow-[6px_6px_0_0_#92400e]">
      <h2 className="text-2xl font-black uppercase tracking-wide text-amber-900">
        Không tìm thấy bài viết
      </h2>
      <p className="mt-3 leading-7 text-amber-900">
        Bài viết bạn truy cập không tồn tại trên JSONPlaceholder hoặc id không hợp
        lệ.
      </p>

      <Link
        href="/blog"
        className="mt-5 inline-flex items-center rounded-none border-4 border-amber-900 bg-linear-to-b from-amber-700 to-amber-900 px-4 py-2 text-sm font-black uppercase tracking-wider text-amber-100 transition hover:brightness-110"
      >
        ← Quay lại túi đồ (Back to Blog)
      </Link>
    </section>
  );
}
