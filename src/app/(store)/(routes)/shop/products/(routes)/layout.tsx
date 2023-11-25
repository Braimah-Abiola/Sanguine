"use client";

import { spring, useVariants } from "@/hooks/config";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import BlackFridayBanner from "@/components/landing/banner/black-friday";
import Footer from "@/components/landing/navigation/footer";
import Navbar from "@/components/landing/navigation/navbar";
import ChatwootWidget from "@/components/chat/chat";

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);
  return (
    <div className="overflow-y-auto" ref={ref}>
      <ChatwootWidget ref={ref} />
      <div>
        <div className="hidden md:block">
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-white h-screen">
        <BlackFridayBanner />
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetailLayout;
