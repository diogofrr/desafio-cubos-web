'use client';

import { Button } from '@/components/button';
import ChevronLeft from '@/components/icons/chevron-left';
import ChevronRight from '@/components/icons/chevron-right';
import { useSearchAndFilter } from '@/hooks/dashboard/search-and-filter/use-search-and-filter';

const Pagination = () => {
  const { state, handleChangePage } = useSearchAndFilter();
  const currentPage = state.page;

  if (!state.movies || !state.movies?.pagination) {
    return <></>;
  }

  const totalPages = state.movies.pagination.totalPages || 0;
  const hasPrevious = !state.movies.pagination.hasPrevious;
  const hasNext = !state.movies.pagination.hasNext;

  const renderPageButtons = (isMobile: boolean) => {
    const pageButtons = [];
    const maxButtons = isMobile ? 2 : 4;

    let startRender = Math.max(1, currentPage - Math.floor(maxButtons / 2));

    if (startRender + maxButtons > totalPages) {
      startRender = Math.max(1, totalPages - maxButtons + 1);
    }

    const endRender = Math.min(startRender + maxButtons - 1, totalPages);

    for (let i = startRender; i <= endRender; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant="primary"
          disabled={i === currentPage}
          onClick={() => void handleChangePage(i)}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };

  return (
    <nav className="flex flex-row gap-3">
      <Button
        variant="primary"
        disabled={hasPrevious}
        onClick={() => void handleChangePage(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>

      <div className="hidden md:flex flex-row gap-3">
        {renderPageButtons(false)}

        {totalPages > 4 && currentPage < totalPages - 2 && (
          <Button variant="primary" disabled>
            ...
          </Button>
        )}
      </div>

      <div className="flex md:hidden flex-row gap-3">
        {renderPageButtons(true)}

        {totalPages > 2 && currentPage < totalPages - 1 && (
          <Button variant="primary" disabled>
            ...
          </Button>
        )}
      </div>

      <Button
        variant="primary"
        disabled={hasNext}
        onClick={() => void handleChangePage(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </nav>
  );
};

export { Pagination };
