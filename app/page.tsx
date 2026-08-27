import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import FadeIn from "./components/FadeIn";

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
    <div className="min-h-screen bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section
        className="relative px-5 py-20 text-center text-white sm:py-24 lg:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(26,43,76,0.75), rgba(26,43,76,0.85)), url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-5 font-serif text-4xl leading-tight text-[#c9a227] sm:text-5xl lg:text-6xl">
            Transform Your Space. Dress Your Windows Beautifully.
          </h1>
          <p className="mx-auto mb-5 max-w-2xl text-base leading-7 sm:text-lg">
            At Gillionaire Decor, we create stylish, functional and carefully
            finished window treatments that bring comfort, privacy and
            character to your space.
          </p>
          <p className="mb-8 font-medium sm:text-lg">
            Custom Curtains | Blinds | Repairs | Curtain Cleaning
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#8a6d1a] px-7 py-3 font-semibold transition-colors hover:bg-[#6f5715]"
            >
              Book a Service
            </a>
            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white px-7 py-3 font-semibold transition-colors hover:bg-white hover:text-[#1a2b4c]"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
      <FadeIn>
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <h2 className="mb-5 font-serif text-3xl leading-tight sm:text-4xl">A Space Should Feel Like You</h2>
          <p className="mb-4 leading-7">
          Your windows are more than openings that let in light. They
          influence the atmosphere, privacy, comfort and appearance of an
          entire room.
        </p>
          <p className="font-medium">
            Beautiful windows. Better spaces. Thoughtful finishing.
          </p>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="mb-9 text-center font-serif text-3xl leading-tight sm:text-4xl">Our Services</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
              />
            ))}
        </div>
          <div className="mt-10 text-center">
            <a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#1a2b4c] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#243963]"
            >
              View All Services
            </a>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="mb-9 text-center font-serif text-3xl leading-tight sm:text-4xl">
            Why Choose Gillionaire Decor?
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Professional Finishing</h3>
            <p>
              We pay attention to the details that make a window treatment
              look properly fitted and finished.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Style Meets Function</h3>
            <p>
              We don&apos;t focus only on appearance. We consider privacy,
              lighting, comfort and everyday usability.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Solutions for Different Spaces</h3>
            <p>
              Whether it is a home, office, shop, hospitality space or
              another interior, we help you find a suitable solution.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Repair Before Replace</h3>
            <p>
              Where possible, we help you restore existing curtains instead
              of immediately replacing them.
            </p>
          </div>
        </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="mb-9 text-center font-serif text-3xl leading-tight sm:text-4xl">Our Simple Process</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
      </FadeIn>
      <FadeIn>
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <h2 className="mb-5 font-serif text-3xl leading-tight sm:text-4xl">
            Ready to Transform Your Windows?
          </h2>
          <p className="mb-7 text-lg leading-7">
            Let&apos;s create a space you&apos;ll love coming home to.
          </p>
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#8a6d1a] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#6f5715]"
          >
            Contact Gillionaire Decor
          </a>
        </section>
      </FadeIn>

      <Footer />
    </div>
  );
}
