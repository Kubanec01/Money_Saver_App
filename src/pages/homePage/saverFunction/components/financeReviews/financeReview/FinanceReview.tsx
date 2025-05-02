import { useFinanceSaverContext } from "../../../../../../hooks/context/FinanceContext";
import { ReviewCart } from "./components/ReviewCart";
import { useExpensesAndResultsBarContext } from "../../../../../../hooks/context/ExpensesAndResultsBarContext";
import { useFinanceDataContext } from "../../../../../../hooks/context/FinanceDataContext";
import { useExpensesAndResultsDataContext } from "../../../../../../hooks/context/ExpensesAndResultsDataContext";

interface FinanceCharts {
  currency: string;
}

export const FinanceReview = ({ currency }: FinanceCharts) => {
  const { budget } = useFinanceDataContext();
  console.log(budget)
  // const { budget, expensesSum } = useFinanceSaverContext();
  // const { expensesSum } = useFinanceSaverContext();
  const { expensesSum } = useFinanceDataContext();
  // const { expenses } = useExpensesAndResultsBarContext();
  // const { expenses } = useExpensesAndResultsBarContext();
  const { expenses } = useExpensesAndResultsDataContext();

  const budgetNum = Number(budget);
  const expensesNum = Number(expensesSum);

  // SAVED REVIEW FUNCTION
  const savedMoneyValue = () => {
    return budgetNum - expensesNum;
  };
  const savedMoneyPercent = () => {
    const savedMoney = budgetNum - expensesNum;
    const result = Math.floor((savedMoney / budgetNum) * 100);

    if (isNaN(result) || !isFinite(result) || isNaN(budgetNum)) return 0;

    return result;
  };

  // EXPENSES REVIEW FUNCTION
  const expensesPercent = () => {
    const result = Math.floor((expensesNum / budgetNum) * 100);

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }

    return result;
  };

  // FUN AND OTHER FUNCTION
  const filteredExpenses = Object.keys(expenses)
    .filter((key) => key === "fun" || key === "other")
    .map((key) => expenses[key]);

  const totalSecExpensesSum = filteredExpenses.reduce(
    (acc, value) => acc + value,
    0
  );

  const secExpenses = () => {
    if (!totalSecExpensesSum) {
      return 0;
    }

    return totalSecExpensesSum;
  };

  const secExpensesPercent = () => {
    const result = Math.floor((totalSecExpensesSum / expensesNum) * 100);

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }

    return result;
  };

  return (
    <div className="lg:p-6 w-[90%] max-w-[960px] mx-auto mt-[90px] rounded-[20px] flex justify-center items-center">
      <div className="lg:w-[96%] w-full h-full flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-6">
        <ReviewCart
          currency={currency}
          title="Saved"
          percentage={savedMoneyPercent}
          valueNum={savedMoneyValue}
        />
        <ReviewCart
          currency={currency}
          title="Spent"
          percentage={expensesPercent}
          valueNum={expensesNum}
        />
        <ReviewCart
          currency={currency}
          title="Fun/Other"
          percentage={secExpensesPercent}
          valueNum={secExpenses}
        />
      </div>
    </div>
  );
};
