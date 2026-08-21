import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c]">
      <Header />
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

      <Footer />
    </div>
  );
}
