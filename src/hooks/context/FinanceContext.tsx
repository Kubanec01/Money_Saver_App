import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { useLocalStoredValues } from "../useLocalStoredValues";
import {localStoredKeys} from "../../data/storedValuesKeys"

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


  const [budget, setBudget] = useLocalStoredValues(localStoredKeys.budget, "0");
  const [goal, setGoal] = useLocalStoredValues(localStoredKeys.goal, "0");
  const [expensesSum, setExpensesSum] = useLocalStoredValues(localStoredKeys.expensesSum, 0);
  const [activeModal, setActiveModal] = useState<string | null>(null)

  
  const openModal = useCallback((id: string) => {
    setActiveModal(id)
  }, [])
  const closeModal = useCallback(() => {
    setActiveModal(null)
  }, [])

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

