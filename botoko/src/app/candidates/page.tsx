import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CandidatesPage() {
  return (
    <Tabs defaultValue="all" className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 md:gap-3 md:flex-row md:justify-between items-center w-full">
        <div className="flex w-full max-w-lg items-center gap-3">
          <div className="relative w-full max-w-sm">
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
            My Votes
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="w-full p-4 rounded-md">
        <TabsContent value="candidates">
          <p>All candidates will be displayed here.</p>
        </TabsContent>
        <TabsContent value="myvotes">
          <p>Shortlisted candidates will be displayed here.</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default CandidatesPage;
