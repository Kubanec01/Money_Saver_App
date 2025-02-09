import { useExpensesAndResultsBarContext } from "../../../../../../../hooks/context/ExpensesAndResultsBarContext";
import { SecondaryExpenses } from "../types";

export const FunAndOtherChart = ({ currency }: SecondaryExpenses) => {
  const { expenses } = useExpensesAndResultsBarContext();

  const filteredExpenses = Object.keys(expenses)
    .filter((key) => key === "fun" || key === "other")
    .map((key) => expenses[key]);

  const totalExpensesSum = filteredExpenses.reduce((acc, value) => acc + value, 0);

  const secExpenses = () => {
    if (!totalExpensesSum) {
      return 0;
    }

    return totalExpensesSum;
  };

  return (
    <div className="w-[200px] aspect-square border">
      {/* Title */}
      <h1 className="w-full text-center text-3xl mt-5">Fun/Other</h1>
      {/* Expenses Percent */}
      <p className="w-full text-center text-3xl mt-5">%</p>
      {/* Expenses Amount */}
      <p className="w-full text-center text-3xl mt-5">
        {secExpenses()} {currency}
      </p>
    </div>
  );
};
