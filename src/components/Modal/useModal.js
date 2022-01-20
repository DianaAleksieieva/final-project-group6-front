import { useState } from "react";

const useModal = () => {
    const [isShowingModal, setIsShowingModal] = useState(false);
    
  function toggle() {
    setIsShowingModal(!isShowingModal);
  }
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
     toggle();
    }
  };
 
  return {
    isShowingModal,
    toggle,
    handleBackdropClick,
  }
};

export default useModal;