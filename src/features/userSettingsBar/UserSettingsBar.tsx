import { SettingBarType } from "../currencySettingBar/CurrencySettingBar";
import { t } from "i18next";
import { signOutFunction } from "../../firebase/features/signOutFunction";
import { useAuthContext } from "../../hooks/context/authContext/authContext";

export const UserSettingsBar = ({ isOpen, }: SettingBarType) => {
  // STYLES
  const baseBtnStyle =
    "text-base w-full text-center rounded-[10px] p-2 bg-[#00000051]";

  const {currentUser} = useAuthContext()
  

  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
      className="absolute top-[64px] rounded-[10px] bg-[#272626] left-[2px] w-[170px] h-[174px]"
    >
      <ul className="w-full h-full flex flex-col justify-between py-3 px-3 items-center select-none">
        <li className={`${baseBtnStyle} text-spaceBlue`}>
          <h1>
            User: <span className="uppercase font-medium">{currentUser?.displayName}</span>
          </h1>
        </li>
        <li className={`text-spaceWhite ${baseBtnStyle} hover:bg-[#ffffff1e]`}>
          <button>change password</button>
        </li>
        <li className={`text-errorColor ${baseBtnStyle} hover:bg-[#ffffff1e]`}>
          <button onClick={signOutFunction}>Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default UserSettingsBar;

// ! Treba zistit ako sa vyhnut problematike, ze ked stlacim button v Navbar component ena zatvorenie userBarru tak sa to bije s useEfectom ktory sleduje ci uzivatel klikol mimo elementu
// ! Tuto zalezitost vyzsie doriesim inokedy
