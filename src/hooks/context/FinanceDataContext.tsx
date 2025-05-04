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
  const { userId, loading } = useAuthContext();
  const [budget, setBudget] = useState("0");
  const [goal, setGoal] = useState("0");
  const [expensesSum, setExpensesSum] = useState(0);


  useEffect(() => {
    if (!userId || loading) return;

    const fetchingAllData = async () => {
      try {
        const ref = doc(db, "users", userId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setBudget(data.budget ?? "0");
          setGoal(data.goal ?? "0");
          setExpensesSum(data.expenses ?? 0);
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
