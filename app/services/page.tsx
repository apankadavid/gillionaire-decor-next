import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

const services = [
  {
    image: "/service-curtains.jpeg",
    title: "Curtains",
    description: "Custom curtain solutions, fitting, styling, and installation for homes, offices, hotels, and commercial spaces.",
  },
  {
    image: "/service-blinds.jpeg",
    title: "Blinds",
    description: "Venetian, Zebra, Vertical, and Roller blinds — clean, modern light and privacy control for any space.",
  },
  {
    image: "/service-installation.jpeg",
    title: "Installation",
    description: "Professional fitting for curtains, rods, tracks, and all blind types — clean, balanced, properly finished.",
  },
  {
    image: "/service-consultation.jpeg",
    title: "Measurement & Consultation",
    description: "Not sure what your space needs? We measure your windows and help you choose the right style and coverage.",
  },
  {
    image: "/service-repairs.jpeg",
    title: "Repairs & Restoration",
    description: "Damaged sections, loose fittings, or worn curtains — we help restore them instead of replacing unnecessarily.",
  },
  {
    image: "/service-curtain-care.jpeg",
    title: "Curtain Care",
    description: "Professional curtain washing and refreshing to keep your interior looking clean and well maintained.",
  },
];

const blindTypes = [
  { name: "Venetian Blinds", description: "A clean and timeless option offering adjustable light and privacy control." },
  { name: "Zebra Blinds", description: "A contemporary layered design that lets you control light while adding style." },
  { name: "Vertical Blinds", description: "A practical solution for larger windows, doors, and office environments." },
  { name: "Roller Blinds", description: "Simple, sleek, and versatile — ideal for modern homes, offices, and commercial spaces." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h1 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">Complete Window Solutions, From Design to Installation</h1>
        <p className="leading-7">
          At Gillionaire Decor, we provide more than curtains. From choosing
          the right window treatment to professional installation, repairs,
          and curtain care, we handle every detail.
        </p>
      </section>

      {/* 6 main service cards */}
      <FadeIn>
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:-translate-y-1">
              <div className="relative w-full h-40">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>

      {/* Blinds breakdown */}
      <FadeIn> 
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <h2 className="mb-9 text-center font-playfair text-3xl leading-tight sm:text-4xl">Our Blind Types</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {blindTypes.map((blind) => (
            <div key={blind.name} className="bg-white p-5 rounded-lg shadow transition-transform hover:-translate-y-1">
              <h3 className="font-semibold mb-2">{blind.name}</h3>
              <p className="text-sm">{blind.description}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>

      {/* Commercial & Office — dedicated section */}
      <FadeIn>
      <section className="mx-auto mb-16 max-w-3xl rounded-lg bg-[#1a2b4c] px-5 py-16 text-center text-white sm:mb-20 sm:py-20">
        <h2 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">Commercial & Office Solutions</h2>
        <p className="mb-6 leading-7">
          Your workspace represents your business. We provide curtain and
          blind solutions suitable for offices, shops, hospitality spaces,
          and other commercial environments — professional, comfortable,
          private, functional, and visually appealing.
        </p>
        <a
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#8a6d1a] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#6f5715]"
        >
          Discuss a Commercial Project
        </a>
      </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">Your Windows Are Part of Your Interior</h2>
        <p className="mb-7 text-lg leading-7">
          Whether you need new curtains, modern blinds, installation,
          repairs, washing, or expert guidance — Gillionaire Decor can help.
        </p>
        <a
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#8a6d1a] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#6f5715]"
        >
          Book Gillionaire Decor
        </a>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
}