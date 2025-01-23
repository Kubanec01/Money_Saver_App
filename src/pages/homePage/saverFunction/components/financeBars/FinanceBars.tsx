import { FinanceBar } from "../../../../../components/financeBar/FinanceBar";
import style from "./financeBars.module.scss";

export const FinanceBars = () => {
  return (
    <div
      className={`${style.body} border w-[90%] mx-auto mt-[180px] h-[460px] rounded-[20px]`}
    >
      <div className="w-full">
        <h1 className="text-4xl font-semibold mt-[50px] text-[white] text-center">
          Here you enter your expenses and income.
        </h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "20px",
          alignItems: "center",
          justifyItems: "center",
        }}
        className="w-full mt-[90px] text-3xl text-white"
      >
        <FinanceBar id={"rent"} inputId="rent" text="Rent" />
        <FinanceBar id={"hobby"} inputId="hobby" text="Hobby" />
        <FinanceBar id={"home"} inputId="hent" text="Home" />
        <FinanceBar id={"fun"} inputId="fun" text="Fun" />
        <FinanceBar id={"car"} inputId="car" text="Car" />
        <FinanceBar id={"other"} inputId="other" text="Other" />
      </div>
    </div>
  );
};
