import { Dispatch, SetStateAction } from "react";
import { currencyData } from "../../data/curencyData";
import { useCurrencyContext } from "../../hooks/context/CurrencyContext";

type CurrencySettingBar = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const CurrencySettingBar = ({ isOpen, setOpen }: CurrencySettingBar) => {
  const { setCurrency } = useCurrencyContext();

  // DATA
  const data = currencyData;

  // STYLES
  const listItemStyle =
    "flex items-center justify-start w-full hover:bg-[#ffffff1d] transition-all duration-200 ease-in rounded-[4px] p-[1px] pl-1";
  const buttonStyle = "w-[90%] text-left";

  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } md:top-0 top-10 md:right-[60px] right-[30px] rounded-[10px] w-[100px] h-[100px] p-1 py-[6px] bg-[#292828e7]`}
    >
      <ul className="rounded-[10px] w-full h-full flex flex-col items-start justify-between text-base">
        {data.map((i) => {
          return (
            <li key={i.id} className={listItemStyle}>
              <button
                onClick={() => {
                  setCurrency(i.curr);
                  setOpen((v) => !v);
                }}
                className={buttonStyle}
              >
                {i.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// dalej dorobit preklady v i18n.
// A ak vyde cas a energia tak zacat robit explainPage, minimalne aspon spravit systematiku ROUTINGU.
// Tieto veci MUSIA byt do stvrtku hotove aby bolo do konca vikendu hotova Responsibility
