"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartSidebar() {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    addToCart,
    decreaseQty,
    totalAmount,
    openCart,
    clearCart,
  } = useCart();

  const [checkoutMode, setCheckoutMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
    city: "",
    address: "",
    paymentMethod: "cod",
  });

  const router = useRouter();

  useEffect(() => {
    const handleOpen = () => openCart?.();
    window.addEventListener("openCart", handleOpen);
    return () => window.removeEventListener("openCart", handleOpen);
  }, [openCart]);

  if (!isOpen) return null;

  const delivery = totalAmount >= 2000 ? 0 : 300;
  const grandTotal = totalAmount + delivery;

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function placeOrder() {
    if (!items.length) {
      setMessage("Cart is empty");
      return;
    }
    if (!form.phone || !form.address || !form.city) {
      setMessage("Please fill required fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i._id,
            name: i.name,
            price: i.price,
            quantity: i.qty,
            image: i.image,
          })),
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          email: form.email,
          address: `${form.address}, ${form.city}, ${form.province}`,
          paymentMethod: form.paymentMethod,
          totalAmount: grandTotal,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.error || "Order failed");
        return;
      }

      // ✅ Clear cart, close sidebar, reset form
      clearCart();
      setCheckoutMode(false);
      closeCart(); // instantly close cart

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        province: "",
        city: "",
        address: "",
        paymentMethod: "cod",
      });

      // ✅ Pass correct order ID (_id) to Thank You page
      router.push(
        `/thank-you?orderId=${data.order._id}&paymentMethod=${form.paymentMethod}`
      );
    } catch {
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" style={{ colorScheme: 'light' }}>
      {/* Overlay */}
      <div className="absolute inset-0" onClick={closeCart}></div>

      {/* Sidebar */}
      <div className="relative w-full sm:w-[420px] bg-white h-full p-6 shadow-2xl overflow-y-auto">
        {/* Close */}
        <button
          onClick={closeCart}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-5">Shopping Cart</h2>

        {/* EMPTY CART */}
        {items.length === 0 && !checkoutMode && (
          <p className="text-center text-gray-500 mt-20">
            Your cart is empty 🛒
          </p>
        )}

        {/* CART ITEMS */}
        {!checkoutMode && items.length > 0 && (
          <>
            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 p-3 border rounded-xl"
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />
                  )}

                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Rs. {item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="w-7 h-7 border rounded-full"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => addToCart({ ...item, qty: 1 })}
                        className="w-7 h-7 border rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{delivery === 0 ? "FREE" : `Rs. ${delivery}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. {grandTotal}</span>
              </div>

              <button
                onClick={() => setCheckoutMode(true)}
                className="w-full mt-4 bg-black text-white py-3 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

        {/* CHECKOUT */}
        {checkoutMode && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-4">Checkout Details</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
              </div>

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
              />

              <input
                name="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="province"
                  placeholder="Province"
                  value={form.province}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
                <input
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className="border p-2 rounded-lg"
                />
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                rows={3}
                value={form.address}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
              />

              <div className="flex gap-4">
                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked={form.paymentMethod === "cod"}
                    onChange={() =>
                      setForm({ ...form, paymentMethod: "cod" })
                    }
                  />
                  Cash on Delivery
                </label>

                <label className="flex gap-2 items-center">
                  <input
                    type="radio"
                    checked={form.paymentMethod === "bank"}
                    onChange={() =>
                      setForm({ ...form, paymentMethod: "bank" })
                    }
                  />
                  Bank Transfer
                </label>
              </div>

              <button
                onClick={placeOrder}
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>

              {message && (
                <p className="text-center text-red-500 text-sm">{message}</p>
              )}

              <button
                onClick={() => setCheckoutMode(false)}
                className="w-full border py-2 rounded-lg"
              >
                Back to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}