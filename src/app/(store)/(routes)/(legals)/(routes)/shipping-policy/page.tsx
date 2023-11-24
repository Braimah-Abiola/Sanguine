
import ShippingPolicyAccordion from "@/components/accordion/shipping-policy";
import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy - Sanguine",
  description: "...",
};

const ShippingPolicy = () => {
  return (
    <main className="w-full">
      <Wrapper className="md:px-12 mt-16">
        <div className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-col">
            <h3 className="uppercase text-xl font-bold">Legals</h3>
            <div className="mt-4 text-lg flex flex-col gap-2 text-primary/80">
              <Link className="w-fit" href="/privacy-policy">
                <p className=" hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </p>
              </Link>
              <Link href="/terms-of-service">
                <p className=" hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </p>
              </Link>
              <Link href="/refund-policy">
                <p className=" hover:text-primary transition-colors cursor-pointer">
                  Refund Policy
                </p>
              </Link>
              <p className="text-primary font-medium cursor-pointer">
                [ Shipping Policy ]
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h2 className="uppercase text-4xl md:text-7xl font-black">
              Shipping Policy
            </h2>

            <p className="text-base mt-12">
              Thank you for visiting Sanguine, we hope you have a pleasant
              shopping experience. Please see below for more information on our
              shipping policy.
            </p>

            <ShippingPolicyAccordion />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ShippingPolicy;
