import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/233243319657?text=Hello%20Gillionaire%20Decor%2C%20I%27d%20like%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+233243319657"
        aria-label="Call us"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8a6d1a] text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}