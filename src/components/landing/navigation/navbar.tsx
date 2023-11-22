import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className="pb-16">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <Separator orientation="horizontal" />
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-2.5 mt-8">
            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-7xl font-bold">Want</h2>
              <h2 className="uppercase text-7xl font-bold">To</h2>
              <h2 className="uppercase text-7xl font-bold">Add</h2>
            </div>

            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-7xl font-bold">Something</h2>
              <h2 className="uppercase text-7xl font-bold">To</h2>
              <h2 className="uppercase text-7xl font-bold">Your</h2>
            </div>

            <div className="w-full flex flex-row justify-between">
              <h2 className="uppercase text-7xl font-bold">Cart?</h2>
            </div>
          </div>

          <div>
            <Button className="w-full">Save changes</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
