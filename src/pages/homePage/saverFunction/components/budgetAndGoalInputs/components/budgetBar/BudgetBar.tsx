import { useEffect, useState } from "react";
import { HandleKeyDown } from "../../../../../../../features/HandleKeyDown";
import { HandleOnWheel } from "../../../../../../../features/HandleOnWheel";
import useValueIntoState from "../../../../../../../hooks/useValueIntoState";
import style from "./budgetBar.module.scss";
import { useAuthContext } from "../../../../../../../hooks/auth/authContext/authContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebaseConfig";

export const BudgetBar = () => {
  const { userId } = useAuthContext();
  const [budget, setBudget] = useState("0");

  const { valueChange } = useValueIntoState((newValue: string) => {
    setBudget(newValue);

    if (!userId) return;
    const budgetRef = doc(db, "users", userId);

    setDoc(budgetRef, { budget: newValue }, { merge: true });
  });

  useEffect(() => {
    if (!userId) return;
    const budgetRef = doc(db, "users", userId);

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

  return (
    <div
      className={`${style.body} xl:w-[400px] lg:w-[340px] md:w-[300px] sm:w-[60%] w-[90%] lg:h-[140px] md:h-[124px] h-[110px] rounded-[20px]`}
    >
      <div className="w-full flex">
        <label
          htmlFor="budget"
          className="lg:text-3xl text-2xl font-semibold text-[#fffffff0] text-nowrap mx-auto lg:mt-[18px] mt-[8px]"
        >
          Your Budget
        </label>
      </div>
      <div className="w-full flex">
        <input
          onWheel={HandleOnWheel}
          onKeyDown={HandleKeyDown}
          value={budget}
          onChange={valueChange}
          id="budget"
          style={{
            borderBottom: "3px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "2px",
          }}
          className={`${style.numberInput} mx-auto w-[70%] h-[40px] md:text-4xl text-3xl text-center text-[#fffffff0] bg-transparent md:mt-[20px] mt-[14px]`}
          type="number"
        />
      </div>
    </div>
  );
};
