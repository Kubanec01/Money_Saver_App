import style from "./hero.module.scss";
import img1 from "../../../../assets/human-img.jpg";
import { motion } from "motion/react";
import { t } from "i18next";
import { useAuthContext } from "../../../../hooks/auth/authContext/authContext";

export const Hero = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] flex md:flex-row flex-col justify-center items-center mt-[220px]">
      {/* MEDIUM DISPLAY IMG */}
      <div className="h-full md:hidden flex justify-center items-center w-full">
        <img
          className="w-full max-w-[460px] h-auto max-h-[560px] object-cover rounded-[20px]"
          src={img1}
          alt="planet-img"
        />
      </div>
      {/* LEFT */}
      <div className="h-full md:w-[50%] sm:w-[70%] w-[90%] mx-auto font-medium md:mt-0 mt-14">
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
          className={`${style.title} text-white lg:text-6xl md:text-5xl sm:text-5xl text-4xl tracking-tight`}
        >
          {t("hero.title")} {currentUser?.displayName || "Capt."}
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
          className="mt-2 text-[#fffffff4] lg:text-6xl sm:text-4xl text-3xl tracking-tight"
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
          className={`${style.title2} text-nowrap sm:mt-[6px] lg:text-5xl sm:text-4xl text-3xl text-[#ffffff] font-semibold`}
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
          className={` text-[#ffffff93] sm:w-full w-[90%] xl:text-xl sm:text-lg text-sm font-thin lg:mt-5 mt-2`}
        >
          {t("hero.desc")}
        </motion.p>
      </div>
      {/* RIGHT */}
      {/* LARGE+ DISPLAY IMG */}
      <div className="h-full md:flex hidden justify-end items-center w-[50%]">
        <img
          className="w-full max-w-[500px] h-auto max-h-[560px] object-cover rounded-[20px]"
          src={img1}
          alt="planet-img"
        />
      </div>
    </div>
  );
};
