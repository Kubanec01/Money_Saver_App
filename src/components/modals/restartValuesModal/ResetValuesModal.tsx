import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import { ModalTemplate } from "../modalTemplate/ModalTemplate";
import image1 from "../../../assets/fire-universe-img.jpg";
import { localStoredKeys } from "../../../data/storedValuesKeys";
import { resetStoredValues } from "../../../features/resetStoredValues";
import { useExpensesAndResultsBarContext } from "../../../hooks/context/ExpensesAndResultsBarContext";
import { useTranslation } from "react-i18next";
import { useFinanceDataContext } from "../../../hooks/context/FinanceDataContext";
import { t } from "i18next";
import { firestoreInitialData } from "../../../data/firestoreDataValues";
import { useAuthContext } from "../../../hooks/auth/authContext/authContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { useExpensesAndResultsDataContext } from "../../../hooks/context/ExpensesAndResultsDataContext";

export const ResetValuesModal = () => {
  // const { closeModal, setBudget, setGoal, setExpensesSum } =
  //   useFinanceSaverContext();
  const { closeModal, setBudget, setGoal, setExpensesSum } =
    useFinanceDataContext();
  const { userId } = useAuthContext();

  // const { setExpenses } = useExpensesAndResultsBarContext();
  const { setExpenses } = useExpensesAndResultsDataContext();
  
  // // LOCAL STORED KEYS
  // const data = localStoredKeys;
  // const ResetData = Object(
  //   Object.values(localStoredKeys).map((obj) => Object.values(obj)[0])
  // );

  // DATA
  const data = firestoreInitialData;

  // STYLES
  const button =
    "sm:border-[2px] border-[1px] rounded-[10px] border-white text-white xl:text-lg p-2";

  const resetValues = async () => {
    if (!userId) return;

    try {
      const ref = doc(db, "users", userId);
      const updates: any = {
        budget: data.budget,
        goal: data.goal,
        expenses: data.expenses,
        expenseData: data.expenseData,
      };
      await setDoc(ref, updates, { merge: true });
      setBudget(data.budget);
      setGoal(data.goal);
      setExpensesSum(data.expenses);
      setExpenses(data.expenseData);
      closeModal()
    } catch (error) {
      console.error("Failed to reset values and update Firestore:", error);
    }
  };

  return (
    <ModalTemplate
      id="restart-values-modal"
      bgImage={image1}
      modalBodyStyle="p-4 pb-8 fixed rounded-[20px] max-w-[700px] 2xl:w-[34%] xl:w-[40%] lg:w-[46%] md:w-[64%] sm:w-[74%] w-[84%] z-[10000]"
    >
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center sm:w-[90%] mx-auto mt-4 2xl:text-3xl sm:text-2xl text-xl font-bold uppercase text-warningOrange"
      >
        {t("components.resetModal.title")}
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto sm:w-[82%] mt-2 2xl:text-xl sm:text-lg text-[#f5efe9f6]"
      >
        {t("components.resetModal.desc")}
      </p>
      <div className="xl:w-[90%] lg:w-[94%] md:w-[90%] w-[98%] mx-auto mt-12 flex sm:flex-row flex-col items-center sm:justify-between justify-center sm:gap-0 gap-3">
        <button
          onClick={closeModal}
          type="submit"
          formMethod="dialog"
          className={button}
        >
          {t("components.resetModal.leftBtn")}
        </button>
        <button
          formMethod="dialog"
          type="submit"
          onClick={resetValues}
          className={`${button} text-[#f44545] border-[#d03d3d]`}
        >
          {t("components.resetModal.rightBtn")}
        </button>
      </div>
    </ModalTemplate>
  );
};
