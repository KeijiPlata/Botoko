import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export const EmptyCandidate = () => {
  return (
    <div className="border-4 w-full lg:h-32 h-24 rounded-lg border-dashed flex flex-row justify-center items-center gap-1 border-gray-300">
      <IoIosAddCircle className="md:text-3xl text-2xl text-gray-400"/>
      <h2 className="md:text-xl text-lg text-gray-400">Add Candidate</h2>
    </div>
  );
};
