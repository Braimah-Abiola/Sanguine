import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-10 pb-10 bg-[#F7F7F7] mt-40">
      <div className="relative w-full h-[650px]">
        <Image
          fill
          className=""
          src="/images/common/logo-text.svg"
          alt="Sanguine logo text"
        />
      </div>

      <Wrapper className="px-2.5 md:px-10">
        <div className="w-full flex flex-row justify-between space-x-[20rem]">
          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-row justify-between w-[80%]">
              <div className="flex flex-col">
                <h6 className="uppercase font-semibold text-xl">Email</h6>
                <p className="text-lg text-primary/80 mt-2">
                  info@sanguine.shop
                </p>
              </div>

              <div className="flex flex-col">
                <h6 className="uppercase font-semibold text-xl">Call us</h6>
                <p className="text-lg text-primary/80 mt-2">+233 557 661 362</p>
              </div>

              <div className="flex flex-col">
                <h6 className="uppercase font-semibold text-xl">Tax number</h6>
                <p className="text-lg text-primary/80 mt-2">335-578-986</p>
              </div>
            </div>

            <div className="flex flex-row space-x-10 items-center">
              <Image
                width={70}
                height={45}
                src="/images/payment/visa.svg"
                alt="Visa"
              />
              <Image
                width={60}
                height={40}
                src="/images/payment/mastercard.svg"
                alt="Visa"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <h6 className="uppercase font-semibold text-xl">Shop</h6>
              <p className="text-lg text-primary/80 mt-2">Shirts</p>
              <p className="text-lg text-primary/80 mt-2">Hoddies</p>
              <p className="text-lg text-primary/80 mt-2">Launches</p>
              <p className="text-lg text-primary/80 mt-2">Sale</p>
            </div>

            <div className="flex flex-col">
              <h6 className="uppercase font-semibold text-xl">Company</h6>
              <p className="text-lg text-primary/80 mt-2">About</p>
              <p className="text-lg text-primary/80 mt-2">FAQ</p>
              <p className="text-lg text-primary/80 mt-2">Contact</p>
            </div>

            <div className="flex flex-col">
              <h6 className="uppercase font-semibold text-xl">Legal</h6>
              <p className="text-lg text-primary/80 mt-2">
                Returns & Exchanges
              </p>
              <p className="text-lg text-primary/80 mt-2">Shipping policy</p>
            </div>

            <div className="flex flex-col">
              <h6 className="uppercase font-semibold text-xl">Social</h6>
              <p className="text-lg text-primary/80 mt-2">Instagram</p>
              <p className="text-lg text-primary/80 mt-2">Twitter</p>
              <p className="text-lg text-primary/80 mt-2">Tiktok</p>
            </div>
          </div>
        </div>
      </Wrapper>

      <Separator className="mt-10" />

      <Wrapper className="px-2.5 md:px-10 mt-10">
        <div className="w-full flex flex-row justify-between space-x-[43rem]">
          <div className="flex flex-row justify-between w-[52%]">
            <p className="text-lg text-primary/80 mt-2">info@sanguine.shop</p>
            <p className="text-lg text-primary/80 mt-2">+233 557 661 362</p>
          </div>

          <div className="flex flex-row justify-between w-full">
            <p className="text-lg text-primary/80 mt-2">Returns & Exchanges</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
