import calendarImg from "../../../../../../assets/calendar-icon-img.webp";
import style from "./dateGenerator.module.scss";
import { useTimeApi } from "../../../../../../hooks/useTimeApi";
import { motion } from "motion/react";
import { LifeLine } from "react-loading-indicators";
import { useScreenWidthValue } from "../../../../../../hooks/useScreenWidthValue";

export const DateGenerator = () => {
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
      transition={{ duration: 0.8, delay: 1.1 }}
      variants={{
        hidden: { opacity: 0, filter: "blur(8px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      }}
      className={`${style.body} sm:mt-0 mt-2 md:w-[98%] sm:w-[48%] w-full rounded-[20px] h-[47%] flex justify-center items-center p-4`}
    >
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-customWhite300 lg:text-5xl md:text-4xl text-2xl font-medium">
            {data ? (
              <>
                {data.date}
                <img
                  className="object-cover aspect-square md:w-[50px] sm:w-[34px] w-[30px] sm:ml-1"
                  src={calendarImg}
                  alt="calendar-image"
                />
              </>
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
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};
