import { useEffect, useState } from "react";
import { quotesData } from "../../../../../../data/quotes";
import style from "./quotesGenerator.module.scss";
import { motion } from "motion/react";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, filter: "blur(8px)" },
        visible: { opacity: 1, filter: "blur(0px)"},
      }}
      className={`${style.body} md:w-[98%] sm:w-[74%] w-[94%] mx-auto md:h-[320px] h-[240px] rounded-[20px]`}
    >
      <div
        id={data.id.toString()}
        className={`${style.quoteText} text-customWhite w-full h-full flex flex-col justify-between p-6`}
      >
        {/* QUOTE TEXT */}
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl md:w-[97%] font-medium">{data.text}🔥</h1>
        {/* AUTHOR TEXT */}
        <div className="sm:text-xl text-customWhite">
          <p>• {data.author} •</p>
        </div>
      </div>
    </motion.div>
  );
};
