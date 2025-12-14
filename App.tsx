
import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-primary selection:bg-white selection:text-accent font-sans">
      <AnimatePresence mode='wait'>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="relative z-10">
            <Navbar />
            
            <main>
              {/* Hero Section - Full Screen */}
              <section id="home" className="relative w-full">
                <Hero />
              </section>

              {/* Content sections */}
              <div className="relative bg-primary">
                {/* Decorative background glow */}
                 <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32 pt-32">
                  <section id="about" className="scroll-mt-32">
                    <About />
                  </section>

                  <section id="skills" className="scroll-mt-32">
                    <Skills />
                  </section>
                  
                  <section id="projects" className="scroll-mt-32">
                    <Projects />
                  </section>

                  <section id="contact" className="scroll-mt-32">
                    <Contact />
                  </section>
                </div>
              </div>
            </main>

            <ChatWidget />
            
            <footer className="py-12 text-center text-stone-500 text-sm relative z-10 bg-stone-950 border-t border-stone-900">
              <p className="font-serif italic text-lg text-stone-400 mb-2">Designed by DataFolio</p>
              <p>© {new Date().getFullYear()} Alex Chen. All Rights Reserved.</p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
