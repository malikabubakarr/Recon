"use client";

import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";

export const dynamic = "force-dynamic"; // Prevent pre-render

export default function ThankYouPageWrapper() {
  return (
    <Suspense fallback={<p className="p-10 text-center">Loading…</p>}>
      <ThankYouClient />
    </Suspense>
  );
}
