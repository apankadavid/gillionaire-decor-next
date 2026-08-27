"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://gillionaire-decor-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      if (!response.ok) {
        setError("Invalid phone number or password.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      window.location.href = "/admin";
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-md mx-auto py-16 px-5">
        <h2 className="text-3xl font-playfair mb-8 text-center">Admin Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>

          {error && <p className="text-red-700 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#8a6d1a] text-white px-8 py-3 rounded-md font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}