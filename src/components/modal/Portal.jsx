import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { ModalContent } from "./ModalContent";

export const Portal = () => {
  const { modal } = useSelector((store) => store.modal);
  return <>{modal && createPortal(<ModalContent />, document.body)}</>;
};
