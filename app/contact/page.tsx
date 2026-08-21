import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />
      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-8 text-center">Contact Us</h2>
        <div className="bg-white p-5 rounded-lg shadow">
          <p>If you have any questions or inquiries, please reach out to us at:</p>
          <p>Call/WhatsApp: +233 24 331 9657 | +233 20 172 0518</p>
          <p>Location: Conca, Accra, Ghana</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}