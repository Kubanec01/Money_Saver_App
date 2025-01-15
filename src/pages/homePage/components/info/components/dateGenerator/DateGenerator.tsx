import testImg from "../../../../../../assets/calendar-icon-img.webp"
import style from "./dateGenerator.module.scss"

export const DateGenerator = () => {
  return (
    <div className={`${style.body} w-[98%] rounded-[20px] h-[47%] flex justify-center items-center p-4`}>
      <div
      className="w-full"
      >
        <div
        className="flex items-center justify-center"
        >
            <div
            className="flex items-center text-[white] text-5xl font-medium"
            >
                <span>15/</span>
                <span>01/</span>
                <span>25</span>
            </div>
            <div>
                <img
                className="object-cover aspect-square w-[50px] ml-1"
                src={testImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};
