'use client';

import { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import Link from 'next/link';

export default function Gallery({ images = [] }: { images?: string[] }) {
  
  const sliderImages = images.length > 0 ? images : [
     "/firma/1.png", 
     "/firma/2.png",
     "/firma/3.png",
     "/firma/4.png",
     "/firma/5.png"
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
    if (info.offset.x < -50) nextStep();
    else if (info.offset.x > 50) prevStep();
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
              Wybrane Projekty
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative group max-w-5xl mx-auto mb-12">
            
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-gray-100 aspect-video md:aspect-[16/9] lg:h-[600px]">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setDragging(true)}
                onDragEnd={onDragEnd}
                animate={{ x: `-${index * (100 / sliderImages.length)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: `${sliderImages.length * 100}%` }}
                className="flex cursor-grab active:cursor-grabbing h-full"
              >
                {sliderImages.map((src, idx) => (
                  <div 
                    key={idx} 
                    style={{ width: `${100 / sliderImages.length}%` }}
                    className="h-full relative flex-shrink-0"
                  >
                    <img 
                      src={src}
                      alt={`Project ${idx}`}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button onClick={prevStep} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 hover:text-red-600 text-white backdrop-blur-md p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextStep} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 hover:text-red-600 text-white backdrop-blur-md p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="flex justify-center">
            <Link 
              href="/galeria" 
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-red-600 transition-colors group"
            >
              Zobacz pełną galerię
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}