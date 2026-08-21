import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c]">
      <header className="flex justify-between items-center bg-[#1a2b4c] text-white p-5">
        <h1 className="text-xl font-bold">Gillionaire Decor</h1>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto py-20 px-5 text-center">
        <h2 className="text-4xl font-serif text-[#8a6d1a] mb-4">
          Cast a Spell Over Your Home
        </h2>
        <p className="mb-6">
          Custom curtains, blinds, and interior styling in Accra, Ghana.
        </p>
        <a  
          href="/contact"
          className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold"
        >
          Book Us Now
        </a>
      </section>

      <footer className="bg-[#1a2b4c] text-white text-center p-5">
        <p>&copy; 2026 Gillionaire Decor. All rights reserved.</p>
        <p>Call/WhatsApp: +233 24 331 9657 | +233 20 172 0518</p>
      </footer>
    </div>
  );
}
