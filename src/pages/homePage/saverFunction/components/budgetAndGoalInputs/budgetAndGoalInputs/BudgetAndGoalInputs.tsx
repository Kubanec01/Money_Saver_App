import { BudgetBar } from "../components/budgetBar/BudgetBar";
import { GoalBar } from "../components/goalBar/GoalBar";
GoalBar;

export const BudgetAndGoalInputs = () => {
  return (
    <div className="mt-[54px] mx-auto xl:w-[76%] lg:w-[86%] w-[90%] md:gap-6 gap-8 flex md:flex-row flex-col md:justify-between justify-center items-center">
      {/* LEFT */}
      <BudgetBar />
      {/* RIGHT */}
      <GoalBar />
    </div>
  );
};
