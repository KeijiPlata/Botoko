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
    <div className=" bg-custom-blue rounded-lg w-full shadow-md grid grid-cols-3 justify-items-center content-center place-items-center place-content-center relative h-36">
      <Image
        src={image}
        width={200}
        height={200}
        alt=""
        className="absolute left-5 bottom-0"
      />

      <div className="col-span-2 justify-self-end">
        <h2 className="text-white leading-none font-semibold text-lg uppercase">
          {firstName}
        </h2>
        <h2 className="text-white text-6xl font-black uppercase leading-none">
          {lastName}
        </h2>
        <p className="leading-none text-white italic">{position}</p>
      </div>
      <div className="justify-self-end pr-4">
        {isAdded ? (
          <FaMinus className="text-5xl text-white" />
        ) : (
          <IoMdAdd className="text-5xl text-white" />
        )}
      </div>
    </div>
  );
};

export default Candidate;
