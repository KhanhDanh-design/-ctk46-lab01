import Link from "next/link";

const skills = [
  "⚒️ Next.js",
  "🎨 Tailwind CSS",
  "🧠 TypeScript",
  "⚛️ React",
  "🔌 Redstone Logic",
  "🧱 Block Building",
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-none border-4 border-emerald-700 bg-linear-to-br from-emerald-500 via-emerald-400 to-lime-400 p-8 text-emerald-950 shadow-[8px_8px_0_0_#14532d] sm:p-10 dark:border-emerald-500 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-700 dark:text-emerald-50 dark:shadow-[8px_8px_0_0_#022c22]">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/80 dark:text-emerald-100/90">
          Portfolio cá nhân - Minecraft World
        </p>
        <h1 className="mb-2 text-4xl font-black leading-tight sm:text-5xl">
          Danh Nguyễn Tuấn Khanh
        </h1>
        <p className="text-base font-bold tracking-wide sm:text-lg">MSSV: 2212390</p>
        <p className="mt-4 max-w-2xl text-base font-semibold sm:text-lg">
          Minecraft Builder & Developer, tập trung xây dựng giao diện web vuông
          vức, tối ưu trải nghiệm người dùng và mô hình hóa tư duy hệ thống như
          các mạch Redstone.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-none border-2 border-emerald-900 bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wide text-emerald-900 transition hover:bg-emerald-100 dark:border-emerald-100 dark:bg-emerald-100 dark:text-emerald-950"
          >
            Xem cong trinh
          </Link>
          <Link
            href="/about"
            className="rounded-none border-2 border-emerald-900/70 px-5 py-2.5 text-sm font-black uppercase tracking-wide text-emerald-950 transition hover:bg-emerald-300/50 dark:border-emerald-100/80 dark:text-emerald-50 dark:hover:bg-emerald-900/50"
          >
            Ho so nguoi choi
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-sm border-2 border-gray-300 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Trường</p>
          <p className="mt-2 font-bold text-gray-800 dark:text-white">Đại học Đà Lạt</p>
        </div>
        <div className="rounded-sm border-2 border-gray-300 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Ngành học</p>
          <p className="mt-2 font-bold text-gray-800 dark:text-white">
            Công nghệ Thông tin
          </p>
        </div>
        <div className="rounded-sm border-2 border-gray-300 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Mục tiêu</p>
          <p className="mt-2 font-bold text-gray-800 dark:text-white">Frontend Engineer</p>
        </div>
      </section>

      <section className="rounded-sm border-4 border-emerald-700 bg-gray-50 p-6 shadow-md dark:border-emerald-500 dark:bg-gray-900">
        <h2 className="text-2xl font-black text-emerald-800 dark:text-emerald-300">Skills Loadout</h2>
        <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
          Bo ky nang ket hop phat trien web va tu duy xay dung he thong theo phong cach Minecraft.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-none border-2 border-emerald-700 bg-emerald-100 px-3 py-2 text-sm font-black text-emerald-900 shadow-sm dark:border-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
