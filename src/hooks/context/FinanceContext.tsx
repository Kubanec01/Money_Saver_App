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
  activeModal: string | null
  openModal: (id: string) => void
  closeModal: () => void
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
  const [expensesSum, setExpensesSum] = useLocalStoredValues("expensesValue", 0);
  const [activeModal, setActiveModal] = useState<string | null>(null)
  console.log(activeModal)

  const openModal = (id: string) => setActiveModal(id)
  const closeModal = () => setActiveModal(null)

  return (
    <FinanceSaverContext.Provider
      value={{
        budget,
        setBudget,
        goal,
        setGoal,
        expensesSum,
        setExpensesSum,
        activeModal,
        openModal,
        closeModal
      }}
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

