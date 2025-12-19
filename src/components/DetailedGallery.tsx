'use client';
import { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DetailedGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Nasze realizacje
              </h2>
              <p className="text-gray-500 mt-4">
                Zobacz efekty naszej pracy w różnych sektorach przemysłu.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.05} 
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md border border-gray-100 aspect-[4/3]"
              >
                <div onClick={() => setSelectedImage(src)} className="w-full h-full relative">
                  <Image 
                    src={src} 
                    alt={`Realizacja ${idx + 1}`} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain" 
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}