import { Product } from "@/features/products/model";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TabId } from "../CartTabs";
import { ShippingAddressFormData } from "../ShippingAddress";

export type CartItem = {
  productId: string;
  color: string;
  size: string;
  quantity: number;
  product: Product;
};

export type CartState = {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  getCartItemCount: () => number;
  removeCartItem: (item: CartItem) => void;
  getSubTotal: () => number;
  discount: number;
  shippingFee: number;
  getTotal: () => number;
  currentTab: TabId;
  setCurrentTab: (tab: TabId) => void;
  shippingAddress: ShippingAddressFormData;
  setShippingAddress: (address: ShippingAddressFormData) => void;
  clearCart: () => void;
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
        removeCartItem: (item) => {
          set((prev) => {
            return {
              cartItems: prev.cartItems.filter(
                (c) =>
                  !(
                    c.productId === item.productId &&
                    c.color === item.color &&
                    c.size === item.size
                  )
              ),
            };
          });
        },
        getSubTotal: () => {
          return get().cartItems.reduce(
            (acc, c) => acc + c.product.price * c.quantity,
            0
          );
        },
        discount: 100,
        shippingFee: 10,
        getTotal: () => {
          return get().getSubTotal() - get().discount + get().shippingFee;
        },
        currentTab: "cart",
        setCurrentTab: (tab) => {
          set({ currentTab: tab });
        },
        shippingAddress: {
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
        },
        setShippingAddress: (address) => {
          set({ shippingAddress: address });
        },
        clearCart: () => {
          set({
            cartItems: [],
            shippingAddress: {
              name: "",
              email: "",
              phone: "",
              address: "",
              city: "",
            },
            shippingFee: 0,
            discount: 0,
          });
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
