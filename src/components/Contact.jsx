import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // For now this is a front-end only submission. In a future step we can wire to backend.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20 text-white">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Let’s build something great</h2>
        <p className="mt-2 text-white/70">Tell me a bit about your project and I’ll reach out shortly.</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
        </div>
        <input placeholder="Company or role" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
        <textarea required rows={5} placeholder="Tell me about your goals, problem, or idea" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20" />
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-white/90">
          <Send className="h-4 w-4" /> Send message
        </button>
        {status && <p className="text-sm text-white/70">{status}</p>}
      </form>

      <div className="mt-10 flex items-center justify-center gap-6 text-white/70">
        <a href="mailto:hello@garin.design" className="inline-flex items-center gap-2 hover:text-white">
          <Mail className="h-4 w-4" /> hello@garin.design
        </a>
      </div>
    </section>
  );
}
