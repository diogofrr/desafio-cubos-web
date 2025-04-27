'use client';

import { Button } from '@/components/button';
import Icon from '@/components/icon';
import { useSearchAndFilter } from '@/hooks/dashboard/search-and-filter/use-search-and-filter';

const Pagination = () => {
  const { state, handleChangePage, isLoading } = useSearchAndFilter(false);
  const currentPage = state.page;

  if (!state.movies || !state.movies?.pagination) {
    return <></>;
  }

  const totalPages = state.movies.pagination.totalPages;

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav className="flex flex-row gap-3">
      <Button
        variant="primary"
        disabled={!state.movies.pagination.hasPrevious || isLoading}
        onClick={() => void handleChangePage(currentPage - 1)}
      >
        <Icon name="chevron-left" />
      </Button>

      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant="primary"
          disabled={pageNumber === currentPage || isLoading}
          onClick={() => void handleChangePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      {totalPages > Math.max(...pageNumbers) && (
        <Button variant="primary" disabled>
          ...
        </Button>
      )}

      <Button
        variant="primary"
        disabled={!state.movies.pagination.hasNext || isLoading}
        onClick={() => void handleChangePage(currentPage + 1)}
      >
        <Icon name="chevron-right" />
      </Button>
    </nav>
  );
};

export { Pagination };
