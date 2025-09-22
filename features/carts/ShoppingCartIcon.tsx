"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "./store/cartStore";
import { useEffect, useState } from "react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { getCartItemCount, setCurrentTab } = useCartStore();
  const count = getCartItemCount();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <Link
      href="/cart"
      onClick={() => setCurrentTab("cart")}
      className="relative"
    >
      <ShoppingCart className="cursor-pointer hover:text-gray-500" />
      {isHydrated && count > 0 && (
        <div className="absolute w-5 h-5 -top-4 -right-3 bg-orange-400 text-white text-xs rounded-full flex items-center justify-center">
          {count}
        </div>
      )}
    </Link>
  );
};

export default ShoppingCartIcon;
