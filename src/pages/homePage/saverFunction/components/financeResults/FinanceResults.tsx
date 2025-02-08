import { ResultBar } from "../../../../../components/resultBar/ResultBar";
import style from "./financeResults.module.scss";

export const FinanceResults = () => {
  return (
    <div className="mt-[160px] w-[88%] mx-auto">
      {/* TEXT */}
      <div className="w-[80%] mx-auto">
        <p className="text-2xl uppercase text-[#f69c4ee9]">your steps and</p>
        <h1 className="text-spaceWhite text-6xl font-bold mt-[2px] tracking-[-0.4px]">
          <span className={style.neonTitle}>Mission</span> results:
        </h1>
        <h2 className="text-[#ffffff79] text-2xl w-[70%] mt-[2px]">
          Mission results speak loud and clear—keep up the great work! And if
          you haven’t met your expectations just yet, don’t give up. You’re
          capable of extraordinary things—you’ve got this!{" "}
          <span className="text-white text-xl">🚀</span>
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          alignItems: "center",
          gap: "30px",
          justifyItems: "center",
        }}
        className="flex justify-center items-center mt-[44px] w-[90%] mx-auto"
      >
        <ResultBar id={"rent"} name={"Rent"} currency={"eur"} />
        <ResultBar id={"home"} name={"Home"} currency={"eur"} />
        <ResultBar id={"car"} name={"Car"} currency={"eur"} />
        <ResultBar id={"hobby"} name={"Hobby"} currency={"eur"} />
        <ResultBar id={"fun"} name={"Fun"} currency={"eur"} />
        <ResultBar id={"other"} name={"Other"} currency={"eur"} />
      </div>
    </div>
  );
};
