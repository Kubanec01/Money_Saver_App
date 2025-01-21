import style from "./budgetAndGoalInputs.module.scss";

export const BudgetAndGoalInputs = () => {
  return (
    <div className="mt-[50px] mx-auto w-[76%] flex justify-between items-center">
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
            style={{
              borderBottom: "3px solid #fffffff0",
              borderRadius: "2px",
            }}
            id="budget"
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
            className="text-3xl font-semibold text-[#fffffff0] text-nowrap mx-auto mt-[18px]"
          >
            Your Goal
          </label>
        </div>
        <div className="w-full flex">
          <input
            style={{
              borderBottom: "3px solid #fffffff0",
              borderRadius: "2px",
            }}
            id="goal"
            className={`${style.numberInput} mx-auto w-[70%] h-[40px] text-4xl text-center text-[#fffffff0] bg-transparent mt-[20px]`}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};
