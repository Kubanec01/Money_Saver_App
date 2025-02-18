import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useLocalStoredValues } from "../useLocalStoredValues";

type FinanceSaverContextProps = {
  budget: string;
  setBudget: (value: string) => void;
  goal: string;
  setGoal: (value: string) => void;
  expensesSum: number;
  setExpensesSum: Dispatch<SetStateAction<number>>;
};

const FinanceSaverContext = createContext<FinanceSaverContextProps | undefined>(
  undefined
);

type ChildrenProps = {
  children: React.ReactNode;
};

export const FinanceSaverProvider = ({ children }: ChildrenProps) => {
  const [budget, setBudget] = useLocalStoredValues("budgetValue", "0");
  const [goal, setGoal] = useLocalStoredValues("goalValue", "0");
  const [expensesSum, setExpensesSum] = useLocalStoredValues("expensesValue",0);

  return (
    <FinanceSaverContext.Provider
      value={{ budget, setBudget, goal, setGoal, expensesSum, setExpensesSum }}
    >
      {children}
    </FinanceSaverContext.Provider>
  );
};

export const useFinanceSaverContext = (): FinanceSaverContextProps => {
  const context = useContext(FinanceSaverContext);

  if (context === undefined) {
    throw new Error(
      "useFinanceSaverContext must be used with a FinanceSaverContext"
    );
  }

  return context;
};
