import { Zap } from "lucide-react";
import Marquee from "react-fast-marquee";

const BlackFridayBanner = () => {
  return (
    <div className="bg-[#101010] py-1 flex flex-col items-center justify-center relative z-10">
      <Marquee autoFill>
        <div className="flex flex-row items-center space-x-4 ml-8">
          <Zap size={22} color="white"  />
          <p className="uppercase text-white text-base md:text-base">
            Black days! - up to 20% off
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default BlackFridayBanner;
