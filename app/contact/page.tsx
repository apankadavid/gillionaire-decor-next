export default function Contact() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <header className="flex justify-between items-center bg-[#1a2b4c] text-white p-5">
        <h1 className="text-xl font-bold">Gillionaire Decor</h1>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-8 text-center">Contact Us</h2>
        <div className="bg-white p-5 rounded-lg shadow">
          <p>If you have any questions or inquiries, please reach out to us at:</p>
          <p>Call/WhatsApp: +233 24 331 9657 | +233 20 172 0518</p>
          <p>Location: Conca, Accra, Ghana</p>
        </div>
      </section>
    </div>
  )
}