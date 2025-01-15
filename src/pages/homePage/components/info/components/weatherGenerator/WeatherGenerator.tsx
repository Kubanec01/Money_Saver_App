import style from "./weatherGenerator.module.scss";
import testImg from "../../../../../../assets/clouds.night-img.png";

export const WeatherGenerator = () => {
  return (
    <div className={`${style.body} w-[98%] rounded-[20px] h-[47%] p-3`}>
        {/* TEXT */}
      <div className="w-full flex items-center justify-end">
        <h1 className="text-[#ffffff] text-2xl mr-4">Cloudy</h1>
      </div>
      {/* NUMBER */}
      <div className="w-full flex items-center justify-center mt-[4px]">
        <div className="w-[50%] h-full flex items-center justify-end ml-10">
          <h1 className="text-[#ffffff] text-6xl font-medium">20°C</h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-start">
          <img
          className="object-cover aspect-square ml-3 -mt-2 w-[60px] opacity-90"
          src={testImg} alt="test-img" />
        </div>
      </div>
    </div>
  );
};
