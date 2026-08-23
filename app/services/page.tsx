import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: "🪟",
    title: "Curtains",
    description: "Custom curtain solutions, fitting, styling, and installation for homes, offices, hotels, and commercial spaces.",
  },
  {
    icon: "▦",
    title: "Blinds",
    description: "Venetian, Zebra, Vertical, and Roller blinds — clean, modern light and privacy control for any space.",
  },
  {
    icon: "🔧",
    title: "Installation",
    description: "Professional fitting for curtains, rods, tracks, and all blind types — clean, balanced, properly finished.",
  },
  {
    icon: "📏",
    title: "Measurement & Consultation",
    description: "Not sure what your space needs? We measure your windows and help you choose the right style and coverage.",
  },
  {
    icon: "🧵",
    title: "Repairs & Restoration",
    description: "Damaged sections, loose fittings, or worn curtains — we help restore them instead of replacing unnecessarily.",
  },
  {
    icon: "✨",
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
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      {/* Intro */}
      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-3xl font-playfair mb-4">Complete Window Solutions, From Design to Installation</h2>
        <p>
          At Gillionaire Decor, we provide more than curtains. From choosing
          the right window treatment to professional installation, repairs,
          and curtain care, we handle every detail.
        </p>
      </section>

      {/* 6 main service cards */}
      <section className="max-w-5xl mx-auto py-8 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-playfair mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blinds breakdown */}
      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-2xl font-playfair mb-8 text-center">Our Blind Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blindTypes.map((blind) => (
            <div key={blind.name} className="bg-white p-5 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{blind.name}</h3>
              <p className="text-sm">{blind.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial & Office — dedicated section */}
      <section className="max-w-3xl mx-auto py-16 px-5 text-center bg-[#1a2b4c] text-white rounded-lg mb-16">
        <h2 className="text-2xl font-playfair mb-4">Commercial & Office Solutions</h2>
        <p className="mb-4">
          Your workspace represents your business. We provide curtain and
          blind solutions suitable for offices, shops, hospitality spaces,
          and other commercial environments — professional, comfortable,
          private, functional, and visually appealing.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold mt-2"
        >
          Discuss a Commercial Project
        </a>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-2xl font-playfair mb-4">Your Windows Are Part of Your Interior</h2>
        <p className="mb-6">
          Whether you need new curtains, modern blinds, installation,
          repairs, washing, or expert guidance — Gillionaire Decor can help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold"
        >
          Book Gillionaire Decor
        </a>
      </section>

      <Footer />
    </div>
  );
}