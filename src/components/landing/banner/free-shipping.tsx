import { X } from "lucide-react";

const FreeShipping = () => {
  return (
    <div className="bg-[#101010] w-full py-1 flex flex-col items-center justify-center">
      <div className="w-full flex flex-row justify-between px-5">
        <div />
        <p className="text-white text-base md:text-lg">
          Free shipping on all orders, T&C apply
        </p>
        <X
          className="h-6 w-6 hover:scale-105 transition-all cursor-pointer"
          color="white"
        />
      </div>
    </div>
  );
};

export default FreeShipping;
