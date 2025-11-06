import React from 'react';
import { ExternalLink } from 'lucide-react';

const works = [
  {
    title: 'Fintech Dashboard',
    desc: 'Modular, data-rich interface for personal finance insights with strong information hierarchy.',
    tags: ['Design System', 'Dashboard', 'Fintech'],
    link: '#'
  },
  {
    title: 'HRIS Mobile App',
    desc: 'End-to-end employee journey with streamlined flows for attendance, payroll, and requests.',
    tags: ['Mobile', 'UX Flows', 'HRIS'],
    link: '#'
  },
  {
    title: 'Agency Website',
    desc: 'Expressive marketing site with playful interactions, balanced with performance and accessibility.',
    tags: ['Marketing', 'Interaction', 'Web'],
    link: '#'
  }
];

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold">Selected Work</h2>
        <a href="#contact" className="text-sm text-white/70 hover:text-white">Let’s collaborate</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((item) => (
          <article key={item.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 aspect-video w-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-900" />
            <h3 className="mb-1 text-lg font-medium">{item.title}</h3>
            <p className="mb-3 text-sm text-white/70">{item.desc}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{t}</span>
              ))}
            </div>
            <a href={item.link} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
              View case <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
