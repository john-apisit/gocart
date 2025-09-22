"use client";

import { Trash } from "lucide-react";
import { CartItem, useCartStore } from "./store/cartStore";
import { formatNumber } from "@/utils/number";
import { motion } from "motion/react";

const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { removeCartItem } = useCartStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center justify-between gap-4 hover:bg-gray-100 p-4 rounded-md"
    >
      <img
        src={cartItem.product.image[0]}
        alt={cartItem.product.name}
        className="w-28 h-28 object-cover rounded-md shadow-md"
      />
      <div className="flex flex-col gap-0 flex-1">
        <p className="font-bold text-gray-600 whitespace-nowrap text-ellipsis">
          {cartItem.product.name}
        </p>
        <p className="text-gray-500 text-xs">Quantity: {cartItem.quantity}</p>
        <p className="text-gray-500 text-xs">Size: {cartItem.size}</p>
        <p className="text-gray-500 text-xs">Color: {cartItem.color}</p>
        <p className="text-gray-600 font-bold py-4">
          {formatNumber(cartItem.product.price * cartItem.quantity)}
        </p>
      </div>
      <div className="flex items-center justify-center rounded-full w-8 h-8 bg-red-100 hover:bg-red-200 transition-all duration-300">
        <Trash
          className="cursor-pointer text-red-400 hover:text-red-500"
          width={16}
          onClick={() => removeCartItem(cartItem)}
        />
      </div>
    </motion.div>
  );
};

export default CartItemCard;
