"use client";

import { createContext, useContext, useState } from "react";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Add or increment item
  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((p) => p._id === item._id);
      if (exists) {
        return prev.map((p) =>
          p._id === item._id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Decrease quantity by 1
  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev
        .map((p) =>
          p._id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0) // Remove item if qty <= 0
    );
  };

  // Remove completely
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((p) => p._id !== id));
  };

  const clearCart = () => setItems([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
