import style from "./financeBar.module.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useFinanceSaverContext } from "../../hooks/context/FinanceContext";
import { useState } from "react";

type FinanceBarProps = {
  id: string;
  inputId: string;
  text: string;
};

export const FinanceBar = ({ id, inputId, text }: FinanceBarProps) => {
  const { expensesSum, setExpensesSum } = useFinanceSaverContext();
  const [expenseValue, setExpenseValue] = useState("");

  // Variables
  let expenseValueNum = Number(expenseValue);

  console.log(expenseValue);

  const handleMoneyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let eventValue = e.target.value;
    let eventValueLength = eventValue.length;

    if (eventValueLength < 9 && eventValue[0] !== "0") {
      return setExpenseValue(eventValue);
    }
  };

  const increase = () => {
    setExpensesSum((prevSum) => prevSum - expenseValueNum);
  };

  const decrease = () => {
    setExpensesSum((prevSum) => prevSum + expenseValueNum);
  };

  console.log(expensesSum, expenseValue);

  return (
    <div id={id} className={`${style.body} flex w-[340px]`}>
      <label htmlFor={inputId} className="text-3xl text-spaceBlue">
        {text}:
      </label>
      <input
        onChange={handleMoneyValue}
        value={expenseValue}
        id={inputId}
        className={`${style.input} text-spaceWhite bg-transparent ml-3 text-3xl w-[60%]`}
        type="number"
      />
      <div className="flex text-4xl gap-3 items-center justify-between mb-1">
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
