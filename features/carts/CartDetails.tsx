"use client";

import { AnimatePresence } from "motion/react";
import CartItemCard from "./CartItemCard";
import { useCartStore } from "./store/cartStore";

const CartDetails = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="flex flex-col max-h-120 overflow-y-auto">
      <AnimatePresence>
        {cartItems.map((c) => (
          <CartItemCard
            cartItem={c}
            key={`${c.productId}_${c.color}_${c.size}`}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CartDetails;
