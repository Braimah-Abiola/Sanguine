import Wrapper from "@/components/wrapper/wrapper";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";

const SanguineEssential = () => {
  return (
    <div className="w-full flex flex-col">
      <Wrapper className="flex flex-row justify-between items-start px-2.5 md:px-10">
        <div className="flex flex-col mt-20 w-full">
          <h2 className="uppercase font-black text-6xl">
            Kith checkered sweatshirt
          </h2>

          <div className="bg-primary w-fit flex flex-row space-x-10 mt-12 items-center justify-center px-8 rounded-full h-14">
            <div className="flex flex-row items-center space-x-2 justify-center">
              <Minus size={18} color="white" />
              <p className="text-white text-xl -mt-1">1</p>
              <Plus size={18} color="white" />
            </div>

            <div>
              <p className="text-white text-xl -mt-1">$120.00 USD</p>
            </div>

            <div>
              <p className="uppercase text-white">Add to cart</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="h-[1000px] w-[785px] relative flex items-center -mt-32 justify-center">
            <Image
              fill
              className=" object-cover"
              src="/images/products/product_four.png"
              alt="Product image"
            />
          </div>

          <div className="flex flex-row w-[70%] justify-between -mt-40 items-center z-20">
            <div className="h-14 w-14 items-center justify-center bg-white hover:bg-input transition-all border border-input rounded-full flex cursor-pointer">
              <ChevronLeft />
            </div>

            <div className="flex flex-row space-x-2.5">
              <div className="w-9 h-3 bg-primary rounded-full" />
              <div className="w-3 h-3 bg-primary/80 rounded-full" />
              <div className="w-3 h-3 bg-primary/80 rounded-full" />
            </div>

            <div className="h-14 w-14 items-center justify-center bg-white hover:bg-input transition-all border border-input rounded-full flex cursor-pointer">
              <ChevronRight />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20 w-full">
          <div className="w-full flex flex-row items-start justify-between gap-20">
            <h3 className="uppercase font-black text-lg">Info</h3>
            <p className="text-lg text-primary/80 font-normal">
              Elevate your look, embrace your style. Unleash the essence of
              fashion with confidence and comfort in every thread.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SanguineEssential;
