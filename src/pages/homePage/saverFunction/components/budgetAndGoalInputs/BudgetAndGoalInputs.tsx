import { BudgetBar } from "./components/budgetBar/BudgetBar";
import { GoalBar } from "./components/goalBar/GoalBar";
GoalBar;

export const BudgetAndGoalInputs = () => {
  return (
    <div className="mt-[54px] mx-auto w-[76%] flex justify-between items-center">
      {/* LEFT */}
      <BudgetBar />
      {/* RIGHT */}
      <GoalBar />
    </div>
  );
};
