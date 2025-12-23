import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { getContactData } from '@/lib/wordpress'; 

export const revalidate = 60;

const STATIC_DATA = {
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
  ]
};

// DANE ZAPASOWE DLA KONTAKTU
const FALLBACK_CONTACT = {
  address: "Tatów 5GE, 76-039 Biesiekierz",
  phone: "+48 792 782 777",
  phone2: "509 261 395",
  email: "s4i.poland@gmail.com",
  hours: "Poniedziałek - Piątek: 8:00 - 16:00",
  invoiceData: {
    name: "S4 Industry Dawid Zieliński",
    address: "Ul. Żytnia 34E/10",
    postcode: "75-818 Koszalin",
    nip: "673 178 31 55",
    regon: "388286174"
  }
};

export default async function Home() {
  const wpContactData: any = await getContactData();

  const contactInfo = {
    address: wpContactData?.officeAddress || FALLBACK_CONTACT.address,
    phone: wpContactData?.phoneMain || FALLBACK_CONTACT.phone,
    phone2: wpContactData?.phoneSecondary || FALLBACK_CONTACT.phone2,
    email: wpContactData?.emailAddress || FALLBACK_CONTACT.email,
    hours: FALLBACK_CONTACT.hours,
    invoiceData: {
      name: wpContactData?.invoiceData?.companyName || FALLBACK_CONTACT.invoiceData.name,
      address: wpContactData?.invoiceData?.street || FALLBACK_CONTACT.invoiceData.address,
      postcode: wpContactData?.invoiceData?.postcodeCity || FALLBACK_CONTACT.invoiceData.postcode,
      nip: wpContactData?.invoiceData?.nip || FALLBACK_CONTACT.invoiceData.nip,
      regon: wpContactData?.invoiceData?.regon || FALLBACK_CONTACT.invoiceData.regon,
    }
  };

  const sliderImages = [
    "/firma/1.png", 
    "/firma/2.png",
    "/firma/3.png",
    "/firma/4.png",
    "/firma/5.png"
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <Hero data={STATIC_DATA} />
      <About data={STATIC_DATA} />
      <Gallery images={sliderImages} />
      <Services services={STATIC_DATA.services} />
      <Contact data={contactInfo} />
    </main>
  );
}