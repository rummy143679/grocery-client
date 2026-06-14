// store/orderStore.ts

import { create } from "zustand";

interface Order {
  id: string;
  total: number;
  items: any[];
  createdAt: string;
}

interface OrderStore {
  orders: Order[];

  placeOrder: (items: any[], total: number) => string;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],

  placeOrder: (items, total) => {
    const orderId = `ORD-${Date.now()}`;

    const newOrder = {
      id: orderId,
      total,
      items,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      orders: [...state.orders, newOrder],
    }));

    return orderId;
  },
}));
