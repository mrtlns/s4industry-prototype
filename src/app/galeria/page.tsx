import Header from '@/components/Header';
import Contact from '@/components/Contact';
import DetailedGallery from '@/components/DetailedGallery';
import { getContactData } from '@/lib/wordpress'; 

export const revalidate = 60;

const STATIC_GALLERY_IMAGES = [
  "/firma/1.png",
  "/firma/2.png",
  "/firma/3.png",
  "/firma/4.png",
  "/firma/5.png",
  "/firma/6.png",
  "/firma/7.png",
  "/firma/8.png",
  "/firma/9.png",
  "/firma/10.png",
  "/firma/11.png",
  "/firma/12.png",
  "/firma/13.png",
  "/firma/14.png",
  "/firma/15.png",
  "/firma/16.jpg",
  "/firma/17.png",
];

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

export default async function GalleryPage() {

  const wpData: any = await getContactData();

  const wpImages = wpData?.gallery || [];

  const finalGalleryImages = [...STATIC_GALLERY_IMAGES, ...wpImages];

  const contactInfo = {
    address: wpData?.officeAddress || FALLBACK_CONTACT.address,
    phone: wpData?.phoneMain || FALLBACK_CONTACT.phone,
    phone2: wpData?.phoneSecondary || FALLBACK_CONTACT.phone2,
    email: wpData?.emailAddress || FALLBACK_CONTACT.email,
    hours: FALLBACK_CONTACT.hours,
    invoiceData: {
      name: wpData?.invoiceData?.companyName || FALLBACK_CONTACT.invoiceData.name,
      address: wpData?.invoiceData?.street || FALLBACK_CONTACT.invoiceData.address,
      postcode: wpData?.invoiceData?.postcodeCity || FALLBACK_CONTACT.invoiceData.postcode,
      nip: wpData?.invoiceData?.nip || FALLBACK_CONTACT.invoiceData.nip,
      regon: wpData?.invoiceData?.regon || FALLBACK_CONTACT.invoiceData.regon,
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-slate-900 pt-32 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Przegląd naszych projektów i parku maszynowego.
        </p>
      </div>

      <DetailedGallery images={finalGalleryImages} />
      
      <Contact data={contactInfo} />
    </main>
  );
}