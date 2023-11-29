import Wrapper from "@/components/wrapper/wrapper";
import JoinDialog from "../dialog/join";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Heart } from "lucide-react";

const BestSellers = () => {
  return (
    <div className="pt-[10rem] pb-[20rem]">
      <Wrapper className="flex flex-col px-2.5 md:px-10">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-6xl uppercase font-black">Best sellers</h2>
          <JoinDialog />
        </div>
        <div className="w-full flex flex-row items-center justify-between mt-12">
          <div className="group flex flex-col items-start relative overflow-hidden">
            <div className="h-[560px] w-[435px] relative bg-[#F7F7F7] flex items-center justify-center group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out overflow-hidden">
              <Image
                fill
                className="object-cover transition-transform transform-gpu"
                src="/images/products/product_four.png"
                alt="Product image"
              />
            </div>
            <div className="absolute flex flex-col justify-between top-0 left-0 p-8 w-full h-full opacity-0 bg-[#F7F7F7] group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {/* Overlay */}
              <div>
                <div className="flex flex-row items-start justify-between">
                  <h3 className="uppercase text-3xl font-black">
                    Kith checkered sweatshirt
                  </h3>
                  <Link href="/shop/products/sanguine-essential-tee">
                    <ArrowUpRight size={40} />
                  </Link>
                </div>
                <p className=" uppercase mt-10 font-semibold">Description</p>
                <p className="text-lg mt-1">Short product description here.</p>

                <p className="uppercase mt-5">Price</p>
                <p className="text-lg mt-1">$200.00 USD</p>
              </div>
              <div>
                <Button className="w-full">Add to cart</Button>
                <Button variant="ghost" className="w-full mt-2">
                  Whislist <Heart className="ml-2" />
                </Button>
              </div>
            </div>
            <h4 className="uppercase font-bold text-xl mt-8">
              Kith checkered sweatshirt
            </h4>
            <p className="text-lg">$200.00 USD</p>
            <p className="text-lg mt-2">Short product description here.</p>
          </div>

          <div className="flex flex-col items-start">
            <div className="h-[560px] w-[435px] relative bg-[#F7F7F7] flex items-center justify-center">
              <Image
                fill
                className=" object-cover hover:scale-110 duration-300 transition ease-in-out"
                src="/images/products/product_four.png"
                alt="Product image"
              />
            </div>
            <h4 className=" uppercase font-bold text-xl mt-8">
              Kith checkered sweatshirt
            </h4>
            <p className="text-lg">$200.00 USD</p>
            <p className="text-lg mt-2">Short product description here.</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="h-[560px] w-[435px] relative bg-[#F7F7F7] flex items-center justify-center">
              <Image
                fill
                className=" object-cover hover:scale-110 duration-300 transition ease-in-out"
                src="/images/products/product_four.png"
                alt="Product image"
              />
            </div>
            <h4 className=" uppercase font-bold text-xl mt-8">
              Kith checkered sweatshirt
            </h4>
            <p className="text-lg">$200.00 USD</p>
            <p className="text-lg mt-2">Short product description here.</p>
          </div>
          <div className="flex flex-col items-start">
            <div className="h-[560px] w-[435px] relative bg-[#F7F7F7] flex items-center justify-center">
              <Image
                fill
                className=" object-cover hover:scale-110 duration-300 transition ease-in-out"
                src="/images/products/product_four.png"
                alt="Product image"
              />
            </div>
            <h4 className=" uppercase font-bold text-xl mt-8">
              Kith checkered sweatshirt
            </h4>
            <p className="text-lg">$200.00 USD</p>
            <p className="text-lg mt-2">Short product description here.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BestSellers;
