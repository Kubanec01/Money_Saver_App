import style from "./timeGenerator.module.scss";
import weatherImg from "../../../../../../assets/clouds.night-img.png";
import { useTimeApi } from "../../../../../../hooks/useTimeApi";
import { motion } from "motion/react";
import { useScreenWidthValue } from "../../../../../../hooks/useScreenWidthValue";
import { LifeLine } from "react-loading-indicators";

export const TimeGenerator = () => {
  const data = useTimeApi();
  const screenWidth = useScreenWidthValue();


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
      className={`${style.body} md:w-[98%] sm:w-[48%] w-full flex justify-center items-center rounded-[20px] h-[47%] md:p-3 p-[17.1px]`}
    >
      {/* NUMBER */}
      <div className="w-full flex items-center justify-center">
        {data ? (
          <div
          className="flex justify-center items-center"
          >
            <div className="h-full flex items-center justify-center">
              <h1 className="text-customWhite300 lg:text-5xl md:text-4xl text-2xl font-medium">{`${data.dayOfWeek}`}</h1>
            </div>
            <div className="h-full flex items-center">
              <img
                className="object-cover aspect-square -mt-2 md:w-[56px] sm:w-[34px] w-[30px] opacity-90"
                src={weatherImg}
                alt="test-img"
              />
            </div>
          </div>
        ) : (
          <>
            <span className="lg:w-full md:w-[80%] flex justify-center items-center overflow-hidden opacity-85">
              {screenWidth > 770 ? (
                <LifeLine color="#ffffff" size="medium" />
              ) : (
                <LifeLine color="#ffffff" size="small" />
              )}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};
