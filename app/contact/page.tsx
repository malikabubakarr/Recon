// app/contact/page.tsx
"use client";

import Head from "next/head";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const pageTitle = "Contact RECON | Makson International";
  const pageDescription =
    "Get in touch with RECON, the trusted personal-care brand. Fill out our contact form or reach us via phone or email for support and inquiries.";
  const canonicalUrl = "https://maksoninternational.com/contact"; // replace with your domain

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact" }),
      });

      const data = await res.json();

      if (!res.ok) setMessage(data?.error || "Failed to send message");
      else {
        setMessage("Message sent successfully 🎉");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-50 dark:to-white min-h-screen">
      
      {/* ------------------ SEO HEAD ------------------ */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Contact RECON, Makson International, Personal Care, Hair Care, Wax, Lotions, Tissues, Support"
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/images/recon-logo.jpg" /> {/* optional logo */}
        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* ------------------ PAGE CONTENT ------------------ */}
      <div className="text-center mb-16">
        <h1 className="font-thin text-5xl text-gray-800 dark:text-gray-800 mb-4">Contact Us</h1>
        <p className="font-thin text-gray-600 dark:text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions or need help? Our team is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-2xl bg-white dark:bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="font-thin text-2xl mb-6 text-gray-800 dark:text-gray-800">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border border-gray-300 dark:border-gray-300 px-4 py-3 rounded-lg text-sm font-thin text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 dark:border-gray-300 px-4 py-3 rounded-lg text-sm font-thin text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 dark:border-gray-300 px-4 py-3 rounded-lg text-sm font-thin text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent transition-all duration-300"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-300 px-4 py-3 rounded-lg text-sm font-thin text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
              required
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full text-white font-thin transition-all duration-300 ${
                loading
                  ? "bg-gray-400 dark:bg-gray-400 cursor-not-allowed"
                  : "bg-black dark:bg-black hover:bg-red-400 dark:hover:bg-red-400 shadow-md hover:shadow-lg"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p
                className={`text-center text-sm mt-2 ${
                  message.includes("success") ? "text-green-600 dark:text-green-600" : "text-red-500 dark:text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-8 border border-gray-200 dark:border-gray-200 rounded-2xl bg-white dark:bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="font-thin text-2xl mb-6 text-gray-800 dark:text-gray-800">Get in touch</h2>

          <ul className="space-y-6 text-sm text-gray-700 dark:text-gray-700">
            <li className="flex items-center gap-3 font-thin">
              <Phone className="w-5 h-5 text-black dark:text-black" />
              <span><b>Phone:</b> 0300-0000000</span>
            </li>

            <li className="flex items-center gap-3 font-thin">
              <Mail className="w-5 h-5 text-black dark:text-black" />
              <span><b>Email:</b> support@recon.pk</span>
            </li>

            <li className="flex items-center gap-3 font-thin">
              <MapPin className="w-5 h-5 text-black dark:text-black" />
              <span><b>Address:</b> Lahore, Pakistan</span>
            </li>

            <li className="flex items-center gap-3 font-thin">
              <Clock className="w-5 h-5 text-black dark:text-black" />
              <span><b>Support Hours:</b> Mon–Sat / 9AM–6PM</span>
            </li>
          </ul>

<div className="mt-8">
  <h3 className="font-thin mb-4 text-lg text-gray-800 dark:text-gray-800">
    Find us on map
  </h3>

  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-200 shadow-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=https://maps.app.goo.gl/etKvdyQwtGtCcGfk6?g_st=ipc"
      width="100%"
      height="240"
      loading="lazy"
      className="rounded-xl"
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
