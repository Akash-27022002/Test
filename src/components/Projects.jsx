import * as Icons from 'lucide-react';
import { ExternalLink, Github, BookOpen, PlayCircle } from 'lucide-react';

const Card = ({ project }) => {
  const LucideIcon = Icons[project.icon] || Icons.Folder;
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-neutral-100/40 p-5 transition hover:border-neutral-300 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
      <div className="flex items-center gap-2">
        <LucideIcon className="h-5 w-5 text-indigo-400" />
        <h3 className="text-lg font-semibold tracking-tight transition group-hover:text-black dark:group-hover:text-white">{project.title}</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded border border-neutral-300 bg-neutral-200/70 px-2 py-1 text-[11px] text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {project.links?.repo && (
          <a href={project.links.repo} className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"><Github className="h-4 w-4" /> Repo</a>
        )}
        {project.links?.caseStudy && (
          <a href={project.links.caseStudy} className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"><BookOpen className="h-4 w-4" /> Case Study</a>
        )}
        {project.links?.demo && (
          <a href={project.links.demo} className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"><PlayCircle className="h-4 w-4" /> Demo</a>
        )}
      </div>
    </article>
  );
};

export default function Projects({ data }) {
  return (
    <section id="projects" className="border-t border-neutral-200/60 py-12 sm:py-16 dark:border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">Projects</h2>
          <a href={`${data.github}?tab=repositories`} target="_blank" className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white">
            <ExternalLink className="h-4 w-4" /> View all
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((p) => <Card key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}