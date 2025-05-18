import { ModalTemplate } from "../modalTemplate/ModalTemplate";
import image1 from "../../../assets/universe-bg-img.jpg";
import { Link } from "react-router";
import { useFinanceDataContext } from "../../../hooks/context/FinanceDataContext";
import { t } from "i18next";

export const MissingBudgetModal = () => {
  // const { closeModal } = useFinanceSaverContext();
  const { closeModal } = useFinanceDataContext();
  

  // STYLES
  const button =
    "sm:border-[2px] border-[1px] rounded-[10px] border-white text-white 2xl:text-lg p-2";

  return (
    <ModalTemplate
      id="missing-budget-modal"
      bgImage={image1}
      modalBodyStyle="p-4 pb-8 fixed rounded-[20px] max-w-[700px] 2xl:w-[34%] xl:w-[40%] lg:w-[46%] md:w-[64%] sm:w-[74%] w-[84%] z-[10000]"
    >
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center mx-auto w-full mt-4 2xl:text-3xl sm:text-2xl text-xl font-bold uppercase text-[#dfccf5]"
      >
        {t("components.missingBudgetModal.title")}
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto sm:w-[84%] w-[90%] 2xl:mt-3 sm:mt-2 mt-3 2xl:text-xl sm:text-lg text-[#f3f5fe]"
      >
        {t("components.missingBudgetModal.desc")}
      </p>
      <div className="w-[90%] mx-auto sm:mt-12 mt-10 flex sm:flex-row flex-col items-center sm:justify-between justify-center sm:gap-0 gap-4">
        <button
          onClick={closeModal}
          type="submit"
          formMethod="dialog"
          className={button}
        >
          {t("components.missingBudgetModal.leftBtn")}
        </button>
        <Link onClick={closeModal} to="/info" type="submit" className={button}>
          {t("components.missingBudgetModal.rightBtn")}
        </Link>
      </div>
    </ModalTemplate>
  );
};
