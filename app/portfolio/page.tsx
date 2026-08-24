import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import FadeIn from "../components/FadeIn";

const gallery = [
  { src: "/service-curtains.jpeg", alt: "Custom curtains installed in a living room", caption: "Custom Curtains" },
  { src: "/blind-venetian.jpeg", alt: "Venetian blinds installed", caption: "Venetian Blinds" },
  { src: "/blind-zebra.jpeg", alt: "Zebra blinds installed", caption: "Zebra Blinds" },
  { src: "/blind-vertical.jpeg", alt: "Vertical blinds installed", caption: "Vertical Blinds" },
  { src: "/blind-multi.jpeg", alt: "Multiple blind styles in one space", caption: "Blind Combinations" },
  { src: "/commercial-office.jpeg", alt: "Curtains installed in a commercial office space", caption: "Commercial Space" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h1 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">See the Difference</h1>
        <p className="leading-7">
          Explore some of our recent curtain, blind, and window-treatment
          projects — from residential living rooms to commercial spaces
          across Accra.
        </p>
      </section>
      <FadeIn>
        <section className="mx-auto max-w-5xl px-5 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {gallery.map((item) => (
            <FadeIn key={item.src}>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) calc((100vw - 64px) / 2), calc(100vw - 40px)"
                    className="object-cover"
                  />
                </div>
                <p className="p-4 font-manrope font-semibold text-sm">{item.caption}</p>
              </div>
            </FadeIn>
          ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <h2 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl">Start Your Own Project</h2>
          <p className="mb-7 text-lg leading-7">
            Every space is different. Let&apos;s talk about how we can transform yours.
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