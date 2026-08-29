import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />
      <section className="max-w-xl mx-auto py-24 px-5 text-center">
        <h2 className="text-5xl font-playfair text-[#8a6d1a] mb-4">404</h2>
        <h3 className="text-2xl font-playfair mb-4">Page Not Found</h3>
        <p className="mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have
          been moved, or the link may be incorrect.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold"
        >
          Back to Home
        </Link>
      </section>
      <Footer />
    </div>
  );
}