import { useTranslation } from "react-i18next";
import { ExplainBars } from "../components/explainBars/explainBars/ExplainBars";

export const ExplainSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[160px] mb-[110px] w-[90%] max-w-[1500px] mx-auto">
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
      <div className="flex justify-center items-center mx-auto w-[40%]">
        <button
          className="text-xl font-semibold text-[white] border-[2px] px-4 py-2 rounded-[12px] mt-5
        hover:bg-[white] hover:text-[black] duration-200 ease"
        >
          {t("components.explainBtn.text")}
        </button>
      </div>
    </div>
  );
};
