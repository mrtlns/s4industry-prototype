'use client';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'O nas', href: '/#about' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Oferta', href: '/oferta' },
  { name: 'Kontakt', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsMobileOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) {
        setIsMobileOpen(false);
        return; 
    }

    if (pathname === '/') {
        e.preventDefault();
        setIsMobileOpen(false);
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        setIsMobileOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled 
          ? 'bg-red-600 shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <Link href="/" className="relative block cursor-pointer group">
           <div className={`relative transition-all duration-300 ${
             isScrolled ? 'w-36 h-10' : 'w-48 h-12 md:w-56 md:h-14'
           }`}>
             <Image 
               src="/logo1.png" 
               alt="S4 Industry Logo" 
               fill 
               className="object-contain object-left" 
               priority
             />
           </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-gray-200 transition-colors cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-red-700 border-t border-red-500 p-4 shadow-2xl md:hidden flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-lg font-medium py-2 border-b border-red-500 hover:text-red-200 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}