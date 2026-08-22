"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#1a2b4c] text-white">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-bold">
          Gillionaire Decor
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium hover:text-[#c9a227]">
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#8a6d1a] px-5 py-2 text-sm font-semibold"
          >
            Get a Free Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-[#1a2b4c] px-5 pb-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium hover:bg-white/10"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#8a6d1a] px-5 py-3 text-center text-sm font-semibold"
          >
            Get a Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}