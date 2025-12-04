'use client';
import { FadeIn } from './ui/FadeIn';
import Image from 'next/image';

export default function DetailedServices({ services }: { services: any[] }) {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Pełna Oferta
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Szczegóły naszych usług
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {services.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* ФОТО */}
                <div className="w-full lg:w-1/2">
                  <FadeIn delay={0.2} className="relative group">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                      <Image 
                        src={item.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"} 
                        alt={item.serviceTitle}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className={`absolute -bottom-4 -z-10 w-3/4 h-3/4 bg-red-600/10 rounded-2xl ${isEven ? '-left-4' : '-right-4'}`}></div>
                  </FadeIn>
                </div>

                {/* ТЕКСТ */}
                <div className="w-full lg:w-1/2">
                  <FadeIn>
                    <h3 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                      {item.serviceTitle}
                      <span className="text-red-600">.</span>
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {item.serviceDescription}
                    </p>

                    {item.specialization && (
                      <div className="bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm mt-6">
                        <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">Nasza Specjalizacja</h4>
                        <p className="text-gray-600 text-base italic">
                          {item.specialization}
                        </p>
                      </div>
                    )}
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}