import { createContext, useContext, useState } from "react";

type FinanceSaverContextProps = {
  budget: number;
  setBudget: (value: number) => void;
  goal: number;
  setGoal: (value: number) => void;
};

const FinanceSaverContext = createContext<FinanceSaverContextProps | undefined>(
  undefined
);

type ChildrenProps = {
  children: React.ReactNode;
};

export const FinanceSaverProvider = ({ children }: ChildrenProps) => {
  const [budget, setBudget] = useState(0);

  const [goal, setGoal] = useState(0);

  console.log(budget, goal);
  return (
    <FinanceSaverContext.Provider value={{ budget, setBudget, goal, setGoal }}>
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
