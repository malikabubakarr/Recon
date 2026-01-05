import mongoose, { Schema, models } from "mongoose";

const MessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    subject: { type: String },
    message: { type: String },
    source: { type: String, default: "contact" }, // contact | footer
  },
  { timestamps: true }
);

const Message = models.Message || mongoose.model("Message", MessageSchema);

export default Message;
