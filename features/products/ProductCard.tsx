"use client";

import { useCartStore } from "../carts/store/cartStore";
import AppButton from "../../components/buttons/AppButton";
import { Product } from "./model";
import Rating from "./Rating";
import { formatNumber } from "@/utils/number";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addCartItem } = useCartStore();

  return (
    <Link
      href={`/products/${product.id}`}
      className="aspect-[3/4] rounded-md cursor-pointer group"
    >
      <div className="aspect-square overflow-clip">
        <img
          src={product.image[0]}
          alt={product.name}
          className="bg-gray-100 object-cover w-full h-full rounded-md group-hover:scale-110 transition-all duration-200"
        />
      </div>
      <h3 className="pt-4 font-bold text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
        {product.name}
      </h3>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis text-gray-400">
        {product.description}
      </p>
      <Rating rating={product.rating} />
      <div className="flex justify-between items-center py-2 text-gray-600">
        <p className="">{formatNumber(product.price)}</p>
        <AppButton
          label="Add to Cart"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addCartItem({
              productId: product.id,
              color: product.color[0],
              size: product.size[0],
              quantity: 1,
              product: product,
            });
          }}
          leftIcon={<ShoppingCart width={16} />}
          size="sm"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
