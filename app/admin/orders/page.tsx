"use client";

import { useEffect, useState } from "react";

interface Order {
  _id: string;
  name: string;
  phone: string;
  address: string;
  total: number;
  items: any[];
}

export default function OrdersAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map(o => (
        <div key={o._id} className="border rounded-lg p-4 mb-4">
          <p className="font-semibold">{o.name} - {o.phone}</p>
          <p>{o.address}</p>
          <p>Total: Rs. {o.total}</p>
          <ul className="mt-2 space-y-1">
            {o.items.map((i, idx) => (
              <li key={idx}>{i.name} x {i.qty} - Rs. {i.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
