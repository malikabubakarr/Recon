"use client";

import { Truck, Headphones, Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

        {/* Free Shipping */}
        <div className="space-y-2">
          <Truck className="mx-auto w-10 h-10" />
          <h3 className="font-semibold tracking-wide">
            Recon Free Shipping
          </h3>
          <p className="text-sm text-gray-500">
            Recon offers free shipping on orders above Rs. 2,000
          </p>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <Headphones className="mx-auto w-10 h-10" />
          <h3 className="font-semibold tracking-wide">
            Recon Customer Support
          </h3>
          <p className="text-sm text-gray-500">
            Contact Recon support 9AM – 6PM (Mon to Sat)
          </p>
        </div>

        {/* Secure Payment */}
        <div className="space-y-2">
          <Lock className="mx-auto w-10 h-10" />
          <h3 className="font-semibold tracking-wide">
            Recon Secure Payment
          </h3>
          <p className="text-sm text-gray-500">
            Trusted & secure checkout for all Recon orders
          </p>
        </div>

      </div>
    </section>
  );
}
