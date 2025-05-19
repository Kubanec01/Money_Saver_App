import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "../auth/authContext/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { firestoreInitialData } from "../../data/firestoreDataValues";

type FinanceDataContextProps = {
  setBudget: Dispatch<SetStateAction<string>>;
  budget: string;
  setGoal: Dispatch<SetStateAction<string>>;
  goal: string;
  setExpensesSum: Dispatch<SetStateAction<number>>;
  expensesSum: number;
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
};

// CREATE CONTEXT
const FinanceDataContext = createContext<FinanceDataContextProps | undefined>(
  undefined
);

// PROVIDER
export const FinanceDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // DATA
  const initialData = firestoreInitialData;

  const { userId, loading } = useAuthContext();
  const [budget, setBudget] = useState(initialData.budget);
  const [goal, setGoal] = useState(initialData.goal);
  const [expensesSum, setExpensesSum] = useState(initialData.expenses);

  useEffect(() => {
    if (!userId || loading) return;

    const fetchingAllData = async () => {
      try {
        const ref = doc(db, "users", userId);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setExpensesSum(data.expenses ?? initialData.expenses);
          setBudget(data.budget ?? initialData.budget);
          setGoal(data.goal ?? initialData.goal);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingAllData();
  }, [userId, loading]);

  // MODAL
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = useCallback((id: string) => {
    setActiveModal(id);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <FinanceDataContext.Provider
      value={{
        expensesSum,
        setExpensesSum,
        budget,
        setBudget,
        goal,
        setGoal,
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </FinanceDataContext.Provider>
  );
};

// USE CONTEXT
export const useFinanceDataContext = (): FinanceDataContextProps => {
  const context = useContext(FinanceDataContext);

  if (context === undefined) {
    throw new Error(
      "useFinanceDataContext must be used with a FinanceDataContext"
    );
  }

  return context;
};
