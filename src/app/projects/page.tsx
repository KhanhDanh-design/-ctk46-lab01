import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-none border-4 border-stone-700 bg-linear-to-b from-lime-300 to-lime-500 p-7 shadow-[6px_6px_0_0_#292524]">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-800">
          Minecraft Projects
        </p>
        <h1 className="mt-2 text-3xl font-black text-stone-900 sm:text-4xl">
          Danh sách công trình thế giới khối vuông
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-stone-800">
          Các dự án cá nhân của Danh Nguyen Tuan Khanh - 2212390 xoay quanh xây
          dựng, redstone và hệ thống tự động trong Minecraft.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-none border-4 border-stone-700 bg-stone-100 p-6 shadow-[6px_6px_0_0_#44403c] transition hover:-translate-y-0.5"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-lg font-black text-stone-900">
                {project.name}
              </h2>
              <span
                className={`rounded-none border-2 px-3 py-1 text-xs font-black ${
                  project.status === "Hoan thanh"
                    ? "border-lime-800 bg-lime-200 text-lime-900"
                    : "border-amber-800 bg-amber-200 text-amber-900"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="leading-7 text-stone-700">{project.shortDescription}</p>

            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-stone-600">
              Tác giả: {project.author}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-none border-2 border-stone-600 bg-stone-200 px-2.5 py-1 text-xs font-bold text-stone-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="mt-5 inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
            >
              Xem chi tiết công trình
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
