import { FaUserCircle } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import style from "./navbar.module.scss";
import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import { CurrencySettingBar } from "../../../features/currencySettingBar/CurrencySettingBar";
import { useState } from "react";
import { useCurrencyContext } from "../../../hooks/context/CurrencyContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { MdRestartAlt } from "react-icons/md";

export const Navbar = () => {
  const { openModal } = useFinanceSaverContext();
  const { currency } = useCurrencyContext();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="fixed z-50 top-0 left-0 w-full flex justify-center items-center px-4">
      {/* BODY */}
      <div
        style={{
          backdropFilter: "blur(5px)",
          boxShadow: " 0 0 20px 14px #4317b26a",
        }}
        className={`${style.body} w-[900px] sm:h-[90px] h-[74px] flex justify-between items-center mx-auto mt-[24px] border-[2px] border-neonPurple rounded-[16px]`}
      >
        {/* LEFT */}
        <div className="h-full md:w-[20%] flex justify-center items-center">
          <button
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="flex md:justify-start justify-center items-center md:w-[120px] w-[40px] h-[42px] rounded-[30px] md:ml-2 sm:ml-7 ml-4 md:gap-1 bg-[#71bcf55b]"
          >
            <span className="text-[#ffffffee] text-3xl md:ml-2">
              <FaUserCircle />
            </span>
            <h1
              style={{
                textShadow: "0px 1px 6px #0DB5FF",
              }}
              className="text-customWhite text-lg font-medium md:block hidden"
            >
              {t("components.navbar.accountButton.title")}
            </h1>
          </button>
        </div>
        {/* RIGHT */}
        <div className="h-full lg:w-[50%]">
          <ul className="flex h-full items-center justify-end text-white sm:mr-10 mr-4 sm:gap-16 gap-4">
            <li className="sm:text-lg text-base text-[#b7cef7] relative">
              <button
                onClick={() => setIsCurrencyMenuOpen((v) => !v)}
                className={`${style.currencyBtn} px-3 py-[4px] rounded-[10px] uppercase`}
              >
                {currency}
              </button>
              <CurrencySettingBar
                isOpen={isCurrencyMenuOpen}
                setOpen={setIsCurrencyMenuOpen}
              />
            </li>
            <li className="mr-4">
              <Link
                to="/info"
                className={`${style.helpButton} sm:text-4xl text-3xl text-[#b7cff7d8]`}
              >
                <HiOutlineQuestionMarkCircle />
              </Link>
            </li>
            <li>
              <button
                onClick={() => openModal("restart-values-modal")}
                className={`${style.restartBtn} md:px-[12px] sm:px-[8px] px-[14px] md:py-[5px] sm:py-[4px] py-[6px] md:text-xl text-lg border-[2px] border-[#ffffffcc] font-medium rounded-[8px] overflow-hidden text-customWhite`}
              >
                <span className="sm:block hidden">
                  {t("components.navbar.restartButton.title")} 💫
                </span>
                <span className="sm:hidden block text-xl">
                  <MdRestartAlt />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
