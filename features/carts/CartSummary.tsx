import { formatNumber } from "@/utils/number";
import { useCartStore } from "./store/cartStore";
import { motion } from "motion/react";
import AppButton from "@/components/buttons/AppButton";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CartSummary = () => {
  const {
    getSubTotal,
    discount,
    shippingFee,
    getTotal,
    currentTab,
    setCurrentTab,
  } = useCartStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated)
    return (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="p-4 shadow-md h-fit w-sm"
      >
        <h3 className="text-lg font-bold pb-4">Cart Details</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>Subtotal:</p>
          <p className="text-right">{formatNumber(getSubTotal())}</p>
          <p>Discount:</p>
          <p className="text-right text-red-500">-{formatNumber(discount)}</p>
          <p>Shipping Fee:</p>
          <p className="text-right">{formatNumber(shippingFee)}</p>
          <p className="font-bold py-4">Total:</p>
          <p className="text-right font-bold py-4">
            {formatNumber(getTotal())}
          </p>
        </div>
        {currentTab === "cart" && (
          <AppButton
            label="Continue"
            onClick={() => {
              setCurrentTab("address");
            }}
            size="md"
            className="w-full mt-8"
            rightIcon={<ChevronRightIcon width={16} />}
          />
        )}
      </motion.div>
    );
};

export default CartSummary;
