import { FaUserCircle } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import style from "./navbar.module.scss";
import { useFinanceSaverContext } from "../../hooks/context/FinanceContext";

export const Navbar = () => {

  const {openModal} = useFinanceSaverContext()

  return (
    <div className="fixed z-50 top-0 left-0 w-full flex justify-center items-center px-4">
      {/* BODY */}
      <div
        style={{
          backdropFilter: "blur(5px)",
        }}
        className={`${style.body} w-[900px] h-[90px] flex justify-between items-center mx-auto mt-[24px] border-[2px] border-[#8f3aff] rounded-[16px]`}
      >
        {/* LEFT */}
        <div className="h-full w-[20%] flex justify-center items-center">
          <button
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="flex justify-center items-center w-[120px] h-[42px] rounded-[30px] ml-2 gap-1 bg-[#71bcf55b]"
          >
            <span className="text-[#ffffffee] text-3xl">
              <FaUserCircle />
            </span>
            <h1
              style={{
                textShadow: "0px 1px 6px #0DB5FF",
              }}
              className="text-customWhite text-lg font-medium"
            >
              Account
            </h1>
          </button>
        </div>
        {/* RIGHT */}
        <div className="h-full w-[50%]">
          <ul className="flex h-full items-center justify-end text-white mr-10 gap-16">
            <li className="text-xl text-[#b7cef7]">
              <button
                className={`${style.currencyBtn} px-4 py-[4px] rounded-[10px]`}
              >
                Eur
              </button>
            </li>
            <li className="-mb-2 mr-4">
              <button className={`${style.helpButton} text-4xl text-[#b7cff7d8]`}>
                <HiOutlineQuestionMarkCircle />
              </button>
            </li>
            <li>
              <button
              onClick={() => openModal("restart-values-modal")}
                className={`${style.restartBtn} px-[12px] py-[5px] text-xl border-[2px] border-[#ffffffcc] font-medium rounded-[8px] overflow-hidden text-customWhite`}
              >
                Restart 💫
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};