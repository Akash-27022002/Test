import { Mail, Linkedin, Github, Menu } from 'lucide-react';

export default function Navbar({ data, theme, setTheme }) {
  const toggleMobile = () => {
    const el = document.getElementById('mnav');
    if (el) el.classList.toggle('hidden');
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-200 outline outline-1 outline-neutral-300 transition group-hover:outline-neutral-400 dark:bg-neutral-800 dark:outline-neutral-700 dark:group-hover:outline-neutral-600">
              <span className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-white">{data.initials}</span>
            </div>
            <span className="text-sm text-neutral-700 transition group-hover:text-black dark:text-neutral-300 dark:group-hover:text-white">{data.name}</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {['about', 'skills', 'experience', 'projects', 'education', 'profiles', 'contact'].map((anchor) => (
              <a key={anchor} href={`#${anchor}`} className="text-sm text-neutral-600 underline-offset-4 transition hover:text-black hover:underline dark:text-neutral-300 dark:hover:text-white">
                {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 md:hidden" onClick={toggleMobile}>
            <Menu className="h-5 w-5" /> Menu
          </button>
        </div>
        {/* Mobile nav */}
        <div id="mnav" className="hidden pb-4 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {['about', 'skills', 'experience', 'projects', 'education', 'profiles', 'contact'].map((anchor) => (
              <a key={anchor} href={`#${anchor}`} className="rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900">
                {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"><Mail className="h-4 w-4" />Email</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100/60 px-3 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"><Github className="h-4 w-4" />GitHub</a>
          </div>
        </div>
      </div>
    </header>
  );
}