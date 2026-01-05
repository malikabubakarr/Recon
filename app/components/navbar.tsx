"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary">Recon</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none">
          {/* Icon */}
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>
    </nav>
  );
}
