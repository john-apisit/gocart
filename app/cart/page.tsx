"use client";

import AppButton from "@/components/buttons/AppButton";
import CartDetails from "@/features/carts/CartDetails";
import CartSummary from "@/features/carts/CartSummary";
import CartTabs, { TabId } from "@/features/carts/CartTabs";
import PaymentMethod from "@/features/carts/PaymentMethod";
import ShippingAddress from "@/features/carts/ShippingAddress";
import { useCartStore } from "@/features/carts/store/cartStore";
import { formatNumber } from "@/utils/number";
import { ChevronRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const CartPage = () => {
  const {
    cartItems,
    getSubTotal,
    discount,
    shippingFee,
    getTotal,
    setCurrentTab,
    currentTab,
  } = useCartStore();

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h1 className="text-xl font-bold my-8 text-gray-800">
        Your Shopping Cart
      </h1>
      <CartTabs
        currentTab={currentTab}
        onChange={(tab) => setCurrentTab(tab)}
      />

      <div className="py-8">
        <div className="flex gap-8 justify-center">
          <div className="shadow-md p-4 rounded-md min-w-lg">
            {currentTab === "cart" && <CartDetails />}
            {currentTab === "address" && <ShippingAddress />}
            {currentTab === "payment" && <PaymentMethod />}
          </div>

          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
