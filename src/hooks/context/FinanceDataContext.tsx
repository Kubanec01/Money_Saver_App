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

type FinanceDataContextProps = {
  setBudget: Dispatch<SetStateAction<string>>;
  budget: string;
  setGoal: Dispatch<SetStateAction<string>>;
  goal: string;
  setExpensesSum: Dispatch<SetStateAction<number>>;
  expensesSum: number;
  loading: boolean;
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
  const { userId } = useAuthContext();
  const [budget, setBudget] = useState("0");
  const [goal, setGoal] = useState("0");
  const [expensesSum, setExpensesSum] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!userId) return;

  //   const ref = doc(db, "users", userId);

  //   const getBudgetRef = async () => {
  //     try {
  //       const userDoc = await getDoc(ref);
  //       if (userDoc.exists()) {
  //         const data = userDoc.data();
  //         setBudget(data.budget);
  //       } else {
  //         setDoc(ref, { budget: "0" });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching budget Firestore Data:", error);
  //     }
  //   };
  //   getBudgetRef();

  //   const getGoalRef = async () => {
  //     try {
  //       const docRef = await getDoc(ref);
  //       if (docRef.exists()) {
  //         const data = docRef.data();
  //         setGoal(data.goal);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching goal Firestore Data:", error);
  //     }
  //   };
  //   getGoalRef();

  //   const getExpensesRef = async () => {
  //     try {
  //       const userDoc = await getDoc(ref);
  //       if (userDoc.exists()) {
  //         const data = userDoc.data();
  //         setExpensesSum(data.expenses);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching expenses Firestore Data:", error);
  //     }
  //   };
  //   getExpensesRef();
  // }, [userId]);

  useEffect(() => {
    if (!userId) return;

    const fetchingAllData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchingAllData();
  }, [userId]);

  return (
    <FinanceDataContext.Provider
      value={{
        expensesSum,
        setExpensesSum,
        budget,
        setBudget,
        goal,
        setGoal,
        loading,
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
