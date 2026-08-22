import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-3xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-serif mb-4 text-center">
          We Don&apos;t Just Cover Windows. We Complete Spaces.
        </h2>
        <p className="mb-4">
          At Gillionaire Decor, we believe the right window treatment can
          transform an ordinary room into a space that feels complete.
        </p>
        <p className="mb-4">
          Our work focuses on providing practical and stylish solutions for
          windows, from custom curtains and modern blinds to curtain repairs
          and professional washing.
        </p>
        <p>
          Our goal is to help you find the right balance between style,
          comfort, functionality and quality finishing.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-5">
        <h3 className="text-2xl font-serif mb-4">What We Do</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside">
          <li>Custom curtains</li>
          <li>Venetian blinds</li>
          <li>Zebra blinds</li>
          <li>Vertical blinds</li>
          <li>Roller blinds</li>
          <li>Curtain repairs</li>
          <li>Curtain washing</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-5">
        <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
        <p className="mb-4">
          We believe good décor begins with understanding. Before choosing a
          curtain or blind, it is important to consider the space, the
          amount of natural light, privacy requirements, interior style and
          how the window will be used.
        </p>
        <p className="font-medium">
          We listen. We advise. We create. We care for the details.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-12 px-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Our Vision</h3>
          <p className="text-sm">
            To become a trusted name in modern window décor and curtain-care
            solutions, known for professional service, beautiful finishing
            and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-sm">
            To help individuals, families and businesses create more
            beautiful, comfortable and functional spaces through quality
            curtains, blinds and professional curtain-care services.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-5 text-center">
        <h3 className="text-2xl font-serif mb-4">More Than Décor</h3>
        <p>
          We understand that décor is not simply about making a room look
          attractive. It is about creating an environment where people feel
          comfortable, welcome and confident. That philosophy guides
          everything we do at Gillionaire Decor.
        </p>
      </section>

      <Footer />
    </div>
  );
}