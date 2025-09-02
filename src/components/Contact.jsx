import React from 'react';
import { Mail, Phone, Linkedin, Github, ShieldCheck, Send } from 'lucide-react';

export default function Contact({ data }) {
  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s build something</h2>
            <p className="mt-3 text-neutral-300">Reach out for backend roles, collaborations, or consulting.</p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition">
                <Mail className="h-5 w-5" /> {data.email}
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition">
                <Phone className="h-5 w-5" /> {data.phone}
              </a>
              <a href={data.linkedin} target="_blank" className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href={data.github} target="_blank" className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-neutral-400">Your name</label>
                  <input type="text" placeholder="John Doe" className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700 transition" />
                </div>
                <div>
                  <label className="text-sm text-neutral-400">Email</label>
                  <input type="email" placeholder="name@company.com" className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700 transition" />
                </div>
              </div>
              <div>
                <label className="text-sm text-neutral-400">Message</label>
                <textarea rows="4" placeholder="Tell me about your project…" className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-neutral-700 transition"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="h-4 w-4" /> Your info is sent via email.
                </div>
                <button type="button" onClick={() => window.location.href=`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-200 transition outline outline-1 -outline-offset-1 outline-white/10">
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
