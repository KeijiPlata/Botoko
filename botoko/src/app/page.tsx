"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import heroIphone from "../../public/iphone-mockup/heroSection.png";
import smheroIphone from "../../public/iphone-mockup/smIphoneCandidates.png";
import CreateCustomize from "../../public/key-features/CreateCustomize.svg";
import NoAccount from "../../public/key-features/NoAccount.svg";
import ShareSave from "../../public/key-features/Sharesave.svg";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/candidates");
  };

  const keyFeature = [
    {
      image: CreateCustomize,
      title: "Create & Customize",
      description: "Easily pick and arrange your senatorial candidates.",
    },
    {
      image: ShareSave,
      title: "Share & Save",
      description: "Generate a unique link or download your list as a image.",
    },
    {
      image: NoAccount,
      title: "No Account Needed",
      description: "Access and share your list instantly without signing up.",
    },
  ];

  return (
    <div className="w-full flex flex-col font-poppins gap-10 relative overflow-hidden">
      <div className="z-10 flex flex-col justify-center items-center gap-5 mb-16 md:mb-1 lg:mb-5 px-5">
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold leading-none">
            Your Voice matters.
          </p>
          <h2 className="md:text-5xl text-3xl font-semibold text-custom-blue leading-none">
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
        <div className="bg-custom-blue w-full max-w-6xl h-[200px] rounded-3xl  md:absolute  md:top-1/2 md:-translate-y-1/2 md:h-[55%] md:rounded-3xl z-0" />
        <Image
          src={heroIphone}
          alt="Iphone Mockup"
          className="relative z-10 w-[80%] max-w-[1000px] h-auto object-contain hidden md:block"
          priority
        />

        <Image
          src={smheroIphone}
          alt="Iphone Mockup"
          className="absolute -top-20 z-10 w-[80%] max-w-[300px] h-auto object-contain md:hidden"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1 place-items-center h-full mt-16 md:mt-0">
        {keyFeature.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center justify-evenly text-center px-10 md:px-4 h-full"
          >
            <Image
              src={feature.image}
              priority
              alt={feature.title}
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-custom-blue text-2xl md:text-3xl font-semibold">
                {feature.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
