"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import heroIphone from "../../public/iphone-mockup/heroSection.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/candidates");
  };

  return (
    <div className="w-full flex flex-col font-poppins gap-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold leading-none ">
            Your Voice matters.
          </p>
          <h2 className="text-5xl font-semibold text-custom-blue leading-none">
            Let&apos;s make it count
          </h2>
          <p className="text-gray-500 text-center">
            Build your Senate list, share your choices instantly, and inspire
            change—no sign-up required.
          </p>
        </div>
        <Button
          className="bg-custom-blue hover:bg-sky-900 transition-all duration-300 ease-in-out active:scale-95"
          onClick={handleClick}
        >
          Start your list
        </Button>
      </div>
      <div className="h-96">
        <div className="flex flex-col justify-center items-center bg-custom-blue rounded-3xl h-32 relative">
          <Image src={heroIphone} alt="Iphone Mockup" className="absolute  bottom-0" />
        </div>
      </div>
    </div>
  );
}
