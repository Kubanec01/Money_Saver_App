import style from "./budgetAndGoalInputs.module.scss";
import { useFinanceSaverContext } from "../../../../../hooks/FinanceContext";


export const BudgetAndGoalInputs = () => {
  const {budget, setBudget, goal, setGoal} = useFinanceSaverContext()

  const handleBudgetValue = (event: any | number) => {
    let currNumber = event.target.value;
    let currNumberLength = currNumber.length;

    if (currNumberLength === 0) {
      setBudget(0);
    } else if (currNumber[0] == 0 && currNumberLength > 1) {
      currNumber = currNumber.substring(1);
      setBudget(currNumber);
    } else if (currNumberLength < 11) {
      setBudget(currNumber);
    } else {
      return;
    }
  };
  const handleGoalValue = (event: any | number) => {
    let currNumber = event.target.value;
    let currNumberLength = currNumber.length;

    if (currNumberLength === 0) {
      setGoal(0);
    } else if (currNumber[0] == 0 && currNumberLength > 1) {
      currNumber = currNumber.substring(1);
      setGoal(currNumber);
    } else if (currNumberLength < 11) {
      setGoal(currNumber);
    } else {
      return;
    }
  };

  return (
    <div className="mt-[54px] mx-auto w-[76%] flex justify-between items-center">
      {/* LEFT */}
      {/* BUDGET BAR */}
      <div className={`${style.budgetBar} w-[400px] h-[140px] rounded-[20px]`}>
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
            onChange={handleBudgetValue}
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
      {/* RIGHT */}
      <div className={`${style.goalBar} w-[400px] h-[140px] rounded-[20px]`}>
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
            onChange={handleGoalValue}
            style={{
              borderBottom: "3px solid rgba(255, 255, 255, 0.7)",
              borderRadius: "2px",
            }}
            className={`${style.numberInput} mx-auto w-[70%] h-[40px] text-4xl text-center text-[#fffffff0] bg-transparent mt-[20px]`}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

