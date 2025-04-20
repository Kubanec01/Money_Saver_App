import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

interface ShowAndHidePasswordIconProps {
  isPasswordHidden: boolean;
  onClick: () => void;
  class?: string;
}

const ShowAndHidePasswordBtn = (props: ShowAndHidePasswordIconProps) => {
  // STYLES
  const iconStyle =
    "absolute text-neonPurple xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[18px]";

  return (
    <>
      <button
        onClick={props.onClick}
        type="button"
        className={`${iconStyle} ${props.class}`}
      >
        {props.isPasswordHidden ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </>
  );
};

export default ShowAndHidePasswordBtn;
