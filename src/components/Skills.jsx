import { Code, Boxes, Wrench, Database, Cpu, Ship } from 'lucide-react';

const SectionCard = ({ title, icon: Icon, items }) => (
  <div className="rounded-xl border border-neutral-200 bg-neutral-100/40 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-indigo-400" />
      <h3 className="text-base font-semibold tracking-tight text-black dark:text-white">{title}</h3>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it} className="rounded-md border border-neutral-300 bg-neutral-200/70 px-2.5 py-1 text-xs text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800/70 dark:text-neutral-200">{it}</span>
      ))}
    </div>
  </div>
);

export default function Skills({ data }) {
  return (
    <section id="skills" className="border-t border-neutral-200/60 py-12 sm:py-16 dark:border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">Skills</h2>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Constantly learning</span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SectionCard title="Languages" icon={Code} items={data.skills.languages} />
          <SectionCard title="Frameworks" icon={Boxes} items={data.skills.frameworks} />
          <SectionCard title="Tools" icon={Wrench} items={data.skills.tools} />
          <SectionCard title="Databases" icon={Database} items={data.skills.databases} />
          <SectionCard title="Advanced" icon={Cpu} items={data.skills.advanced} />
          <SectionCard title="DevOps & Deployment" icon={Ship} items={data.skills.devops} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.strengths.map((s) => (
            <div key={s.label} className="rounded-xl border border-neutral-200 bg-neutral-100/40 p-5 dark:border-neutral-800 dark:bg-neutral-900/40">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{s.label}</span>
                <span className="text-xs text-neutral-500">{s.tag}</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-md bg-neutral-200 dark:bg-neutral-800">
                <div className={`h-2 rounded-md bg-gradient-to-r ${s.gradient}`} style={{width: `${s.level}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}