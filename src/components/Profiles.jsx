import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default function Profiles({ data }) {
  return (
    <section id="profiles" className="py-12 sm:py-16 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Coding Profiles</h2>
          <span className="text-xs text-neutral-400">Proof of problem solving</span>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.profiles.map((p) => {
            const Icon = Icons[p.icon] || Icons.BadgeCheck;
            return (
              <a key={p.site} href={p.href} target="_blank" className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 hover:bg-neutral-900 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${p.color}`} />
                    <h3 className="text-base font-semibold tracking-tight group-hover:text-white">{p.site}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-neutral-300">{p.subtitle}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
