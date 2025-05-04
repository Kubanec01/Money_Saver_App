import { BudgetAndGoalInputs } from "./components/budgetAndGoalInputs/budgetAndGoalInputs/BudgetAndGoalInputs";
import { FinanceBars } from "./components/financeBars/FinanceBars";
import { FinanceReview } from "./components/financeReviews/financeReview/FinanceReview";
import { FinanceResults } from "./components/financeResults/FinanceResults";
import { useTranslation } from "react-i18next";
import { useCurrencyContext } from "../../../hooks/context/CurrencyContext";
import { useCurrencyDataContext } from "../../../hooks/context/CurrencyDataContext";

export const SaverSection = () => {
  const { t } = useTranslation();
  // const {currency} = useCurrencyContext()
  const {currency} = useCurrencyDataContext()

  return (
    <div className="border-white w-[90%] max-w-[1300px] mx-auto md:mt-[200px] mt-[140px]">
      {/* TEXT */}
      <div className="mx-auto sm:w-[68%] w-[90%]">
        <h1 className="uppercase md:text-xl text-lg text-spaceBlue">
          {t("saverSection.title")}
        </h1>
        <h2 className="md:text-3xl text-2xl md:w-[80%] w-[98%] font-medium mt-[6px] text-spaceWhite">
          {t("saverSection.desc")}
        </h2>
        <p className="text-xl text-spaceNeonBlue mt-[10px] lg:w-[50%] md:w-[60%] w-[96%]">
          {t("saverSection.subDesc")}
        </p>
      </div>
        <BudgetAndGoalInputs />
        <FinanceBars />
        <FinanceResults />
        <FinanceReview currency={currency} />
    </div>
  );
};
