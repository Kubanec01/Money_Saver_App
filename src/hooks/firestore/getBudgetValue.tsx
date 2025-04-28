import { useEffect, useState } from "react";
import { useAuthContext } from "../auth/authContext/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const getBudgetValue = () => {
  const { userId } = useAuthContext();
  const [budget, setBudget] = useState("0");

  useEffect(() => {
    if (!userId) return;
    const budgetRef = doc(db, "testUsers", userId);

    const getUserRef = async () => {
      try {
        const userDoc = await getDoc(budgetRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          const budgetFirestore = data.budget;
          setBudget(budgetFirestore);
        }
      } catch (error) {
        console.error("Error fetching budget:", error);
      }
    };
    getUserRef();
  }, [userId]);

  return {budget};
};
