'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useDragControls, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export default function Gallery({ images = [] }: { images?: string[] }) {
  
  const sliderImages = images.length > 0 ? images : [
     "https://hgrobotics.pl/wp-content/uploads/2021/12/zakrecarka_Easy-Resize.com_-1024x682.jpg", 
     "https://p-zm.com/wp-content/uploads/2021/09/AdobeStock_273751484-linia-produkcyjna.jpg",
     "https://d2yvmenv39glx3.cloudfront.net/images/f-107883-jakie-sa-maszyny-przemyslowe.jpg",
     "https://eshield.pl/wp-content/uploads/2025/07/linie-produkcyjne-i-technologiczne-02-1024x683.jpeg",
     "https://p-zm.com/wp-content/uploads/2021/09/20190206_095259-maszyna-do-skladania-zbiornikow-1024x683.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (dragging) return;

    const timer = setInterval(() => {
      setIndex((pv) => (pv === sliderImages.length - 1 ? 0 : pv + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [index, dragging, sliderImages.length]);

  const nextStep = () => {
    setIndex((pv) => (pv === sliderImages.length - 1 ? 0 : pv + 1));
  };

  const prevStep = () => {
    setIndex((pv) => (pv === 0 ? sliderImages.length - 1 : pv - 1));
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragging(false);
    const threshold = 50; 
    if (info.offset.x < -threshold) {
      nextStep();
    } else if (info.offset.x > threshold) {
      prevStep();
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Realizacje
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Galeria Projektów
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Przesuń, aby zobaczyć więcej przykładów naszych wdrożeń.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative group max-w-5xl mx-auto">
            
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-gray-100 aspect-video md:aspect-[16/9] lg:h-[600px]">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setDragging(true)}
                onDragEnd={onDragEnd}
                animate={{ translateX: `-${index * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex cursor-grab active:cursor-grabbing h-full"
              >
                {sliderImages.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="w-full min-w-full h-full relative"
                  >
                    <img
                      src={src}
                      alt={`Project ${idx}`}
                      className="w-full h-full object-cover pointer-events-none" // pointer-events-none важно для drag
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button 
              onClick={prevStep}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 hover:text-red-600 text-white backdrop-blur-md p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={nextStep}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 hover:text-red-600 text-white backdrop-blur-md p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === index 
                      ? "bg-red-600 w-8" 
                      : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}