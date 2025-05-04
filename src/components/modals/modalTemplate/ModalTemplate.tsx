import { ReactNode, useEffect, useRef } from "react";
import style from "./modal.module.scss";
import { useFinanceSaverContext } from "../../../hooks/context/FinanceContext";
import { useFinanceDataContext } from "../../../hooks/context/FinanceDataContext";

type ModalTemplateType = {
  id: string;
  children: ReactNode;
  bgImage?: string
  modalBodyStyle?: string
};

export const ModalTemplate = ({ id, children, bgImage, modalBodyStyle }: ModalTemplateType) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  // const { activeModal } = useFinanceSaverContext();
  const { activeModal } = useFinanceDataContext();

  useEffect(() => {
    if (activeModal === id) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [activeModal]);

  return (
    <dialog
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden"
    }}
      ref={modalRef}
      className={`${style.body} ${modalBodyStyle}`}
    >
      <form>{children}</form>
    </dialog>
  );
};