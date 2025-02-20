import { ReactNode, useEffect, useRef } from "react";
import style from "./modal.module.scss";
import { useFinanceSaverContext } from "../../hooks/context/FinanceContext";

type ModalType = {
  id: string;
  children: ReactNode;
  bgImage: string
  modalBodyStyle?: string
};

export const Modal = ({ id, children, bgImage, modalBodyStyle }: ModalType) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { activeModal } = useFinanceSaverContext();

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
    }}
      ref={modalRef}
      className={`${style.body} ${modalBodyStyle}`}
    >
      <form>{children}</form>
    </dialog>
  );
};