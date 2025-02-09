import style from "./financeCharts.module.scss";

export const FinanceCharts = () => {
  return (
    <div
      className={`${style.body} p-6 w-[90%] max-w-[1020px] mx-auto mt-[80px] rounded-[20px] h-[500px] flex justify-center items-center`}
    >
      <div
      className="border w-full h-full"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
