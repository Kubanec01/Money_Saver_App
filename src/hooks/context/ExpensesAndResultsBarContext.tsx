import { createContext, ReactNode, useContext, useState } from "react";

type ExpensesAndResultsBarContextType = {
  expenses: { [key: string]: number };
  updateExpense: (id: string, value: number) => void;
};

const ExpensesAndResultsBarContext = createContext<
  ExpensesAndResultsBarContextType | undefined
>(undefined);

export const ExpensesAndResultsBarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [expenses, setExpenses] = useState<{ [key: string]: number }>({});

  const updateExpense = (id: string, value: number) => {
    setExpenses((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <ExpensesAndResultsBarContext.Provider value={{ expenses, updateExpense }}>
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
