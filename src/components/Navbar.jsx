import React from 'react';
import { Mail, Linkedin, Github, Menu } from 'lucide-react';

export default function Navbar({ data, theme, setTheme }) {
  const toggleMobile = () => {
    const el = document.getElementById('mnav');
    if (el) el.classList.toggle('hidden');
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-800 outline outline-1 outline-neutral-700 group-hover:outline-neutral-600 transition">
              <span className="text-sm font-semibold tracking-tight">{data.initials}</span>
            </div>
            <span className="text-sm text-neutral-300 group-hover:text-white transition">{data.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {['about','skills','experience','projects','education','profiles','contact'].map(anchor => (
              <a key={anchor} href={`#${anchor}`} className="text-sm text-neutral-300 hover:text-white hover:underline underline-offset-4 transition">
                {anchor.charAt(0).toUpperCase()+anchor.slice(1)}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition">
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <button className="md:hidden inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition" onClick={toggleMobile}>
            <Menu className="h-5 w-5" /> Menu
          </button>
        </div>
        {/* Mobile nav */}
        <div id="mnav" className="md:hidden hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {['about','skills','experience','projects','education','profiles','contact'].map(anchor => (
              <a key={anchor} href={`#${anchor}`} className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition">
                {anchor.charAt(0).toUpperCase()+anchor.slice(1)}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition"><Mail className="h-4 w-4" />Email</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900 transition"><Github className="h-4 w-4" />GitHub</a>
          </div>
        </div>
      </div>
    </header>
  );
}
