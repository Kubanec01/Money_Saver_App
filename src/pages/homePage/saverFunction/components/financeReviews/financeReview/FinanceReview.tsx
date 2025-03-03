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
  const barBodyClass = "w-[240px] h-[200px]";

  return (
    <div className="p-6 w-[90%] max-w-[960px] mx-auto mt-[90px] rounded-[20px] flex justify-center items-center">
      <div className="lg:w-[96%] w-full border h-full flex items-center justify-between">
        <SavedReview
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
          barBodyClass={barBodyClass}
        />
        <ExpensesReview
          style={barBodyStyle}
          currency={currency}
          budgetNum={budgetNum}
          expensesNum={expensesNum}
          barBodyClass={barBodyClass}
        />
        <FunAndOtherReview
          style={barBodyStyle}
          currency={currency}
          expensesNum={expensesNum}
          barBodyClass={barBodyClass}
        />
      </div>
    </div>
  );
};


// Tieto Bars by som prepisal idealne do jednej sablony a spravil logiku rovno v tejto componentne lebo robit tomu responsivity je jeden velky otras
