import { FaUserCircle } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import style from "./navbar.module.scss";
import { CurrencySettingBar } from "../../../features/currencySettingBar/CurrencySettingBar";
import { useState } from "react";
import { Link } from "react-router";
import { MdRestartAlt } from "react-icons/md";
import UserSettingsBar from "../../../pages/homePage/components/userSettingsBar/UserSettingsBar";
import { ImBackward } from "react-icons/im";
import { useFinanceDataContext } from "../../../hooks/context/FinanceDataContext";
import { useCurrencyDataContext } from "../../../hooks/context/CurrencyDataContext";
import { t } from "i18next";

export const Navbar = () => {
  const { openModal } = useFinanceDataContext();
  const { currency } = useCurrencyDataContext();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div
    data-testid="Navbar"
    className="fixed z-50 top-0 left-0 w-full flex justify-center items-center px-4">
      {/* BODY */}
      <div
        style={{
          backdropFilter: "blur(5px)",
          boxShadow: " 0 0 20px 14px #4317b26a",
        }}
        className={`${style.body} w-[900px] md:h-[80px] sm:h-[64px] h-[54px] flex justify-between items-center mx-auto mt-[24px] border-[2px] border-neonPurple rounded-[16px]`}
      >
        {/* LEFT */}
        <section className="h-full md:w-[26%] flex justify-start md:pl-6 pl-2 items-center relative">
          <button
            onClick={() => setIsUserMenuOpen((v) => !v)}
            style={{
              backdropFilter: "blur(2px)",
            }}
            className={`  
            ${isUserMenuOpen ? "bg-[#ffffff27]" : "bg-spaceBlue300"}
            flex overflow-hidden select-none md:justify-start justify-center items-center md:w-[104px]
            w-[34px] md:h-[42px] h-[36px] rounded-[30px] md:ml-2 sm:ml-7 ml-4 md:gap-1 active:scale-90 duration-150 ease-in-out`}
          >
            {/* USER ICON */}
            <span
              className={`
              ${isUserMenuOpen ? "md:-translate-x-10" : "translate-x-0"}
              text-customWhite md:ml-2 transition-all duration-300 ease-in-out`}
            >
              <FaUserCircle className="md:text-3xl text-[27px]" />
            </span>
            {/* USER TEXT */}
            <h1
              className={`
              ${isUserMenuOpen ? "translate-x-16" : "translate-x-0"}
              text-customWhite text-xl font-medium mt-[2px] ml-[0.1rem] md:block hidden transition-all duration-300 ease-in-out`}
            >
              {t("components.navbar.accountButton.title")}
            </h1>
            {/* OPEN MENU USER ICON */}
            <span
              className={`
              ${isUserMenuOpen ? "-translate-y-0" : "-translate-y-32"}
              text-customWhite transition-all duration-300 ease-in-out -ml-[46%] md:block hidden`}
            >
              <ImBackward size={27} />
            </span>
          </button>
          <UserSettingsBar
            isOpen={isUserMenuOpen}
            setIsOpen={setIsUserMenuOpen}
          />
        </section>
        {/* RIGHT */}
        <section className="h-full lg:w-[50%]">
          <ul className="flex h-full items-center justify-end text-white sm:mr-10 mr-4 md:gap-16 gap-2">
            <li className="sm:text-lg text-base text-[#b7cef7] relative">
              <button
                onClick={() => setIsCurrencyMenuOpen((v) => !v)}
                className={`${style.currencyBtn} px-3 py-[4px] rounded-[10px] uppercase`}
              >
                {currency}
              </button>
              <CurrencySettingBar
                isOpen={isCurrencyMenuOpen}
                setIsOpen={setIsCurrencyMenuOpen}
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
                className={`${style.restartBtn} md:px-[12px] px-[8px] md:py-[5px] py-[4px] md:text-xl text-lg border-[2px] border-[#ffffffcc] font-medium rounded-[8px] overflow-hidden text-customWhite`}
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
        </section>
      </div>
    </div>
  );
};
