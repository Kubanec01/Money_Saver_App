import { useEffect, useState } from "react";
import { quotesData } from "../../../../../../data/quotes";
import style from "./quotesGenerator.module.scss";

export const QuotesGenerator = () => {
  const [currQuoteIndex, setCurrQuoteIndex] = useState(0);

  useEffect(() => {
    const nextQuote = () => {
      setCurrQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
    };

    const interval = setInterval(nextQuote, 14000);

    return () => clearInterval(interval);
  }, []);

  const data = quotesData[currQuoteIndex];

  return (
    <div className={`${style.body} w-[98%] h-[320px] rounded-[20px]`}>
      <div
        id={data.id.toString()}
        className={`${style.quoteText} text-customWhite w-full h-full flex flex-col justify-between p-6`}
      >
        {/* QUOTE TEXT */}
        <h1 className="text-4xl w-[97%] font-medium">{data.text}🔥</h1>
        {/* AUTHOR TEXT */}
        <div className="text-xl text-customWhite">
          <p>• {data.author} •</p>
        </div>
      </div>
    </div>
  );
};
