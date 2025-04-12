"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import heroIphone from "../../public/iphone-mockup/heroSection.png";
import smheroIphone from "../../public/iphone-mockup/iphoneFinalCandidates.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/candidates");
  };

  return (
    <div className="w-full flex flex-col font-poppins gap-10 relative overflow-hidden">
      <div className="z-10 flex flex-col justify-center items-center gap-5 mb-16 md:mb-1 lg:mb-5">
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold leading-none">
            Your Voice matters.
          </p>
          <h2 className="md:text-5xl text-4xl font-semibold text-custom-blue leading-none">
            Let&apos;s make it count
          </h2>
          <p className="text-gray-500 md:text-base text-xs max-w-md mx-auto">
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

      <div className="relative flex justify-center items-center">
        <div className="bg-custom-blue w-full max-w-6xl h-[250px] rounded-3xl  md:absolute  md:top-1/2 md:-translate-y-1/2 md:h-[55%] md:rounded-3xl z-0" />

        <Image
          src={heroIphone}
          alt="Iphone Mockup"
          className="relative z-10 w-[80%] max-w-[1000px] h-auto object-contain hidden md:block"
          priority
        />
        <Image
          src={smheroIphone}
          alt="Iphone Mockup"
          className="absolute -top-20 md:top-0 z-10 w-[80%] max-w-[300px] h-auto object-contain md:hidden"
          priority
        />
      </div>
    </div>
  );
}
