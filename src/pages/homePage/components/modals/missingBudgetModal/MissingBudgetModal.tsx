import { Modal } from "../../../../../components/modal/Modal";
import { useFinanceSaverContext } from "../../../../../hooks/context/FinanceContext";
import image1 from "../../../../../assets/universe-bg-img.jpg"

export const MissingBudgetModal = () => {

  const { closeModal } = useFinanceSaverContext();

    // STYLES
    const button =
    "border-[2px] rounded-[10px] border-white text-white text-lg p-2";
    const modalStyle = "p-4 fixed rounded-[20px] w-[34%] h-[340px] z-[10000]"

  return (
    <Modal id="missing-budget-modal" bgImage={image1} modalBodyStyle={modalStyle}>
      <h1
        style={{
          textShadow: "1px 1px 20px black",
        }}
        className="text-center mx-auto w-full mt-4 text-3xl font-bold uppercase text-[#dfccf5]"
      >
        Do you want to spend from your budget without having a budget?
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto w-[84%] mt-3 text-2xl text-[#f3f5fe]"
      >
        Don't worry, Captain, this can happen to the best of us. Please enter
        the coordinates for your budget so you can continue managing your
        finances.
      </p>
      <div className="w-[90%] mx-auto mt-12 flex items-center justify-between">
          <button
          onClick={closeModal}
          type="submit" formMethod="dialog" className={button}>
            Roger that, over.
          </button>
          <button type="submit" className={button}>
            What?! Tell me more.
          </button>
        </div>
    </Modal>
  );
};
