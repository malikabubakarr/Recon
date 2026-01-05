import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }[];
  name: string;
  phone: string;
  address: string;
  paymentMethod: "cod" | "bank";
  totalAmount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
}

const OrderSchema = new Schema(
  {
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: String,
      },
    ],
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, enum: ["cod", "bank"], default: "cod" },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);
