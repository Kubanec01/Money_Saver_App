export type InfoCardProps = {
  id: string;
  title: string;
  desc: string;
  image: string;
  mainPlacement: "right" | "left";
};

export const InfoCard = ({
  id,
  title,
  desc,
  image,
  mainPlacement,
}: InfoCardProps) => {
  const isPLacementRight = mainPlacement === "right";

  // STYLE
  const textPlacement = isPLacementRight ? "ml-0" : "ml-32";

  return (
    <div
      className={`w-full mx-auto mt-[200px] flex justify-center items-center ${
        isPLacementRight ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-[50%]">
        <img
          className="w-[94%] max-w-full h-auto object-cover rounded-[20px]"
          src={image}
          alt={`${id}-img`}
        />
      </div>
      <div className="w-[50%]">
        <h1 className={`text-4xl text-spaceBlue text-left ${textPlacement}`}>
          {title}
        </h1>
        <p
          className={`text-spaceWhite text-xl w-[73%] mt-2 mb-[30px] text-left ${textPlacement}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
