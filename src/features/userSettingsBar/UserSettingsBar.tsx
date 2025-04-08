import { FaUserCircle } from "react-icons/fa";
import { SettingBarType } from "../currencySettingBar/CurrencySettingBar";
import { t } from "i18next";
import { useEffect, useRef } from "react";

export const UserSettingsBar = ({ isOpen, setIsOpen }: SettingBarType) => {
  const userBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        setTimeout(() => {})
      if (
        userBarRef.current &&
        !userBarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={userBarRef}
      style={{
        display: isOpen ? "block" : "none",
      }}
      className="absolute top-[64px] rounded-[10px] bg-[#272626] left-[2px] w-[170px] h-[174px]"
    >
      <ul className="w-full h-full flex flex-col justify-between py-3 px-3 items-center">
        <li className="text-spaceBlue text-base w-full text-center rounded-[10px] p-2 bg-[#00000051]">
          <h1>
            User: <span className="uppercase font-medium">Jakub</span>
          </h1>
        </li>
        <li className="text-spaceWhite text-base w-full text-center rounded-[10px] p-2 bg-[#00000051] hover:bg-[#ffffff1e]">
          <button>change password</button>
        </li>
        <li className="text-errorColor text-base w-full text-center rounded-[10px] p-2 bg-[#00000051] hover:bg-[#ffffff1e]">
          <button>Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default UserSettingsBar;

// ! Treba zistit ako sa vyhnut problematike, ze ked stlacim button v Navbar component ena zatvorenie userBarru tak sa to bije s useEfectom ktory sleduje ci uzivatel klikol mimo elementu