import { Check, Target } from 'lucide-react';

export default function About({ data }) {
  return (
    <section id="about" className="py-12 sm:py-16 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.8fr] gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About</h2>
            <p className="mt-4 text-neutral-300">{data.about}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <div className="text-sm text-neutral-400">Location</div>
                <div className="mt-1 text-neutral-200">{data.location}</div>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <div className="text-sm text-neutral-400">Experience</div>
                <div className="mt-1 text-neutral-200">Feb 2023 – Present</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-semibold tracking-tight">What I’m great at</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              {[
                'Designing performant REST APIs and event-driven microservices.',
                'Security: AuthN/AuthZ, JWT, RBAC, and best practices.',
                'Observability, CI/CD pipelines, Dockerized deployments.',
                'Testing mindset: unit tests (Jest/JUnit), reliability and maintainability.'
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" /><span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
