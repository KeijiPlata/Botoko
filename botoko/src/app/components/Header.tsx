"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/logo-botoko.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useRouter } from "next/navigation";


function Header() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/")
  }

  return (
    <div className="flex justify-between items-center p-5 font-poppins w-full h-full">
      <div className="cursor-pointer" onClick={handleClick}>
        <Image src={Logo} alt="Logo" className="w-32 md:w-40 h-auto" />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex text-gray-500 items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
            <MdLanguage className="md:text-xl text-lg text-gray-500" />
            <span className="hidden md:inline">{language}</span>
            <IoIosArrowDown className="md:text-xl text-lg" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleLanguageChange("English")}>
              English
            </DropdownMenuItem>
            {/* TODO: Remove this first temporarily, Add Filipino language to this site */}
            {/* <DropdownMenuItem onClick={() => handleLanguageChange("Filipino")}>Filipino</DropdownMenuItem>  */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
