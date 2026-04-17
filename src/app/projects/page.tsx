type Project = {
  name: string;
  description: string;
  stack: string[];
  status: "Completed" | "In Progress";
};

const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "Website portfolio cá nhân sử dụng Next.js App Router, responsive và tối ưu SEO cơ bản.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
  },
  {
    name: "Task Management App",
    description:
      "Ứng dụng quản lý công việc với các chức năng CRUD, lọc trạng thái và lưu trữ dữ liệu local.",
    stack: ["React", "Node.js", "Express"],
    status: "In Progress",
  },
  {
    name: "Student Learning Dashboard",
    description:
      "Dashboard theo dõi tiến độ học tập với biểu đồ trực quan và báo cáo theo tuần.",
    stack: ["Next.js", "Chart.js", "PostgreSQL"],
    status: "Completed",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Projects</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Danh sách dự án
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Một vài dự án tiêu biểu mình đã thực hiện trong quá trình học và tự phát
          triển kỹ năng lập trình.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  project.status === "Completed"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="leading-7 text-slate-600">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}