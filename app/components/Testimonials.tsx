const testimonials = [
  {
    quote: "God bless Gillionaire Décor, their curtains are very beautiful.",
    name: "Barbara Donkor",
    location: "Kumasi",
  },
  {
    quote: "You are doing a great job. God bless you and bless Gillionaire Decor.",
    name: "Christiana Acquah",
    location: "",
  },
  {
    quote: "Beautiful curtains. May the good Lord bless and continue to bless and keep you safe.",
    name: "Precious Jem",
    location: "",
  },
  {
    quote: "They have really done so well for me.",
    name: "Bones Man TV",
    location: "Accra",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-5">
      <h2 className="text-3xl font-playfair mb-10 text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white p-6 rounded-lg shadow transition-transform hover:-translate-y-1"
          >
            <p className="font-playfair text-lg text-[#1a2b4c] mb-4">&ldquo;{t.quote}&rdquo;</p>
            <p className="text-sm font-semibold">
              — {t.name}{t.location && `, ${t.location}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}