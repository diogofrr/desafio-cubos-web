'use client';

import { FormProvider } from 'react-hook-form';
import { SideModal } from '@/components/side-modal';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Checkbox } from '@/components/checkbox';
import Icon from '@/components/icon';
import { useCreateMovieForm } from '@/hooks/dashboard/movies/use-create-movie-form';
import { formatCurrencyMask } from '@/utils/format-currency-mask';
import { Textarea } from '@/components/textarea';

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
    onSubmit,
    genres,
    languages,
  } = useCreateMovieForm(handleClose);

  return (
    <FormProvider {...form}>
      <SideModal
        primaryButtonType="submit"
        isOpen={isOpen}
        onClose={handleClose}
        title="Adicionar Filme"
        secondaryActionLabel="Cancelar"
        primaryActionLabel="Adicionar filme"
        onPrimaryAction={onSubmit}
      >
        <div className="p-4 overflow-y-auto h-full">
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="space-y-3">
              <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Imagem do Filme
              </h3>
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-mauve-6 dark:border-mauve-dark-6 rounded-md p-4 h-48">
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        handleClearImage();
                        form.trigger('image');
                      }}
                      className="absolute cursor-pointer top-2 right-2 bg-mauve-12 dark:bg-mauve-dark-12 text-white p-1 rounded-full"
                    >
                      <Icon name="close" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                    <Icon name="upload" />
                    <span className="mt-2 text-sm text-mauve-11 dark:text-mauve-dark-11">
                      Clique para fazer upload
                    </span>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg, image/webp"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        handleImageChange(e);
                        form.setValue('image', file);
                      }}
                    />
                  </label>
                )}
              </div>
              {form.formState.errors.image && (
                <span className="text-error text-sm">
                  {form.formState.errors.image.message}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Informações Básicas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Digite o título do filme"
                  {...form.register('title')}
                  errorMessage={form.formState.errors.title?.message}
                />
                <Input
                  id="originalTitle"
                  label="Título Original"
                  placeholder="Digite o título original"
                  {...form.register('originalTitle')}
                  errorMessage={form.formState.errors.originalTitle?.message}
                />
              </div>
              <Input
                id="subtitle"
                label="Subtítulo (opcional)"
                placeholder="Digite o subtítulo"
                {...form.register('subtitle')}
                errorMessage={form.formState.errors.subtitle?.message}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="releaseDate"
                  label="Data de Lançamento"
                  type="date"
                  className="date-input"
                  {...form.register('releaseDate')}
                  errorMessage={form.formState.errors.releaseDate?.message}
                />
                <Input
                  id="duration"
                  label="Duração"
                  type="time"
                  placeholder="Ex: 01:20"
                  {...form.register('duration')}
                  errorMessage={form.formState.errors.duration?.message}
                />
              </div>
            </div>

            <div>
              <Textarea
                id="synopsis"
                label="Sinopse"
                placeholder="Digite a sinopse do filme"
                errorMessage={form.formState.errors.synopsis?.message}
                {...form.register('synopsis')}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Informações Adicionais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="budget"
                  label="Orçamento (opcional)"
                  type="text"
                  placeholder="$ 1000,00"
                  {...form.register('budget')}
                  onChange={(e) => {
                    const formattedValue = formatCurrencyMask(e.target.value);
                    form.setValue('budget', formattedValue);
                  }}
                  errorMessage={form.formState.errors.budget?.message}
                />
                <Input
                  id="revenue"
                  label="Receita (opcional)"
                  type="text"
                  placeholder="$500.000,00"
                  {...form.register('revenue')}
                  onChange={(e) => {
                    const formattedValue = formatCurrencyMask(e.target.value);
                    form.setValue('revenue', formattedValue);
                  }}
                  errorMessage={form.formState.errors.revenue?.message}
                />
              </div>
              <Input
                id="popularity"
                label="Popularidade (opcional)"
                type="number"
                step="0.1"
                placeholder="Ex: 8.5"
                {...form.register('popularity')}
                errorMessage={form.formState.errors.popularity?.message}
              />
              <Input
                id="trailerUrl"
                label="URL do Trailer (opcional)"
                placeholder="Ex: https://youtube.com/watch?v=..."
                {...form.register('trailerUrl')}
                errorMessage={form.formState.errors.trailerUrl?.message}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Status e Idioma
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  id="status"
                  label="Status"
                  {...form.register('status')}
                  error={form.formState.errors.status?.message}
                >
                  <option value="RELEASED">Lançado</option>
                  <option value="PENDING">Pendente</option>
                  <option value="CANCELLED">Cancelado</option>
                </Select>
                <Select
                  id="language"
                  label="Idioma"
                  {...form.register('language')}
                  error={form.formState.errors.language?.message}
                >
                  <option value="">Selecione um idioma</option>
                  {languages?.map((language) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Gêneros
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-mauve-6 dark:border-mauve-dark-6 rounded">
                {genres?.map((genre) => (
                  <div key={genre.id} className="flex items-center">
                    <Checkbox
                      id={`genre-${genre.id}`}
                      value={genre.id}
                      {...form.register('genreIds')}
                    />
                    <label
                      htmlFor={`genre-${genre.id}`}
                      className="ml-2 text-xs sm:text-sm text-mauve-11 dark:text-mauve-dark-11 truncate"
                    >
                      {genre.name}
                    </label>
                  </div>
                ))}
              </div>
              {form.formState.errors.genreIds && (
                <span className="text-error text-sm">
                  {form.formState.errors.genreIds.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </SideModal>
    </FormProvider>
  );
};

export { CreateMovieModal };
