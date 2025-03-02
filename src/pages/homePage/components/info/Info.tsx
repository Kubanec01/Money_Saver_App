import { useTranslation } from "react-i18next";
import { DateGenerator } from "./components/dateGenerator/DateGenerator";
import { QuotesGenerator } from "./components/quotesGenerator/QuotesGenerator";
import { TimeGenerator } from "./components/timeGenerator/TimeGenerator";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto sm:mt-[160px] mt-[80px]">
      {/* TEXT */}
      <div className="text-white md:w-[80%] sm:w-[74%] w-[90%] mx-auto">
        <h1 className="text-xl uppercase text-spaceBlue">{t("info.title")}</h1>
        <h2 className="md:text-3xl text-2xl sm:w-[80%] font-medium md:mt-[6px] text-spaceWhite">
          {t("info.desc")}
        </h2>
      </div>
      {/* BARS */}
      <div className="md:w-[87%] mx-auto md:mt-[46px] mt-[36px] md:flex justify-between">
        {/* LEFT */}
        <div className="md:w-[55%]">
          <QuotesGenerator />
        </div>
        {/* RIGHT */}
        <div className="md:w-[45%] sm:w-[74%] w-[92%] mx-auto md:mt-0 mt-2 flex justify-between md:flex-col sm:flex-row flex-col md:items-end items-center">
          <TimeGenerator />
          <DateGenerator />
        </div>
      </div>
    </div>
  );
};
