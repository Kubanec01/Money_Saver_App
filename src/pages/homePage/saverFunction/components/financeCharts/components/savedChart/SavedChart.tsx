import { ChartProps } from "../types";

export const SavedChart = ({
  currency,
  budgetNum,
  expensesNum,
  style,
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
    <div
    style={style}
    className="w-[220px] aspect-square">
      {/* Title */}
      <h1 className="w-full text-center text-3xl mt-9 text-spaceNeonBlue">Saved</h1>
      {/* Saved Percent */}
      <p className="w-full text-center text-3xl mt-4 text-spaceBlue">{savedMoneyPercent()}%</p>
      {/* Saved Amount */}
      <p className="w-full text-center text-3xl mt-4 text-spaceWhite">
        {savedMoneyValue()} {currency}
      </p>
    </div>
  );
};
