import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router";

export const InfoNavbar = () => {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2">
      <Link to="/" className="text-[#ffffff] lg:text-3xl text-2xl border-[2px] rounded-[10px] sm:py-2 py-1 lg:px-10 sm:px-8 px-6 flex justify-center items-center hover:scale-105 active:scale-95 duration-300 ease-in-out">
        <TbArrowBackUp />
      </Link>
    </div>
  );
};
