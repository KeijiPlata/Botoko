"use client";
import { useState } from "react";
import { FinalCandidate } from "../components/FinalCandidate";

type CandidateType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

const FinalListPage = () => {
  const [myVotes, setMyVotes] = useState<CandidateType[]>(() => {
    return JSON.parse(localStorage.getItem("myVotes") || "[]");
  });

  return (
    <div className="pb-4">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
        {[...Array(12)].map((_, index) => (
          <FinalCandidate key={index} />
        ))}
      </div>
    </div>
  );
};

export default FinalListPage;

