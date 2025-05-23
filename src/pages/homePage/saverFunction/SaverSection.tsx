import { BudgetAndGoalInputs } from "./components/budgetAndGoalInputs/budgetAndGoalInputs/BudgetAndGoalInputs";
import { FinanceBars } from "./components/financeBars/FinanceBars";
import { FinanceReview } from "./components/financeReviews/financeReview/FinanceReview";
import { FinanceResults } from "./components/financeResults/FinanceResults";
import { useCurrencyDataContext } from "../../../hooks/context/CurrencyDataContext";
import { t } from "i18next";

export const SaverSection = () => {
  const {currency} = useCurrencyDataContext()

  return (
    <div className="border-white w-[90%] max-w-[1300px] mx-auto md:mt-[200px] mt-[140px]">
      {/* TEXT */}
      <div className="mx-auto sm:w-[68%] w-[90%]">
        <h1 className="uppercase md:text-xl text-spaceBlue">
          {t("saverSection.title")}
        </h1>
        <h2 className="md:text-3xl text-xl md:w-[80%] w-[98%] font-medium mt-[6px] text-spaceWhite">
          {t("saverSection.desc")}
        </h2>
        <p className="md:text-xl text-lg text-spaceNeonBlue mt-[10px] lg:w-[50%] md:w-[60%] w-[96%]">
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
