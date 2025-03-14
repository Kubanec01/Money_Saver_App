import { useTranslation } from "react-i18next";
import { FinanceBar } from "../../../../../components/financeBar/FinanceBar";
import style from "./financeBars.module.scss";

export const FinanceBars = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`${style.body} p-2 md:w-[88%] mx-auto mt-[180px] rounded-[20px]`}
    >
      <div className="w-full sm:mt-[48px] mt-[20px]">
        <h2 className="lg:text-2xl sm:text-xl text-lg uppercase text-center text-spaceBlue">
          Add & Save
        </h2>
        <h1 className="lg:text-4xl sm:text-3xl text-2xl mx-auto font-bold text-center text-spaceWhite">
          {t("financeBars.title")}
        </h1>
      </div>
      <div className="w-full md:mt-[80px] mt-[60px] text-3xl text-white grid lg:grid-cols-2 grid-cols-1 justify-items-center md:gap-[30px] gap-[40px]">
        <FinanceBar id={"rent"} inputId="rent" text="Rent" />
        <FinanceBar id={"hobby"} inputId="hobby" text="Hobby" />
        <FinanceBar id={"food"} inputId="food" text="Food" />
        <FinanceBar id={"fun"} inputId="fun" text="Fun" />
        <FinanceBar id={"car"} inputId="car" text="Car" />
        <FinanceBar id={"other"} inputId="other" text="Other" />
      </div>
      <div className="w-full md:mt-[80px] mt-[60px] mb-[20px]">
        <h3 className="text-[#ffffff69] text-center mx-auto sm:w-full w-[90%] sm:text-xl text-lg md:font-bold">
          {t("financeBars.caption")}
        </h3>
      </div>
    </div>
  );
};
