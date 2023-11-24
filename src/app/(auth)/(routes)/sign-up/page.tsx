import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper/wrapper";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="mt-20 w-full md:w-[35%]">
      <Wrapper className="flex flex-col items-center">
        <h2 className="uppercase text-4xl md:text-7xl font-black">Register</h2>

        <div className="flex flex-row items-center gap-2 mt-4">
          <p>Already have an account?</p>
          <Link href="/sign-in">
            <p className="underline">Log in</p>
          </Link>
        </div>

        <div className="w-full flex flex-col mt-10 gap-2.5 items-center">
          <Input type="name" placeholder="First name" />
          <Input type="name" placeholder="Last name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button className="uppercase mt-4 w-full">Create account</Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default SignUp;
