import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            I'm Garin — UI/UX Designer crafting intuitive, modern experiences.
          </h1>
          <p className="max-w-xl text-white/70">
            5+ years designing user-centered products across Fintech, HRIS, and Creative Agencies.
            I turn complex ideas into clean, effective interfaces that drive real business value.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-white/90"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-white/25 hover:bg-white/10"
            >
              See my work <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-white/80">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Screens delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm">Products shipped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5+ yrs</div>
              <div className="text-sm">Design experience</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[600px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
