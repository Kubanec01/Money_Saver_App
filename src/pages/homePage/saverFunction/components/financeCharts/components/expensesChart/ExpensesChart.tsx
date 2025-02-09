import { ChartProps } from "../types";

export const ExpensesChart = ({
  currency,
  budgetNum,
  expensesNum,
}: ChartProps) => {
  const expensesPercent = () => {
    const result = Math.floor((expensesNum / budgetNum) * 100);

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }

    return result;
  };

  return (
    <div className="w-[200px] aspect-square border">
      {/* Title */}
      <h1 className="w-full text-center text-3xl mt-5">Spent</h1>
      {/* Expenses Percent */}
      <p className="w-full text-center text-3xl mt-5">{expensesPercent()}%</p>
      {/* Expenses Amount */}
      <p className="w-full text-center text-3xl mt-5">
        {expensesNum} {currency}
      </p>
    </div>
  );
};
