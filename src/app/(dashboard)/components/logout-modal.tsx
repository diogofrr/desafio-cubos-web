import { Button } from '@/components/button';
import Close from '@/components/icons/close';
import { Modal } from '@/components/modal';
import { useSession } from '@/hooks/auth/use-session';

interface LogoutModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const LogoutModal = ({ isOpen, handleClose }: LogoutModalProps) => {
  const { handleLogout } = useSession();

  return (
    <Modal isOpen={isOpen} isFullScreen={false}>
      <header className="flex flex-row items-center justify-between text-mauve-11 dark:text-mauve-dark-11 mb-4">
        <h2 className="text-xl sm:text-2xl font-normal font-functional">
          Sair do sistema
        </h2>
        <button
          type="button"
          onClick={handleClose}
          className="cursor-pointer hover:bg-mauve-9/50 hover:dark:bg-mauve-dark-9/50 rounded-full p-1"
        >
          <Close />
        </button>
      </header>
      <p className="font-functional text-lg font-normal text-mauve-12 dark:text-mauve-dark-12 mb-6">
        Tem certeza que deseja sair do sistema?
      </p>
      <footer className="flex flex-row items-center justify-end gap-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Sair
        </Button>
      </footer>
    </Modal>
  );
};
export { LogoutModal };
