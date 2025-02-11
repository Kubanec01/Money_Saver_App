import { ChartProps } from "../types";

export const ExpensesChart = ({
  currency,
  budgetNum,
  expensesNum,
  style,
}: ChartProps) => {
  const expensesPercent = () => {
    const result = Math.floor((expensesNum / budgetNum) * 100);

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
        Spent
      </h1>
      {/* Expenses Percent */}
      <p className="w-full text-center text-3xl mt-4 text-spaceBlue">
        {expensesPercent()}%
      </p>
      {/* Expenses Amount */}
      <p className="w-full text-center text-3xl mt-4 text-spaceWhite">
        {expensesNum} {currency}
      </p>
    </div>
  );
};
