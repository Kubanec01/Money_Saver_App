import style from "./financeBar.module.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useFinanceSaverContext } from "../../hooks/context/FinanceContext";
import { useState } from "react";
import { useExpensesAndResultsBarContext } from "../../hooks/context/ExpensesAndResultsBarContext";
import { HandleKeyDown } from "../../features/HandleKeyDown";
import { HandleOnWheel } from "../../features/HandleOnWheel";

type FinanceBarProps = {
  id: string;
  inputId: string;
  text: string;
};

export const FinanceBar = ({ id, inputId, text }: FinanceBarProps) => {
  const { setExpensesSum, budget, openModal } = useFinanceSaverContext();
  const [expenseValue, setExpenseValue] = useState("");
  const { updateExpense, expenses } = useExpensesAndResultsBarContext();

  // Variables
  let expenseValueNum = Number(expenseValue);

  const handleMoneyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let eventValue = e.target.value;
    let eventValueLength = eventValue.length;

    if (eventValueLength < 9 && eventValue[0] !== "0") {
      setExpenseValue(eventValue);
    }
  };

  const increase = () => {
    if (budget === "0") {
      return openModal("missing-budget-modal");
    }
    const newValue = (expenses[id] || 0) + Number(expenseValue);
    setExpensesSum((prevSum) => prevSum + expenseValueNum);
    updateExpense(id, newValue);
  };

  const decrease = () => {
    const newValue = (expenses[id] || 0) - Number(expenseValue);
    setExpensesSum((prevSum) => prevSum - expenseValueNum);
    updateExpense(id, newValue);
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      increase();
    }
  };

  return (
    <div id={id} className={`${style.body} flex sm:w-[340px] w-[270px]`}>
      <label htmlFor={inputId} className="sm:text-3xl text-2xl text-spaceBlue">
        {text}:
      </label>
      <input
        onWheel={HandleOnWheel}
        onKeyDown={(e) => {
          HandleKeyDown;
          onEnterPress(e);
        }}
        onChange={handleMoneyValue}
        value={expenseValue}
        id={inputId}
        className={`${style.input} text-spaceWhite bg-transparent ml-3 sm:text-3xl text-2xl w-[60%]`}
        type="number"
      />
      <div className="flex sm:text-4xl text-3xl gap-3 items-center justify-between mb-1">
        <button
          title="Add an expense"
          onClick={increase}
          className={style.button}
        >
          <CiCirclePlus />
        </button>
        <button
          title="Remove the expense"
          onClick={decrease}
          className={style.button}
        >
          <CiCircleMinus />
        </button>
      </div>
    </div>
  );
};
