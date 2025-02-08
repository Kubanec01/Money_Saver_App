import { useExpensesAndResultsBarContext } from "../../hooks/context/ExpensesAndResultsBarContext";
import style from "./resultBar.module.scss";

type ResultBarProps = {
  id: string;
  name: string;
  currency: string;
};

export const ResultBar = ({ id, name, currency }: ResultBarProps) => {
  const { expenses } = useExpensesAndResultsBarContext();

  return (
    <div
      id={id}
      className={`${style.body} w-[310px] h-[100px] rounded-[10px] p-2`}
    >
      <div className="flex items-center justify-start w-full h-full ">
        <h1 className="text-3xl text-spaceBlue ml-4">{name}:</h1>
        <h2 className="text-3xl text-spaceWhite ml-2">
          {expenses[id] || 0}{" "}
          <span className="text-spaceWhite">{currency}</span>
        </h2>
      </div>
    </div>
  );
};
