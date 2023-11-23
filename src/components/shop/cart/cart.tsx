import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const ShoppingCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCartIcon />
      </SheetTrigger>
      <SheetContent className="pb-[58px] md:pb-16">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <Separator orientation="horizontal" />
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col md:gap-1 mt-4 md:mt-4">
            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-3xl md:text-7xl font-bold">Want</h2>
              <h2 className="uppercase text-3xl md:text-7xl font-bold">To</h2>
              <h2 className="uppercase text-3xl md:text-7xl font-bold">Add</h2>
            </div>

            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-3xl md:text-7xl font-bold">
                Something
              </h2>
              <h2 className="uppercase text-3xl md:text-7xl font-bold">To</h2>
              <h2 className="uppercase text-3xl md:text-7xl font-bold">Your</h2>
            </div>

            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-3xl md:text-7xl font-bold">
                Cart?
              </h2>
            </div>

            {/* Suggestions */}
            <div className="mt-10">
              <p className="uppercase text-xl font-bold hidden md:block">
                You would look good in these
              </p>
              <div className="hidden md:block">
                <div className="w-full flex flex-row items-center justify-between mt-6">
                  <div className="flex flex-col items-start">
                    <Skeleton className="h-[20rem] w-[17rem] rounded-lg" />
                    <Skeleton className="w-[80%] h-8 rounded-md mt-2" />
                    <Skeleton className="w-[40%] h-8 rounded-md mt-2" />
                  </div>
                  <div className="flex flex-col items-start">
                    <Skeleton className="h-[20rem] w-[17rem] rounded-lg" />
                    <Skeleton className="w-[80%] h-8 rounded-md mt-2" />
                    <Skeleton className="w-[40%] h-8 rounded-md mt-2" />
                  </div>
                  <div className="flex flex-col items-start">
                    <Skeleton className="h-[20rem] w-[17rem] rounded-lg" />
                    <Skeleton className="w-[80%] h-8 rounded-md mt-2" />
                    <Skeleton className="w-[40%] h-8 rounded-md mt-2" />
                  </div>
                </div>
              </div>

              <p className="uppercase text-lg font-bold md:hidden">
                You would look good in this
              </p>
              <div className="md:hidden mt-4">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col items-start">
                    <Skeleton className="h-[16rem] w-[12rem] rounded-lg" />
                    <Skeleton className="w-full h-7 rounded-md mt-2" />
                    <Skeleton className="w-[60%] h-7 rounded-md mt-2" />
                  </div>
                  <div className="flex flex-col items-start">
                    <Skeleton className="h-[16rem] w-[12rem] rounded-lg" />
                    <Skeleton className="w-full h-7 rounded-md mt-2" />
                    <Skeleton className="w-[60%] h-7 rounded-md mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Link href="/shop">
              <Button className="w-full">Start Shopping</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
