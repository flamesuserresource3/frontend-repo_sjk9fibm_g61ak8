import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div id="home" className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Choirul Garin — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
