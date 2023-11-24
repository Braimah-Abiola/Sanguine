"use client";

import { spring, useVariants } from "@/hooks/config";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import ChatwootWidget from "@/components/chat/chat";
import BlackFridayBanner from "@/components/landing/banner/black-friday";
import BestSellers from "@/components/landing/common/best-sellers";
import LandingHero from "@/components/landing/common/hero";
import LandingGallery from "@/components/landing/gallery/gallery";
import Footer from "@/components/landing/navigation/footer";
import Navbar from "@/components/landing/navigation/navbar";

export default function Home() {
  const [cursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);
  return (
    <main className="w-full" ref={ref}>
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
      <BlackFridayBanner />
      <Navbar />
      <LandingHero />
      <LandingGallery />
      <BestSellers />
      <Footer />
    </main>
  );
}
