import style from "./financeBar.module.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useFinanceSaverContext } from "../../hooks/context/FinanceContext";
import { SetStateAction, useCallback, useState } from "react";
import { useExpensesAndResultsBarContext } from "../../hooks/context/ExpensesAndResultsBarContext";
import { HandleKeyDown } from "../../features/HandleKeyDown";
import { HandleOnWheel } from "../../features/HandleOnWheel";
import { useFinanceDataContext } from "../../hooks/context/FinanceDataContext";
import { useAuthContext } from "../../hooks/auth/authContext/authContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useExpensesAndResultsDataContext } from "../../hooks/context/ExpensesAndResultsDataContext";

type FinanceBarProps = {
  id: string;
  inputId: string;
  text: string;
};

export const FinanceBar = ({ id, inputId, text }: FinanceBarProps) => {
  const { budget, expensesSum, setExpensesSum, openModal } = useFinanceDataContext();
  const { userId } = useAuthContext();
  // const { setExpensesSum, openModal } = useFinanceSaverContext();
  // const { openModal } = useFinanceSaverContext();
  // const { updateExpense, expenses } = useExpensesAndResultsBarContext();
  const { updateExpense, expenses } = useExpensesAndResultsDataContext();
  const [expenseValue, setExpenseValue] = useState("");

  const setExpensesDoc = (value: number) => {
    if (!userId || value === undefined) return;

    const ref = doc(db, "users", userId);
    setDoc(ref, { expenses: value }, { merge: true });
  };

  setExpensesDoc(expensesSum);

  // Variables
  let expenseValueNum = Number(expenseValue);

  const handleMoneyValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let eventValue = e.target.value;
      let eventValueLength = eventValue.length;

      if (eventValueLength < 9 && eventValue[0] !== "0") {
        setExpenseValue(eventValue);
      }
    },
    [setExpenseValue]
  );

  const handleExpenseChange = (operation: "increase" | "decrease") => {
    if (budget === "0") {
      return openModal("missing-budget-modal");
    }

    const expenseChange = Number(expenseValue);
    const currentExpense = expenses[id] || 0;

    const newValue =
      operation === "increase"
        ? currentExpense + expenseChange
        : currentExpense - expenseChange;

    const updatedSum =
      operation === "increase" ? expenseValueNum : -expenseValueNum;
    setExpensesSum((prevSum) => prevSum + updatedSum);
    updateExpense(id, newValue);
    setExpenseValue("");
  };

  const onEnterPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleExpenseChange("increase");
      }
    },
    [handleExpenseChange]
  );

  return (
    <div id={id} className={`${style.body} flex md:w-[340px] w-[270px]`}>
      <label htmlFor={inputId} className="sm:text-3xl text-2xl text-spaceBlue">
        {text}:
      </label>
      <input
        onWheel={HandleOnWheel}
        onKeyDown={(e) => {
          HandleKeyDown(e);
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
          onClick={() => handleExpenseChange("increase")}
          className={style.button}
        >
          <CiCirclePlus />
        </button>
        <button
          title="Remove the expense"
          onClick={() => handleExpenseChange("decrease")}
          className={style.button}
        >
          <CiCircleMinus />
        </button>
      </div>
    </div>
  );
};
