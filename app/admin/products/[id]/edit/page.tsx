"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
}

export default function EditProduct() {
  const router = useRouter();
  const params = useParams(); // <-- this gives you { id: string }
  const id = params.id;

  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  if (!form) return <p>Loading...</p>;

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/admin/products");
  };

  return (
    <section className="container mx-auto py-16 px-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="image"
          value={form.image || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />
        <textarea
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Update Product
        </button>
      </form>
    </section>
  );
}
