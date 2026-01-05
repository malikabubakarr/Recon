"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/admin/products");
  };

  return (
    <section className="container mx-auto py-16 px-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded-lg"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border p-2 rounded-lg"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded-lg"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-2 rounded-lg"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded-lg"
          value={form.description}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Add Product
        </button>
      </form>
    </section>
  );
}
