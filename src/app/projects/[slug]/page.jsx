import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { getProjectBySlug, projectsData } from "../projectData";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-20">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Project not found
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            The requested project case study does not exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-500 transition"
          >
            <FaArrowLeft /> Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-purple-600">
              Case Study
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={project.liveLink}
              target="_blank"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Live Site
            </Link>
            <Link
              href={project.githubClient}
              target="_blank"
              className="rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-slate-100 dark:border-slate-300 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Source Code
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Problem</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Impact</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.impact}
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">Key highlights</h2>
              <ul className="grid gap-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-3xl bg-slate-100 p-5 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-bold mb-4">Tech stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Link
              href="/"
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
            >
              <FaArrowLeft /> Back to portfolio
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
