"use client";
import { useState } from "react";
import { Product } from "./model";
import SelectButton from "@/components/selects/SelectButton";
import { formatNumber } from "@/utils/number";
import SelectColor from "@/components/selects/SelectColor";
import IntegerInput from "@/components/inputs/IntegerInput";
import AppButton from "@/components/buttons/AppButton";
import { CartItem, useCartStore } from "../carts/store/cartStore";
import { PlusIcon, ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const ProductDetail = ({ product }: { product: Product }) => {
  const [size, setSize] = useState<string>(product.size[0]);
  const [color, setColor] = useState<string>(product.color[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const { addCartItem } = useCartStore();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 col-span-2"
    >
      <p className="text-2xl font-bold text-gray-800  ">{product.name}</p>
      <p className="text-sm text-gray-400 ">{product.description}</p>
      <p className="text-2xl font-bold text-gray-800 ">
        {formatNumber(product.price)}
      </p>
      <SelectButton
        label="Size"
        options={product.size}
        value={size}
        onChange={setSize}
      />
      <SelectColor
        label="Color"
        options={product.color}
        value={color}
        onChange={setColor}
      />
      <IntegerInput label="Quantity" value={quantity} onChange={setQuantity} />
      <AppButton
        label="Add to Cart"
        size="md"
        className="w-full"
        leftIcon={<PlusIcon width={16} />}
        onClick={() => {
          const item: CartItem = {
            productId: product.id,
            color: color,
            size: size,
            quantity: quantity,
            product: product,
          };
          addCartItem(item);
          setQuantity(1);
        }}
      />
      <AppButton
        label="Buy this item"
        size="md"
        color="white"
        className="w-full"
        leftIcon={<ShoppingCartIcon width={16} />}
        onClick={() => {
          const item: CartItem = {
            productId: product.id,
            color: color,
            size: size,
            quantity: quantity,
            product: product,
          };
          addCartItem(item);
          router.push("/cart");
        }}
      />
    </motion.div>
  );
};

export default ProductDetail;
