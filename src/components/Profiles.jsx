import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default function Profiles({ data }) {
  return (
    <section id="profiles" className="border-t border-neutral-200/60 py-12 sm:py-16 dark:border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">Coding Profiles</h2>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Proof of problem solving</span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.profiles.map((p) => {
            const Icon = Icons[p.icon] || Icons.BadgeCheck;
            return (
              <a key={p.site} href={p.href} target="_blank" className="group rounded-2xl border border-neutral-200 bg-neutral-100/40 p-5 transition hover:border-neutral-300 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${p.color}`} />
                    <h3 className="text-base font-semibold tracking-tight text-black transition group-hover:text-black dark:text-white dark:group-hover:text-white">{p.site}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:text-black dark:group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.subtitle}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
}