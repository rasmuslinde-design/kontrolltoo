import { useEffect, useRef } from "react";

const Modal = ({ open, children }) => {
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

  return (
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>
  );
};

export default Modal;
