import { ChartProps } from "../types";

export const SavedChart = ({
  currency,
  budgetNum,
  expensesNum,
}: ChartProps) => {
  const savedMoneyValue = () => {
    return budgetNum - expensesNum;
  };

  const savedMoneyPercent = () => {
    const savedMoney = budgetNum - expensesNum;
    const result = Math.floor((savedMoney / budgetNum) * 100);

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }

    return result;
  };

  return (
    <div className="w-[200px] aspect-square border">
      {/* Title */}
      <h1 className="w-full text-center text-3xl mt-5">Saved</h1>
      {/* Saved Percent */}
      <p className="w-full text-center text-3xl mt-5">{savedMoneyPercent()}%</p>
      {/* Saved Amount */}
      <p className="w-full text-center text-3xl mt-5">
        {savedMoneyValue()} {currency}
      </p>
    </div>
  );
};
