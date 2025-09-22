"use client";

import AppButton from "@/components/buttons/AppButton";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronRightIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { motion } from "motion/react";
import { FaCcStripe, FaCcVisa, FaGooglePay } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCartStore } from "./store/cartStore";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card number must be 16 digits" }),
  expirationDate: z
    .string()
    .min(5, { message: "Expiration date must be in MM/YY format" })
    .max(5, { message: "Expiration date must be in MM/YY format" }),
  cvv: z.string().regex(/^\d{3}$/, { message: "CVV must be 3 digits" }),
});

type FormData = z.input<typeof schema>;

const PaymentMethod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const { clearCart } = useCartStore();

  const checkout = (e: FormData) => {
    clearCart();
    router.push("/");
  };

  return (
    <motion.div>
      <form onSubmit={handleSubmit(checkout)} className="space-y-4">
        <div>
          <label htmlFor="cardName">Name on card</label>
          <input
            id="cardName"
            type="text"
            placeholder="John Doe"
            {...register("name")}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="cardNumber">Card number</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="1234567890123456"
            {...register("cardNumber")}
            maxLength={16}
          />
          <p className="text-red-500 text-sm">{errors.cardNumber?.message}</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="expirationDate">Expiration date</label>
            <input
              id="expirationDate"
              type="text"
              placeholder="01/26"
              {...register("expirationDate")}
              maxLength={5}
            />
            <p className="text-red-500 text-sm">
              {errors.expirationDate?.message}
            </p>
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="password"
              placeholder="CVV"
              {...register("cvv")}
              maxLength={3}
            />
            <p className="text-red-500 text-sm">{errors.cvv?.message}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaCcVisa className="text-3xl text-yellow-600" />
          <FaCcStripe className="text-3xl text-violet-800" />
          <FaGooglePay className="text-3xl text-green-800" />
        </div>
        <AppButton
          type="submit"
          label="Checkout"
          size="md"
          className="w-full mt-8"
          rightIcon={<ShoppingCartIcon width={16} />}
        />
      </form>
    </motion.div>
  );
};

export default PaymentMethod;
