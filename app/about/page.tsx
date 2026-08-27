import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <h1 className="mb-5 text-center font-playfair text-3xl leading-tight sm:text-4xl">
          We Don&apos;t Just Cover Windows. We Complete Spaces.
        </h1>
        <p className="mb-4 leading-7">
          At Gillionaire Decor, we believe the right window treatment can
          transform an ordinary room into a space that feels complete.
        </p>
        <p className="mb-4 leading-7">
          Our work focuses on providing practical and stylish solutions for
          windows, from custom curtains and modern blinds to curtain repairs
          and professional washing.
        </p>
        <p className="leading-7">
          Our goal is to help you find the right balance between style,
          comfort, functionality and quality finishing.
        </p>
      </section>
      <FadeIn>
      <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <h2 className="mb-5 font-playfair text-2xl leading-tight sm:text-3xl">What We Do</h2>
        <ul className="grid list-inside list-disc grid-cols-1 gap-3 sm:grid-cols-2">
          <li>Custom curtains</li>
          <li>Venetian blinds</li>
          <li>Zebra blinds</li>
          <li>Vertical blinds</li>
          <li>Roller blinds</li>
          <li>Curtain repairs</li>
          <li>Curtain washing</li>
        </ul>
      </section>
      </FadeIn>
      <FadeIn>
      <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <h2 className="mb-5 font-playfair text-2xl leading-tight sm:text-3xl">Our Approach</h2>
        <p className="mb-4 leading-7">
          We believe good décor begins with understanding. Before choosing a
          curtain or blind, it is important to consider the space, the
          amount of natural light, privacy requirements, interior style and
          how the window will be used.
        </p>
        <p className="font-medium">
          We listen. We advise. We create. We care for the details.
        </p>
      </section>
      </FadeIn>
      <FadeIn>
      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-5 px-5 py-12 sm:grid-cols-2 sm:gap-6 sm:py-16">
        <div className="bg-white p-5 rounded-lg shadow transition-transform hover:-translate-y-1">
          <h3 className="font-semibold mb-2">Our Vision</h3>
          <p className="text-sm">
            To become a trusted name in modern window décor and curtain-care
            solutions, known for professional service, beautiful finishing
            and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow transition-transform hover:-translate-y-1">
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-sm">
            To help individuals, families and businesses create more
            beautiful, comfortable and functional spaces through quality
            curtains, blinds and professional curtain-care services.
          </p>
        </div>
      </section>
      </FadeIn>
      <FadeIn>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">More Than Décor</h2>
        <p className="leading-7">
          We understand that décor is not simply about making a room look
          attractive. It is about creating an environment where people feel
          comfortable, welcome and confident. That philosophy guides
          everything we do at Gillionaire Decor.
        </p>
      </section>
      </FadeIn>

      <Footer />
    </div>
  );
}