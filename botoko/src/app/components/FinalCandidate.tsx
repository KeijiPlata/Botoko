import React from "react";
import Abalos from "../../../public/final-candidates/Abalos.png";
import Image from "next/image";

export const FinalCandidate = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full font-poppins md:gap-3 gap-1">
      <div className="w-full max-w-[160px] md:max-w-[180px] lg:max-w-[200px]">
        <Image
          src={Abalos}
          alt="Abalos"
          className="w-full h-auto rounded-xl"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight items-center justify-center m-0">
        <h2 className="font-bold lg:text-2xl md:text-xl text-lg uppercase leading-tight text-center m-0">
          Benhur Abalos
        </h2>
        <p className="leading-0 text-gray-500 italic leading-tight text-center text-xs md:text-base m-0">
          Former DILG Secretary
        </p>
      </div>
    </div>
  );
};
