import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const JoinDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Shop All <ChevronRight className="ml-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col-reverse md:flex-row h-full">
          <div className="relative h-[380px] md:h-[500px] w-full">
            <Image fill src="/images/gallery/9.png" alt="Gallery" />
          </div>
          <div className="w-full mt-16 flex flex-col justify-between pb-6 md:pb-8 px-4 md:px-8">
            <div>
              <h4 className="uppercase text-3xl md:text-4xl font-bold text-center">
                Be the first
                <br />
                to know
              </h4>
            </div>

            <div className="flex flex-col gap-2.5 items-start mt-0">
              <div className="flex flex-row items-center space-x-4">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-lg">Our biggest sales</p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-lg">Our next launch</p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-lg">Our next launch</p>
              </div>
              <p className="text-lg text-foreground/80 mt-4">
                And everything you need to find about how Sanguine can transform
                your skin and hair.
              </p>
            </div>

            <div className="w-full mt-8 md:mt-0">
              <Button className="w-full">Enjoy 10% Off Your First Order</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinDialog;
