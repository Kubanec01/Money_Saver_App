import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

interface ShowAndHidePasswordIconProps {
  isPasswordHidden: boolean;
}

const ShowAndHidePasswordIcon = (props: ShowAndHidePasswordIconProps) => {
  // STYLES
  const iconStyle = "text-neonPurple absolute top-[19px] right-5";
  const size = 24;

  return (
    <>
      {props.isPasswordHidden ? (
        <FaRegEyeSlash className={iconStyle} size={size} />
      ) : (
        <FaRegEye className={iconStyle} size={size} />
      )}
    </>
  );
};

export default ShowAndHidePasswordIcon;
