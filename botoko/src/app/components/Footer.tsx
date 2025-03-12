import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaMobileAlt, FaEnvelope, FaCoffee } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  const data = [
    { logo: <FaMobileAlt />, info: "09980752227", title: "Mobile" },
    {
      logo: <FaEnvelope />,
      info: "lordmiackykeijip@gmail.com",
      title: "Email",
    },
    { logo: <BsFillTelephoneFill />, info: "89971255", title: "Telephone" },
    {
      logo: <FaCoffee />,
      info: "Cainta, Rizal, Philippines",
      title: "Meet me",
    },
  ];
  return (
    <div className="bg-custom-blue transition-all duration-500">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:p-10 md:p-8 p-6 md:gap-16 gap-14">
        <div className="flex gap-2 md:justify-end justify-center items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-28 rounded-lg flex justify-center items-center">
                <h3 className="text-custom-blue transtion-all duration-500 font-poppins">
                  Get in Touch
                </h3>
              </div>

              <h2 className="text-white font-poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Talk Or Meet With Me
              </h2>
            </div>
            <div className="flex flex-col gap-6 w-full font-poppins">
              {data.map((item, i) => (
                <div
                  className="flex flex-row lg:gap-4 md:gap-3 gap-2 w-full"
                  key={i}
                >
                  <div className="lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-lg bg-white flex justify-center items-center">
                    <div className="lg:text-3xl text-xl text-custom-blue transition-all duration-500">
                      {item.logo}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white font-bold lg:text-lg md:text-base text-sm font-poppins ">
                      {item.title}
                    </h3>
                    <h2 className="text-white font-poppins lg:text-2xl md:text-lg text-base">
                      {item.info}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:justify-start justify-center items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-36 rounded-lg flex justify-center items-center">
                <h3 className="text-custom-blue transition-all duration-500 font-poppins">
                  Estimate Project
                </h3>
              </div>

              <h2 className="text-white font-poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Let Me Know Here
              </h2>
            </div>
            <form className="flex flex-col gap-3 font-poppins">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white"
                required
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-white"
                required
              />
              <Button
                type="submit"
                className="bg-white text-customBlue rounded-md p-2 font-bold w-1/3 hover:bg-slate-200 transition-all duration-500"
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
