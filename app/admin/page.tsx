"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Admin Panel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link
          href="/admin/products"
          className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>View, add, edit or delete products</p>
        </Link>

        <Link
          href="/admin/orders"
          className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>View all customer orders</p>
        </Link>

        <Link
          href="/admin/contact"
          className="p-6 border rounded-xl shadow hover:shadow-lg transition text-center bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Contact Messages</h2>
          <p>View customer messages and inquiries</p>
        </Link>
      </div>
    </section>
  );
}
