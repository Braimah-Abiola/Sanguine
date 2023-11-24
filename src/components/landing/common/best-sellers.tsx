import Wrapper from "@/components/wrapper/wrapper";
import JoinDialog from "../dialog/join";
import Image from "next/image";

const BestSellers = () => {
  return (
    <div className="pt-[10rem] pb-[20rem]">
      <Wrapper className="flex flex-col px-2.5 md:px-10">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-6xl uppercase font-black">Best sellers</h2>
          <JoinDialog />
        </div>
        <div className="w-full flex flex-row items-center justify-between mt-12">
          <div className="flex flex-col items-start">
            <div className="h-[560px] w-[435px] relative bg-[#F7F7F7] flex items-center justify-center">
              <Image
                fill
                className=" object-cover"
                src="/images/common/hero_image_two.png"
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
                className=" object-cover"
                src="/images/common/hero_image_one.png"
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
                className=" object-cover"
                src="/images/common/hero_image_two.png"
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
                className=" object-cover"
                src="/images/common/hero_image_one.png"
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
