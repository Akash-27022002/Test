import { ArrowUp } from 'lucide-react';

export default function Footer({ data }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-800 outline outline-1 outline-neutral-700">
              <span className="text-sm font-semibold tracking-tight">{data.initials}</span>
            </div>
            <span className="text-sm text-neutral-400">© {year} {data.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#top" className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition">
              <ArrowUp className="h-4 w-4" /> Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
