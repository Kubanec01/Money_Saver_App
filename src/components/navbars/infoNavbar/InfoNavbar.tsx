import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router";

export const InfoNavbar = () => {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2">
      <Link to="/" className="text-[#ffffff] text-3xl border-[2px] rounded-[10px] py-2 px-10 flex justify-center items-center hover:scale-105 active:scale-95 duration-300 ease-in-out">
        <TbArrowBackUp />
      </Link>
    </div>
  );
};
