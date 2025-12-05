'use client';
import { FadeIn } from './ui/FadeIn';
import { Settings, Zap, Combine, Utensils, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const icons = [Settings, Zap, Combine, Utensils];

export default function Services({ services }: { services: any[] }) {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Oferta
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Specjalizujemy się w
            </h2>
          </div>
        </FadeIn>

        {/* Сетка карточек */}
        {/* Добавил 'items-stretch' чтобы карточки тянулись по высоте */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 auto-rows-fr">
          {services.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              // Добавил 'h-full'
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start h-full">
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.serviceTitle}</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3 flex-grow">
                    {item.serviceDescription}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex justify-center">
            <Link 
              href="/oferta" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all shadow-lg shadow-red-600/20 hover:scale-105"
            >
              Dowiedz się więcej
              <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}