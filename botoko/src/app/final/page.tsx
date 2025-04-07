"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import baseX from "base-x";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import logo from "../../../public/logo-botoko-with-tagline.svg";
import { FinalCandidate } from "../components/FinalCandidate";
import { ShareDialog } from "../components/ShareDialog";
import CandidateInfo from "../data/candidates.json";
import { LoadingOverlay } from "../components/LoadingOverlay";

const BASE62_ALPHABET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const base62 = baseX(BASE62_ALPHABET);

const decodeCandidates = (encoded: string): number[] => {
  try {
    if (!encoded) return [];
    const decodedBuffer = base62.decode(encoded);

    return Array.from(decodedBuffer);
  } catch (error) {
    console.error("Failed to decode candidates:", error);
    return [];
  }
};

const FinalListPage = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [myVotes, setMyVotes] = useState<number[]>([]);
  const captureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const encodedVotes = searchParams.get("v") || "";

    if (encodedVotes) {
      const votesArray = decodeCandidates(encodedVotes);
      setMyVotes(votesArray);
      localStorage.setItem("myVotes", JSON.stringify(votesArray));
    } else {
      const storedVotes = localStorage.getItem("myVotes");
      if (storedVotes) {
        setMyVotes(JSON.parse(storedVotes));
      }
    }
  }, [searchParams]);

  const editVotes = () => {
    localStorage.setItem("myVotes", JSON.stringify(myVotes));
    router.push("/candidates");
  };

  return (
    <div className="pb-4 w-full flex flex-col gap-3">
      {isCapturing && <LoadingOverlay />}
      <div className="w-full flex items-center justify-center">
        <div className="flex-1"></div>
        <img
          src={logo.src}
          className="w-64 md:w-72 lg:w-80 h-auto"
          alt="logo"
          crossOrigin="anonymous"
        />

        <div className="hidden sm:flex flex-1 justify-end lg:gap-3 md:gap-1 font-poppins">
          {!isCapturing && (
            <>
              <Button
                onClick={() => setIsShareOpen(true)}
                variant="ghost"
                className="text-lg text-gray-500"
              >
                <IoMdShare className="text-2xl cursor-pointer text-gray-500" />
                Share
              </Button>
              <Button
                variant="ghost"
                className="text-lg text-gray-500"
                onClick={editVotes}
              >
                <FaEdit className="text-2xl cursor-pointer text-gray-500" />
                Edit
              </Button>
            </>
          )}
        </div>

        <div className="flex sm:hidden flex-1 justify-end font-poppins">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-500">
                <IoEllipsisVertical className="text-2xl cursor-pointer text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="flex items-center gap-2 text-gray-500"
                onClick={() => setIsShareOpen(true)}
              >
                <IoMdShare className="text-xl text-gray-500" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 text-gray-500"
                onClick={editVotes}
              >
                <FaEdit className="text-xl text-gray-500" />
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-1 place-items-center">
        {CandidateInfo.filter((c) => myVotes.includes(c.id)).map(
          (candidate) => (
            <FinalCandidate
              key={candidate.id}
              firstName={candidate["first-name"]}
              lastName={candidate["last-name"]}
              position={candidate.position}
              image={candidate["final-image"]}
            />
          )
        )}
        {[...Array(12 - myVotes.length)].map((_, index) => (
          <div key={`abstained-${index}`}>hello</div>
        ))}
      </div>

      <div
        ref={captureRef}
        className={`fixed top-0 left-0 w-[1200px] h-[600px] bg-white p-12 flex flex-col gap-4 items-center justify-center transition-opacity duration-200  ${
          isCapturing
            ? "opacity-100 z-50 pointer-events-auto"
            : "opacity-0 z-[-10] pointer-events-none"
        }`}
      >
        <img
          src={logo.src}
          alt="logo"
          className="w-80 h-auto self-center mb-2"
          crossOrigin="anonymous"
        />

        <div className="grid grid-cols-6 gap-y-3 gap-1 place-items-center">
          {CandidateInfo.filter((c) => myVotes.includes(c.id)).map(
            (candidate) => (
              <FinalCandidate
                key={candidate.id}
                firstName={candidate["first-name"]}
                lastName={candidate["last-name"]}
                position={candidate.position}
                image={candidate["final-image"]}
              />
            )
          )}
        </div>
      </div>

      <ShareDialog
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        captureRef={captureRef}
        setIsCapturing={setIsCapturing}
      />
    </div>
  );
};

export default FinalListPage;
