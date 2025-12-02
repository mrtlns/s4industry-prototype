'use client';
import { FadeIn } from './ui/FadeIn';

export default function Gallery() {
  const images = [
    // Имитация конвейеров и линий
    "https://images.unsplash.com/photo-1565514020125-99d7f02378c8?auto=format&fit=crop&q=80", 
    // Имитация шкафов управления
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
    // Детали/Механизмы
    "https://images.unsplash.com/photo-1531297461136-82lw3381a724b?auto=format&fit=crop&q=80",
    // 3D печать/прототипы (белые детали)
    "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80" 
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Realizacje
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Galeria Projektów
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Zobacz przykłady naszych rozwiązań: od szaf sterowniczych po skomplikowane linie transportowe.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Первая большая картинка (конвейер) */}
          <FadeIn className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" 
              alt="Main Project" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Linie Produkcyjne</span>
            </div>
          </FadeIn>

          {/* Остальные картинки */}
          {images.map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="relative group overflow-hidden rounded-2xl">
              <img 
                src={src} 
                alt={`Project ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}