import { useState } from "react";
import style from "./financeBar.module.scss";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

type FinanceBarProps = {
  id: string;
  inputId: string;
  text: string;
};

export const FinanceBar = ({ id, inputId, text }: FinanceBarProps) => {
  const [value, setValue] = useState<number>(0);
  
  const handleValue = (event: any | number) => {
    let eventValue = event.target.value;
    let eventValueLength = eventValue.length;

    if (eventValueLength === 0) {
      setValue(0);
    } else if (eventValue[0] == 0 && eventValueLength > 1) {
      eventValue = eventValue.substring(1);
      setValue(eventValue);
    } else if (eventValueLength < 8) {
      setValue(eventValue);
    } else {
      return;
    }
  };

  const increase = () => {
    return setValue((prevValue) => NumprevValue + 1);
  };

  const decrease = () => {
    if (value > 0) {
      return setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div id={id} className={`${style.body} flex w-[340px]`}>
      <label htmlFor={inputId} className="text-3xl text-spaceBlue">
        {text}:
      </label>
      <input
        id={inputId}
        onChange={handleValue}
        value={value}
        className={`${style.input} text-spaceWhite bg-transparent ml-3 text-3xl w-[60%]`}
        type="number"
      />
      <div className="flex text-4xl gap-3 items-center justify-between mb-1">
        <button onClick={increase} className={style.button}>
          <CiCirclePlus />
        </button>
        <button onClick={decrease} className={style.button}>
          <CiCircleMinus />
        </button>
      </div>
    </div>
  );
};
