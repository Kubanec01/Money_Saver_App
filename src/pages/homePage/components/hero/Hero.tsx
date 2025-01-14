import style from "./hero.module.scss";
import img1 from "../../../../assets/human-img.jpg"

export const Hero = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1100px] flex justify-center items-center mt-[220px]">
      {/* LEFT */}
      <div className="h-full w-[50%] font-medium">
        <h1 className={`${style.title} text-white text-6xl tracking-tight`}>
          Good Evening <span>Jacob</span>
        </h1>
        <h2
          className="mt-2 mb-[6px] text-[#fffffff4] text-6xl tracking-tight"
        >
          Today's Mission: <br />
        </h2>
        <h3
          className={`${style.title2} text-5xl text-[#ffffff] font-semibold`}
        >
          Save Your Money<span className="text-orange-300">🪐</span>
        </h3>
        <p className={` text-[#ffffff93] text-xl font-thin mt-5`}>
          This app is here to help you improve your saving habits, boost your
          financial literacy, and provide you with essential everyday info. Join
          us on a journey where we'll take your finances to the next level and
          save money on an intergalactic scale!
        </p>
      </div>
      {/* RIGHT */}
      <div className="h-full flex justify-end items-center w-[50%]">
        <img
        className="w-[500px] h-[560px] object-cover rounded-[20px]"
        src={img1} alt="planet-img" />
      </div>
    </div>
  );
};
