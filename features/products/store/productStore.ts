import { create } from "zustand";
import { Product, mockProducts } from "../model";
import { devtools, persist } from "zustand/middleware";

export type ProductState = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  products: Product[];
  pageIndex: number;
  isLoading: boolean;
  loadNextPage: () => void;
  pageSize: number;
  searchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductState>()(
  devtools(
    (set, get) => {
      return {
        searchText: "",
        setSearchText: (searchText) => set({ searchText }),
        products: [],
        pageIndex: 0,
        pageSize: 8,
        isLoading: false,
        loadNextPage: async () => {
          set({ isLoading: true });
          set({ pageIndex: get().pageIndex + 1 });
          const { pageIndex, pageSize, products } = get();

          // Load from db
          await new Promise((resolve) => setTimeout(resolve, 500));
          const startIndex = pageIndex * pageSize;
          const endIndex = startIndex + pageSize;
          const newProducts = mockProducts
            .filter((p) =>
              p.name.toLowerCase().includes(get().searchText.toLowerCase())
            )
            .slice(startIndex, endIndex);

          set({ products: [...products, ...newProducts] });
          set({ isLoading: false });
        },
        searchProducts: async () => {
          set({ isLoading: true });
          set({ pageIndex: 0 });
          const { pageIndex, pageSize } = get();
          // Load from db
          await new Promise((resolve) => setTimeout(resolve, 500));

          const startIndex = pageIndex * pageSize;
          const endIndex = startIndex + pageSize;
          const result = mockProducts
            .filter((p) =>
              p.name.toLowerCase().includes(get().searchText.toLowerCase())
            )
            .slice(startIndex, endIndex);

          set({ products: result });
          set({ isLoading: false });
        },
      };
    },
    {
      name: "product-store",
    }
  )
);
