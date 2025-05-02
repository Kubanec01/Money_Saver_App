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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => unsubscribe();
  }, []);

  async function initializeUser(user: User | null) {
    const ensureUSerDocExists = async (userId: string) => {
      const ref = doc(db, "users", userId);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        await setDoc(ref, {
          budget: "0",
          goal: "0",
          expenses: 0,
          expensesData: {},
        });
      } else {
        const data = snapshot.data();
        const updates: any = {};
        if (data.budget === undefined) updates.budget = "0";
        if (data.goal === undefined) updates.goal = "0";
        if (data.expenses === undefined) updates.expenses = 0;
        if (data.expenseData === undefined) updates.expenseData = {};

        if (Object.keys(updates).length > 0) {
          await setDoc(ref, updates, { merge: true });
        }
      }
    };
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      setUserId(user.uid);
      ensureUSerDocExists(user.uid);
    } else {
      setCurrentUser(null);
      setUserId(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
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
