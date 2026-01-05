"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get orderId and paymentMethod from query params
  const orderId = searchParams.get("orderId");
  const paymentMethod = searchParams.get("paymentMethod");

  useEffect(() => {
    if (!orderId) {
      // Redirect to home if no orderId
      router.replace("/");
    }
  }, [orderId, router]);

  if (!orderId) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6">
      <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Thank You!</h1>
        <p className="text-gray-700 mb-4">
          Your order has been placed successfully 🎉
        </p>

        <p className="text-gray-600 mb-6">
          <b>Order ID:</b> <span className="text-black">{orderId}</span>
        </p>

        {paymentMethod === "bank" ? (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-medium mb-3 text-gray-800">Bank Transfer Instructions</h2>
            <p className="text-gray-700 mb-2">
              Please transfer the payment to the following account:
            </p>
            <ul className="text-gray-800 font-semibold mb-3 space-y-1">
              <li>Bank: ABC Bank</li>
              <li>Account Name: Recon Pvt Ltd</li>
              <li>Account Number: 1234567890</li>
              <li>IBAN: PK00ABCD1234567890</li>
            </ul>
            <p className="text-gray-700 mb-2">
              After sending the payment, please take a screenshot of the transaction.
            </p>
            <p className="text-gray-700">
              Send the screenshot to our support team via WhatsApp or email with your Order ID as reference.
            </p>
          </div>
        ) : (
          <p className="text-gray-700">
            Your order will be processed and delivered to your address shortly.
          </p>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-red-500 transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
