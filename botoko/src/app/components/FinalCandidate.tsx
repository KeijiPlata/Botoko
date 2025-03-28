import React from "react";
import Abalos from "../../../public/final-candidates/Abalos.png";
import Image from "next/image";

export const FinalCandidate = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full font-poppins md:gap-3 gap-1">
      <div className="w-full max-w-[210px] md:max-w-[250px] lg:max-w-[250px]">
        <Image
          src={Abalos}
          alt="Abalos"
          className="w-full h-auto rounded-xl"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight items-center justify-center m-0">
        <h2 className="font-semibold uppercase text-sm leading-none text-center m-0 flex flex-col">
          Benhur{" "}
          <span className="md:text-2xl text-lg font-bold leading-none">
            Abalos
          </span>
        </h2>
        <p className="leading-0 text-gray-500 italic leading-tight text-center text-xs md:text-sm m-0">
          Former DILG Secretary
        </p>
      </div>
    </div>
  );
};
