import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

function CandidatesPage() {
  return (
    <div className="font-poppins">
      {" "}
      <div className="flex w-full max-w-lg items-center gap-3">
        <div className="relative w-full max-w-sm">
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10" // Add padding to prevent overlap
          />
        </div>
        <Button type="submit" className="bg-custom-blue">Search</Button>
      </div>
    </div>
  );
}

export default CandidatesPage;
