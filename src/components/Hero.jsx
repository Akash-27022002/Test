import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Send, Download, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Hero({ data }) {
  // Setup for the typewriter effect with new skills
  const [text] = useTypewriter({
    words: ['Java', 'Spring Boot', 'Node.js', 'Django', 'Microservices', 'REST APIs', 'CI/CD'],
    loop: {}, // An empty object means it will loop indefinitely
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 2000, // Pause for 2s after typing a word
  });

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/60 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              {data.status}
            </div>
            
            <div className="flex items-center gap-5 mt-6">
              <div className="w-1 self-stretch bg-gradient-to-b from-indigo-500 to-transparent rounded-full"></div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
                  Hi, I'm <span className="text-indigo-500">{data.name}</span>
                </h1>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-neutral-600 dark:text-neutral-400">
                  I build with
                </h2>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold text-indigo-500">
                  <span>{text}</span>
                  <Cursor cursorStyle='|' cursorColor='#6366f1' />
                </h2>
              </div>
            </div>

            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              A passionate backend developer focused on building resilient and scalable systems.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white outline outline-1 -outline-offset-1 outline-black/10 transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:outline-white/10">
                <Send className="h-4 w-4" /> Contact Me
              </a>
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-4 py-2.5 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-700/80 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <div className="inline-flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                <a href={`tel:${data.phone}`} className="inline-flex items-center gap-1.5 transition hover:text-black dark:hover:text-white">
                  <Phone className="h-4 w-4" /> {data.phone}
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">|</span>
                <a href={`mailto:${data.email}`} className="inline-flex items-center gap-1.5 transition hover:text-black dark:hover:text-white">
                  <Mail className="h-4 w-4" /> {data.email}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Node.js', 'Django', 'Microservices', 'REST API', 'Docker', 'CI/CD'].map((chip) => (
                <span key={chip} className="rounded-full border border-neutral-300 bg-neutral-100/60 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">{chip}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100/40 p-2 dark:border-neutral-800 dark:bg-neutral-900/40">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto-format&fit=crop" alt="Workspace" loading="lazy" className="h-64 w-full rounded-xl object-cover md:h-[380px]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 backdrop-blur sm:flex dark:border-neutral-800 dark:bg-neutral-900/80">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-neutral-700 dark:text-neutral-300">Auth, RBAC & Security-first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

