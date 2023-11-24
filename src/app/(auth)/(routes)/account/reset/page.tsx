import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="mt-20 w-full md:w-[35%]">
      <Wrapper className="flex flex-col items-center">
        <h2 className="uppercase text-4xl md:text-7xl font-black">
          Reset Password
        </h2>

        <div className="w-full flex flex-col mt-10 gap-2.5 items-center">
          <Input type="email" placeholder="Email" />

          <Button className="uppercase mt-4 w-full">Send reset email</Button>

          <Link href="/sign-up">
            <p className="mt-4">Create an account</p>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
