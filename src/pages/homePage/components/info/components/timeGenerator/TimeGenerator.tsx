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
      className={`${style.body} md:w-[98%] sm:w-[48%] w-full flex justify-center items-center rounded-[20px] h-[47%] md:p-3 p-[13.1px]`}
    >
      {/* NUMBER */}
      <div className="w-full flex items-center justify-center mt-[5px]">
        {data ? (
          <div
          className="flex justify-center items-center md:gap-4 gap-2"
          >
            <div className="h-full flex items-center justify-center">
              <h1 className="text-customWhite300 md:text-5xl sm:text-3xl text-2xl font-medium md:w-[155px] sm:w-[100px] w-[80px]">{`${data.hour}:${data.minute}:${data.seconds}`}</h1>
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


// ! toto pravdepodobne zmenit na ine APi. Nemam sajnu ake, asi teplota slnka alebo ja neviem. Nieco do temy al cas nie, to je strasne zle fetchovat a pracovat s tym ako s cislami