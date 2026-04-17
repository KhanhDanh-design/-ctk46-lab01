import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="rounded-none border-4 border-stone-700 bg-stone-100 p-7 shadow-[6px_6px_0_0_#44403c]">
      <Link
        href="/projects"
        className="inline-flex items-center rounded-none border-2 border-stone-700 bg-lime-400 px-3 py-2 text-sm font-black text-stone-900 transition hover:bg-lime-300"
      >
        ← Quay lại khu dự án
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-stone-600">
        <span>ID: {project.id}</span>
        <span className="text-stone-400">|</span>
        <span>{project.author}</span>
      </div>

      <h1 className="mt-2 text-3xl font-black text-stone-900">
        {project.name}
      </h1>

      <p className="mt-4 rounded-none border-2 border-stone-600 bg-stone-200 px-3 py-2 text-sm text-stone-700">
        Trạng thái hiện tại:{" "}
        <span className="font-black">{project.status}</span>
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-none border-2 border-stone-600 bg-stone-200 px-2.5 py-1 text-xs font-bold text-stone-700"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-4 leading-7 text-stone-700">
        {project.detail.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
