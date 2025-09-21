"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "./store/cartStore";
import { useEffect, useState } from "react";

const ShoppingCartIcon = () => {
  const { getCartItemCount } = useCartStore();
  const count = getCartItemCount();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="relative">
      <ShoppingCart className="cursor-pointer hover:text-gray-500" />
      {isHydrated && count > 0 && (
        <div className="absolute w-5 h-5 -top-2 -right-2 bg-orange-400 text-white text-sm rounded-full flex items-center justify-center">
          {count}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
