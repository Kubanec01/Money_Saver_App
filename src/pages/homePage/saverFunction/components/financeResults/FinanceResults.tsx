import { Trans, useTranslation } from "react-i18next";
import { ResultBar } from "../../../../../components/resultBar/ResultBar";
import { useCurrencyContext } from "../../../../../hooks/context/CurrencyContext";
import style from "./financeResults.module.scss";
import { t } from "i18next";

export const FinanceResults = () => {
  const { currency } = useCurrencyContext();

  return (
    <div className="mt-[160px] xl:w-[88%] mx-auto">
      {/* TEXT */}
      <div className="xl:w-[80%] lg:w-[70%] sm:w-[70%] w-[90%] mx-auto">
        <p className="lg:text-2xl md:text-xl text-lg uppercase text-[#f69c4ee9]">
          {t("financeResults.subTitle")}
        </p>
        <h1 className="text-spaceWhite lg:text-6xl md:text-5xl text-4xl font-bold lg:mt-[2px] tracking-[-0.4px]">
          <Trans
            i18nKey={"financeResults.title"}
            components={{
              span: <span className={style.neonTitle} />,
            }}
          />
        </h1>
        <p className="text-[#ffffff79] lg:text-2xl sm:text-xl text-lg md:w-[70%] w-[90%] md:mt-[2px]">
          {t("financeResults.desc")} {""}
          <span className="text-white text-xl">🚀</span>
        </p>
      </div>
      <div
        className="justify-center mt-[44px] 2xl:w-[90%] xl:w-full md:w-[660px] w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center xl:gap-[30px] gap-[25px] relative
        after:absolute after:h-[2px] after:w-[90%] after:bg-[#ffffff7a] after:-bottom-14 after:rounded-lg"
      >
        <ResultBar id={"rent"} name={"Rent"} currency={currency} />
        <ResultBar id={"food"} name={"Food"} currency={currency} />
        <ResultBar id={"car"} name={"Car"} currency={currency} />
        <ResultBar id={"hobby"} name={"Hobby"} currency={currency} />
        <ResultBar id={"fun"} name={"Fun"} currency={currency} />
        <ResultBar id={"other"} name={"Other"} currency={currency} />
      </div>
    </div>
  );
};
