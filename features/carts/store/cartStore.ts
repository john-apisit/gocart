import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  getCartItemCount: () => number;
  //   removeCartItem: (item: CartItem) => void;
  //   clearCart: () => void;
  //   getCartItemCount: () => number;
  //   getCartItemTotal: () => number;
};

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],
        addCartItem: (newItem) => {
          set((prev) => {
            const existingItem = prev.cartItems.find(
              (c) =>
                c.productId === newItem.productId &&
                c.color === newItem.color &&
                c.size === newItem.size
            );

            if (existingItem) {
              existingItem.quantity += newItem.quantity;
              return { cartItems: [...prev.cartItems] };
            } else {
              return { cartItems: [...prev.cartItems, newItem] };
            }
          });
        },
        getCartItemCount: () => {
          return get().cartItems.reduce((count, c) => count + c.quantity, 0);
        },
      }),
      {
        name: "cart-store",
      }
    )
  )
);

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
