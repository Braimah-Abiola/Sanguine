import ShoppingCart from "@/components/shop/cart/cart";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col py-2 md:py-4 relative z-50">
      <div className="w-full px-2.5 md:px-10 flex flex-row items-center justify-between">
        <Link href="/">
          <div className="relative w-[120px] h-[50px]">
            <Image
              className=" hover:scale-110 transition-all"
              fill
              src="/images/common/logo.svg"
              alt="Sanguine logo"
            />
          </div>
        </Link>
        <div className="flex flex-row space-x-10"></div>
        <div className="flex flex-row space-x-4 md:space-x-5">
          <div className="w-12 h-12 bg-transparent hover:bg-accent transition-all cursor-pointer rounded-lg flex items-center justify-center">
            <Heart />
          </div>
          <div className="w-12 h-12 bg-transparent hover:bg-accent transition-all cursor-pointer rounded-lg flex items-center justify-center">
            <ShoppingCart />
          </div>
          <div className="w-12 h-12 bg-transparent hover:bg-accent transition-all cursor-pointer rounded-lg flex items-center justify-center">
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
