import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { firestoreInitialData } from "../../data/firestoreDataValues";
import { useAuthContext } from "../auth/authContext/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

type CurrencyDataContextType = {
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
};

const currencyDataContext = createContext<CurrencyDataContextType | undefined>(
  undefined
);

export const CurrencyDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const data = firestoreInitialData;
  const { userId, loading } = useAuthContext();

  const [currency, setCurrency] = useState(data.currency);

  useEffect(() => {
    if (!userId || loading) return;

    const fetchData = async () => {
      try {
        const ref = doc(db, "users", userId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setCurrency(data.currency ?? "eur");
        }
      } catch (error) {
        console.error("Failed Fetching Currency Data:", error);
      }
    };
    fetchData();
  }, [userId, loading]);

  return (
    <currencyDataContext.Provider value={{ currency, setCurrency }}>
      {children}
    </currencyDataContext.Provider>
  );
};

export const useCurrencyDataContext = (): CurrencyDataContextType => {
  const context = useContext(currencyDataContext);

  if (!context) {
    throw new Error(
      "useCurrencyDataContext must be used within a CurrencyDataContextProvider"
    );
  }

  return context;
};
