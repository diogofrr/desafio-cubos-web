'use client';

import { FormProvider } from 'react-hook-form';

import { SideModal } from '@/components/side-modal';
import { useUpdateMovieForm } from '@/hooks/dashboard/movies/use-update-movie-form';
import { MovieFormFields } from '@/app/(dashboard)/components/movie-form/movie-form-fields';

import { Movie } from '@/types/movies/get-movie-info';

interface UpdateMovieModalProps {
  isOpen: boolean;
  handleClose: () => void;
  movie: Movie;
}

const UpdateMovieModal = ({
  handleClose,
  isOpen,
  movie,
}: UpdateMovieModalProps) => {
  const {
    form,
    imagePreview,
    handleImageChange,
    handleClearImage,
    resetForm,
    onSubmit,
    isSubmitting,
    genres,
    languages,
  } = useUpdateMovieForm({ movie, onClose: handleClose });

  return (
    <FormProvider {...form}>
      <SideModal
        primaryButtonType="submit"
        isOpen={isOpen}
        onClose={() => {
          handleClose();
          resetForm();
        }}
        title="Editar Filme"
        secondaryActionLabel="Cancelar"
        primaryActionLabel="Salvar alterações"
        onPrimaryAction={onSubmit}
        isPrimaryLoading={isSubmitting}
        isSecondaryDisabled={isSubmitting}
      >
        <MovieFormFields
          imagePreview={imagePreview}
          handleImageChange={handleImageChange}
          handleClearImage={handleClearImage}
          isSubmitting={isSubmitting}
          genres={genres || []}
          languages={languages || []}
        />
      </SideModal>
    </FormProvider>
  );
};

export { UpdateMovieModal };
