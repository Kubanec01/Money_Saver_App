import { ExpensesAndResultsBarProvider } from "../../../hooks/context/ExpensesAndResultsBarContext";
import { BudgetAndGoalInputs } from "./components/budgetAndGoalInputs/budgetAndGoalInputs/BudgetAndGoalInputs";
import { FinanceBars } from "./components/financeBars/FinanceBars";
import { FinanceCharts } from "./components/financeCharts/FinanceCharts";
import { FinanceResults } from "./components/financeResults/FinanceResults";

export const SaverSection = () => {
  return (
    <div className="border-white w-[90%] max-w-[1300px] mx-auto mt-[200px]">
      {/* TEXT */}
      <div className="mx-auto w-[68%]">
        <h1 className="uppercase text-xl text-spaceBlue">Let's Set Goals</h1>
        <h2 className="text-3xl w-[80%] font-medium mt-[6px] text-spaceWhite">
          On the left side, write down your budget for the savings period. On
          the right side, write your financial goal that you want to achieve by
          the end of your deadline.
        </h2>
        <p className="text-xl text-spaceNeonBlue mt-[10px] w-[50%]">
          This step is essential for achieving your goal and gaining a strong
          dose of motivation.
        </p>
      </div>
      <ExpensesAndResultsBarProvider>
        <BudgetAndGoalInputs />
        <FinanceBars />
        <FinanceResults />
        <FinanceCharts currency="eur"/>
      </ExpensesAndResultsBarProvider>
    </div>
  );
};
