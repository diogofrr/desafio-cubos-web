'use client';

import { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { Modal } from '@/components/modal';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Checkbox } from '@/components/checkbox';
import Icon from '@/components/icon';
import { useFiltersForm } from '@/hooks/dashboard/search-and-filter/use-filters-form';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersModal = ({ isOpen, onClose }: FiltersModalProps) => {
  const { form, onSubmit, handleResetFilters, genres, languages } =
    useFiltersForm();
  const [showGenres, setShowGenres] = useState(false);

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
    onClose();
  });

  return (
    <Modal isOpen={isOpen}>
      <div className="w-full max-w-full sm:max-w-md mx-auto">
        <header className="flex flex-row items-center justify-between text-mauve-11 dark:text-mauve-dark-11 mb-4">
          <h2 className="text-xl sm:text-2xl font-normal font-functional">
            Filtros
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer hover:bg-mauve-9/50 hover:dark:bg-mauve-dark-9/50 rounded-full p-1"
          >
            <Icon name="close" />
          </button>
        </header>

        <FormProvider {...form}>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="space-y-1 sm:space-y-3">
              <h3 className="text-sm sm:text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Duração (minutos)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  id="minDuration"
                  label="Mínima"
                  type="time"
                  placeholder="Ex: 01:20"
                  className="time-input"
                  {...form.register('minDuration')}
                  errorMessage={form.formState.errors.minDuration?.message}
                />
                <Input
                  id="maxDuration"
                  label="Máxima"
                  type="time"
                  placeholder="Ex: 02:40"
                  className="time-input"
                  {...form.register('maxDuration')}
                  errorMessage={form.formState.errors.maxDuration?.message}
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Data de lançamento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  id="startDate"
                  label="De"
                  type="date"
                  className="date-input"
                  {...form.register('startDate')}
                  errorMessage={form.formState.errors.startDate?.message}
                />
                <Input
                  id="endDate"
                  label="Até"
                  type="date"
                  className="date-input"
                  {...form.register('endDate')}
                  errorMessage={form.formState.errors.endDate?.message}
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                Idioma
              </h3>
              <Select
                id="languageId"
                {...form.register('languageId')}
                error={form.formState.errors.languageId?.message}
              >
                <option value="">Todos os idiomas</option>
                {languages?.map((language) => (
                  <option key={language.id} value={language.id}>
                    {language.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <h3 className="text-sm sm:text-md font-semibold text-mauve-11 dark:text-mauve-dark-11">
                  Gêneros
                </h3>
                <Button
                  type="button"
                  variant="primary"
                  className="w-full sm:w-auto text-sm"
                  onClick={() => setShowGenres(!showGenres)}
                >
                  {showGenres ? 'Esconder' : 'Mostrar todos'}
                </Button>
              </div>

              {showGenres && (
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 max-h-32 sm:max-h-40 overflow-y-auto p-2 border border-mauve-6 dark:border-mauve-dark-6 rounded">
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
              )}
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end pt-4 gap-3 sm:gap-2 border-t border-mauve-6 dark:border-mauve-dark-6">
              <Button
                type="button"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => {
                  handleResetFilters();
                  onClose();
                }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Aplicar filtros
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default FiltersModal;
