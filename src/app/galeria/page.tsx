import Header from '@/components/Header';
import Contact from '@/components/Contact';
import DetailedGallery from '@/components/DetailedGallery';

// Twoje zdjęcia z folderu public
const GALLERY_IMAGES = [
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
  "/firma/15.png"
];

const CONTACT_DATA = {
    address: "Tatów 5GE, 76-039 Biesiekierz",
    phone: "+48 792 782 777",
    email: "s4i.poland@gmail.com",
    hours: "Poniedziałek - Piątek: 8:00 - 16:00"
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Header podstrony */}
      <div className="bg-slate-900 pt-32 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Przegląd naszych projektów i parku maszynowego.
        </p>
      </div>

      <DetailedGallery images={GALLERY_IMAGES} />
      <Contact data={CONTACT_DATA} />
    </main>
  );
}