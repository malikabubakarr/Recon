"use client";

import { useEffect, useState } from "react";

interface Message {
  _id: string;
  name?: string;
  email: string;
  message: string;
  source: "contact" | "footer";
  createdAt: string;
}

export default function ContactAdmin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();

        if (Array.isArray(data)) {
          // Sort by newest first
          const sorted = data.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setMessages(sorted);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error("Failed to fetch messages:", err);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="text-center py-16">Loading messages...</p>;

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">All Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      {messages.map((m) => (
        <div
          key={m._id}
          className="border rounded-lg p-4 mb-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-gray-800">
              {m.name || "Subscriber"} — {m.email}
            </p>
            <span className="text-xs text-gray-500 uppercase">{m.source}</span>
          </div>
          <p className="text-gray-700">{m.message}</p>
          <p className="text-xs text-gray-400 mt-2">
            {new Date(m.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </section>
  );
}
