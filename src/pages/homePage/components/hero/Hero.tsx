import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1100px] flex justify-center items-center mt-[320px]">
      {/* LEFT */}
      <div className="h-full w-[50%] font-medium">
        <h1 className={`${style.title} text-white text-6xl tracking-tight`}>
          Good Evening <span>Jacob</span>
        </h1>
        <h2 className="mt-3 mb-1 text-white text-6xl tracking-tight">
          Today's Mission: <br />
        </h2>
          <span className="text-5xl text-[#ffffff] tracking-normal">
            Save Your Money🪐
          </span>
        <p
        className={`${style.title2} text-[#ffffffad] text-xl font-thin mt-6`}>
          This app is here to help you improve your saving habits, boost your
          financial literacy, and provide you with essential everyday info. Join
          us on a journey where we'll take your finances to the next level and
          save money on an intergalactic scale!
        </p>
      </div>
      {/* RIGHT */}
      <div className="h-full w-[50%]"></div>
    </div>
  );
};
