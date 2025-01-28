import { explainData } from "../../../../../../../data/explainData";
import style from "./explainBars.module.scss"

export const ExplainBars = () => {
  const data = explainData;

  return (
    <ul
    >
      {data.map((b) => {
        return (
          <li key={b.id.toString()} 
          className="flex items-center justify-start mb-[30px] text-spaceWhite mx-auto">
            {/* LEFT */}
            <div
            className={`${style.numberBody} text-2xl rounded-[10px] flex items-center justify-center aspect-square w-[70px]`}
            >
                    <p
                    >{b.number}</p>
            </div>
            {/* RIGHT */}
            <div
            className="w-full ml-[20px]"
            >
                <h1
                className="text-2xl text-spaceBlue"
                >
                {b.title}
                </h1>
                <h2
                className="text-lg text-spaceWhite"
                >
                {b.text}
                </h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
