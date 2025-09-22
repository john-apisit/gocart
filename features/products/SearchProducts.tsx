"use client";

import { Product } from "./model";
import ProductCard from "./ProductCard";
import SearchTitle from "./SearchTitle";
import { useProductStore } from "./store/productStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppButton from "@/components/buttons/AppButton";
import { useSearchParams } from "next/navigation";
import AppLoader from "@/components/loaders/AppLoader";

const SearchProducts = () => {
  const { products, setSearchText, searchProducts, loadNextPage, isLoading } =
    useProductStore();
  const param = useSearchParams();
  const search = param.get("search");

  useEffect(() => {
    setSearchText(search ?? "");
    const fetchProducts = async () => {
      await searchProducts();
    };
    fetchProducts();
  }, [search]);
  return (
    <div>
      <SearchTitle />

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-8">
        <AnimatePresence>
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {isLoading ? (
        <AppLoader />
      ) : (
        <motion.div
          className="py-8 flex justify-center my-12"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 2,
          }}
        >
          <AppButton
            label="Load More"
            size="sm"
            color="white"
            onClick={() => {
              loadNextPage();
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default SearchProducts;
