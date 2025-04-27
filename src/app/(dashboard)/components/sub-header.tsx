'use client';

import { Button } from '@/components/button';
import Icon from '@/components/icon';
import { Input } from '@/components/input';
import { useSearchAndFilter } from '@/hooks/dashboard/search-and-filter/use-search-and-filter';

export default function SubHeader() {
  const { handleSearchContent } = useSearchAndFilter(false);

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
          <Button variant="secondary" className="flex-1 sm:flex-initial">
            Filtros
          </Button>
          <Button variant="primary" className="flex-2 sm:flex-initial">
            Adicionar Filme
          </Button>
        </div>
      </div>
    </div>
  );
}
