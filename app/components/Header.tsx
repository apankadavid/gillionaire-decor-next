import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#1a2b4c] text-white p-5">
      <h1 className="text-xl font-bold">Gillionaire Decor</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}