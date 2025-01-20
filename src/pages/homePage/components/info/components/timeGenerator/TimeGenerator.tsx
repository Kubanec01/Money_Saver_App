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
      className={`${style.body} w-[98%] flex justify-center items-center rounded-[20px] h-[47%] p-3`}
    >
      {/* NUMBER */}
      <div className="w-full flex items-center justify-center mt-[4px]">
        <div className="w-[50%] h-full flex items-center justify-end ml-[76px]">
          <h1 className="text-customWhite300 text-5xl font-medium">18:22:20</h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-start">
          <img
            className="object-cover aspect-square -mt-2 ml-1 w-[56px] opacity-90"
            src={testImg}
            alt="test-img"
          />
        </div>
      </div>
    </motion.div>
  );
};
