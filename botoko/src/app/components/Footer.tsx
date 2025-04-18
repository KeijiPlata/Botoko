"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logoInverted from "../../../public/logo-botoko-inverted.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

function Footer() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            toast.success("Message sent successfully!", {
              duration: 3000,
              style: {
                background: "#ffffff",
                color: "#1e419b",
                fontWeight: "bold",
                borderRadius: "15px",
                padding: "20px",
                fontFamily: "var(--font-poppins)",
              },
            });
            formRef.current?.reset();
          },
          (error: Error) => {
            toast.error("Failed to send message. Please try again later.", {
              duration: 3000,
              style: {
                background: "#ffffff",
                color: "#dc2626",
                fontWeight: "bold",
                borderRadius: "15px",
                padding: "20px",
                fontFamily: "var(--font-poppins)",
              },
            });
            console.error(error);
          }
        );
    }
  };

  return (
    <div className="bg-custom-blue transition-all duration-500">
      <Toaster />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:p-10 md:p-8 p-6 md:gap-16 gap-14">
        <div className="flex flex-col justify-center items-start">
          <img
            src={logoInverted.src}
            alt="logo"
            className="w-80 h-auto"
            crossOrigin="anonymous"
          />
          <p className="text-white font-poppins md:px-4 px-2 text-sm md:text-base leading-relaxed text-justify">
            Botoko lets you build and share your Senate list. Choose your
            candidates, preview your list, and spread the word—no sign-up
            needed.
          </p>
        </div>
        <div className="flex gap-2 md:justify-start justify-center md:px-4 px-2 items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-36 rounded-lg flex justify-center items-center">
                <h3 className="text-custom-blue transition-all duration-500 font-poppins">
                  Questions?
                </h3>
              </div>

              <h2 className="text-white font-poppins lg:text-5xl md:text-4xl text-3xl font-semibold">
                Let Me Know
              </h2>
            </div>
            <form
              className="flex flex-col gap-3 font-poppins"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="bg-white"
                required
              />
              <Button
                type="submit"
                className="bg-white text-customBlue rounded-md p-2 font-semibold w-1/3 hover:bg-slate-200 transition-all duration-500"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 flex w-full justify-center items-center font-poppins">
        <p>&copy; {new Date().getFullYear()} Botoko. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
