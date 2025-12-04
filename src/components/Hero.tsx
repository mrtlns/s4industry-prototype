'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ data }: { data: any }) {
  const title = data?.heroTitle || "S4 Industry";
  const subtitle = data?.heroSubtitle || "Solutions for Industry";
  const bgImage = data?.heroBackgroundImage?.sourceUrl || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Tło */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        {/* Ciemny overlay */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-10 inline-flex items-center justify-center px-8 py-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl ring-1 ring-white/5">
             <div className="relative w-48 h-12 md:w-64 md:h-16"> 
               <Image 
                 src="/logo1.png" 
                 alt="S4 Industry Logo"
                 fill
                 className="object-contain" 
                 priority
               />
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>

          <motion.button 
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-colors shadow-lg shadow-red-600/30 cursor-pointer"
          >
            {data?.heroCtaText || "Skontaktuj się z nami"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}