import image from "../../../public/abstained.png";

export const AbstainedCandidate = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full font-poppins md:gap-3 gap-1">
      <div className="w-full max-w-[210px] md:max-w-[250px] lg:max-w-[250px] grow">
        <img
          src={image.src}
          alt="Abstained"
          width={375}
          height={350}
          className="w-full h-auto"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex flex-col leading-tight items-center justify-center m-0">
        <p className="text-gray-500 italic leading-tight text-center text-[clamp(8px,2vw,14px)]">
          No Selection
        </p>
      </div>
    </div>
  );
};
