import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-none border-4 border-emerald-700 bg-linear-to-b from-emerald-500 to-emerald-400 p-7 shadow-[6px_6px_0_0_#065f46] dark:border-emerald-500 dark:from-emerald-700 dark:to-emerald-600 dark:shadow-[6px_6px_0_0_#022c22]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-950 dark:text-emerald-100">
          Emerald Projects
        </p>
        <h1 className="mt-2 text-3xl font-black text-emerald-950 sm:text-4xl dark:text-emerald-50">
          Danh sach cong trinh the gioi khoi vuong
        </h1>
        <p className="mt-4 max-w-3xl leading-7 font-semibold text-emerald-900 dark:text-emerald-100">
          Các dự án cá nhân của Danh Nguyen Tuan Khanh - 2212390 xoay quanh xây
          dựng, redstone và hệ thống tự động trong Minecraft.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-sm border-4 border-emerald-700 bg-gray-50 p-6 shadow-md transition hover:-translate-y-0.5 dark:border-emerald-500 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-lg font-black text-gray-900 dark:text-emerald-100">
                {project.name}
              </h2>
              <span
                className={`rounded-sm border-2 px-3 py-1 text-xs font-black ${
                  project.status === "Hoan thanh"
                    ? "border-emerald-700 bg-emerald-200 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-900/40 dark:text-emerald-200"
                    : "border-amber-700 bg-amber-200 text-amber-900 dark:border-amber-500 dark:bg-amber-900/40 dark:text-amber-200"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="leading-7 text-gray-700 dark:text-gray-200">
              {project.shortDescription}
            </p>

            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300">
              Tác giả: {project.author}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border-2 border-emerald-700 bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-900 dark:border-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="mt-5 inline-flex items-center rounded-sm border-2 border-emerald-800 bg-emerald-500 px-3 py-2 text-sm font-black text-emerald-950 transition hover:bg-emerald-400 dark:border-emerald-400 dark:bg-emerald-400 dark:text-emerald-950"
            >
              Xem chi tiết công trình
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
