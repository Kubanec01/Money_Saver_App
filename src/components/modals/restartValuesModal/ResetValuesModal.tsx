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
    "border-[2px] rounded-[10px] border-white text-white text-lg p-2";
  const modalStyle = "p-4 fixed rounded-[20px] w-[34%] h-[340px] z-[10000]";

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
      modalBodyStyle={modalStyle}
      bgImage={image1}
    >
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center w-[90%] mx-auto mt-4 text-3xl font-bold uppercase text-warningOrange"
      >
        {t("components.resetModal.title")}
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto w-[82%] mt-2 text-xl text-[#f5efe9f6]"
      >
        {t("components.resetModal.desc")}
      </p>
      <div className="w-[90%] mx-auto mt-12 flex items-center justify-between">
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
