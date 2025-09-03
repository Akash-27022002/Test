import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Profiles from './components/Profiles.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import { portfolio } from './data/portfolioData.js';

export default function App() {
  // initialize dark mode (default to dark)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="relative">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      </div>

      <Navbar data={portfolio} theme={theme} setTheme={setTheme} />
      <Hero data={portfolio} />
      <About data={portfolio} />
      <Skills data={portfolio} />
      <Experience data={portfolio} />
      <Projects data={portfolio} />
      <Education data={portfolio} />
      <Profiles data={portfolio} />
      <Contact data={portfolio} />
      <Footer data={portfolio} />
    </div>
  );
}
