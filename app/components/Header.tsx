export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#1a2b4c] text-white p-5">
      <h1 className="text-xl font-bold">Gillionaire Decor</h1>
      <nav className="flex gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}