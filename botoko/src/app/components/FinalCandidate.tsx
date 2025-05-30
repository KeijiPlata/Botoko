import React from "react";

type FinalcandidateProps = {
  firstName: string;
  lastName: string;
  partylist: string;
  image: string;
};

export const FinalCandidate = ({
  firstName,
  lastName,
  partylist,
  image,
}: FinalcandidateProps): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center w-full font-poppins md:gap-3 gap-1">
      <div className="w-full max-w-[210px] md:max-w-[250px] lg:max-w-[250px] grow">
        <img
          src={image}
          alt={lastName}
          width={375}
          height={350}
          className="w-full h-auto"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex flex-col leading-tight items-center justify-center m-0">
        <h2 className="uppercase text-center m-0 flex flex-col font-bold leading-none text-[clamp(16px,4vw,24px)]">
          {lastName}
          <span className="leading-none font-semibold text-[clamp(10px,2.5vw,16px)]">
            {firstName}
          </span>
        </h2>
        <p className="text-gray-500 italic leading-tight text-center text-[clamp(8px,2vw,14px)]">
          {partylist}
        </p>
      </div>
    </div>
  );
};
