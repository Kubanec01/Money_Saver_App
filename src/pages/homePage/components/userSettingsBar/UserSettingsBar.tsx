import { SettingBarType } from "../../../../features/currencySettingBar/CurrencySettingBar";
import { t } from "i18next";
import { signOutFunction } from "../../../../firebase/features/signOutFunction";
import { useAuthContext } from "../../../../hooks/auth/authContext/authContext";
import { Link } from "react-router";

export const UserSettingsBar = ({ isOpen }: SettingBarType) => {
  // STYLES
  const baseBtnStyle =
    "text-base w-full text-center md:text-base text-xs rounded-[10px] p-2 bg-[#00000051]";

  const { currentUser } = useAuthContext();

  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
      className="absolute top-[64px] rounded-[10px] bg-[#272626] left-[2px] md:w-[170px] w-[130px] md:h-[174px] h-[144px]"
    >
      <ul className="w-full h-full flex flex-col justify-between py-3 px-3 items-center select-none">
        <li className={`${baseBtnStyle} text-spaceBlue overflow-hidden`}>
          <h1>
            {t("auth.buttons.user")}:{" "}
            <span className="uppercase font-medium">
              {currentUser?.displayName}
            </span>
          </h1>
        </li>
        <li className={`text-spaceWhite ${baseBtnStyle} hover:bg-[#ffffff1e]`}>
          <Link to="/change-password/verify">
            {t("auth.buttons.changePassword")}
          </Link>
        </li>
        <li className={`text-errorColor ${baseBtnStyle} hover:bg-[#ffffff1e]`}>
          <button onClick={signOutFunction}>{t("auth.buttons.logOut")}</button>
        </li>
      </ul>
    </div>
  );
};

export default UserSettingsBar;
