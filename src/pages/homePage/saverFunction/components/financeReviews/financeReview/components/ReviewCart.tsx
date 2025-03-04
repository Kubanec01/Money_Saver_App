interface ReviewCartProps {
  currency: string;
  title: string;
  percentage: () => number;
  valueNum: (() => number) | number;
}

export const ReviewCart = ({
  currency,
  title,
  percentage,
  valueNum,
}: ReviewCartProps) => {
  const value = valueNum instanceof Function ? valueNum() : valueNum;

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(194deg, #bc245c42, #6b728039)",
        borderRadius: "20px",
        borderRight: "1px solid #ffffffae",
        borderTop: "1px solid #ffffffae",
      }}
      className="lg:w-[240px] sm:w-[200px] w-[200px] sm:h-[210px] h-[150px]"
    >
      {/* TITLE */}
      <h1 className="w-full text-center sm:text-3xl text-2xl sm:mt-7 mt-4 text-spaceNeonBlue">
        {title}
      </h1>
      {/* PERCENTAGE */}
      <p className="w-full text-center sm:text-3xl text-2xl sm:mt-4 mt-3 text-spaceBlue">
        {percentage()}%
      </p>
      {/* NUMBER AND CURRENCY */}
      <p className="w-full text-center sm:text-3xl text-2xl sm:mt-4 mt-2 text-spaceWhite">
        {value} {""}
        {currency}
      </p>
    </div>
  );
};
