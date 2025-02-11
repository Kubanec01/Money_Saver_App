import { ExpensesAndResultsBarProvider } from "../../../hooks/context/ExpensesAndResultsBarContext";
import { BudgetAndGoalInputs } from "./components/budgetAndGoalInputs/budgetAndGoalInputs/BudgetAndGoalInputs";
import { FinanceBars } from "./components/financeBars/FinanceBars";
import { FinanceReview } from "./components/financeReviews/financeReview/FinanceReview";
import { FinanceResults } from "./components/financeResults/FinanceResults";
import { useTranslation } from "react-i18next";

export const SaverSection = () => {
  const { t } = useTranslation();

  return (
    <div className="border-white w-[90%] max-w-[1300px] mx-auto mt-[200px]">
      {/* TEXT */}
      <div className="mx-auto w-[68%]">
        <h1 className="uppercase text-xl text-spaceBlue">
          {t("saverSection.title")}
        </h1>
        <h2 className="text-3xl w-[80%] font-medium mt-[6px] text-spaceWhite">
          {t("saverSection.desc")}
        </h2>
        <p className="text-xl text-spaceNeonBlue mt-[10px] w-[50%]">
          {t("saverSection.subDesc")}
        </p>
      </div>
      <ExpensesAndResultsBarProvider>
        <BudgetAndGoalInputs />
        <FinanceBars />
        <FinanceResults />
        <FinanceReview currency="eur" />
      </ExpensesAndResultsBarProvider>
    </div>
  );
};
