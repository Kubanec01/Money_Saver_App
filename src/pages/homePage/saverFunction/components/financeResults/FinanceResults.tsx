import style from "./financeResults.module.scss";

export const FinanceResults = () => {
  return (
    <div className="mt-[160px] w-[88%] mx-auto">
      {/* TEXT */}
      <div className="w-[80%] mx-auto">
        <p className="text-2xl uppercase text-[#f69c4ee9]">your steps and</p>
        <h1 className="text-spaceWhite text-6xl font-bold mt-[2px] tracking-[-0.4px]">
          <span className={style.neonTitle}>Mission</span> results:
        </h1>
        <h2 className="text-[#ffffff79] text-2xl w-[70%] mt-[2px]">
          Mission results speak loud and clear—keep up the great work! And if
          you haven’t met your expectations just yet, don’t give up. You’re
          capable of extraordinary things—you’ve got this!{" "}
          <span className="text-white text-xl">🚀</span>
        </h2>
      </div>
      <div></div>
    </div>
  );
};

// ! hornu mt vzdialenost este poriesim
