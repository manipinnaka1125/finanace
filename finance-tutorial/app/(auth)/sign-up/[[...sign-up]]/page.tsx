import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import '/styles.css'; 
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">Log In or Create account to get back to your dashboard</p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <center>
              <SignUp path="/sign-up"/>
            </center>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"/>
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image
          src="/logoipsum-226.svg"
          height={250}
          width={250}
          alt="our logo"
          className="rotating-logo" 
        />
      </div>
    </div>
  );
}
