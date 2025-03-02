import testImg from "../../../../../../assets/calendar-icon-img.webp";
import style from "./dateGenerator.module.scss";
import { useTimeApi } from "../../../../../../hooks/useTimeApi";
import { motion } from "motion/react";

export const DateGenerator = () => {
  // const data = useTimeApi();

  // if (!data) {
  //   return 0;
  // }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ duration: 0.8, delay: 1.2 }}
      variants={{
        hidden: { opacity: 0, filter: "blur(8px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      }}
      className={`${style.body} sm:mt-0 mt-2 md:w-[98%] sm:w-[48%] w-full rounded-[20px] h-[47%] flex justify-center items-center p-4`}
    >
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center text-customWhite300 md:text-5xl sm:text-3xl text-2xl font-medium">
            18/01/2015
          </div>
          <div>
            <img
              className="object-cover aspect-square md:w-[50px] sm:w-[34px] w-[30px] sm:ml-1"
              src={testImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
