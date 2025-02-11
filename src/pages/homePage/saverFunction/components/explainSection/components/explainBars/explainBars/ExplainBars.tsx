import { motion } from "motion/react";
import { explainData } from "../../../../../../../../data/explainData";
import style from "./explainBars.module.scss";

export const ExplainBars = () => {
  const data = explainData;

  return (
    <ul>
      {data.map((b, index) => {
        return (
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.8 + index * 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            key={b.id.toString()}
            className="flex items-center justify-start mb-[30px] text-spaceWhite mx-auto"
          >
            {/* LEFT */}
            <div
              className={`${style.numberBody} text-2xl rounded-[10px] flex items-center justify-center aspect-square w-[70px]`}
            >
              <p>{b.number}</p>
            </div>
            {/* RIGHT */}
            <div className="w-full ml-[20px]">
              <h1 className="text-2xl text-spaceBlue">{b.title}</h1>
              <h2 className="text-lg text-spaceWhite">{b.text}</h2>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};
