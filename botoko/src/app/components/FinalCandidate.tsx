import React from "react";
import Abalos from "../../../public/final-candidates/Abalos.png";
import Image from "next/image";

export const FinalCandidate = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full font-poppins gap-3">
      <div className="relative w-full h-32 rounded-xl bg-custom-blue">
        <Image
          src={Abalos}
          alt="Abalos"
          layout="fill"
          objectFit="cover"
          className="rounded-xl absolute bottom-0 w-full h-auto"
        />
      </div>
      <div className="flex flex-col leading-0 items-center justify-center">
        <h2 className="font-bold text-2xl uppercase leading-none">Benhur Abalos</h2>
        <p className="leading-0 text-gray-500 italic leading-none">Former DILG Secretary</p>
      </div>
    </div>
  );
};
