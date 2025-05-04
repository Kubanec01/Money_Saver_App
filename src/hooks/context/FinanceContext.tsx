import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { useLocalStoredValues } from "../useLocalStoredValues";
import { localStoredKeys } from "../../data/storedValuesKeys";

type FinanceSaverContextProps = {
  // budget: string;
  // setBudget: (value: string) => void;
  // goal: string;
  // setGoal: (value: string) => void;
  // expensesSum: number;
  // setExpensesSum: Dispatch<SetStateAction<number>>;
  // activeModal: string | null;
  // openModal: (id: string) => void;
  // closeModal: () => void;
};

const FinanceSaverContext = createContext<FinanceSaverContextProps | undefined>(
  undefined
);

type ChildrenProps = {
  children: React.ReactNode;
};

export const FinanceSaverProvider = ({ children }: ChildrenProps) => {
  // LOCAL STORED DATA
  const data = localStoredKeys;

  // const [budget, setBudget] = useLocalStoredValues<string>(
  //   data.budget.key,
  //   data.budget.initialValue
  // );
  // const [goal, setGoal] = useLocalStoredValues<string>(
  //   data.goal.key,
  //   data.goal.initialValue
  // );
  // const [expensesSum, setExpensesSum] = useLocalStoredValues<number>(
  //   data.expensesSum.key,
  //   data.expensesSum.initialValue
  // );

  // MODAL
  // const [activeModal, setActiveModal] = useState<string | null>(null);
  // const openModal = useCallback((id: string) => {
  //   setActiveModal(id);
  // }, []);

  // const closeModal = useCallback(() => {
  //   setActiveModal(null);
  // }, []);

  return (
    <FinanceSaverContext.Provider
      value={{
        // budget,
        // setBudget,
        // goal,
        // setGoal,
        // expensesSum,
        // setExpensesSum,
        // activeModal,
        // openModal,
        // closeModal,
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
