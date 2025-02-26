import { ModalTemplate } from "../modalTemplate/ModalTemplate";
import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import image1 from "../../../assets/universe-bg-img.jpg";
import { useTranslation } from "react-i18next";

export const MissingBudgetModal = () => {
  const { closeModal } = useFinanceSaverContext();
  const { t } = useTranslation();

  // STYLES
  const button =
    "border-[2px] rounded-[10px] border-white text-white text-lg p-2";
  const modalStyle = "p-4 fixed rounded-[20px] w-[34%] h-[340px] z-[10000]";

  return (
    <ModalTemplate
      id="missing-budget-modal"
      bgImage={image1}
      modalBodyStyle={modalStyle}
    >
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center mx-auto w-full mt-4 text-3xl font-bold uppercase text-[#dfccf5]"
      >
        {t("components.missingBudgetModal.title")}
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto w-[84%] mt-3 text-2xl text-[#f3f5fe]"
      >
        {t("components.missingBudgetModal.desc")}
      </p>
      <div className="w-[90%] mx-auto mt-12 flex items-center justify-between">
        <button
          onClick={closeModal}
          type="submit"
          formMethod="dialog"
          className={button}
        >
          {t("components.missingBudgetModal.leftBtn")}
        </button>
        <button type="submit" className={button}>
          {t("components.missingBudgetModal.rightBtn")}
        </button>
      </div>
    </ModalTemplate>
  );
};
