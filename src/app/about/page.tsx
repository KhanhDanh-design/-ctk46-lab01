const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Logic Redstone",
  "Thiết kế khối",
];

export default function AboutPage() {
  return (
    <div className="minecraft-page space-y-8">
      <section className="mc-animate-in relative overflow-hidden rounded-none border-4 border-emerald-700 bg-linear-to-br from-emerald-500 to-lime-400 p-7 shadow-[8px_8px_0_0_#14532d]">
        <div className="pointer-events-none absolute right-4 top-4 text-2xl">
          <span className="mc-pickaxe">⛏️</span>
          <span className="mc-mob ml-2">🧟</span>
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-950/80">
          About me - Minecraft Profile
        </p>
        <h1 className="mt-2 text-3xl font-black text-emerald-950 sm:text-4xl">
          Thông tin cá nhân
        </h1>
        <p className="mt-4 max-w-3xl font-semibold leading-7 text-emerald-900">
          Mình là Danh Nguyễn Tuấn Khanh, sinh viên năm 4 ngành Công nghệ Thông
          tin. Mình yêu thích xây dựng giao diện web theo phong cách Minecraft:
          vuông vức, rõ ràng, sinh động và có tính tương tác cao.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="mc-hover-lift mc-animate-in rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c] dark:border-stone-500 dark:bg-gray-800">
          <h2 className="text-xl font-black text-stone-900 dark:text-stone-100">
            Hành trình học tập
          </h2>
          <div className="mt-4 space-y-3 text-stone-700 dark:text-gray-200">
            <p>
              <span className="font-bold text-stone-900 dark:text-white">
                Trường:
              </span>{" "}
              Đại học Đà Lạt
            </p>
            <p>
              <span className="font-bold text-stone-900 dark:text-white">
                Ngành:
              </span>{" "}
              Công nghệ Thông tin
            </p>
            <p>
              <span className="font-bold text-stone-900 dark:text-white">
                Giai đoạn:
              </span>{" "}
              2021 - 2026
            </p>
            <p>
              <span className="font-bold text-stone-900 dark:text-white">
                Vai trò:
              </span>{" "}
              Minecraft Builder & Frontend Developer
            </p>
          </div>
        </article>

        <article className="mc-hover-lift mc-animate-in rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c] dark:border-stone-500 dark:bg-gray-800">
          <h2 className="text-xl font-black text-stone-900 dark:text-stone-100">
            Nhiệm vụ chính
          </h2>
          <p className="mt-4 leading-7 text-stone-700 dark:text-gray-200">
            Mục tiêu của mình là trở thành Frontend Developer chuyên sâu về
            performance, UI/UX và khả năng triển khai sản phẩm thực tế từ thiết
            kế tới production.
          </p>
          <div className="mt-4 rounded-none border-2 border-emerald-700 bg-emerald-100 p-3 text-sm font-semibold text-emerald-900 dark:border-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-200">
            <span className="mc-pickaxe mr-2 inline-block">⛏️</span>
            Đang luyện kỹ năng xây dựng hệ thống component linh hoạt như mạch
            Redstone.
          </div>
        </article>
      </section>

      <section className="mc-animate-in rounded-none border-4 border-emerald-700 bg-gray-50 p-6 shadow-md dark:border-emerald-500 dark:bg-gray-900">
        <h2 className="text-xl font-black text-emerald-800 dark:text-emerald-300">
          Kỹ năng chính
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="mc-hover-lift rounded-none border-2 border-emerald-700 bg-emerald-100 px-3 py-1.5 text-sm font-bold text-emerald-900 dark:border-emerald-400 dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 text-2xl">
          <span className="mc-mob">🐺</span>
          <span className="mc-mob mc-mob-delay">🧟</span>
          <span className="mc-pickaxe">⛏️</span>
        </div>
      </section>
    </div>
  );
}
