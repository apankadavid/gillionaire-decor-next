"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Inquiry = {
  name: string;
  phone: string;
  message: string;
  created_at: string;
};

export default function Admin() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("https://gillionaire-decor-backend.onrender.com/inquiries", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "/login";
  }

  return (
    <div className="bg-[#faf8f5] text-[#1a2b4c] min-h-screen">
      <Header />

      <section className="max-w-4xl mx-auto py-16 px-5">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-playfair">Client Inquiries</h2>
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-red-700 hover:underline"
          >
            Log Out
          </button>
        </div>

        {loading && <p>Loading inquiries...</p>}
        {error && <p className="text-red-700">{error}</p>}

        {!loading && inquiries.length === 0 && (
          <p>No inquiries yet.</p>
        )}

        <div className="flex flex-col gap-4">
          {inquiries.map((inquiry, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{inquiry.name}</h3>
                <span className="text-xs text-gray-500">
                  {new Date(inquiry.created_at).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{inquiry.phone}</p>
              <p className="text-sm">{inquiry.message}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}