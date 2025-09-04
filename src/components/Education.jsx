import * as Icons from 'lucide-react';

export default function Education({ data }) {
  return (
    <section id="education" className="border-t border-neutral-200/60 py-12 sm:py-16 dark:border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">Education</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.education.map((edu) => {
            const Icon = Icons[edu.icon] || Icons.GraduationCap;
            return (
              <div key={edu.degree} className="rounded-2xl border border-neutral-200 bg-neutral-100/40 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">{edu.degree}</h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{edu.period}</span>
                </div>
                <div className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{edu.place}</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <Icon className="h-4 w-4" /> {edu.meta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}