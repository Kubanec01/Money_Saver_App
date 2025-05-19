import {
  InfoCardProps,
  InfoCardBaseType,
} from "../components/infoCard/InfoCard";
import coreCoordsImg from "../assets/api-info-img.png";
import budgetGoalImg from "../assets/budget-goal-info-img.png";
import financeBarsImg from "../assets/financeBars-info-img.png";
import resultsImg from "../assets/results-info-img.png";
import { t } from "i18next";

export const InfoData = () => {

  const sectionsInfoData: InfoCardProps[] = [
    {
      id: "core-coords-info",
      title: t("infoPage.infoCarts.coreCoordsInfo.title"),
      desc: t("infoPage.infoCarts.coreCoordsInfo.desc"),
      image: coreCoordsImg,
      mainPlacement: "right",
    },
    {
      id: "budget-goal-info",
      title: t("infoPage.infoCarts.budgetGoalInfo.title"),
      desc: t("infoPage.infoCarts.budgetGoalInfo.desc"),
      image: budgetGoalImg,
      mainPlacement: "left",
    },
    {
      id: "finance-bars-info",
      title: t("infoPage.infoCarts.financeBarsInfo.title"),
      desc: t("infoPage.infoCarts.financeBarsInfo.desc"),
      image: financeBarsImg,
      mainPlacement: "right",
    },
    {
      id: "expenses-results-info",
      title: t("infoPage.infoCarts.expensesResultsInfo.title"),
      desc: t("infoPage.infoCarts.expensesResultsInfo.desc"),
      image: resultsImg,
      mainPlacement: "left",
    },
  ];

  const expensesReviewsData: InfoCardBaseType[] = [
    {
      id: "saved-bar",
      title: t("infoPage.expensesReviewsCart.savedBar.title"),
      desc: t("infoPage.expensesReviewsCart.savedBar.desc"),
    },
    {
      id: "spent-bar",
      title: t("infoPage.expensesReviewsCart.spentBar.title"),
      desc: t("infoPage.expensesReviewsCart.spentBar.desc"),
    },
    {
      id: "fun/other-bar",
      title: t("infoPage.expensesReviewsCart.funOtherBar.title"),
      desc: t("infoPage.expensesReviewsCart.funOtherBar.desc"),
    },
  ];

  return { sectionsInfoData, expensesReviewsData };
};
