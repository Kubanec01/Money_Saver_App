import { useExpensesAndResultsBarContext } from "../../../../../../../hooks/context/ExpensesAndResultsBarContext";
import { SecondaryExpenses } from "../types";

export const FunAndOtherReview = ({
  currency,
  expensesNum,
  style
}: SecondaryExpenses) => {
  const { expenses } = useExpensesAndResultsBarContext();

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
    <div
    style={style}
    className="w-[240px] h-[200px]">
      {/* Title */}
      <h1 className="w-full text-center text-3xl mt-9 text-spaceNeonBlue">
        Fun/Other
      </h1>
      {/* Expenses Percent */}
      <p className="w-full text-center text-3xl mt-4 text-spaceBlue">
        {secExpensesPercent()}%
      </p>
      {/* Expenses Amount */}
      <p className="w-full text-center text-3xl mt-4 text-spaceWhite">
        {secExpenses()} {currency}
      </p>
    </div>
  );
};
