import { useTranslation } from "react-i18next";
import { ExplainBars } from "../components/explainBars/explainBars/ExplainBars";

export const ExplainSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[180px] mb-[110px] w-[90%] max-w-[1500px] mx-auto">
      <div>
        <p className="uppercase text-spaceNeonBlue text-center text-2xl">
          {t("explainSection.subTitle")}
        </p>
        <h1
          className="text-4xl text-[white] text-center font-extrabold relative
                after:absolute after:h-[2px] after:w-[54%] after:bg-[#ffffff9d] after:-bottom-4 after:left-[23%] after:rounded-[20px]
                "
        >
          {t("explainSection.title")}
        </h1>
      </div>
      <div className="mt-[60px] w-[46%] mx-auto">
        <ExplainBars />
      </div>
    </div>
  );
};
