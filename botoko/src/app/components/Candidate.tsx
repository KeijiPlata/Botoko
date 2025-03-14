import React from "react";
import Image from "next/image";

type CandidateProps = {
  name: string;
  position: string;
  image: string;
  isAdded: boolean;
};

const Candidate = ({
  name,
  position,
  image,
  isAdded,
}: CandidateProps): React.JSX.Element => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{position}</p>
      <Image src={image} alt={name} height={300} width={300}/>
      <button>{isAdded ? "Added" : "Add Candidate"}</button>
    </div>
  );
};

export default Candidate;
