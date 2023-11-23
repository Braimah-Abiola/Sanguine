import ShoppingCart from "@/components/shop/cart/cart";
import { Heart } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col py-4">
      <div className="w-full px-20 flex flex-row items-center justify-between">
        <div className="relative w-[120px] h-[50px]">
          <Image fill src="/images/common/logo.svg" alt="Sanguine logo" />
        </div>
        <div className="flex flex-row space-x-10">
          <p>Hey</p>
          <p>Hey</p>
          <p>Hey</p>
        </div>
        <div className="flex flex-row space-x-14">
          <Heart />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
