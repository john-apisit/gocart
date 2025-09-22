"use client";

import AppButton from "@/components/buttons/AppButton";
import { useForm } from "react-hook-form";
import { useCartStore } from "./store/cartStore";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  city: z.string().min(3, { message: "City must be at least 3 characters" }),
});

export type ShippingAddressFormData = z.input<typeof schema>;

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddressFormData>({
    resolver: zodResolver(schema),
  });
  const { setCurrentTab, setShippingAddress, shippingAddress } = useCartStore();

  const submitForm = (e: ShippingAddressFormData) => {
    setShippingAddress(e);
    setCurrentTab("payment");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            defaultValue={shippingAddress.name}
            {...register("name")}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            defaultValue={shippingAddress.email}
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="+66123456789"
            defaultValue={shippingAddress.phone}
            {...register("phone")}
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="123 Main St"
            defaultValue={shippingAddress.address}
            {...register("address")}
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="New York"
            defaultValue={shippingAddress.city}
            {...register("city")}
          />
          <p className="text-red-500 text-sm">{errors.city?.message}</p>
        </div>
        <AppButton
          label="Continue"
          size="md"
          type="submit"
          className="w-full"
          rightIcon={<ChevronRightIcon width={16} />}
        />
      </form>
    </motion.div>
  );
};

export default ShippingAddress;
