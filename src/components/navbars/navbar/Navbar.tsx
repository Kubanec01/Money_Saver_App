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
import { useAuthContext } from "../../../hooks/context/authContext";
import { signOutFunction } from "../../../firebase/features/signOutFunction";
import UserSettingsBar from "../../../features/userSettingsBar/UserSettingsBar";

export const Navbar = () => {
  const { openModal } = useFinanceSaverContext();
  const { currency } = useCurrencyContext();
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  console.log(isUserMenuOpen)
  const { currentUser } = useAuthContext();

  const { t } = useTranslation();

  return (
    <div className="fixed z-50 top-0 left-0 w-full flex justify-center items-center px-4">
      {/* BODY */}
      <div
        style={{
          backdropFilter: "blur(5px)",
          boxShadow: " 0 0 20px 14px #4317b26a",
        }}
        className={`${style.body} w-[900px] sm:h-[80px] h-[74px] flex justify-between items-center mx-auto mt-[24px] border-[2px] border-neonPurple rounded-[16px]`}
      >
        {/* LEFT */}
        <section className="h-full md:w-[26%] flex justify-start lg:pl-6 items-center relative">
          <button
            onClick={() => setIsUserMenuOpen((v) => !v)}
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="flex md:justify-start justify-center items-center md:w-[104px] w-[40px] h-[42px] rounded-[30px] md:ml-2 sm:ml-7 ml-4 md:gap-1 bg-[#71bcf55b]"
          >
            <span className="text-[#ffffff] md:ml-2">
              <FaUserCircle size={30} />
            </span>
            <h1
              style={{
                textShadow: "0px 1px 6px #0DB5FF",
              }}
              className="text-customWhite text-xl font-medium mt-1 ml-[0.1rem] md:block hidden"
            >
              {t("components.navbar.accountButton.title")}
            </h1>
          </button>
          <UserSettingsBar
            isOpen={isUserMenuOpen}
            setIsOpen={setIsUserMenuOpen}
          />
        </section>
        {/* RIGHT */}
        <section className="h-full lg:w-[50%]">
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
        </section>
      </div>
    </div>
  );
};
