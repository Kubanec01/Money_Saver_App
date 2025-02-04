import { useFinanceSaverContext } from "../../../../../../../hooks/FinanceContext";
import { useValueIntoState } from "../../../../../../../hooks/useValueIntoState";
import style from "./budgetBar.module.scss";

export const BudgetBar = () => {
  const { budget, setBudget } = useFinanceSaverContext();
  const { valueChange } = useValueIntoState(setBudget);

  return (
    <div className={`${style.body} w-[400px] h-[140px] rounded-[20px]`}>
      <div className="w-full flex">
        <label
          htmlFor="budget"
          className="text-3xl font-semibold text-[#fffffff0] text-nowrap mx-auto mt-[18px]"
        >
          Your Budget
        </label>
      </div>
      <div className="w-full flex">
        <input
          value={budget}
          onChange={valueChange}
          id="budget"
          style={{
            borderBottom: "3px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "2px",
          }}
          className={`${style.numberInput} mx-auto w-[70%] h-[40px] text-4xl text-center text-[#fffffff0] bg-transparent mt-[20px]`}
          type="number"
        />
      </div>
    </div>
  );
};
