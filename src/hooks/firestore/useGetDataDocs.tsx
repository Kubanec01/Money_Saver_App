import { useEffect, useState } from "react";
import { useAuthContext } from "../auth/authContext/authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const useGetDataDocs = () => {
  const { userId } = useAuthContext();
  const [budget, setBudget] = useState("0");
  const [goal, setGoal] = useState("0");

  useEffect(() => {
    if (!userId) return;
    const budgetRef = doc(db, "users", userId);
    const goalRef = doc(db, "users", userId);

    const getBudgetRef = async () => {
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
    getBudgetRef();

    const getGoalRef = async () => {
      try {
        const userDoc = await getDoc(goalRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setGoal(data.goal);
        }
      } catch (error) {
        console.error("Error fetching goalValue data:", error);
      }
    };
    getGoalRef();
  }, [userId]);

  return { budget, setBudget, goal, setGoal };
};
