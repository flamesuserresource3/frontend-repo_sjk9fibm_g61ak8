import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight">Choirul Garin</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:border-white/25 hover:bg-white/10">
          Let’s talk
        </a>
      </div>
    </header>
  );
}
