"use client";

import { useSyncExternalStore } from "react";

export type CartLine = { label: string; value: string; detail?: string };

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
  /** Unit price in euros. */
  price: number;
  quantity: number;
  /** Configuration summary shown under the product name. */
  lines: CartLine[];
};

const KEY = "edc-cart-v1";
const EMPTY: CartItem[] = [];
let cache: CartItem[] | null = null;
const listeners = new Set<() => void>();

function read(): CartItem[] {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as CartItem[]) : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(items: CartItem[]) {
  cache = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable (private mode): keep the in-memory cart.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export const cart = {
  add(item: Omit<CartItem, "id" | "quantity">, quantity = 1) {
    const id = `${item.slug}-${Date.now().toString(36)}`;
    write([...read(), { ...item, id, quantity }]);
  },
  setQuantity(id: string, quantity: number) {
    write(read().map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)));
  },
  remove(id: string) {
    write(read().filter((i) => i.id !== id));
  },
  clear() {
    write([]);
  },
};

export function formatEuro(value: number) {
  return `${value.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true })}€`;
}
