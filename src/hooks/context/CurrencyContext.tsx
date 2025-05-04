import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { localStoredKeys } from "../../data/storedValuesKeys";
import { useLocalStoredValues } from "../useLocalStoredValues";

type CurrencyContextType = {
  // currency: string;
  // setCurrency: Dispatch<SetStateAction<string>>;
};

const currencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // DATA
  const data = localStoredKeys;

  const [currency, setCurrency] = useLocalStoredValues(
    data.currency.key,
    data.currency.initialValue
  );

  return (
    <currencyContext.Provider value={{ 
      // currency, 
      // setCurrency
       }}>
      {children}
    </currencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(currencyContext);

  if (!context) {
    throw new Error(
      "useCurrencyContext must be used within a CurrencyContextProvider"
    );
  }

  return context;
};
