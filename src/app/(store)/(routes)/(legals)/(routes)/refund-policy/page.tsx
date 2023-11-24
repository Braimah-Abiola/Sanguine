import RefundPolicyAccordion from "@/components/accordion/refund-policy";
import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Sanguine",
  description: "...",
};


const RefundPolicy = () => {
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
              <Link className="w-fit" href="/terms-of-service">
                <p className=" hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </p>
              </Link>
              <p className="text-primary font-medium cursor-pointer">
                [ Refund Policy ]
              </p>
              <Link href="/shipping-policy">
                <p className=" hover:text-primary transition-colors cursor-pointer">
                  Shipping Policy
                </p>
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h2 className="uppercase text-4xl md:text-7xl font-black">
              Refund Policy
            </h2>

            <p className="text-base mt-12">
              You can enjoy free refunds on your orders within 14 days after
              your order has been delivered. Please see below for more
              information on our return policy: Certain limitations apply on
              purchases made during sale seasons.
            </p>

            <RefundPolicyAccordion />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default RefundPolicy;
