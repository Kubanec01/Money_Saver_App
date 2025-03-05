export interface InfoCardBaseType {
  id: string;
  title: string;
  desc: string;
}

export interface InfoCardProps extends InfoCardBaseType {
  image: string;
  mainPlacement: "right" | "left";
}

export const InfoCard = ({
  id,
  title,
  desc,
  image,
  mainPlacement,
}: InfoCardProps) => {
  const isPLacementRight = mainPlacement === "right";

  // STYLE
  const textPlacement = isPLacementRight ? "ml-0" : "lg:ml-32 md:ml-14";

  return (
    <div
      key={id}
      className={`w-full mb-[30px] mx-auto md:mt-[200px] mt-[140px] flex justify-center items-center ${
        isPLacementRight
          ? "md:flex-row flex-col"
          : "md:flex-row-reverse flex-col"
      }`}
    >
      <div className="md:w-[50%]">
        <img
          className="md:w-[94%] max-w-full h-auto object-cover rounded-[20px]"
          src={image}
          alt={`${title}-img`}
        />
      </div>
      <div className="md:w-[50%] sm:w-[70%] w-[80%] sm:mt-0 mt-6">
        <h1
          className={`lg:text-4xl sm:text-3xl text-2xl text-spaceBlue text-left ${textPlacement}`}
        >
          {title}
        </h1>
        <p
          className={`text-spaceWhite lg:text-xl md:text-lg text-sm lg:w-[73%] sm:w-[80%] xl:mt-2 text-left ${textPlacement}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
