"use client";

export const dynamic = "force-dynamic"; // Ensure no server pre-render

import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function ProductsPageWrapper() {
  return (
    <Suspense fallback={<p className="p-10 text-center">Loading products…</p>}>
      <ProductsClient />
    </Suspense>
  );
}
