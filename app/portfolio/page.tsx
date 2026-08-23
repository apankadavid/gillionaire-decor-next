import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const gallery = [
  { src: "/service-curtains.jpeg", alt: "Custom curtains installed in a living room", caption: "Custom Curtains" },
  { src: "/blind-venetian.jpeg", alt: "Venetian blinds installed", caption: "Venetian Blinds" },
  { src: "/blind-zebra.jpeg", alt: "Zebra blinds installed", caption: "Zebra Blinds" },
  { src: "/blind-vertical.jpeg", alt: "Vertical blinds installed", caption: "Vertical Blinds" },
  { src: "/blind-multi.jpeg", alt: "Multiple blind styles in one space", caption: "Blind Combinations" },
  { src: "/commercial-office.jpeg", alt: "Curtains installed in a commercial office space", caption: "Commercial Space" },
];

export default function Portfolio() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-3xl font-playfair mb-4">See the Difference</h2>
        <p>
          Explore some of our recent curtain, blind, and window-treatment
          projects — from residential living rooms to commercial spaces
          across Accra.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div key={item.src} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative w-full h-56">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
              <p className="p-4 font-manrope font-semibold text-sm">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-2xl font-playfair mb-4">Start Your Own Project</h2>
        <p className="mb-6">
          Every space is different. Let&apos;s talk about how we can transform yours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold"
        >
          Contact Gillionaire Decor
        </a>
      </section>

      <Footer />
    </div>
  );
}