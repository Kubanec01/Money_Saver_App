import style from "./hero.module.scss";
import img1 from "../../../../assets/human-img.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] flex justify-center items-center mt-[220px]">
      {/* LEFT */}
      <div className="h-full w-[50%] font-medium">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 1.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`${style.title} text-white text-6xl tracking-tight`}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 1.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-2 mb-[6px] text-[#fffffff4] text-6xl tracking-tight"
        >
          {t("hero.subTitle1")}
        </motion.h2>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 1.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`${style.title2} text-5xl text-[#ffffff] font-semibold`}
        >
          {t("hero.subTitle2")}
          <span className="text-orange-300">🪐</span>
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 1.6, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className={` text-[#ffffff93] text-xl font-thin mt-5`}
        >
          This app is here to help you improve your saving habits, boost your
          financial literacy, and provide you with essential everyday info. Join
          us on a journey where we'll take your finances to the next level and
          save money on an intergalactic scale!
        </motion.p>
      </div>
      {/* RIGHT */}
      <div className="h-full flex justify-end items-center w-[50%]">
        <img
          className="w-[500px] h-[560px] object-cover rounded-[20px]"
          src={img1}
          alt="planet-img"
        />
      </div>
    </div>
  );
};
