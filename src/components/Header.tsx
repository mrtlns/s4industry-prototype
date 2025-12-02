'use client';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'O nas', href: '#about' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Oferta', href: '#services' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${targetId} not found`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Логотип */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-red-600 text-white font-bold p-2 rounded text-lg tracking-widest border-2 border-white group-hover:bg-red-700 transition-colors">
            S4
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            INDUSTRY
          </span>
        </a>

        {/* Десктоп Меню */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-red-600 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Мобильная кнопка */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className={isScrolled ? 'text-black' : 'text-white'} /> : <Menu className={isScrolled ? 'text-black' : 'text-white'} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-xl md:hidden flex flex-col gap-4"
        >
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-800 text-lg font-medium py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}