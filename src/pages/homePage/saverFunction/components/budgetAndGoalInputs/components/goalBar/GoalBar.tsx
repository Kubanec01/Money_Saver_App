import { useFinanceSaverContext } from "../../../../../../../hooks/FinanceContext";
import { useValueIntoState } from "../../../../../../../hooks/useValueIntoState";
import style from "./goalBar.module.scss";

export const GoalBar = () => {
  const { goal, setGoal } = useFinanceSaverContext();
  const { valueChange } = useValueIntoState(setGoal);

  return (
    <div className={`${style.body} w-[400px] h-[140px] rounded-[20px]`}>
      <div className="w-full flex">
        <label
          htmlFor="goal"
          className="text-3xl font-semibold text-[#fffffff5] text-nowrap mx-auto mt-[18px]"
        >
          Your Goal
        </label>
      </div>
      <div className="w-full flex">
        <input
          id="goal"
          value={goal}
          onChange={valueChange}
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
