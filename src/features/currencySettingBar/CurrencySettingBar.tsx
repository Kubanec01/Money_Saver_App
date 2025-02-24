import { useState } from "react";

type CurrencySettingBar = {
  setOpen: boolean;
};

export const CurrencySettingBar = ({ setOpen }: CurrencySettingBar) => {
  const [isOpen, setIsOpen] = useState<boolean>(setOpen);

  return (
    <div className="absolute top-0 right-[60px] rounded-[10px] w-[100px] h-[100px] p-2 bg-[#292828e7] ">
      <ul className="rounded-[10px] w-full h-full flex flex-col items-start justify-between text-base px-1">
        <li className="w-full">
          <button
            style={{
              borderBottom: "1px solid white",
            }}
            className="w-[90%] text-left"
          >
            EUR
          </button>
        </li>
        <li>
          <button>CZK</button>
        </li>
        <li>
          <button>USD</button>
        </li>
      </ul>
    </div>
  );
};
