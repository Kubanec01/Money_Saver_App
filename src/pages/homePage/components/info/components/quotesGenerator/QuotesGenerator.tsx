import { quotesData } from "../../../../../../data/quotes";
import style from "./quotesGenerator.module.scss";

export const QuotesGenerator = () => {
  const data = quotesData;

  return (
      <div className={`${style.body} w-[98%] h-[320px] rounded-[20px]`}>
        <div className="text-customWhite w-full h-full flex flex-col justify-between p-6">
          {/* QUOTE TEXT */}
          <h1 className="text-4xl w-[94%] font-medium">
            Financial freedom comes to those who save consistently, not those
            who spend impulsively.🔥
          </h1>
          {/* AUTHOR TEXT */}
          <div className="text-xl text-customWhite">
            <p>• Anonymous •</p>
          </div>
        </div>
      </div>
  );
};
