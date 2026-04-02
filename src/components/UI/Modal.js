import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, onClose, children }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (!modal) return;

    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
