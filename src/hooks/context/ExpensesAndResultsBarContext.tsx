import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { useLocalStoredValues } from "../useLocalStoredValues";
import { localStoredKeys } from "../../data/storedValuesKeys";

type ExpensesAndResultsBarContextType = {
  expenses: { [key: string]: number };
  updateExpense: (id: string, value: number) => void;
  setExpenses: Dispatch<SetStateAction<{}>>;
};

const ExpensesAndResultsBarContext = createContext<
  ExpensesAndResultsBarContextType | undefined
>(undefined);

export const ExpensesAndResultsBarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  //  LOCAL STORED DATA
  const data = localStoredKeys;

  const [expenses, setExpenses] = useLocalStoredValues(data.expenses.key, data.expenses.initialValue);

  const updateExpense = (id: string, value: number) => {
    setExpenses((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <ExpensesAndResultsBarContext.Provider
      value={{ expenses, updateExpense, setExpenses }}
    >
      {children}
    </ExpensesAndResultsBarContext.Provider>
  );
};

export const useExpensesAndResultsBarContext = () => {
  const context = useContext(ExpensesAndResultsBarContext);
  if (!context) {
    throw new Error(
      "useFinanceContext must be used within a ExpensesAndResultsBarProvider"
    );
  }
  return context;
};
