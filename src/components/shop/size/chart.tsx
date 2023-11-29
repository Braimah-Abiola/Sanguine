import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const SizeChart = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit" size="sm" variant="secondary">
          Sizing & Measurements
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[350px]">
        <DialogHeader className=" left-4 md:left-6 absolute top-6">
          <div className="flex flex-row items-center gap-2">
            <p className=" font-semibold text-primary">CM</p>
            <Separator className="h-6" orientation="vertical" />
            <p className="text-primary/60">IN</p>
          </div>
        </DialogHeader>
        <div className="flex flex-col mt-20">
          <div className="w-full flex flex-row justify-between bg-[#DADADA] h-full">
            <div className="flex flex-col w-full">
              <p className="pl-6">Size</p>
              <div className="flex flex-col bg-white gap-3 mt-8 pl-6">
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p>Back length</p>
              <div className="flex flex-col bg-white gap-3 mt-8">
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p>Shoulder width</p>
              <div className="flex flex-col bg-white gap-3 mt-8">
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p>Body width</p>
              <div className="flex flex-col bg-white gap-3 mt-8">
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p>Sleeve length</p>
              <div className="flex flex-col bg-white gap-3 mt-8">
                <p>L</p>
                <p>XL</p>
                <p>XXL</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeChart;
