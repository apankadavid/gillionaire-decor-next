import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4c] text-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">Gillionaire Decor</h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Cast a spell over your home. Beautiful windows, better spaces.
          </p>
          <div className="mt-4 flex gap-4">
            <a
            href="https://instagram.com/gillionairedecor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 hover:text-[#c9a227] transition-colors"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://facebook.com/gillionairedecor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/70 hover:text-[#c9a227] transition-colors"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="https://tiktok.com/@gillionairedecor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white/70 hover:text-[#c9a227] transition-colors"
          >
            <FaTiktok size={20} />
          </a>
        </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#c9a227]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href="/about" className="hover:text-[#c9a227]">About</a></li>
            <li><a href="/services" className="hover:text-[#c9a227]">Services</a></li>
            <li><a href="/portfolio" className="hover:text-[#c9a227]">Portfolio</a></li>
            <li><a href="/faq" className="hover:text-[#c9a227]">FAQ</a></li>
            <li><a href="/contact" className="hover:text-[#c9a227]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#c9a227]">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Custom Curtains</li>
            <li>Venetian, Zebra & Vertical Blinds</li>
            <li>Roller Blinds</li>
            <li>Curtain Repairs</li>
            <li>Curtain Washing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#c9a227]">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Call/WhatsApp: +233 24 331 9657</li>
            <li>Call/WhatsApp: +233 20 172 0518</li>
            <li>Location: Conca, Accra, Ghana</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-5 text-xs text-white/60 text-center flex flex-col sm:flex-row sm:justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Gillionaire Decor. All rights reserved.</p>
          <a href="/login" className="hover:text-white/90">Admin Login</a>
        </div>
      </div>
    </footer>
  );
}