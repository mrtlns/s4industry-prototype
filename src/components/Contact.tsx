'use client';
import { FadeIn } from './ui/FadeIn';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, FileText } from 'lucide-react';

export default function Contact({ data }: { data: any }) {
  // Używamy współrzędnych geograficznych Tatowa, aby wymusić "Szpilkę"
  // Adres tekstowy czasami pokazuje tylko obszar wioski bez kropki.
  const lat = "54.1722";
  const lng = "16.0822";
  
  // Parametr 'q' ze współrzędnymi gwarantuje czerwoną pinezkę w centrum
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=pl&z=12&output=embed`;

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEWA STRONA */}
          <div>
            <FadeIn>
              <h2 className="text-4xl font-bold mb-2">Skontaktuj się z nami</h2>
              <p className="text-slate-400 mb-10">Jesteśmy do Twojej dyspozycji.</p>

              <div className="space-y-8">
                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adres</h3>
                    <p className="text-slate-300">{data.address}</p>
                  </div>
                </div>

                {/* Telefony (Obsługa dwóch numerów) */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefony</h3>
                    <p className="text-slate-300 block">{data.phone}</p>
                    {data.phone2 && (
                      <p className="text-slate-300 block mt-1">{data.phone2}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-600 rounded-lg shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">{data.email}</p>
                  </div>
                </div>

                {/* Godziny */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Godziny otwarcia</h3>
                    <p className="text-slate-300">{data.hours}</p>
                  </div>
                </div>

                {/* --- DANE DO FAKTUROWANIA (NOWE) --- */}
                {data.invoiceData && (
                  <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-xl relative group hover:border-red-600/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="text-red-500 w-5 h-5" />
                      <h3 className="text-lg font-semibold text-white">Dane do fakturowania</h3>
                    </div>
                    <div className="text-slate-300 space-y-1 text-sm font-mono leading-relaxed">
                      <p className="font-bold text-white text-base">{data.invoiceData.name}</p>
                      <p>{data.invoiceData.address}</p>
                      <p>{data.invoiceData.postcode}</p>
                      <div className="mt-3 pt-3 border-t border-slate-700/50">
                        <p>NIP: <span className="text-white">{data.invoiceData.nip}</span></p>
                        <p>REGON: <span className="text-white">{data.invoiceData.regon}</span></p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Media */}
                <div className="pt-6 mt-6">
                   <h3 className="text-lg font-semibold mb-4 text-slate-400">Znajdź nas</h3>
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

          {/* PRAWA STRONA: Mapa */}
          <div className="h-full min-h-[500px] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative shadow-2xl">
             <FadeIn delay={0.2} className="h-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }}
                  loading="lazy" 
                  allowFullScreen
                  className="w-full h-full rounded-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  src={mapSrc}
                ></iframe>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}