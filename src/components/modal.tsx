import { ReactNode, useEffect } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  isFullScreen?: boolean;
}

const Modal = ({
  children,
  isOpen,
  className = '',
  isFullScreen = true,
}: ModalProps) => {
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

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-mauve-11/25 dark:bg-mauve-dark-11/25 animate-fadeIn ${className}`}
    >
      <div className="h-screen w-screen px-0 flex items-center justify-center">
        <div
          className={`bg-mauve-3 dark:bg-mauve-dark-3 rounded-none sm:rounded-sm p-6 
                    ${isFullScreen ? 'w-full h-screen sm:h-auto' : 'w-full max-w-md h-auto max-h-[90vh]'}
                    sm:max-h-[90vh] sm:min-h-0
                    sm:max-w-md sm:my-8 overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
