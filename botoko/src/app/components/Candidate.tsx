import React from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

type CandidateProps = {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  isAdded: boolean;
};

const Candidate = ({
  firstName,
  lastName,
  position,
  image,
  isAdded,
}: CandidateProps): React.JSX.Element => {
  return (
    <div className=" bg-custom-blue rounded-lg flex flex-row items-center lg:h-32 h-24 justify-between w-full shadow-md">
      <div className="flex flex-row items-center w-full grow">
        <div className="relative lg:w-40 w-28 lg:h-32 h-24 mr-3 lg:mr-9">
          <Image
            src={image}
            alt={lastName}
            height={200}
            width={200}
            className="absolute bottom-0 lg:left-4 left-2"
          />
        </div>
        <div className="leading-none">
          <h2 className="text-white leading-none font-semibold lg:text-base md:text-sm uppercase">
            {firstName}
          </h2>
          <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-black uppercase leading-none">
            {lastName}
          </h2>
          <p className="leading-none text-white italic text-xs">{position}</p>
        </div>
      </div>
      <div className="lg:pr-3 pr-2">
        {isAdded ? (
          <FaMinus className="lg:text-4xl md:text-3xl text-xl text-white" />
        ) : (
          <IoMdAdd className="lg:text-4xl md:text-3xl text-2xl text-white" />
        )}
      </div>
    </div>
  );
};

export default Candidate;
