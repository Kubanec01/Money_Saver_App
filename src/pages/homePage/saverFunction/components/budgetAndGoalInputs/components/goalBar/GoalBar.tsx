import { useEffect, useState } from "react";
import { HandleOnWheel } from "../../../../../../../features/HandleOnWheel";
import { useAuthContext } from "../../../../../../../hooks/auth/authContext/authContext";
import { useFinanceSaverContext } from "../../../../../../../hooks/context/FinanceContext";
import useValueIntoState from "../../../../../../../hooks/useValueIntoState";
import style from "./goalBar.module.scss";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebaseConfig";

export const GoalBar = () => {
  // const { goal, setGoal } = useFinanceSaverContext();
  // const { valueChange } = useValueIntoState(setGoal);
  const { userId } = useAuthContext();
  const [goal, setGoal] = useState("0");

  const { valueChange } = useValueIntoState((newValue: string) => {
    setGoal(newValue);

    if (!userId) {
      return;
    }
    const goalRef = doc(db, "users", userId);

    setDoc(goalRef, { goal: newValue }, { merge: true });
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const goalRef = doc(db, "users", userId);

    const getUserRef = async () => {
      try {
        const userDoc = await getDoc(goalRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setGoal(data.goal);
        }
      } catch (error) {
        console.error("Error fetching goalData:", error);
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
          htmlFor="goal"
          className="lg:text-3xl text-2xl font-semibold text-[#fffffff5] text-nowrap mx-auto lg:mt-[18px] mt-[8px]"
        >
          Your Goal
        </label>
      </div>
      <div className="w-full flex">
        <input
          id="goal"
          onWheel={HandleOnWheel}
          value={goal}
          onChange={valueChange}
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
