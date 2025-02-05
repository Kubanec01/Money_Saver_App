import style from "./financeBar.module.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import {
  FinanceSaverProvider,
  useFinanceSaverContext,
} from "../../hooks/FinanceContext";
import { useState } from "react";

type FinanceBarProps = {
  id: string;
  inputId: string;
  text: string;
};

export const FinanceBar = ({ id, inputId, text }: FinanceBarProps) => {
  const { expensesSum, setExpensesSum } = useFinanceSaverContext();

  const [value, setValue] = useState(0);

  const increase = () => {
    setValue((prevValue) => prevValue + 1);
    setExpensesSum((prevSum) => prevSum + 1);
  };

  const decrease = () => {
    if(value){
      setValue((prevValue) => prevValue - 1);
      setExpensesSum((prevSum) => prevSum - 1);
    }
  }

  console.log(expensesSum, value);

  return (
    <div id={id} className={`${style.body} flex w-[340px]`}>
      <label htmlFor={inputId} className="text-3xl text-spaceBlue">
        {text}:
      </label>
      <input
      value={value}
        id={inputId}
        className={`${style.input} text-spaceWhite bg-transparent ml-3 text-3xl w-[60%]`}
        type="number"
      />
      <div className="flex text-4xl gap-3 items-center justify-between mb-1">
        <button onClick={increase} className={style.button}>
          <CiCirclePlus />
        </button>
        <button
        onClick={decrease}
        className={style.button}>
          <CiCircleMinus />
        </button>
      </div>
    </div>
  );
};

// ! funkcia odosiela context useState aj jednotlivy useState, treba vyrisit funkcionalitu ohladom ovladania inputu aby nebolo cislo vacsie ako 8 a aby odosielalo do context useState len cislo