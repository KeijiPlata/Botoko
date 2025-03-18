"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiSearch } from "react-icons/fi";
import Candidate from "../components/Candidate";
import CandidateInfo from "../data/candidates.json";

// Define the type for a candidate
type CandidateType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
};

function CandidatesPage() {
  const [myVotes, setMyVotes] = useState<CandidateType[]>([]);

  // Function to handle adding/removing candidates
  const toggleVote = (candidate: CandidateType) => {
    setMyVotes((prevVotes) => {
      const isAlreadyAdded = prevVotes.some((c) => c.id === candidate.id);

      if (isAlreadyAdded) {
        return prevVotes.filter((c) => c.id !== candidate.id);
      } else if (prevVotes.length < 12) {
        return [...prevVotes, candidate];
      }
      return prevVotes;
    });
  };

  return (
    <Tabs defaultValue="candidates" className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-5 md:gap-3 md:flex-row md:justify-between items-center w-full lg:pb-7 md:pb-5">
        <div className="flex w-full max-w-lg items-center gap-3">
          <div className="relative w-full ">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <Input type="text" placeholder="Search..." className="pl-10" />
          </div>
          <Button type="submit" className="bg-custom-blue hover:bg-sky-900">
            Search
          </Button>
        </div>

        <TabsList className="flex max-w-sm w-full">
          <TabsTrigger
            value="candidates"
            className="text-gray-500 data-[state=active]:bg-custom-blue data-[state=active]:text-white px-4 py-2 rounded-md transition w-full"
          >
            Candidates
          </TabsTrigger>
          <TabsTrigger
            value="myvotes"
            className="text-gray-500 data-[state=active]:bg-custom-blue data-[state=active]:text-white px-4 py-2 rounded-md transition w-full"
          >
            My Votes ({myVotes.length}/12)
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="w-full rounded-md">
        <TabsContent
          value="candidates"
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-9 md:gap-6 gap-5"
        >
          {CandidateInfo.map((candidate) => (
            <Candidate
              key={candidate.id}
              firstName={candidate["first-name"]}
              lastName={candidate["last-name"]}
              position={candidate.position}
              image={candidate.image}
              isAdded={myVotes.some((c) => c.id === candidate.id)}
              onVoteToggle={() =>
                toggleVote({
                  id: candidate.id,
                  firstName: candidate["first-name"],
                  lastName: candidate["last-name"],
                  position: candidate.position,
                  image: candidate.image,
                })
              }
            />
          ))}
        </TabsContent>
        <TabsContent value="myvotes">
          {myVotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-9 md:gap-6 gap-5">
              {myVotes.map((candidate) => (
                <Candidate
                  key={candidate.id}
                  firstName={candidate.firstName}
                  lastName={candidate.lastName}
                  position={candidate.position}
                  image={candidate.image}
                  isAdded={true}
                  onVoteToggle={() => toggleVote(candidate)}
                />
              ))}
            </div>
          ) : (
            <p>Shortlisted candidates will be displayed here.</p>
          )}
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default CandidatesPage;
