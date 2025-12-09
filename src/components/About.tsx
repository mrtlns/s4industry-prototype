'use client';
import { FadeIn } from './ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

export default function About({ data }: { data: any }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Текст */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <FadeIn>
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                O nas
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {data.aboutTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {data.aboutText}
              </p>
              
              {/* ФИКС СПИСКА: Используем grid для идеального выравнивания */}
              <div className="grid grid-cols-1 gap-4">
                {data.aboutList.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {/* Иконка зафиксирована, не сжимается */}
                    <div className="mt-1 flex-shrink-0 text-red-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    {/* Текст */}
                    <span className="text-gray-800 font-medium text-lg leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Картинка */}
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://techspaw.com.pl/wp-content/uploads/2021/02/kospel4.jpg" 
                  alt="Engineering" 
                  className="w-full h-full object-cover aspect-square md:aspect-video"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-xl -z-10"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}