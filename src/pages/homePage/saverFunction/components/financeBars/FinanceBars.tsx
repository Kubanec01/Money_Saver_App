import { useTranslation } from "react-i18next";
import { FinanceBar } from "../../../../../components/financeBar/FinanceBar";
import style from "./financeBars.module.scss";

export const FinanceBars = () => {

  const {t} = useTranslation()

  return (
    <div
      className={`${style.body} p-2 w-[88%] mx-auto mt-[180px] rounded-[20px]`}
    >
      <div className="w-full mt-[48px]">
        <h2 className="text-2xl uppercase text-center text-spaceBlue">
          Add & Save
        </h2>
        <h1 className="text-4xl font-bold text-center text-spaceWhite">
          {t('financeBars.title')}
        </h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "30px",
          alignItems: "center",
          justifyItems: "center",
        }}
        className="w-full mt-[80px] mb-[80px] text-3xl text-white"
      >
        <FinanceBar id={"rent"} inputId="rent" text="Rent" />
        <FinanceBar id={"hobby"} inputId="hobby" text="Hobby" />
        <FinanceBar id={"food"} inputId="food" text="Food" />
        <FinanceBar id={"fun"} inputId="fun" text="Fun" />
        <FinanceBar id={"car"} inputId="car" text="Car" />
        <FinanceBar id={"other"} inputId="other" text="Other" />
      </div>
      <div
      className="w-full mb-[20px]"
      >
        <h3
        className="text-[#ffffff69] text-center text-xl font-bold"
        >
        What you choose to input is up to you.
        </h3>
      </div>
    </div>
  );
};
