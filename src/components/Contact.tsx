'use client';
import { FadeIn } from './ui/FadeIn';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact({ data }: { data: any }) {
  // Adres do zapytania Google Maps
  const mapQuery = encodeURIComponent("Tatów 5GE, 76-039 Biesiekierz");

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Tło ozdobne */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Dane kontaktowe */}
          <div>
            <FadeIn>
              <h2 className="text-4xl font-bold mb-2">Skontaktuj się z nami</h2>
              <p className="text-slate-400 mb-10">Jesteśmy do Twojej dyspozycji.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adres</h3>
                    <p className="text-slate-300">{data.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                    <p className="text-slate-300">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">{data.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Godziny otwarcia</h3>
                    <p className="text-slate-300">{data.hours}</p>
                  </div>
                </div>

                {/* --- SOCJALE --- */}
                <div className="pt-6 border-t border-gray-700 mt-6">
                   <h3 className="text-lg font-semibold mb-4">Znajdź nas</h3>
                   <div className="flex gap-4">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors group">
                        <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-pink-600 transition-colors group">
                        <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </a>
                   </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Mapa */}
          <div className="h-full min-h-[400px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative shadow-2xl">
             <FadeIn delay={0.2} className="h-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }}
                  loading="lazy" 
                  allowFullScreen
                  // Usunąłem klasę 'grayscale', żeby pinezka była czerwona i widoczna
                  className="w-full h-full rounded-2xl"
                  // Tutaj jest poprawiony link generujący pinezkę z adresu
                  src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&output=embed&iwloc=near`}
                ></iframe>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}