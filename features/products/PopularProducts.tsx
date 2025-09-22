"use client";

import { popularProducts, Product } from "./model";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";

const PopularProducts = () => {
  const itemCount = popularProducts.length;
  return (
    <div>
      <h2 className="text-lg text-gray-500 font-bold pt-12 pb-4">
        Popular Products
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {popularProducts.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
