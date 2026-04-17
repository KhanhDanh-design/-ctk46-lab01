import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-lg sm:p-10">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-blue-100">
          Portfolio cá nhân
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
          Xin chào, mình là Danh Nguyen Tuan Khanh
        </h1>
        <p className="max-w-2xl text-base text-blue-50 sm:text-lg">
          Sinh viên Công nghệ Thông tin, yêu thích phát triển web với Next.js,
          TypeScript và xây dựng sản phẩm có trải nghiệm người dùng tốt.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Xem dự án
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-blue-200/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Về mình
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Trường</p>
          <p className="mt-2 font-semibold text-slate-800">Đại học Đà Lạt</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Ngành học</p>
          <p className="mt-2 font-semibold text-slate-800">
            Công nghệ Thông tin
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Mục tiêu</p>
          <p className="mt-2 font-semibold text-slate-800">Frontend Engineer</p>
        </div>
      </section>
    </div>
  );
}
