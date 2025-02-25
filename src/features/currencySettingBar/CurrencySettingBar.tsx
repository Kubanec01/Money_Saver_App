import { Dispatch, SetStateAction } from "react";

type CurrencySettingBar = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const CurrencySettingBar = ({ isOpen, setOpen }: CurrencySettingBar) => {
  const coseMenuBar = () => {
    setOpen((v) => !v);
  };

  // STYLES
  const listItemStyle =
    "w-full hover:bg-[#ffffff1d] transition-all duration-200 ease-in rounded-[4px] p-[1px] pl-1";
  const buttonStyle = "w-[90%] text-left";

  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } top-0 right-[60px] rounded-[10px] w-[100px] h-[100px] p-1 py-[6px] bg-[#292828e7]`}
    >
      <ul className="rounded-[10px] w-full h-full flex flex-col items-start justify-between text-base">
        <li className={listItemStyle}>
          <button onClick={coseMenuBar} className={buttonStyle}>
            EUR
          </button>
        </li>
        <li className={listItemStyle}>
          <button onClick={coseMenuBar} className={buttonStyle}>
            CZK
          </button>
        </li>
        <li className={listItemStyle}>
          <button onClick={coseMenuBar} className={buttonStyle}>
            USD
          </button>
        </li>
      </ul>
    </div>
  );
};


// tu odporucam spravit data na currency a zmenit to aby z kazdej currency bol lu a button pomocou .map(),
// dalej spravit funkciu ktora nastavi celu currency v applikacii //urcite cez FinanceContext, dalej dorobit preklady v i18n.
// A ak vyde cas a energia tak zacat robit explainPage, minimalne aspon spravit systematiku ROUTINGU.
// V zadavani vydavkov, myslim, ze to je financeBar treba doupravit funkcionalitu aby button platil aj ked uzivatel stlaci ENTER
// Tieto veci MUSIA byt do stvrtku hotove aby bolo do konca vikendu hotova Responsibility