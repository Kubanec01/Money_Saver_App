import { InfoCard } from "../../components/infoCard/InfoCard";
import resultsReviewsImg from "../../assets/results-reviews-info-img.png";
import resetBtnImg from "../../assets/reset-btn-info-img.png";
import { Trans, useTranslation } from "react-i18next";
import { InfoData } from "../../data/InfoData";
import { InfoNavbar } from "../../components/navbars/infoNavbar/InfoNavbar";
import { motion } from "motion/react";

const InfoPage = () => {
  const { t } = useTranslation();

  const { sectionsInfoData, expensesReviewsData } = InfoData();

  return (
    <div className="mx-auto w-[90%] max-w-[1300px] sm:mt-[260px] mt-[220px]">
      <InfoNavbar />
      {/* HERO */}
      <div className="w-full px-2">
        <h1
          style={{
            textShadow: "1px 1px 30px #7387fa86",
          }}
          className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-spaceNeonBlue font-extrabold uppercase sm:text-center text-left"
        >
          <Trans i18nKey={"infoPage.hero.title"} />
        </h1>
        <p
          className="lg:text-2xl md:text-xl text-lg text-whiteShadow500 sm:text-center text-left xl:w-[55%] sm:w-[60%] w-[80%] lg:mt-4 mt-2 sm:mx-auto relative
        after:absolute after:w-[94%] md:after:-bottom-8 after:-bottom-4 md:after:left-1/2 after:left-0 md:after:-translate-x-1/2 after:h-[2px] after:bg-[#ffffff7e] after-rounded-[20px]"
        >
          {t("infoPage.hero.desc")}
        </p>
      </div>
      <div>
        {/* BARS SECTIONS INFO */}
        {sectionsInfoData.map((i) => {
          return (
            <InfoCard
              id={i.id}
              key={i.id}
              title={i.title}
              desc={i.desc}
              image={i.image}
              mainPlacement={i.mainPlacement}
            />
          );
        })}
      </div>
      <div>
        {/* PERCENTAGE RESULTS BAR */}
        <div className="sm:my-[160px] mt-[140px] mb-[120px]">
          <div className="lg:h-[340px] h-auto w-full max-w-[900px] mx-auto rounded-[20px]">
            <img
              className="object-cover w-[90%] h-[80%] mx-auto"
              src={resultsReviewsImg}
              alt="expenses-results-reviews-img"
            />
          </div>
          <div className="mx-auto md:w-[94%] flex md:flex-row flex-col p-2 justify-between items-start">
            {expensesReviewsData.map((i, index) => {
              const widthClass =
                i.id === "fun/other-bar" ? "w-full" : "md:w-[84%] w-full";

              return (
                <motion.div
                  initial="h"
                  whileInView="v"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{ duration: 0.8 + index * 0.3 }}
                  variants={{
                    h: { opacity: 0, y: 100 },
                    v: { opacity: 1, y: 0 },
                  }}
                  key={i.id}
                  className="md:w-[30%] sm:w-[70%] w-[80%] mx-auto overflow-hidden md:mt-0 mt-7"
                >
                  <h1 className="text-spaceNeonBlue lg:text-3xl text-2xl">
                    {i.title}
                  </h1>
                  <p
                    className={`text-spaceWhite lg:text-lg md:text-base text-sm text w-full ${widthClass}`}
                  >
                    {i.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* RESET BUTTON INFO */}
        <div className="mb-[140px] p-2">
          <div className="w-[90%] mx-auto">
            <h1 className="text-warningOrange md:text-4xl sm:text-3xl text-2xl sm:text-center mx-auto">
              {t("infoPage.resetButtonInfo.title")}
            </h1>

            <p className="lg:text-lg md:text-base text-sm text-whiteShadow500 sm:text-center mx-auto lg:w-[54%] sm:w-[70%] lg:mt-0 md:mt-1">
              <Trans
                i18nKey={"infoPage.resetButtonInfo.desc"}
                components={{
                  span: <span className="text-white" />,
                }}
              />
            </p>
          </div>
          <img
            className="rounded-[20px] object-cover mx-auto mt-[50px] lg:w-[60%] md:w-[70%] w-[90%]"
            src={resetBtnImg}
            alt="reset-button-img"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
