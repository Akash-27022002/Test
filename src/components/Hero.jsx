import React from 'react';
import { Send, Download, Phone, Mail, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ data }) {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-10 items-center py-14 sm:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              {data.status}
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              {data.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-300">
              Backend Developer focused on building resilient systems: Java, Spring Boot, Node.js, Django, Microservices, REST APIs, and CI/CD.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-200 transition outline outline-1 -outline-offset-1 outline-white/10">
                <Send className="h-4 w-4" /> Contact Me
              </a>
              <a href={data.resumeUrl} target="_blank" className="inline-flex items-center gap-2 rounded-md border border-neutral-700/80 bg-neutral-900/60 px-4 py-2.5 text-sm text-neutral-200 hover:border-neutral-600 hover:bg-neutral-900 transition">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <div className="inline-flex items-center gap-3 text-sm text-neutral-300">
                <a href={`tel:${data.phone}`} className="inline-flex items-center gap-1.5 hover:text-white transition">
                  <Phone className="h-4 w-4" /> {data.phone}
                </a>
                <span className="text-neutral-700">|</span>
                <a href={`mailto:${data.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition">
                  <Mail className="h-4 w-4" /> {data.email}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Java','Spring Boot','Node.js','Django','Microservices','REST API','Docker','CI/CD'].map((chip) => (
                <span key={chip} className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">{chip}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 p-2">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop" alt="Workspace" loading="lazy" className="h-64 w-full object-cover rounded-xl md:h-[380px]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 px-3 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-neutral-300">Auth, RBAC & Security-first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
