import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

const allServices = [
  { name: "Custom Curtains", description: "Custom curtain solutions, fitting, styling, and installation." },
  { name: "Venetian Blinds", description: "Clean, timeless option with adjustable light and privacy control." },
  { name: "Zebra Blinds", description: "Contemporary layered design for flexible light control." },
  { name: "Vertical Blinds", description: "A practical solution for larger windows and offices." },
  { name: "Roller Blinds", description: "Simple, sleek, and versatile for modern spaces." },
  { name: "Curtain Repairs", description: "Restoring damaged or worn curtains instead of replacing them." },
  { name: "Curtain Washing", description: "Professional washing and refreshing for your curtains." },
];

export default function Home() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section className="max-w-3xl mx-auto py-20 px-5 text-center">
        <h2 className="text-4xl font-serif text-[#8a6d1a] mb-4">
          Transform Your Space. Dress Your Windows Beautifully.
        </h2>
        <p className="mb-4">
          At Gillionaire Decor, we create stylish, functional and carefully
          finished window treatments that bring comfort, privacy and
          character to your space.
        </p>
        <p className="mb-6 font-medium">
          Custom Curtains | Blinds | Repairs | Curtain Cleaning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold"
          >
            Book a Service
          </a>
          <a
            href="/services"
            className="inline-block border border-[#1a2b4c] text-[#1a2b4c] px-8 py-3 rounded-md font-semibold"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-2xl font-serif mb-4">A Space Should Feel Like You</h2>
        <p className="mb-4">
          Your windows are more than openings that let in light. They
          influence the atmosphere, privacy, comfort and appearance of an
          entire room.
        </p>
        <p className="font-medium">
          Beautiful windows. Better spaces. Thoughtful finishing.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
              />
            ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-block bg-[#1a2b4c] text-white px-8 py-3 rounded-md font-semibold"
          >
            View All Services
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-8 text-center">
          Why Choose Gillionaire Decor?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Professional Finishing</h3>
            <p>
              We pay attention to the details that make a window treatment
              look properly fitted and finished.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Style Meets Function</h3>
            <p>
              We don&apos;t focus only on appearance. We consider privacy,
              lighting, comfort and everyday usability.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Solutions for Different Spaces</h3>
            <p>
              Whether it is a home, office, shop, hospitality space or
              another interior, we help you find a suitable solution.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Repair Before Replace</h3>
            <p>
              Where possible, we help you restore existing curtains instead
              of immediately replacing them.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-8 text-center">Our Simple Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-[#8a6d1a] font-bold text-xl mb-2">01</p>
            <h3 className="font-semibold mb-1">Tell Us What You Need</h3>
            <p className="text-sm">
              Contact us and tell us about your space and preferred style.
            </p>
          </div>
          <div>
            <p className="text-[#8a6d1a] font-bold text-xl mb-2">02</p>
            <h3 className="font-semibold mb-1">Discuss Your Options</h3>
            <p className="text-sm">
              We help you explore suitable options for your needs and space.
            </p>
          </div>
          <div>
            <p className="text-[#8a6d1a] font-bold text-xl mb-2">03</p>
            <h3 className="font-semibold mb-1">We Get to Work</h3>
            <p className="text-sm">
              Installation, repair or curtain washing — handled with care.
            </p>
          </div>
          <div>
            <p className="text-[#8a6d1a] font-bold text-xl mb-2">04</p>
            <h3 className="font-semibold mb-1">Enjoy the Difference</h3>
            <p className="text-sm">
              Experience a cleaner, more stylish, better-finished space.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h2 className="text-2xl font-serif mb-4">
          Ready to Transform Your Windows?
        </h2>
        <p className="mb-6">
          Let&apos;s create a space you&apos;ll love coming home to.
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
