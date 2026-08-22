import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-2xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-4 text-center">Let&apos;s Talk About Your Space</h2>
        <p className="mb-8 text-center">
          Have a window that needs a new look? Need new curtains, blinds,
          repairs or curtain washing? We&apos;d love to hear from you.
        </p>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="font-semibold mb-2">Contact Details</h3>
          <p>Call/WhatsApp: +233 24 331 9657</p>
          <p>Call/WhatsApp: +233 20 172 0518</p>
          <p>Location: Conca, Accra, Ghana</p>
        </div>

        <form action="#" method="POST" className="flex flex-col gap-5 bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-medium mb-1">Service Required</label>
            <select
              id="service"
              name="service"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            >
              <option value="">Select a service</option>
              <option value="curtains">Curtains</option>
              <option value="venetian-blinds">Venetian Blinds</option>
              <option value="zebra-blinds">Zebra Blinds</option>
              <option value="vertical-blinds">Vertical Blinds</option>
              <option value="roller-blinds">Roller Blinds</option>
              <option value="curtain-repairs">Curtain Repairs</option>
              <option value="curtain-washing">Curtain Washing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Tell Us About Your Project</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <button
            type="submit"
            className="bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold self-start"
          >
            Send Enquiry
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="mb-3">Prefer WhatsApp?</p>
          <a
            href="https://wa.me/233243319657?text=Hello%20Gillionaire%20Decor%2C%20I%27d%20like%20to%20enquire%20about%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-md font-semibold"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}