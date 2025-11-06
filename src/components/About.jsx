import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="text-white/80 leading-relaxed">
            I’m Garin, a passionate UI/UX Designer with 5+ years of experience creating user-centered
            digital experiences that balance aesthetics, functionality, and seamless interactions.
            Over my career, I’ve delivered 500+ screens across 20+ products in diverse industries,
            including Fintech, HRIS, and Creative Agencies.
          </p>
          <p className="text-white/80 leading-relaxed">
            I specialize in turning complex ideas into intuitive, impactful designs that not only look
            great but also drive real business value. My strengths include visual design delivery, design
            systems, and effective communication, ensuring user experience is conveyed clearly and
            consistently.
          </p>
          <p className="text-white/80 leading-relaxed">
            I thrive in both collaborative teams and independent roles, bringing reliability,
            responsibility, and leadership when needed. Adaptable and quick to learn, I approach every
            project with enthusiasm and a focus on delivering meaningful results.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 text-sm font-medium text-white/70">Core strengths</h3>
            <ul className="list-disc pl-5 text-sm text-white/85 space-y-1">
              <li>Visual design & delivery</li>
              <li>Design systems & documentation</li>
              <li>UX flows & interaction patterns</li>
              <li>Cross-functional collaboration</li>
              <li>Clear, structured communication</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-2 text-sm font-medium text-white/70">Industries</h3>
            <div className="flex flex-wrap gap-2">
              {['Fintech','HRIS','Creative Agencies','B2B SaaS','E-commerce'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
