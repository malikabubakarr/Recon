"use client";

import ProductClient from "./ProductClient";

export default function PageWrapper() {
  // useParams works only in Client Components
  const { useParams } = require("next/navigation");
  const params = useParams();
  const id = params.id;

  if (!id) return <p className="p-10">Invalid product</p>;

  return <ProductClient id={id} />;
}
