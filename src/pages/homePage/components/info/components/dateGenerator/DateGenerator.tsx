import testImg from "../../../../../../assets/calendar-icon-img.webp";
import style from "./dateGenerator.module.scss";
import { useTimeApi } from "../../../../../../hooks/useTimeApi";

export const DateGenerator = () => {
  // const data = useTimeApi();

  // if (!data) {
  //   return 0;
  // }

  return (
    <div
      className={`${style.body} w-[98%] rounded-[20px] h-[47%] flex justify-center items-center p-4`}
    >
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center text-customWhite300 text-5xl font-medium">
            18/01/2015
          </div>
          <div>
            <img
              className="object-cover aspect-square w-[50px] ml-1"
              src={testImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
