import { Mail, Phone, Linkedin, Github, ShieldCheck, Send } from 'lucide-react';

export default function Contact({ data }) {
  return (
    <section id="contact" className="border-t border-neutral-200/60 py-12 sm:py-16 dark:border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">Let’s build something</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Reach out for backend roles, collaborations, or consulting.</p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Mail className="h-5 w-5" /> {data.email}
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Phone className="h-5 w-5" /> {data.phone}
              </a>
              <a href={data.linkedin} target="_blank" className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href={data.github} target="_blank" className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-100/40 p-6 dark:border-neutral-800 dark:bg-neutral-900/40">
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-500 dark:text-neutral-400">Your name</label>
                  <input type="text" placeholder="John Doe" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-indigo-500/40 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:placeholder-neutral-600 dark:focus:border-neutral-700" />
                </div>
                <div>
                  <label className="text-sm text-neutral-500 dark:text-neutral-400">Email</label>
                  <input type="email" placeholder="name@company.com" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-indigo-500/40 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:placeholder-neutral-600 dark:focus:border-neutral-700" />
                </div>
              </div>
              <div>
                <label className="text-sm text-neutral-500 dark:text-neutral-400">Message</label>
                <textarea rows="4" placeholder="Tell me about your project…" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-indigo-500/40 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:placeholder-neutral-600 dark:focus:border-neutral-700"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="h-4 w-4" /> Your info is sent via email.
                </div>
                <button type="button" onClick={() => window.location.href=`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white outline outline-1 -outline-offset-1 outline-black/10 transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:outline-white/10">
                  <Send className="h-4 w-4" /> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}