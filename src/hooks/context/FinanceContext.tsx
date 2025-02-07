import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

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
  const [budget, setBudget] = useState("0");
  const [goal, setGoal] = useState("0");
  const [expensesSum, setExpensesSum] = useState(0);

  console.log(`this is budget ${budget}`);
  console.log(`this is goal ${goal}`);
  console.log(`this is expensesSum ${expensesSum}`);
  // budget: all budget money
  // goal: money u want to save
  // expenseSum: value of spend money

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
