import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />
      <section className="max-w-3xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-6 text-center">About Gillionaire Decor</h2>
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <p>
            Gillionaire Decor brings custom curtains, blinds, and interior styling
            to homes and offices across Accra, Ghana.
          </p>
          <p>
            From Roller and Venetian blinds to Zebra and Vertical blinds, curtain
            repair, and curtain washing — we help you cast a spell over your home.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}