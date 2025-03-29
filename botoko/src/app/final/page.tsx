"use client";
import { useState } from "react";
import { FinalCandidate } from "../components/FinalCandidate";
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
      <Image
        src={logo}
        className="self-center w-64 md:w-72 lg:w-80 h-auto"
        alt="logo"
      />
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
