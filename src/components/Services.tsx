'use client';
import { FadeIn } from './ui/FadeIn';
import { Settings, Zap, Combine, Utensils } from 'lucide-react';

// Ikony dobrane do usług
const icons = [Settings, Zap, Combine, Utensils];

export default function Services({ services }: { services: any[] }) {
  return (
    <section className="py-24 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.serviceTitle}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.serviceDescription}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}