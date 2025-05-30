'use client';

import { FormProvider } from 'react-hook-form';

import { SideModal } from '@/components/side-modal';
import { useCreateMovieForm } from '@/hooks/dashboard/movies/use-create-movie-form';
import { MovieFormFields } from './movie-form/movie-form-fields';

interface CreateMovieModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const CreateMovieModal = ({ handleClose, isOpen }: CreateMovieModalProps) => {
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
  } = useCreateMovieForm(handleClose);

  return (
    <FormProvider {...form}>
      <SideModal
        primaryButtonType="submit"
        isOpen={isOpen}
        onClose={() => {
          handleClose();
          resetForm();
        }}
        title="Adicionar Filme"
        secondaryActionLabel="Cancelar"
        primaryActionLabel={'Adicionar filme'}
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

export { CreateMovieModal };
