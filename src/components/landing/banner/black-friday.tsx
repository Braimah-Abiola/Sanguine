import { Zap } from "lucide-react";
import Marquee from "react-fast-marquee";

const BlackFridayBanner = () => {
  return (
    <div className="bg-[#101010] py-1 flex flex-col items-center justify-center">
      <Marquee autoFill>
        <div className="flex flex-row space-x-4 ml-8">
          <Zap color="white" fill="white" />
          <p className="uppercase text-white text-base md:text-lg">
            Black days! - up to 80% off
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default BlackFridayBanner;
