
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-primary/90 backdrop-blur-md py-4 border-stone-800' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-3 items-center">
          
          {/* Left: Brand */}
          <div className="justify-self-start">
            <a href="#" className="text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors">
              Alex Chen
            </a>
          </div>

          {/* Center: Menu Label */}
          <div className="justify-self-center">
             <button 
              onClick={() => setIsOpen(true)}
              className="group flex flex-col items-center gap-1 cursor-pointer"
             >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white group-hover:text-accent transition-colors">Menu</span>
                <span className="w-12 h-[1px] bg-white group-hover:bg-accent transition-colors"></span>
             </button>
          </div>

          {/* Right: Contact */}
          <div className="justify-self-end">
            <a 
              href="#contact" 
              className="text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-950 z-[60] transition-all duration-700 ease-[0.76, 0, 0.24, 1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
        >
            <X className="w-8 h-8" />
        </button>

        <div className="h-full flex flex-col items-center justify-center space-y-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-5xl md:text-7xl font-serif font-medium text-transparent text-stroke hover:text-white hover:text-stroke-0 transition-all duration-300"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
