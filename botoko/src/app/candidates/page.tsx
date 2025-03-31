"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiSearch } from "react-icons/fi";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";
import { EmptyCandidate } from "../components/EmptyCandidate";
import Candidate from "../components/Candidate";
import CandidateInfo from "../data/candidates.json";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function CandidatesPage() {
  const [myVotes, setMyVotes] = useState<number[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const toggleVote = (candidateId: number) => {
    setMyVotes((prevVotes) => {
      const isAlreadyAdded = prevVotes.includes(candidateId);
      const candidate = CandidateInfo.find((c) => c.id === candidateId);

      if (!candidate) return prevVotes;

      if (isAlreadyAdded) {
        toast.warning(
          `Removed ${candidate["first-name"]} ${candidate["last-name"]} from your votes.`,
          {
            duration: 3000,
            style: {
              background: "#ffffff",
              color: "#ff8c00",
              fontWeight: "bold",
              borderRadius: "15px",
              padding: "20px",
              fontFamily: "var(--font-poppins)",
            },
          }
        );

        return prevVotes.filter((id) => id !== candidateId);
      } else if (prevVotes.length < 12) {
        toast.success(
          `Added ${candidate["first-name"]} ${candidate["last-name"]} to your votes.`,
          {
            duration: 3000,
            style: {
              background: "#ffffff",
              color: "#1e419b",
              fontWeight: "bold",
              borderRadius: "15px",
              padding: "20px",
              fontFamily: "var(--font-poppins)",
            },
          }
        );
        return [...prevVotes, candidateId];
      }

      toast.error(
        `Vote limit reached! You can only vote for up to 12 candidates.`,
        {
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#ff4d4d",
            fontWeight: "bold",
            borderRadius: "15px",
            padding: "20px",
            fontFamily: "var(--font-poppins)",
          },
        }
      );

      return prevVotes;
    });
  };

  const handleFinalizeVotes = () => {
    if (myVotes.length === 0) {
      toast.error(
        `You must vote for at least one candidate before finalizing!`,
        {
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#ff4d4d",
            fontWeight: "bold",
            borderRadius: "15px",
            padding: "20px",
            fontFamily: "var(--font-poppins)",
          },
        }
      );
      return;
    }
    setIsDialogOpen(true);
  };

  const confirmFinalization = () => {
    if (myVotes.length > 0) {
      localStorage.setItem("myVotes", JSON.stringify(myVotes));
    }
    setIsDialogOpen(false);
    router.push("/final");
  };

  return (
    <Tabs defaultValue="candidates" className="flex flex-col gap-5 w-full">
      <Toaster />
      <div className="flex flex-col gap-5 md:gap-3 md:flex-row md:justify-between items-center w-full lg:pb-7 md:pb-5">
        <div className="flex w-full max-w-lg items-center gap-3">
          <div className="relative w-full">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <Input type="text" placeholder="Search..." className="pl-10" />
          </div>
          <Button
            type="submit"
            className="bg-custom-blue hover:bg-sky-900 transition-all duration-300 ease-in-out active:scale-95"
          >
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
          <AnimatePresence>
            {CandidateInfo.map((candidate) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Candidate
                  firstName={candidate["first-name"]}
                  lastName={candidate["last-name"]}
                  position={candidate.position}
                  image={candidate.image}
                  isAdded={myVotes.includes(candidate.id)}
                  onVoteToggle={() => toggleVote(candidate.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="myvotes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-9 md:gap-6 gap-5">
            <AnimatePresence>
              {Array.from({ length: 12 }).map((_, index) => {
                const candidateId = myVotes[index];
                const candidate = CandidateInfo.find(
                  (c) => c.id === candidateId
                );
                return candidate ? (
                  <motion.div
                    key={candidate.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Candidate
                      firstName={candidate["first-name"]}
                      lastName={candidate["last-name"]}
                      position={candidate.position}
                      image={candidate.image}
                      isAdded={true}
                      onVoteToggle={() => toggleVote(candidate.id)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`empty-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <EmptyCandidate />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex justify-end mt-5">
            <Button
              className="bg-custom-blue hover:bg-sky-900 transition-all duration-300 ease-in-out active:scale-95"
              onClick={handleFinalizeVotes}
            >
              Finalize Votes
            </Button>
          </div>
        </TabsContent>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <DialogContent className="w-full max-w-sm sm:max-w-md bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg font-poppins mx-auto">
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">
              Confirm Your Votes
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2 text-sm sm:text-base">
              Would you like to finalize your selection?
            </DialogDescription>
            <div className="flex justify-end gap-3 mt-5">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-custom-blue hover:bg-sky-900 transition-all duration-300 ease-in-out active:scale-95"
                onClick={confirmFinalization}
              >
                Confirm
              </Button>
            </div>
          </DialogContent>
        </motion.div>
      </Dialog>
    </Tabs>
  );
}

export default CandidatesPage;
