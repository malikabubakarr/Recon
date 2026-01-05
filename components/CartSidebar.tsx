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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

      // Clear cart & reset form
      clearCart();
      setCheckoutMode(false);
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

      // Redirect to Thank You page with orderId and paymentMethod
      router.push(`/thank-you?orderId=${data.orderId}&paymentMethod=${form.paymentMethod}`);
    } catch (err) {
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Transparent overlay to close cart */}
      <div
        className="fixed inset-0 cursor-pointer"
        onClick={closeCart}
      ></div>

      <div className="relative w-full sm:w-[400px] md:w-[450px] bg-white h-full p-6 shadow-2xl border-l border-gray-200 overflow-y-auto">
        {/* Close button */}
        <button
          onClick={closeCart}
          className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {/* Empty cart */}
        {items.length === 0 && !checkoutMode && (
          <p className="text-gray-500 mt-10 text-center">Cart is empty.</p>
        )}

        {/* Cart Items */}
        {!checkoutMode && items.length > 0 && (
          <>
            <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 items-center border p-3 rounded-xl"
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                  )}

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Rs. {item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="w-7 h-7 border rounded-full flex items-center justify-center"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => addToCart({ ...item, qty: 1 })}
                        className="w-7 h-7 border rounded-full flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-6 border-t pt-4 space-y-2">
              <p className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>Rs. {totalAmount}</span>
              </p>
              <p className="flex justify-between text-gray-700">
                <span>Delivery</span>
                <span>{delivery === 0 ? "FREE" : `Rs. ${delivery}`}</span>
              </p>
              <p className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>Rs. {grandTotal}</span>
              </p>

              <div className="mt-5 space-y-3">
                <button className="w-full border py-2 rounded-lg">View Cart</button>
                <button
                  onClick={() => setCheckoutMode(true)}
                  className="w-full bg-black text-white py-2 rounded-lg"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {/* Checkout Form */}
        {checkoutMode && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Order Details</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  className="w-full border rounded-lg p-2"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border rounded-lg p-2"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>

              <input
                name="phone"
                placeholder="Phone"
                className="w-full border rounded-lg p-2"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                className="w-full border rounded-lg p-2"
                value={form.email}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="province"
                  placeholder="Province / State"
                  className="w-full border rounded-lg p-2"
                  value={form.province}
                  onChange={handleChange}
                />
                <input
                  name="city"
                  placeholder="City"
                  className="w-full border rounded-lg p-2"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                rows={3}
                className="w-full border rounded-lg p-2"
                value={form.address}
                onChange={handleChange}
              />

              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={form.paymentMethod === "cod"}
                    onChange={() => setForm({ ...form, paymentMethod: "cod" })}
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="bank"
                    checked={form.paymentMethod === "bank"}
                    onChange={() => setForm({ ...form, paymentMethod: "bank" })}
                  />
                  Bank Transfer
                </label>
              </div>

              <button
                type="button"
                onClick={placeOrder}
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                {loading ? "Placing order..." : "Place Order"}
              </button>

              {message && (
                <p className="text-center text-sm mt-2 text-red-500">{message}</p>
              )}

              <button
                type="button"
                onClick={() => setCheckoutMode(false)}
                className="w-full border py-2 rounded-lg"
              >
                Back to Cart
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
