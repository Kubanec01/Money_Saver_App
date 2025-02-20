import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import { ModalTemplate } from "../modalTemplate/ModalTemplate";
import image1 from "../../../assets/fire-universe-img.jpg";

export const RestartValuesModal = () => {
  const { closeModal } = useFinanceSaverContext();

  // STYLES
  const button =
    "border-[2px] rounded-[10px] border-white text-white text-lg p-2";
  const modalStyle = "p-4 fixed rounded-[20px] w-[34%] h-[340px] z-[10000]";

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
        className="text-center w-[90%] mx-auto mt-4 text-3xl font-bold uppercase text-[#ef8940]"
      >
        You are about to reset all values! Are you sure you want to do this?
      </h1>
      <p
        style={{
          textShadow: "1px 1px 4px black",
        }}
        className="text-center mx-auto w-[82%] mt-2 text-xl text-[#f5efe9f6]"
      >
        By pressing the destructive button, you will reset all your values.
        Budget, Goal, Expenses, Results, and Graphs will have a value of zero.
      </p>
      <div className="w-[90%] mx-auto mt-12 flex items-center justify-between">
        <button
          onClick={closeModal}
          type="submit"
          formMethod="dialog"
          className={button}
        >
          Delay self-destruction
        </button>
        <button type="submit" className={`${button} text-[#f44545] border-[#f53636]`}>
          Yes, Destroy everything
        </button>
      </div>
    </ModalTemplate>
  );
};
