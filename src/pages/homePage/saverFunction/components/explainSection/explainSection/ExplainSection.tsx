import { useTranslation } from "react-i18next";
import { ExplainBars } from "../components/explainBars/explainBars/ExplainBars";
import { Link } from "react-router";

export const ExplainSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[160px] mb-[110px] w-[90%] max-w-[1500px] mx-auto">
      <div className="sm:w-full w-[94%]">
        <p className="uppercase text-spaceNeonBlue sm:text-center text-left md:text-2xl sm:text-xl">
          {t("explainSection.subTitle")}
        </p>
        <h1
          className="md:text-4xl sm:text-3xl text-xl text-[white] sm:text-center text-left font-extrabold relative
                after:absolute after:h-[2px] sm:after:w-[54%] after:w-[84%] after:bg-[#ffffff9d] sm:after:left-1/2 after:left-0 sm:after:-translate-x-1/2 after:-bottom-4 after:rounded-[20px]
                "
        >
          {t("explainSection.title")}
        </h1>
      </div>
      <div className="lg:mt-[60px] sm:mt-[80px] mt-[60px] 2xl:w-[46%] lg:w-[60%] md:w-[80%] w-full mx-auto">
        <ExplainBars />
      </div>
      <div className="flex justify-center items-center mx-auto w-[40%]">
        <Link
          to="info"
          className="md:text-xl sm:text-lg font-semibold text-[white] border-[2px] md:px-4 px-3 md:py-2 py-1 rounded-[12px] mt-5
        hover:bg-[white] hover:text-[black] duration-200 ease"
        >
          {t("components.explainBtn.text")}
        </Link>
      </div>
    </div>
  );
};
