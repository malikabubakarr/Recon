"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { items, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔎 SEARCH STATES
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  async function handleSearch(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(`/api/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } catch {
      setResults([]);
    }
  }

  return (
    <header className="w-full font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center text-sm py-3 font-thin">
        Pakistan&apos;s most awarded brand.
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Recon Logo"
                width={150}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Center Menu - Desktop */}
            <nav className="hidden lg:flex items-center gap-12 text-sm font-thin tracking-wide text-gray-800">
              <Link href="/" className="hover:text-red-500 transition-colors duration-300">HOME</Link>
              <Link href="/about" className="hover:text-red-500 transition-colors duration-300">About Us</Link>
              <Link href="/recon" className="hover:text-red-500 transition-colors duration-300">PRODUCTS</Link>
              <Link href="/media" className="hover:text-red-500 transition-colors duration-300">MEDIA</Link>
              <Link href="/contact" className="hover:text-red-500 transition-colors duration-300">Contact Us</Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-8">

              {/* 🔎 SEARCH ICON */}
              <div
                className="cursor-pointer"
                onClick={() => setShowSearch((p) => !p)}
              >
                <Search className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
              </div>

              <User className="w-5 h-5 cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-300" />

              {/* Cart Icon */}
              <div
                className="relative cursor-pointer"
                onClick={openCart}
              >
                <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-thin">
                    {items.length}
                  </span>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden w-5 h-5 cursor-pointer text-gray-600 hover:text-red-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* 🔎 SEARCH BAR (DROPDOWN) */}
          {showSearch && (
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search products…"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none"
              />

              {/* Results */}
              {query && results.length > 0 && (
                <div className="absolute w-full bg-white border rounded shadow mt-1 z-50">
                  {results.map((p: any) => (
                    <div
                      key={p._id}
                      className="p-3 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
              )}

              {/* No results */}
              {query && results.length === 0 && (
                <div className="absolute w-full bg-white border rounded shadow mt-1 p-3 text-sm text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <nav className="flex flex-col items-center gap-4 text-sm font-thin tracking-wide text-gray-800">
                <Link href="/" className="hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                <Link href="/about" className="hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link href="/recon" className="hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
                <Link href="/media" className="hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>MEDIA</Link>
                <Link href="/contact" className="hover:text-red-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
