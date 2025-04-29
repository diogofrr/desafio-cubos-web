import { DeleteModal } from '@/app/(dashboard)/components/delete-modal';
import { Button } from '@/components/button';
import { useModal } from '@/hooks/use-modal';
import { UpdateMovieModal } from './update-movie-modal';
import { useMovieDetails } from '@/hooks/movie/use-movie-details';

interface MovieHeaderProps {
  id: string;
  title: string;
  originalTitle?: string;
}

const MovieHeader = ({ id, title, originalTitle }: MovieHeaderProps) => {
  const {
    isOpen: deleteModalIsOpen,
    handleClose: handleCloseDeleteModal,
    handleOpen: handleOpenDeleteModal,
  } = useModal();

  const {
    isOpen: updateModalIsOpen,
    handleClose: handleCloseUpdateModal,
    handleOpen: handleOpenUpdateModal,
  } = useModal();

  const { movie } = useMovieDetails({ movieId: id });

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="font-montserrat font-semibold text-[28px] lg:text-[32px] text-mauve-12 dark:text-mauve-dark-12">
          {title}
        </h1>
        {originalTitle && (
          <p className="font-montserrat font-normal text-sm lg:text-base text-mauve-12 dark:text-mauve-dark-12">
            Título original: {originalTitle}
          </p>
        )}
      </div>
      <div className="order-1 lg:order-2 flex flex-row gap-2 lg:gap-4">
        <Button
          variant="secondary"
          className="flex-1 lg:flex-auto"
          type="button"
          onClick={handleOpenDeleteModal}
        >
          Deletar
        </Button>
        <Button
          variant="primary"
          className="flex-[2] lg:flex-auto"
          onClick={handleOpenUpdateModal}
        >
          Editar
        </Button>
      </div>

      <DeleteModal
        id={id}
        isOpen={deleteModalIsOpen}
        handleClose={handleCloseDeleteModal}
      />

      {movie && (
        <UpdateMovieModal
          movie={movie}
          isOpen={updateModalIsOpen}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
};
export { MovieHeader };
