"use client";
import { useState } from "react";
import { FinalCandidate } from "../components/FinalCandidate";
import { IoMdShare } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "../../../public/logo-botoko-with-tagline.svg";

type CandidateType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  finalImage: string;
};

const FinalListPage = () => {
  const [myVotes, setMyVotes] = useState<CandidateType[]>(() => {
    return JSON.parse(localStorage.getItem("myVotes") || "[]");
  });

  return (
    <div className="pb-4 w-full flex flex-col gap-3">
      <div className="w-full flex items-center">
        <div className="flex-1"></div>
        <Image src={logo} className="w-64 md:w-72 lg:w-80 h-auto" alt="logo" />

        <div className="hidden sm:flex flex-1 justify-end lg:gap-3 md:gap-1 font-poppins">
          <Button variant="ghost" className="text-lg text-gray-500">
            <IoMdShare className="text-2xl cursor-pointer text-gray-500" />
            Share
          </Button>
          <Button variant="ghost" className="text-lg text-gray-500">
            <FaEdit className="text-2xl cursor-pointer text-gray-500" />
            Edit
          </Button>
        </div>

        <div className="flex sm:hidden flex-1 justify-end font-poppins">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-500">
                <IoEllipsisVertical className="text-2xl cursor-pointer text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center gap-2 text-gray-500">
                <IoMdShare className="text-xl text-gray-500" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-500">
                <FaEdit className="text-xl text-gray-500" />
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-1 place-items-center">
        {myVotes.map((candidate) => (
          <FinalCandidate
            key={candidate.id}
            firstName={candidate.firstName}
            lastName={candidate.lastName}
            position={candidate.position}
            image={candidate.finalImage}
          />
        ))}
      </div>
    </div>
  );
};

export default FinalListPage;
