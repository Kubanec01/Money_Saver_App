import { useState } from "react";
import style from "./modal.module.scss";

export const Modal = () => {
  const [visible, setvisible] = useState(true);

  return (
    <dialog
    open
      className={`${style.body} p-4 fixed rounded-[20px] w-[34%] h-[340px] z-[10000]`}
    >
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center mx-auto w-full mt-4 text-3xl font-bold uppercase text-[#dfccf5]"
      >
        Do you want to spend from your budget without having a budget?
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto w-[84%] mt-3 text-2xl text-[#f3f5fe]"
      >
        Don't worry, Captain, this can happen to the best of us. Please enter
        the coordinates for your budget so you can continue managing your
        finances.
      </p>
      <div className="w-[90%] mx-auto mt-12 flex items-center justify-between">
        <button className="text-lg text-[white] border-[2px] rounded-[10px] p-2">
          Roger that, over.
        </button>
        <button className="text-lg text-[white] border-[2px] rounded-[10px] p-2">
          What?! Tell me more.
        </button>
      </div>
    </dialog>
  );
};
