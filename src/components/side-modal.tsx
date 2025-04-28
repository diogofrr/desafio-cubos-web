import { ReactNode, useEffect } from 'react';
import Icon from './icon';
import { Button } from './button';

interface SideModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  isPrimaryLoading?: boolean;
  isSecondaryDisabled?: boolean;
  primaryButtonType: 'submit' | 'button';
}

const SideModal = ({
  children,
  isOpen,
  onClose,
  width = 'md',
  title,
  primaryActionLabel,
  secondaryActionLabel = 'Cancelar',
  onPrimaryAction,
  onSecondaryAction,
  isPrimaryLoading = false,
  isSecondaryDisabled = false,
  primaryButtonType = 'submit',
}: SideModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const widthClasses = {
    sm: 'sm:w-1/4',
    md: 'sm:w-1/3',
    lg: 'sm:w-1/2',
    xl: 'sm:w-2/3',
    full: 'sm:w-full',
  };

  const handleSecondaryAction = () => {
    if (onSecondaryAction) {
      onSecondaryAction();
    } else {
      onClose();
    }
  };

  const showFooter = primaryActionLabel || secondaryActionLabel;

  return (
    <div className="fixed inset-0 z-50 bg-mauve-11/25 dark:bg-mauve-dark-11/25 animate-fadeIn">
      <div
        className={`fixed top-0 h-full bg-mauve-3 dark:bg-mauve-dark-3 
                  w-full ${widthClasses[width]} right-0 
                  overflow-hidden
                  shadow-lg animate-slideFromRight
                  transition-all duration-300 flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 sm:p-6 pb-3 border-b border-mauve-5 dark:border-mauve-dark-5">
            <h2 className="text-mauve-11 dark:text-mauve-dark-11 font-bold font-functional text-2xl">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 cursor-pointer rounded-full hover:bg-mauve-5 dark:hover:bg-mauve-dark-5 transition-colors"
              aria-label="Fechar"
            >
              <Icon name="close" />
            </button>
          </div>

          <div className="flex-grow overflow-auto p-4 sm:p-6">{children}</div>

          {showFooter && (
            <div className="border-t border-mauve-5 dark:border-mauve-dark-5 p-4 sm:p-6 flex justify-end gap-3">
              {secondaryActionLabel && (
                <Button
                  variant="secondary"
                  disabled={isSecondaryDisabled}
                  onClick={handleSecondaryAction}
                >
                  {secondaryActionLabel}
                </Button>
              )}
              {primaryActionLabel && (
                <Button
                  variant="primary"
                  type={primaryButtonType}
                  onClick={onPrimaryAction}
                  disabled={isPrimaryLoading}
                >
                  {isPrimaryLoading ? 'Carregando...' : primaryActionLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { SideModal };
