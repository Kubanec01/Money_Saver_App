import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStoredValues } from "../useLocalStoredValues";
import { localStoredKeys } from "../../data/storedValuesKeys";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useAuthContext } from "../auth/authContext/authContext";

type FinanceSaverContextProps = {
  budget: string;
  setBudget: (value: string) => void;
  goal: string;
  setGoal: (value: string) => void;
  expensesSum: number;
  setExpensesSum: Dispatch<SetStateAction<number>>;
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
  budgetDocValue: string;
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
  const { userId } = useAuthContext();

  const [budget, setBudget] = useLocalStoredValues<string>(
    data.budget.key,
    data.budget.initialValue
  );

  const [budgetDocValue, setBudgetDocValue] = useState<string>(budget);

  useEffect(() => {
    if (!userId) {
      return;
    }

    const budgetRef = doc(db, "users", userId);

    const setBudgetRef = async (v: string) => {
      try {
        await setDoc(budgetRef, { budget: v }, { merge: true });

        setBudget(v);
      } catch (error) {
        console.error("Error updating Firestore: ", error);
      }
    };

    const getBudgetDoc = async () => {
      try {
        const userDoc = await getDoc(budgetRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          const firestoreBudget = data.budget;
          setBudgetDocValue(firestoreBudget);

          setBudget(firestoreBudget);
        } else {
          console.log("No data found in Firestore");
        }
      } catch (error) {
        console.error("Error fetching Firestore data: ", error);
      }
    };

    getBudgetDoc();

    if (budget !== budgetDocValue) {
      setBudgetRef(budget);
    }
  }, [userId, budget, setBudget]);

  const [goal, setGoal] = useLocalStoredValues<string>(
    data.goal.key,
    data.goal.initialValue
  );
  const [expensesSum, setExpensesSum] = useLocalStoredValues<number>(
    data.expensesSum.key,
    data.expensesSum.initialValue
  );

  // MODAL
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openModal = useCallback((id: string) => {
    setActiveModal(id);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

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
        closeModal,
        budgetDocValue,
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
