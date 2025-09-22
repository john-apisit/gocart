"use client";
import { motion } from "motion/react";

const ProductDetailImage = ({
  imageUrl,
  productName,
}: {
  imageUrl: string;
  productName: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="aspect-[3/4] rounded-md shadow-xl overflow-clip"
    >
      <img
        src={imageUrl}
        alt={productName}
        className="object-cover w-full h-full col-span-1 rounded-md hover:scale-110 transition-all duration-1000"
      />
    </motion.div>
  );
};

export default ProductDetailImage;
