import style from "./timeGenerator.module.scss";
import testImg from "../../../../../../assets/clouds.night-img.png";
import { useTimeApi } from "../../../../../../hooks/useTimeApi";
import { motion } from "motion/react";

export const TimeGenerator = () => {
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
      transition={{ duration: 0.6, delay: 0.8 }}
      variants={{
        hidden: { opacity: 0, filter: "blur(8px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      }}
      className={`${style.body} md:w-[98%] sm:w-[48%] w-full flex justify-center items-center rounded-[20px] h-[47%] md:p-3 p-[13.1px]`}
    >
      {/* NUMBER */}
      <div className="w-full flex items-center justify-center mt-[5px]">
        <div className="md:w-[50%] h-full flex items-center md:justify-end justify-center md:ml-[76px]">
          <h1 className="text-customWhite300 md:text-5xl sm:text-3xl text-2xl font-medium">18:22:20</h1>
        </div>
        <div className="md:w-[50%] h-full flex items-center justify-start">
          <img
            className="object-cover aspect-square -mt-2 sm:ml-1 md:w-[56px] sm:w-[34px] w-[30px] opacity-90"
            src={testImg}
            alt="test-img"
          />
        </div>
      </div>
    </motion.div>
  );
};
