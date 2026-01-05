"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Brand */}
        <div className="flex flex-col items-start space-y-6">
          <Link href="/">
            <Image
              src="/logoF.png"
              alt="Recon Logo"
              width={150}
              height={70}
              className="object-contain"
              priority
            />
          </Link>

          <p className="font-thin text-gray-300">Official Recon Brand</p>

          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <span className="hover:text-red-500 transition-colors duration-300 inline-block p-2 rounded-full hover:bg-gray-800">
                <FaFacebookF size={20} />
              </span>
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <span className="hover:text-red-500 transition-colors duration-300 inline-block p-2 rounded-full hover:bg-gray-800">
                <FaInstagram size={20} />
              </span>
            </Link>

            <Link href="https://wa.me/923001234567" target="_blank">
              <span className="hover:text-red-500 transition-colors duration-300 inline-block p-2 rounded-full hover:bg-gray-800">
                <FaWhatsapp size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="font-thin text-lg mb-4 text-gray-200">Contact</h3>

          <p className="font-thin text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@recon.com"
              className="hover:text-red-500 transition-colors duration-300"
            >
              info@recon.com
            </a>
          </p>

          <p className="font-thin text-gray-300">
            Phone:{" "}
            <a
              href="tel:+921234567890"
              className="hover:text-red-500 transition-colors duration-300"
            >
              +92 123 4567890
            </a>
          </p>

          <p className="font-thin text-gray-300">
            Address: 123 Recon Street, Lahore, Pakistan
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="font-thin text-lg mb-4 text-gray-200">Quick Links</h3>

          <ul className="space-y-2">
            <li><Link href="/" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Home</Link></li>
            <li><Link href="/about" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">About Us</Link></li>
            <li><Link href="/recon" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Products</Link></li>
            <li><Link href="/contact" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Contact</Link></li>
            <li><Link href="/media" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Media</Link></li>

            <li><Link href="/terms-and-conditions" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="font-thin text-gray-300 hover:text-red-500 transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="font-thin text-lg mb-4 text-gray-200">Stay Connected</h3>

          <p className="font-thin text-gray-300">
            Subscribe to get latest updates, discounts & new arrivals.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex w-full gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white text-black border border-white text-black placeholder-gray-500 focus:outline-none focus:border-white"
              required
            />

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-white text-black border border-white hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300 text-sm font-medium tracking-wide">
        © 2026 Recon — All Rights Reserved.
      </div>
    </footer>
  );
}
