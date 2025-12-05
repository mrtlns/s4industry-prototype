import Header from '@/components/Header';
import Contact from '@/components/Contact';
import DetailedGallery from '@/components/DetailedGallery';

const GALLERY_IMAGES = [
  "https://hgrobotics.pl/wp-content/uploads/2021/12/zakrecarka_Easy-Resize.com_-1024x682.jpg", 
  "https://p-zm.com/wp-content/uploads/2021/09/AdobeStock_273751484-linia-produkcyjna.jpg",
  "https://d2yvmenv39glx3.cloudfront.net/images/f-107883-jakie-sa-maszyny-przemyslowe.jpg",
  "https://eshield.pl/wp-content/uploads/2025/07/linie-produkcyjne-i-technologiczne-02-1024x683.jpeg",
  "https://p-zm.com/wp-content/uploads/2021/09/20190206_095259-maszyna-do-skladania-zbiornikow-1024x683.jpg",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1565514020125-99d7f02378c8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80"
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