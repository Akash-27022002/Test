import { Sparkles, Users, Beaker, GitCommit, Box as Container, Shield, KeyRound, Trophy, Activity, Lock, GitBranch } from 'lucide-react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Work Experience</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_.5fr] gap-10">
          <div>
            {data.experience.map((job, idx) => (
              <div key={idx} className={`relative pl-6 ${idx < data.experience.length - 1 ? 'pb-8' : ''}`}>
                <div className="absolute left-0 top-1.5 h-full w-px bg-neutral-800"></div>
                <div className={`absolute -left-1 top-1 h-2.5 w-2.5 rounded-full ${idx === 0 ? 'bg-indigo-400 ring-4 ring-indigo-500/10' : 'bg-emerald-400 ring-4 ring-emerald-500/10'}`}></div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{job.role} · {job.company}</h3>
                  <span className="text-xs text-neutral-400">{job.period}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-cyan-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 h-max">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h4 className="text-base font-semibold tracking-tight">Highlights</h4>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2"><Activity className="mt-0.5 h-4 w-4 text-amber-400" /><span>Horizontal scaling with load balancing and service discovery.</span></li>
              <li className="flex items-start gap-2"><Lock className="mt-0.5 h-4 w-4 text-amber-400" /><span>Security-first delivery with encrypted channels and hardened endpoints.</span></li>
              <li className="flex items-start gap-2"><GitBranch className="mt-0.5 h-4 w-4 text-amber-400" /><span>Automated testing and deployments via pipelines.</span></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
