import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const ShoppingCart = () => {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  const itemCount = 0;
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
            {itemCount > 0 ? (
              <>
                <ScrollArea className="h-80 w-full rounded-md border-none">
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-10">
                      <Skeleton className="h-52 w-40 rounded-lg" />
                      <div className="flex flex-col justify-between">
                        <div>
                          <Skeleton className="h-7 w-28" />
                          <Skeleton className="h-7 w-44 mt-4" />
                          <Skeleton className="h-7 w-20 mt-4" />
                        </div>
                        <Skeleton className="h-7 w-20 mt-4" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-4">
                        <Skeleton className="h-12 w-32" />
                        <Skeleton className="h-12 w-32" />
                      </div>

                      <Skeleton className="h-12 w-32" />
                    </div>
                  </div>
                </ScrollArea>
              </>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="w-full flex flex-row justify-between">
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      Want
                    </h2>
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      To
                    </h2>
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      Add
                    </h2>
                  </div>

                  <div className="w-full flex flex-row justify-between">
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      Something
                    </h2>
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      To
                    </h2>
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
                      Your
                    </h2>
                  </div>

                  <div className="w-full flex flex-row justify-between">
                    <h2 className="uppercase text-3xl md:text-7xl font-black">
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
              </>
            )}
          </div>
          <SheetFooter>
            {itemCount > 0 ? (
              <>
                <div className="flex flex-col mb-6">
                  <div className="flex flex-row w-full justify-between py-4">
                    <h4>Shipping & Taxes</h4>
                    <p>Calculated at checkout</p>
                  </div>
                  <Separator />
                  <div className="flex flex-row w-full justify-between py-4">
                    <h4>Total</h4>
                    <p>{formatPrice(120)}</p>
                  </div>
                  <Separator />
                  <div className="flex flex-row items-center py-4 space-x-4">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="-mt-1 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      You agree with our Privacy Policy & Terms & Conditions
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <SheetTrigger asChild>
              <div className="w-full">
                <Link href={itemCount > 0 ? "/shop/checkout" : "/shop"}>
                  <Button className="w-full">
                    {itemCount > 0 ? "Checkout" : "Start Shopping"}
                  </Button>
                </Link>
              </div>
            </SheetTrigger>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
