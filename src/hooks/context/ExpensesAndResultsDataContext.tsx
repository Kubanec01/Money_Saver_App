import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "../auth/authContext/authContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { firestoreInitialData } from "../../data/firestoreDataValues";

type ExpensesAndResultsDataContextType = {
  updateExpense: (id: string, value: number) => void;
  expenses: { [key: string]: number };
  setExpenses: Dispatch<SetStateAction<{}>>;
};

const ExpensesAndResultsDataContext = createContext<
  ExpensesAndResultsDataContextType | undefined
>(undefined);

export const ExpensesAndResultsDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialData = firestoreInitialData
  const { userId } = useAuthContext();
  const [expenses, setExpenses] = useState<{ [key: string]: number }>(initialData.expenseData);

  const updateExpense = (id: string, value: number) => {
    if (!userId || value === undefined) return;

    const ref = doc(db, "users", userId);

    setDoc(ref, { expenseData: { [id]: value } }, { merge: true });
    setExpenses((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (!userId) return;
    const ref = doc(db, "users", userId);

    const getExpensesResultsDoc = async () => {
      const refDoc = await getDoc(ref);

      if (refDoc.exists()) {
        const data = refDoc.data();
        setExpenses(data.expenseData || {});
      }
    };
    getExpensesResultsDoc();
  }, [userId]);

  return (
    <ExpensesAndResultsDataContext.Provider
      value={{ updateExpense, expenses, setExpenses }}
    >
      {children}
    </ExpensesAndResultsDataContext.Provider>
  );
};

export const useExpensesAndResultsDataContext =
  (): ExpensesAndResultsDataContextType => {
    const context = useContext(ExpensesAndResultsDataContext);

    if (!context) {
      throw new Error(
        "useExpensesAndResultsDataContext must be used within a ExpensesAndResultsDataContextProvider"
      );
    }
    return context;
  };
