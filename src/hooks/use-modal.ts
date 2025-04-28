import { useState, useCallback } from 'react';

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    handleClose,
    handleOpen,
    handleToggle,
  };
}
