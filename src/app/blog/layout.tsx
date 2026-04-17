import Link from "next/link";

const categories = ["Next.js", "Frontend", "UI/UX", "Learning Notes"];

const quickLinks = [
  { href: "/blog/xay-dung-portfolio-nextjs", label: "Bắt đầu với Next.js Portfolio" },
  { href: "/blog/cach-to-chuc-component", label: "Cách tổ chức component hiệu quả" },
  { href: "/blog/tailwind-meo-thuc-chien", label: "Mẹo Tailwind CSS thực chiến" },
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Blog</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Góc chia sẻ kiến thức</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Nơi mình ghi lại quá trình học lập trình web, các bài học nhỏ về Next.js,
          UI và kinh nghiệm làm dự án.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="min-w-0">{children}</div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Danh mục
            </h2>
            <ul className="mt-3 space-y-2">
              {categories.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Bài nổi bật
            </h2>
            <ul className="mt-3 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    {link.label}
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