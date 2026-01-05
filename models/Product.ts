import mongoose, { Schema, models, model, Document } from "mongoose";

// Define a TypeScript interface for type safety
export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: false },
    description: { type: String, required: false, trim: true },
  },
  { timestamps: true }
);

// Use existing model if already compiled (Next.js hot reload)
const Product = models.Product || model<IProduct>("Product", productSchema, "products");

export default Product;
