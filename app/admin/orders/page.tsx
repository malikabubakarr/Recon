"use client";

import { useEffect, useState } from "react";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  name: string;
  phone: string;
  address: string;
  totalAmount: number;
  items: OrderItem[];
}

export default function OrdersAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders yet.</p>
      )}

      {orders.map((o) => (
        <div
          key={o._id}
          className="border rounded-xl p-5 mb-6 bg-white shadow-sm"
        >
          <div className="mb-3">
            <p className="font-semibold text-lg">
              {o.name} — {o.phone}
            </p>
            <p className="text-sm text-gray-600">{o.address}</p>
          </div>

          <table className="w-full text-sm border-t mt-4">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-2">Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {o.items.map((i, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2">{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>Rs. {i.price}</td>
                  <td className="font-medium">
                    Rs. {i.price * i.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-4 text-lg font-semibold">
            Total Amount: Rs. {o.totalAmount}
          </div>
        </div>
      ))}
    </section>
  );
}
