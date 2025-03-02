import { InfoCard } from "../../components/infoCard/InfoCard";
import resultsReviewsImg from "../../assets/results-reviews-info-img.png";
import resetBtnImg from "../../assets/reset-btn-info-img.png";
import { Trans, useTranslation } from "react-i18next";
import { InfoData } from "../../data/InfoData";
import { InfoNavbar } from "../../components/navbars/infoNavbar/InfoNavbar";

const InfoPage = () => {
  const { t } = useTranslation();

  const { sectionsInfoData, expensesReviewsData } = InfoData();

  return (
    <div className="mx-auto w-[90%] max-w-[1300px] mt-[260px]">
      <InfoNavbar />
      {/* HERO */}
      <div className="w-full">
        <h1 className="text-7xl text-spaceNeonBlue font-extrabold uppercase text-center">
          <Trans i18nKey={"infoPage.hero.title"} />
        </h1>
        <p
          className="text-2xl text-whiteShadow500 text-center w-[55%] mt-4 mx-auto relative
        after:absolute after:w-[94%] after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#ffffff7e] after-rounded-[20px]"
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
        <div className="my-[160px]">
          <div className="h-[340px] w-[900px] mx-auto rounded-[20px]">
            <img
              className="object-cover w-[90%] h-[80%] mx-auto"
              src={resultsReviewsImg}
              alt="expenses-results-reviews-img"
            />
          </div>
          <div className="mx-auto w-[92%] flex p-2 justify-between items-start">
            {expensesReviewsData.map((i) => {
              const widthClass =
                i.id === "fun/other-bar" ? "w-full" : "w-[84%]";

              return (
                <div key={i.id} className="w-[30%] overflow-hidden">
                  <h1 className="text-spaceNeonBlue text-3xl">{i.title}</h1>
                  <p className={`text-spaceWhite text-lg ${widthClass}`}>
                    {i.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* RESET BUTTON INFO */}
        <div className="mb-[140px] p-2">
          <div className="w-[90%] mx-auto">
            <h1 className="text-warningOrange text-4xl text-center mx-auto">
              {t("infoPage.resetButtonInfo.title")}
            </h1>

            <p className="text-lg text-whiteShadow500 text-center mx-auto w-[54%]">
              <Trans
                i18nKey={"infoPage.resetButtonInfo.desc"}
                components={{
                  span: <span className="text-white" />,
                }}
              />
            </p>
          </div>
          <img
            className="rounded-[20px] object-cover mx-auto mt-[50px] w-[60%]"
            src={resetBtnImg}
            alt="reset-button-img"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
