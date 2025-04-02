import React from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";

type CandidateProps = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  isAdded: boolean;
  onVoteToggle: () => void;
};

const Candidate = ({
  id,
  firstName,
  lastName,
  position,
  image,
  isAdded,
  onVoteToggle,
}: CandidateProps): React.JSX.Element => {
  return (
    <div className="bg-custom-blue rounded-lg flex flex-row items-center lg:h-32 h-24 justify-between w-full shadow-lg transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
      <p className="text-white font-poppines text-3xl font-bold pl-5">{id}</p>
      <div className="flex flex-row items-center w-full grow">
        <div className="relative lg:w-40 w-28 lg:h-32 h-24 mr-3 lg:mr-9">
          <Image
            src={image}
            alt={lastName}
            height={200}
            width={200}
            className="absolute bottom-0 lg:left-4 left-2"
            priority
          />
        </div>
        <div className="leading-none space-y-0">
          <h3 className="text-white font-semibold lg:text-lg md:text-sm uppercase leading-none m-0">
            {firstName}
          </h3>
          <h2 className="text-white text-[clamp(20px,3vw,30px)] font-bold uppercase leading-none m-0">
            {lastName}
          </h2>
          <p className="text-white italic text-xs lg:text-base leading-none m-0">
            {position}
          </p>
        </div>
      </div>
      <div className="lg:pr-3 pr-2">
        <button onClick={onVoteToggle}>
          {isAdded ? (
            <HiMinusSm className="lg:text-4xl md:text-3xl text-xl text-white" />
          ) : (
            <IoMdAdd className="lg:text-4xl md:text-3xl text-2xl text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Candidate;
