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

  return (
    <div
      className={`w-full mt-[200px] flex justify-center items-center ${
        isPLacementRight ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="w-[50%]">
        <img
          className="w-[94%] h-[400px] object-cover rounded-[20px]"
          src={image}
          alt={`${id}-img`}
        />
      </div>
      <div className="w-[50%]">
        <h1 className="text-4xl text-spaceBlue">{title}</h1>
        <p className="text-spaceWhite text-2xl w-[70%] mt-2 mb-[30px]">
          {desc}
        </p>
      </div>
    </div>
  );
};
