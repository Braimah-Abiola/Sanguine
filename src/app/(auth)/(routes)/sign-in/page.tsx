import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="mt-20 w-full md:w-[35%]">
      <Wrapper className="flex flex-col items-center">
        <h2 className="uppercase text-4xl md:text-7xl font-black">Welcome</h2>

        <div className="flex flex-row items-center gap-2 mt-4">
          <p>Not a member yet?</p>
          <Link href="/sign-up">
            <p className="underline">Join Now</p>
          </Link>
        </div>

        <div className="w-full flex flex-col mt-10 gap-2.5 items-center">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button className="uppercase mt-4 w-full">Log in</Button>

          <Link href="/account/reset">
            <p className="mt-4">Forgot your password?</p>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default SignIn;
