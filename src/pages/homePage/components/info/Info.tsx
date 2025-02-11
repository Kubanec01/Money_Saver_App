import { useTranslation } from "react-i18next";
import { DateGenerator } from "./components/dateGenerator/DateGenerator";
import { QuotesGenerator } from "./components/quotesGenerator/QuotesGenerator";
import { TimeGenerator } from "./components/timeGenerator/TimeGenerator";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto mt-[160px]">
      {/* TEXT */}
      <div className="text-white w-[80%] mx-auto">
        <h1 className="text-xl uppercase text-spaceBlue">{t("info.title")}</h1>
        <h2 className="text-3xl w-[80%] font-medium mt-[6px] text-spaceWhite">
          {t("info.desc")}
        </h2>
      </div>
      {/* BARS */}
      <div className="w-[87%] mx-auto mt-[46px] flex justify-between">
        {/* LEFT */}
        <div className="w-[55%]">
          <QuotesGenerator />
        </div>
        {/* RIGHT */}
        <div className="w-[45%] flex justify-between flex-col items-end">
          <TimeGenerator />
          <DateGenerator />
        </div>
      </div>
    </div>
  );
};
