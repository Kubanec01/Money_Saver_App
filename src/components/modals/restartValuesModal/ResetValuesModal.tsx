import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import { ModalTemplate } from "../modalTemplate/ModalTemplate";
import image1 from "../../../assets/fire-universe-img.jpg";
import { localStoredKeys } from "../../../data/storedValuesKeys";
import { resetStoredValues } from "../../../features/resetStoredValues";
import { useExpensesAndResultsBarContext } from "../../../hooks/context/ExpensesAndResultsBarContext";
import { useTranslation } from "react-i18next";

export const ResetValuesModal = () => {
  const { closeModal, setBudget, setGoal, setExpensesSum } =
    useFinanceSaverContext();
  const { setExpenses } = useExpensesAndResultsBarContext();
  const { t } = useTranslation();

  // LOCAL STORED KEYS
  const data = localStoredKeys;
  const ResetData = Object(
    Object.values(localStoredKeys).map((obj) => Object.values(obj)[0])
  );

  // STYLES
  const button =
    "sm:border-[2px] border-[1px] rounded-[10px] border-white text-white xl:text-lg p-2";

  const resetValues = () => {
    resetStoredValues({ keys: ResetData });
    closeModal();
    setExpenses(data.expenses.initialValue);
    setExpensesSum(data.expensesSum.initialValue);
    setBudget(data.budget.initialValue);
    setGoal(data.goal.initialValue);
  };

  return (
    <ModalTemplate
      id="restart-values-modal"
      bgImage={image1}
      modalBodyStyle="p-4 pb-8 fixed rounded-[20px] 2xl:w-[34%] xl:w-[40%] lg:w-[46%] md:w-[64%] sm:w-[74%] w-[84%] z-[10000]"
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
