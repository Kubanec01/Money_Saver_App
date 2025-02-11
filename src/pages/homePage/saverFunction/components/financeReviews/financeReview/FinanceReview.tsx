import { useFinanceSaverContext } from "../../../../../../hooks/context/FinanceContext";
import { CSSProperties } from "react";
import { ExpensesReview } from "../components/expensesReview/ExpensesReview";
import { FunAndOtherReview } from "../components/funAndOtherReview/FunAndOtherReview";
import { SavedReview } from "../components/savedReview/SavedReview";

interface FinanceCharts {
  currency: string;
}

export const FinanceReview = ({ currency }: FinanceCharts) => {
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
        <SavedReview
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute peniaze */}
        <ExpensesReview
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
        />
        {/* Minute penbiaze na zabavu a other */}
        <FunAndOtherReview
          style={barBodyStyle}
          currency={currency}
          expensesNum={expensesNum}
        />
      </div>
    </div>
  );
};
