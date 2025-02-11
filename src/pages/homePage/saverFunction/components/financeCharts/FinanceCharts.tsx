import { BiBorderRadius } from "react-icons/bi";
import { useFinanceSaverContext } from "../../../../../hooks/context/FinanceContext";
import { ExpensesChart } from "./components/expensesChart/ExpensesChart";
import { FunAndOtherChart } from "./components/funAndOtherChart/FunAndOtherChart";
import { SavedChart } from "./components/savedChart/SavedChart";
import { CSSProperties } from "react";
FunAndOtherChart;

interface FinanceCharts {
  currency: string;
}

export const FinanceCharts = ({ currency }: FinanceCharts) => {
  const { budget, expensesSum } = useFinanceSaverContext();

  const budgetNum = Number(budget);
  const expensesNum = Number(expensesSum);

  // STYLE
  const barBodyStyle: CSSProperties = {
    backgroundImage: "linear-gradient(194deg, #bc245c42, #6b728039)",
    borderRadius: "20px",
    borderRight: "1px solid #ffffffae",
    borderTop: "1px solid #ffffffae",
  };

  return (
    <div className="p-6 w-[90%] max-w-[960px] mx-auto mt-[80px] rounded-[20px] h-[300px] flex justify-center items-center">
      <div className="w-[94%] h-full flex items-center justify-between">
        {/* Saved Value */}
        <SavedChart
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute peniaze */}
        <ExpensesChart
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute penbiaze na zabavu a other */}
        <FunAndOtherChart
          style={barBodyStyle}
          currency={currency}
          expensesNum={expensesNum}
        />
      </div>
    </div>
  );
};
