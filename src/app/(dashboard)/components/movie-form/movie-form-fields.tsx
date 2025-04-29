'use client';

import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/textarea';
import Icon from '@/components/icon';

import { formatCurrencyMask } from '@/utils/format-currency-mask';
import { formatStringToNumber } from '@/utils/format-string-to-number';
import { GenresList } from '../genre-list';

interface MovieFormFieldsProps {
  imagePreview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearImage: () => void;
  isSubmitting: boolean;
  genres: Array<{ id: string; name: string }>;
  languages: Array<{ id: string; name: string }>;
}

export const MovieFormFields = ({
  imagePreview,
  handleImageChange,
  handleClearImage,
  isSubmitting,
  genres,
  languages,
}: MovieFormFieldsProps) => {
  const form = useFormContext();

  return (
    <div className="p-4 overflow-y-auto h-full">
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="space-y-6"
        noValidate
      >
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
            Imagem do Filme
          </h3>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-mauve-6 dark:border-mauve-dark-6 rounded-md p-4 h-48">
            {imagePreview ? (
              <div className="relative w-full h-full">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  style={{ objectFit: 'contain' }}
                  objectFit="contain"
                />
                <button
                  type="button"
                  onClick={() => {
                    handleClearImage();
                    form.trigger('image');
                  }}
                  disabled={isSubmitting}
                  className="absolute cursor-pointer top-2 right-2 bg-mauve-12 dark:bg-mauve-dark-12 text-white p-1 rounded-full"
                >
                  <Icon name="close" />
                </button>
              </div>
            ) : (
              <label
                className={`flex flex-col items-center justify-center w-full h-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <Icon name="upload" />
                <span className="mt-2 text-sm text-mauve-11 dark:text-mauve-dark-11">
                  Clique para fazer upload
                </span>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  className="hidden"
                  disabled={isSubmitting}
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
          {form.formState?.errors?.image && (
            <span className="text-error text-sm">
              {form.formState.errors.image?.message?.toString()}
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
              disabled={isSubmitting}
              errorMessage={form.formState?.errors?.title?.message?.toString()}
            />
            <Input
              id="originalTitle"
              label="Título Original"
              placeholder="Digite o título original"
              {...form.register('originalTitle')}
              disabled={isSubmitting}
              errorMessage={form.formState?.errors?.originalTitle?.message?.toString()}
            />
          </div>
          <Input
            id="subtitle"
            label="Subtítulo (opcional)"
            placeholder="Digite o subtítulo"
            {...form.register('subtitle')}
            disabled={isSubmitting}
            errorMessage={form.formState?.errors?.subtitle?.message?.toString()}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="releaseDate"
              label="Data de Lançamento"
              type="date"
              className="date-input"
              {...form.register('releaseDate')}
              disabled={isSubmitting}
              errorMessage={form.formState?.errors?.releaseDate?.message?.toString()}
            />
            <Input
              id="duration"
              label="Duração"
              type="time"
              placeholder="Ex: 01:20"
              {...form.register('duration')}
              disabled={isSubmitting}
              errorMessage={form.formState?.errors?.duration?.message?.toString()}
            />
          </div>
        </div>

        <div>
          <Textarea
            id="synopsis"
            label="Sinopse"
            placeholder="Digite a sinopse do filme"
            maxLength={255}
            disabled={isSubmitting}
            errorMessage={form.formState?.errors?.synopsis?.message?.toString()}
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
              disabled={isSubmitting}
              onChange={(e) => {
                const formattedValue = formatCurrencyMask(e.target.value);
                form.setValue('budget', formattedValue);
              }}
              errorMessage={form.formState?.errors?.budget?.message?.toString()}
            />
            <Input
              id="revenue"
              label="Receita (opcional)"
              type="text"
              placeholder="$500.000,00"
              {...form.register('revenue')}
              disabled={isSubmitting}
              onChange={(e) => {
                const formattedValue = formatCurrencyMask(e.target.value);
                form.setValue('revenue', formattedValue);
              }}
              errorMessage={form.formState?.errors?.revenue?.message?.toString()}
            />
          </div>
          <Input
            id="popularity"
            label="Popularidade (opcional)"
            type="string"
            placeholder="Ex: 54.560"
            {...form.register('popularity')}
            disabled={isSubmitting}
            onChange={(e) => {
              const formattedValue = formatStringToNumber(e.target.value);
              form.setValue('popularity', formattedValue);
            }}
            errorMessage={form.formState?.errors?.popularity?.message?.toString()}
          />
          <Input
            id="trailerUrl"
            label="URL do Trailer (opcional)"
            placeholder="Ex: https://youtube.com/watch?v=..."
            {...form.register('trailerUrl')}
            disabled={isSubmitting}
            errorMessage={form.formState?.errors?.trailerUrl?.message?.toString()}
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
              disabled={isSubmitting}
              error={form.formState?.errors?.status?.message?.toString()}
            >
              <option value="RELEASED">Lançado</option>
              <option value="PENDING">Pendente</option>
              <option value="CANCELLED">Cancelado</option>
            </Select>
            <Select
              id="language"
              label="Idioma"
              {...form.register('language')}
              disabled={isSubmitting}
              error={form.formState?.errors?.language?.message?.toString()}
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
          <GenresList genres={genres} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};
