export default function Services() {
  const allServices = [
    { name: "Custom Curtains", price: 800, duration: "5-7 days" },
    { name: "Blinds Installation", price: 500, duration: "3-5 days" },
    { name: "Interior Styling", price: 1200, duration: "7-10 days" },
    { name: "Repairing of old Curtains", price: 600, duration: "2-4 days" },
  ];

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
        <h2 className="text-3xl font-serif mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allServices.map((service) => (
            <div key={service.name} className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-xl font-serif mb-2">{service.name}</h3>
              <p>Price: GHS {service.price}</p>
              <p>Duration: {service.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}