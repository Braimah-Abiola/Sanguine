import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper/wrapper";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const LandingHero = () => {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F7] top-0 absolute">
      <Wrapper className="px-2.5 md:px-10">
        <div className="flex flex-col md:flex-row w-full items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-6xl md:text-7xl font-black uppercase text-black w-full md:w-[80%]">
              Elevate Your Wardrobe with Sanguine&apos;s Signature Style
            </h1>
            <p className="text-primary/80 font-normal text-xl mt-4 w-[70%]">
              Elevate your look, embrace your style. Unleash the essence of
              fashion with confidence and comfort in every thread.
            </p>
            <Button className="w-fit px-10 mt-10">
              Shop Now <ChevronRight className="ml-3" />
            </Button>
          </div>

          <div className="w-full">
            <Image
              width={1000}
              height={1200}
              src="/images/common/hero_image_one.png"
              alt="Hero image"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LandingHero;
