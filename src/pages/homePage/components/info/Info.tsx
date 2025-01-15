import { DateGenerator } from "./components/dateGenerator/DateGenerator";
import { QuotesGenerator } from "./components/quotesGenerator/QuotesGenerator";
import { WeatherGenerator } from "./components/weatherGenerator/WeatherGenerator";

export const Info = () => {
  return (
    <div className="w-[90%] max-w-[1100px] mx-auto mt-[160px] mb-[1000px]">
      {/* TEXT */}
      <div className="text-white w-[80%] mx-auto">
        <h1 className="text-xl uppercase text-[#a7b4fb]">Core Coords</h1>
        <h2 className="text-3xl w-[80%] font-medium mt-[6px] text-[#eceefa]">
          Today, we’re in the perfect position and at the right level to kick
          off a successful savings plan.
        </h2>
      </div>
      {/* BARS */}
      <div className="w-[87%] mx-auto mt-[46px] flex justify-between">
        {/* LEFT */}
        <div className="w-[55%]">
          <QuotesGenerator />
        </div>
        {/* RIGHT */}
        <div className="w-[45%] flex justify-between flex-col items-end">
          <WeatherGenerator />
          <DateGenerator />
        </div>
      </div>
    </div>
  );
};
