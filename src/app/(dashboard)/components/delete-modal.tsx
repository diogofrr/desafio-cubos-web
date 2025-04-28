import { Button } from '@/components/button';
import Icon from '@/components/icon';
import { Modal } from '@/components/modal';
import { useDeleteMovie } from '@/hooks/dashboard/movies/use-delete-movie';

interface DeleteModalProps {
  id: string;
  isOpen: boolean;
  handleClose: () => void;
}

const DeleteModal = ({ id, isOpen, handleClose }: DeleteModalProps) => {
  const deleteMovie = useDeleteMovie();

  return (
    <Modal isOpen={isOpen}>
      <header className="flex flex-row items-center justify-between text-mauve-11 dark:text-mauve-dark-11 mb-4">
        <h2 className="text-xl sm:text-2xl font-normal font-functional">
          Deletar filme
        </h2>
        <button
          type="button"
          onClick={handleClose}
          className="cursor-pointer hover:bg-mauve-9/50 hover:dark:bg-mauve-dark-9/50 rounded-full p-1"
        >
          <Icon name="close" />
        </button>
      </header>
      <p className="font-functional text-lg font-normal text-mauve-12 dark:text-mauve-dark-12 mb-6">
        Tem certeza que deseja excluir esse filme?
      </p>
      <footer className="flex flex-row items-center justify-end gap-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            deleteMovie.mutate(id);
          }}
        >
          Excluir
        </Button>
      </footer>
    </Modal>
  );
};
export { DeleteModal };
