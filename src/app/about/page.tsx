const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">
          About me
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Thông tin cá nhân
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Mình là Danh Nguyen Tuan Khanh, sinh viên năm 4 ngành Công nghệ Thông
          tin. Mình thích học và thực hành các công nghệ mới, đặc biệt là hệ
          sinh thái React/Next.js để xây dựng những ứng dụng web hiện đại.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Học vấn</h2>
          <div className="mt-4 space-y-3 text-slate-600">
            <p>
              <span className="font-medium text-slate-800">Trường:</span> Đại
              học Đà Lạt
            </p>
            <p>
              <span className="font-medium text-slate-800">Ngành:</span> Công
              nghệ Thông tin
            </p>
            <p>
              <span className="font-medium text-slate-800">Giai đoạn:</span>{" "}
              2021 - 2026
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Định hướng</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Mục tiêu của mình là trở thành Frontend Developer chuyên sâu về
            performance, UI/UX và khả năng triển khai sản phẩm thực tế từ thiết
            kế tới production.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Kỹ năng chính</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
