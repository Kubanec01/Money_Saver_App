import { useExpensesAndResultsDataContext } from "../../hooks/context/ExpensesAndResultsDataContext";
import style from "./resultBar.module.scss";

type ResultBarProps = {
  id: string;
  name: string;
  currency: string;
};

export const ResultBar = ({ id, name, currency }: ResultBarProps) => {
  const { expenses } = useExpensesAndResultsDataContext();

  const value = (v: number) => {
    if (v > 1) {
      return v;
    }

    return 0;
  };

  return (
    <div
      id={id}
      className={`${style.body} md:w-[310px] sm:w-[410px] w-[90%] md:h-[100px] sm:h-[80px] h-[60px] rounded-[10px] p-2`}
    >
      <div className="flex items-center justify-start w-full h-full ">
        <h1 className="md:text-3xl sm:text-3xl text-2xl text-spaceBlue ml-4">
          {name}:
        </h1>
        <h2 className="md:text-3xl sm:text-3xl text-2xl text-spaceWhite ml-2">
          {value(expenses[id])}{" "}
          <span className="text-spaceWhite">{currency}</span>
        </h2>
      </div>
    </div>
  );
};
