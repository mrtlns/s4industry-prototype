import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';

export const revalidate = 60; 

const MOCK_DATA = {
  heroTitle: "",
  heroSubtitle: "Innowacje w Produkcji. Od pomysłu aż po wdrożenie.",
  heroCtaText: "Skontaktuj się",
  heroBackgroundImage: {
    sourceUrl: "https://p-zm.com/wp-content/uploads/2021/09/AdobeStock_273751484-linia-produkcyjna-1024x683.jpg"
  },
  
  aboutTitle: "S4 Industry – Innowacje w Produkcji",
  aboutText: "S4 Industry zostało założone w 2021 roku, aby odpowiedzieć na potrzeby firm z branży elektrotechnicznej, meblowej oraz spożywczej. Dzięki wieloletniemu doświadczeniu zdobytemu w firmach produkcyjnych, jesteśmy w stanie ustalić najlepszą koncepcję i prowadzić projekty od pomysłu aż po wdrożenie.",
  aboutList: [
    "Urządzenia produkcyjne",
    "Zautomatyzowane przyrządy montażowe i spawalnicze",
    "Stanowiska testujące",
    "Optymalizacja procesów produkcyjnych",
    "Małe sprawdziany produkcyjne „gauge”",
    "Doradztwo technologiczne"
  ],

  services: [
    { 
      serviceTitle: "Przyrządy montażowe", 
      serviceDescription: "Wspierają manualne czynności produkcyjne oraz stanowią kluczowy element linii. Projektowane w oparciu o indywidualne wymagania klienta." 
    },
    { 
      serviceTitle: "Przyrządy spawalnicze", 
      serviceDescription: "Przeznaczone do pracy w trybie półautomatycznym. Kontrolują kompletność oraz poprawność złożenia komponentów." 
    },
    { 
      serviceTitle: "Przenośniki taśmowe", 
      serviceDescription: "Wykorzystywane do transportu komponentów. Muszą spełniać najwyższe standardy bezpieczeństwa ze względu na kontakt z operatorami." 
    },
    { 
      serviceTitle: "Przemysł spożywczy", 
      serviceDescription: "Rozwiązania zwiększające efektywność procesów przy zachowaniu szczególnej dbałości o higienę i dostępność urządzeń." 
    }
  ],

  contactInfo: {
    address: "Tatów 5GE, 76-039 Biesiekierz",
    phone: "+48 792 782 777",
    phone2: "+48 509 261 395",
    email: "s4i.poland@gmail.com",
    hours: "Poniedziałek - Piątek: 8:00 - 16:00",
    invoiceData: {
      name: "S4 Industry Dawid Zieliński",
      address: "Ul. Żytnia 34E/10",
      postcode: "75-818 Koszalin",
      nip: "673 178 31 55",
      regon: "388286174"
    }
  }
};

async function getData() {
  return MOCK_DATA;
}

export default async function Home() {
  const landingData = await getData();

  return (
    <main className="min-h-screen bg-white">
      {/* Навигация */}
      <Header />
      
      {/* Секции */}
      <Hero data={landingData} />
      <About data={landingData} />
      <Gallery /> {/* Новая секция Галереи */}
      <Services services={landingData.services} />
      <Contact data={landingData.contactInfo} />
    </main>
  );
}