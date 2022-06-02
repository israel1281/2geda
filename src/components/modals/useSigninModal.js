import { useState } from 'react';
const useSigninModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  function toggleModal() {
    setIsVisible(!isVisible);
  }
  
  return {
    isVisible,
    toggleModal,
  }
};
export default useSigninModal;