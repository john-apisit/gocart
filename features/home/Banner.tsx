"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AppButton from "../../components/buttons/AppButton";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="relative py-4">
      <Image
        src="https://images.unsplash.com/photo-1574682592200-948fd815c4f0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Banner"
        width={1000}
        height={300}
        className="w-full h-[300] object-cover rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h3
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          Welcome to J Shop
        </motion.h3>
        <motion.p
          className="text-white pb-8 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <AppButton
            label="Shop Now"
            onClick={() => {
              router.push("/shop");
            }}
            size="md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
