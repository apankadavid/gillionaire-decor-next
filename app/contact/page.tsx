"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://gillionaire-decor-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: `[${service}] ${message}` }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setPhone("");
      setService("");
      setMessage("");
    } catch (error) {
      console.log("Error submitting form:", error);
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#1a2b4c]">
      <Header />

      <section className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
        <h1 className="mb-5 text-center font-playfair text-3xl leading-tight sm:text-4xl">Let&apos;s Talk About Your Space</h1>
        <p className="mb-9 text-center leading-7">
          Have a window that needs a new look? Need new curtains, blinds,
          repairs or curtain washing? We&apos;d love to hear from you.
        </p>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="font-semibold mb-2">Contact Details</h3>
          <p>Call/WhatsApp: +233 24 331 9657</p>
          <p>Call/WhatsApp: +233 20 172 0518</p>
          <p>Location: Conca, Accra, Ghana</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-medium mb-1">Service Required</label>
            <select
              id="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-3"
            >
              <option value="">Select a service</option>
              <option value="Curtains">Curtains</option>
              <option value="Venetian Blinds">Venetian Blinds</option>
              <option value="Zebra Blinds">Zebra Blinds</option>
              <option value="Vertical Blinds">Vertical Blinds</option>
              <option value="Roller Blinds">Roller Blinds</option>
              <option value="Curtain Repairs">Curtain Repairs</option>
              <option value="Curtain Washing">Curtain Washing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Tell Us About Your Project</label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-3"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 items-center justify-center self-start rounded-md bg-[#8a6d1a] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#6f5715] disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>

          {status === "success" && (
            <p className="text-green-700 font-medium">Thank you! Your enquiry has been received.</p>
          )}
          {status === "error" && (
            <p className="text-red-700 font-medium">Something went wrong. Please try again or contact us on WhatsApp.</p>
          )}
        </form>

        <div className="mt-8 text-center">
          <p className="mb-3">Prefer WhatsApp?</p>
          <a
            href="https://wa.me/233243319657?text=Hello%20Gillionaire%20Decor%2C%20I%27d%20like%20to%20enquire%20about%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#25D366] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#1fa855]"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}