import React from "react";
import Abalos from "../../../public/final-candidates/Abalos.png";
import Image from "next/image";

export const FinalCandidate = () => {
  return (
    <div className="relative flex items-center justify-center rounded-xl bg-custom-blue w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] xl:max-w-[260px] aspect-[3/4]">
      <div className="relative w-full h-full">
        <Image
          src={Abalos}
          alt="Abalos"
          layout="fill"
          objectFit="cover"
          className="rounded-xl absolute bottom-[-10%] w-full h-auto"
        />
      </div>
    </div>
  );
};