const stats = [
  { value: "8+", label: "Years of Craft" },
  { value: "500+", label: "Projects Delivered" },
  { value: "60+", label: "Premium Fabrics" },
  { value: "5★", label: "Average Client Rating" },
];

export default function StatsBar() {
  return (
    <section
      className="relative py-10 px-5 text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(26,43,76,0.85), rgba(26,43,76,0.9)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-playfair text-[#c9a227]">{stat.value}</p>
            <p className="text-xs sm:text-sm uppercase tracking-wide text-white/80 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}