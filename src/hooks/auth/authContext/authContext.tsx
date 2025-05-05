import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../../../firebase/firebaseConfig";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestoreInitialData } from "../../../data/firestoreDataValues";

interface AuthContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
  userId: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const initialValue = firestoreInitialData;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  async function initializeUser(user: User | null) {
    const ensureUserDocExists = async (userId: string) => {
      const ref = doc(db, "users", userId);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        await setDoc(ref, {
          budget: initialValue.budget,
          goal: initialValue.goal,
          expenses: initialValue.expenses,
          expenseData: initialValue.expenseData,
          currency: initialValue.currency,
        });
      } else {
        const data = snapshot.data();
        const updates: any = {};

        if (data.budget === undefined) updates.budget = initialValue.budget;
        if (data.goal === undefined) updates.goal = initialValue.goal;
        if (data.expenses === undefined) updates.expenses = initialValue.expenses;
        if (data.expenseData === undefined) updates.expenseData = initialValue.expenseData;
        if (data.currency === undefined) updates.currency = initialValue.currency;

        if (Object.keys(updates).length > 0) {
          await setDoc(ref, updates, { merge: true });
        }
      }
    };

    if (user) {
      setLoading(true);
      const uid = user.uid;

      try {
        await ensureUserDocExists(uid);
        setCurrentUser(user);
        setUserLoggedIn(true);
        setUserId(uid);
      } catch (error) {
        console.error("Error initializing user:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setUserId(null);
      setLoading(false);
    }
  }

  const value: AuthContextType = {
    currentUser,
    userLoggedIn,
    loading,
    userId,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
