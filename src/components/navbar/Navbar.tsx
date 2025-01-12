import { FaUserCircle } from "react-icons/fa";
import style from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center px-4">
      {/* BODY */}
      <div
        className={`${style.body} w-[1200px] h-[100px] flex justify-between items-center mx-auto mt-[24px] border-[2px] border-[#8f3aff] rounded-[16px]`}
      >
        {/* LEFT */}
        <div className="h-full w-[20%] flex justify-center items-center">
          <button className="flex justify-center items-center w-[144px] h-[50px] rounded-[30px] mr-6 gap-2 bg-[#c9e7fe7c]">
            <span className="text-whiteShadow500 text-3xl">
              <FaUserCircle />
            </span>
            <h1
            style={{
                textShadow: "0px 1px 6px #0DB5FF"
            }}
            className="text-customWhite text-xl font-medium">Account</h1>
          </button>
        </div>
        {/* RIGHT */}
        <div className="h-full w-[50%]"></div>
      </div>
    </div>
  );
};
