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
    const ensureUserDocExists = async (userId: string) => {
      const ref = doc(db, "users", userId);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        await setDoc(ref, {
          budget: "0",
          goal: "0",
          expenses: 0,
          expenseData: {},
          currency: "eur",
        });
      } else {
        const data = snapshot.data();
        const updates: any = {};

        if (data.budget === undefined) updates.budget = "0";
        if (data.goal === undefined) updates.goal = "0";
        if (data.expenses === undefined) updates.expenses = 0;
        if (data.expenseData === undefined) updates.expenseData = {};
        if (data.currency === undefined) updates.currency = "eur";

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
