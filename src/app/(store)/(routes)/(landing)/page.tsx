"use client";

import { spring, useVariants } from "@/hooks/config";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

import ChatwootWidget from "@/components/chat/chat";
import BlackFridayBanner from "@/components/landing/banner/black-friday";
import JoinDialog from "@/components/landing/dialog/join";
import LandingGallery from "@/components/landing/gallery/gallery";
import Navbar from "@/components/landing/navigation/navbar";

export default function Home() {
  const [cursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);
  return (
    <main className="w-full" ref={ref}>
      <ChatwootWidget />
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
      <JoinDialog />
      <LandingGallery />
    </main>
  );
}
