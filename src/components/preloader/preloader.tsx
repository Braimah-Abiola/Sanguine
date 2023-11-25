"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "./anim";
import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (counter < 100) {
      const timeout = setTimeout(() => {
        setCounter(counter + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {}, 500);
    }
  }, [counter]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="introduction"
    >
      {dimension.width > 0 && (
        <>
          <Wrapper className="flex flex-col h-screen justify-between items-center px-2.5 md:px-10 pb-0 md:pb-10">
            <div></div>
            <div className="relative w-[220px] h-[150px] z-[2147483000]">
              <Image
                className=" hover:scale-110 transition-all -rotate-6"
                fill
                src="/images/common/logo_white.svg"
                alt="Sanguine logo"
              />
            </div>
            <div className="w-full flex flex-row justify-between font-black text-white/80 text-lg z-[2147483000]">
              <p className="uppercase">Loading</p>
              <p className="uppercase">{counter}</p>
              <p className="uppercase">Percentage</p>
            </div>
          </Wrapper>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
