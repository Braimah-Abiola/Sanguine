"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";
import SelectSize from "@/components/shop/size/size";
import SizeChart from "@/components/shop/size/chart";

const SanguineEssential = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/products/product_four.png",
    "/images/products/2.png",
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col">
      <Wrapper className="flex flex-row justify-between items-start px-2.5 md:px-10">
        <div className="flex flex-col mt-20 w-full">
          <h2 className="uppercase font-black text-5xl">
            Kith checkered sweatshirt
          </h2>

          <div className="bg-primary w-fit flex flex-row space-x-10 mt-16 items-center justify-center px-8 rounded-full h-[3.2rem]">
            <div className="flex flex-row items-center space-x-2 justify-center">
              <Minus
                onClick={handleDecrement}
                className="cursor-pointer"
                size={18}
                color="white"
              />
              <p className="text-white text-lg -mt-0">{quantity}</p>
              <Plus
                onClick={handleIncrement}
                className="cursor-pointer"
                size={18}
                color="white"
              />
            </div>

            <div>
              <p className="text-white text-lg -mt-0">$120.00 USD</p>
            </div>

            <div>
              <p className="uppercase text-white text-lg -mt-0">Add to cart</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-20 mt-8 w-[85%]">
            <h3 className="uppercase font-black text-lg">Size</h3>
            <SelectSize />
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="h-[1000px] w-[785px] relative flex items-center -mt-36 justify-center">
            <Image
              fill
              className="object-cover hover:scale-105 duration-300 transition ease-in-out"
              src={images[activeIndex]}
              alt="Product image"
            />
          </div>

          <div className="flex flex-row w-[70%] justify-between -mt-32 items-center z-20">
            <div
              className="h-14 w-14 items-center justify-center bg-white hover:bg-input transition-all border border-input rounded-full flex cursor-pointer"
              onClick={handlePrevClick}
            >
              <ChevronLeft />
            </div>

            <div className="flex flex-row space-x-2.5">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-${
                    index === activeIndex ? 9 : 3
                  } h-3 bg-primary rounded-full`}
                />
              ))}
            </div>

            <div
              className="h-14 w-14 items-center justify-center bg-white hover:bg-input transition-all border border-input rounded-full flex cursor-pointer"
              onClick={handleNextClick}
            >
              <ChevronRight />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20 w-full gap-20">
          <div className="w-full flex flex-row items-start gap-20">
            <h3 className="uppercase font-black text-lg w-[30%]">Info</h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-lg text-primary/80 font-normal">
                Elevate your look, embrace your style. Unleash the essence of
                fashion with confidence and comfort in every thread.
              </p>
              <SizeChart />
            </div>
          </div>

          <div className="w-full flex flex-row items-start gap-20">
            <h3 className="uppercase font-black text-lg w-[30%]">Material</h3>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-lg text-primary/80 font-normal">
                85% organic, ring-spun combed cotton, 15% recycled polyester.
                350 GSM fabric - brushed, washed, light sueded.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SanguineEssential;
