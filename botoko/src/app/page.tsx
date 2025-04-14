"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import heroIphone from "../../public/iphone-mockup/heroSection.png";
import smheroIphone from "../../public/iphone-mockup/smIphoneCandidates.png";
import CreateCustomize from "../../public/key-features/CreateCustomize.svg";
import NoAccount from "../../public/key-features/NoAccount.svg";
import ShareSave from "../../public/key-features/Sharesave.svg";
import VoteSmart from "../../public/iphone-mockup/VoteSmart.svg";
import EffortlessSharing from "../../public/iphone-mockup/EffortlessSharing.svg";
import Steps from "../../public/iphone-mockup/Steps.svg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  const steps = [
    {
      id: 1,
      title: "Pick your Candidates",
      description:
        "Browse the list of senatorial candidates, select your preferred ones, and finalize your vote. Once done, your customized list will be generated—ready to share.",
    },
    {
      id: 2,
      title: "Save & Share",
      description:
        "Easily share your list on social media through a unique link or as a downloadable PNG image. No sign-up required, just share and go!",
    },
    {
      id: 3,
      title: "Start the Conversation",
      description:
        "Encourage discussions by sharing your list with friends and family to promote informed voting.Easily pick and arrange your senatorial candidates.",
    },
  ];

  const faqs = [
    {
      question: "Do I need to sign up?",
      answer:
        "No, Botoko lets you create and share your list instantly without an account.",
    },
    {
      question: "Is this an official election tool?",
      answer:
        "No, this is a personal tool to help you organize your senatorial picks before election day.",
    },
    {
      question: "Can I edit my list later?",
      answer:
        "Yes, simply update your selections, and a new shareable link will be generated.",
    },
    {
      question: "How do I share my list?",
      answer:
        "You can copy the direct link or download your list as a image to share on social media.",
    },
    {
      question: "Is my list public?",
      answer:
        "No, your list is only accessible to those you share the link with.",
    },
    {
      question: "Can I use this on mobile?",
      answer: "Yes! Botoko is fully responsive and works on any device.",
    },
    {
      question: "Does this influence my actual vote?",
      answer:
        "No, this tool is for personal planning only. Your official vote is cast at the polling station.",
    },
  ];

  return (
    <div className="w-full flex flex-col font-poppins gap-10 relative overflow-hidden">
      {/* Hero Section */}
      <div className="z-10 flex flex-col justify-center items-center gap-5 mb-16 md:mb-1 lg:mb-5 px-5">
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold leading-none text-custom-blue">
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

      {/* Key Features Section */}
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

      {/* Benefits Section */}
      <div className="flex flex-col items-center justify-center gap-10 w-full px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
          <div className="flex flex-col items-center justify-center">
            <Image src={VoteSmart} alt="Icon for VoteSmart" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:px-12 px-5">
            <h2 className="md:text-5xl text-3xl md:text-start text-center  text-custom-blue font-semibold md:self-start self-center">
              Vote Smart
            </h2>
            <p className="text-gray-500 text-justify">
              Take control of your choices by exploring, selecting, and
              organizing candidates that align with your values—so you can vote
              with confidence.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
          <div className="flex flex-col items-center justify-center gap-4 lg:px-12 px-5 md:order-1 order-2">
            <h2 className="md:text-5xl text-3xl md:text-start text-center text-custom-blue font-semibold md:self-start self-center">
              Effortless Sharing
            </h2>
            <p className="text-gray-500 text-justify">
              Easily customize your senatorial list, then share it with friends
              or save it for later. No accounts, no hassle—just smooth and
              simple.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:order-2 order-1">
            <Image src={EffortlessSharing} alt="Icon for VoteSmart" />
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 bg-custom-blue rounded-3xl px-5 md:px-10 lg:px-16 py-10">
        <div className="md:flex justify-center items-center hidden">
          <Image src={Steps} alt="Image for Botoko Steps" />
        </div>
        <div className="flex flex-col gap-8 items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left w-full">
            How it works?
          </h1>
          {steps.map((step, index) => (
            <div className="flex flex-col self-start gap-2" key={index}>
              <h2 className="text-2xl lg:text-3xl font-semibold flex items-center gap-2">
                <span className="bg-white text-custom-blue rounded-full font-bold w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xl md:text-2xl">
                  {step.id}
                </span>
                {step.title}
              </h2>
              <p className="text-justify lg:px-12 px-5 md:px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center justify-center w-full px-5 ">
        <h2 className="text-custom-blue text-3xl md:text-5xl font-semibold mb-6 text-center">
          FAQ
        </h2>
        <div className="w-full max-w-6xl font-poppins">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
