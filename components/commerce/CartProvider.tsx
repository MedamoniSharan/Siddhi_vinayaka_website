"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, weight: string) => void;
  removeItem: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sidhi-vinayaka-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((product: Product, weight: string) => {
    if (product.soldOut) return;
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === product.id && i.weight === weight,
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.weight === weight
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.image,
          price: product.price,
          weight,
          quantity: 1,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, weight: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.weight === weight)),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, weight: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, weight);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.weight === weight
            ? { ...i, quantity }
            : i,
        ),
      );
    },
    [removeItem],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      removeItem,
      updateQuantity,
      clearCart: () => setItems([]),
    }),
    [items, isOpen, addItem, removeItem, updateQuantity],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
