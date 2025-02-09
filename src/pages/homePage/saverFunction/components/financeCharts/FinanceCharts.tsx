import { useFinanceSaverContext } from "../../../../../hooks/context/FinanceContext";
import { ExpensesChart } from "./components/expensesChart/ExpensesChart";
import { SavedChart } from "./components/savedChart/SavedChart";
import style from "./financeCharts.module.scss";

interface FinanceCharts {
  currency: string;
}

export const FinanceCharts = ({ currency }: FinanceCharts) => {
  const { budget, expensesSum } = useFinanceSaverContext();

  const budgetNum = Number(budget);
  const expensesNum = Number(expensesSum);

  return (
    <div
      className={`${style.body} p-6 w-[90%] max-w-[1020px] mx-auto mt-[80px] rounded-[20px] h-[500px] flex justify-center items-center`}
    >
      <div className="w-[94%] h-full flex items-center justify-between">
        {/* Saved Value */}
        <SavedChart
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute peniaze */}
        <ExpensesChart
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute penbiaze na zabavu a other */}
        <div className="w-[200px] aspect-square border">
          <h1></h1>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
