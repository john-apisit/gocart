import { create } from "zustand";
import { Product } from "../model";
import { devtools, persist } from "zustand/middleware";

export type ProductState = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState>()(
  devtools(
    (set, get) => {
      return {
        searchText: "",
        setSearchText: (searchText) => set({ searchText }),
        products: [],
        setProducts: (products) => set({ products }),
      };
    },
    {
      name: "product-store",
    }
  )
);
