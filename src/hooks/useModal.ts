import { useState } from "react";

const useModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return { isOpen, openModal, closeModal };
};

export default useModal;
