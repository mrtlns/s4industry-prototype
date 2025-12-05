import Header from '@/components/Header';
import Contact from '@/components/Contact';
import DetailedServices from '@/components/DetailedServices';

const OFFER_DATA = [
    { 
      serviceTitle: "Przyrządy montażowe", 
      serviceDescription: "Przyrządy montażowe mogą wspierać zarówno manualne czynności produkcyjne, jak i stanowić kluczowy element linii produkcyjnej, zapewniając optymalną wydajność przy zachowaniu wymaganej jakości. Te narzędzia są zawsze projektowane w oparciu o indywidualne wymagania klienta dotyczące wydajności, stopnia automatyzacji oraz innych kryteriów.",
      image: "/service-1.png" 
    },
    { 
      serviceTitle: "Przyrządy spawalnicze i zgrzewalnicze", 
      serviceDescription: "Przyrządy spawalnicze oraz zgrzewalnicze są przeznaczone do pracy w trybie półautomatycznym. Mogą być wyposażone w systemy automatyki, które kontrolują kompletność oraz poprawność złożenia komponentów, co ma na celu zapewnienie odpowiedniej jakości oraz bezpieczeństwa operatora.",
      image: "/service-2.png"
    },
    { 
      serviceTitle: "Przenośniki taśmowe", 
      serviceDescription: "Przenośniki taśmowe są wykorzystywane do transportu komponentów w środowisku produkcyjnym. Ze względu na częsty kontakt z operatorami, muszą spełniać najwyższe standardy bezpieczeństwa. Kształt i wymiary przenośników są dostosowywane do indywidualnych wymagań klientów.",
      specialization: "Specjalizujemy się w przenośnikach wznoszących, które wyposażone są w kosz zasypowy, służący do „zasilania” podajników wibracyjnych na liniach produkcyjnych. Oferujemy również przenośniki proste, które są dostępne w naszej ofercie.",
      image: "/service-3.png"
    },
    { 
      serviceTitle: "Rozwiązania dla przemysłu spożywczego", 
      serviceDescription: "Przemysł spożywczy wymaga szczególnej dbałości o higienę oraz dostępność urządzeń. Nasze rozwiązania wielokrotnie zwiększyły efektywność procesów produkcyjnych i zredukowały problemy związane z codzienną obsługą urządzeń.",
      image: "/service-4.png"
    }
];

const CONTACT_DATA = {
    address: "Tatów 5GE, 76-039 Biesiekierz",
    phone: "+48 792 782 777",
    email: "s4i.poland@gmail.com",
    hours: "Poniedziałek - Piątek: 8:00 - 16:00"
};

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="bg-slate-900 pt-32 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nasza Oferta</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Poznaj szczegóły naszych rozwiązań technologicznych.
        </p>
      </div>

      <DetailedServices services={OFFER_DATA} />
      <Contact data={CONTACT_DATA} />
    </main>
  );
}