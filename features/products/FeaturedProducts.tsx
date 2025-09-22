"use client";

import { featuredProducts } from "./model";
import ProductCard from "./ProductCard";
import { motion } from "motion/react";

const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-lg text-gray-500 font-bold pt-12 pb-4">
        Featured Products
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {featuredProducts.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

export default FeaturedProducts;
