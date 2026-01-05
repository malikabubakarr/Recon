import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar"; // <-- Add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recon",
  description: "Official Recon Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Cart Provider (global cart state) */}
        <CartProvider>
          {/* Global Navbar */}
          <Navbar />

          {/* Cart Sidebar mounted globally */}
          <CartSidebar />

          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
