'use client';

import { Button } from '@/components/button';
import Icon from '@/components/icon';
import { Input } from '@/components/input';
import { useSearchAndFilter } from '@/hooks/dashboard/search-and-filter/use-search-and-filter';
import { useModal } from '@/hooks/use-modal';
import FiltersModal from './filters-modal';
import { CreateMovieModal } from './create-movie-modal';

export default function SubHeader() {
  const { handleSearchContent } = useSearchAndFilter();
  const {
    isOpen: filterModalIsOpen,
    handleClose: handleCloseFilterModal,
    handleOpen: handleOpenFilterModal,
  } = useModal();
  const {
    isOpen: createMovieModalIsOpen,
    handleClose: handleCloseCreateMovieModal,
    handleOpen: handleOpenCreateMovieModal,
  } = useModal();

  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row items-center justify-end gap-[10px] max-w-[1366px] w-full h-full mx-auto py-4 md:py-6">
        <Input
          placeholder="Pesquise por filmes"
          id="moviesSearch"
          onChange={(e) => handleSearchContent(e.target.value)}
          rightIcon={<Icon name="search" />}
          containerClassName="w-full md:max-w-[488px]"
        />
        <div className="flex flex-row items-center justify-end gap-[2px] sm:gap-[10px] w-full sm:w-auto">
          <Button
            variant="secondary"
            type="button"
            className="flex-1 sm:flex-initial"
            onClick={handleOpenFilterModal}
          >
            Filtros
          </Button>
          <Button
            variant="primary"
            type="button"
            className="flex-2 sm:flex-initial"
            onClick={handleOpenCreateMovieModal}
          >
            Adicionar Filme
          </Button>
        </div>
      </div>

      <FiltersModal
        isOpen={filterModalIsOpen}
        handleClose={handleCloseFilterModal}
      />

      <CreateMovieModal
        isOpen={createMovieModalIsOpen}
        handleClose={handleCloseCreateMovieModal}
      />
    </div>
  );
}
