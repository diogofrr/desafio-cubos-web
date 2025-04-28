'use client';

import { useCallback, useRef } from 'react';
import { useSearchAndFilterContext } from '@/hooks/context/use-search-and-filter-context';

import { toast } from 'sonner';
import { requestsMessages } from '@/constants/requests-messages';

import { ListMoviesArgs } from '@/types/movies/list-movies';

import getMovies from '@/services/dashboard/list-movies';

const useSearchAndFilter = () => {
  const {
    state,
    saveMovies,
    changeSearchQuery,
    changePage,
    startLoading,
    stopLoading,
  } = useSearchAndFilterContext();

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isFetchingRef = useRef(false);
  const initialFetchDoneRef = useRef(false);

  const buildFilters = useCallback(
    (overrides: Partial<ListMoviesArgs> = {}): ListMoviesArgs => ({
      search:
        overrides.search !== undefined
          ? overrides.search
          : state.search || undefined,
      page: overrides.page !== undefined ? overrides.page : state.page,
      limit: state.limit,
      minDuration:
        overrides.minDuration !== undefined
          ? overrides.minDuration
          : state.minDuration > 0
            ? state.minDuration
            : undefined,
      maxDuration:
        overrides.maxDuration !== undefined
          ? overrides.maxDuration
          : state.maxDuration > 0
            ? state.maxDuration
            : undefined,
      startDate:
        overrides.startDate !== undefined
          ? overrides.startDate
          : state.startDate || undefined,
      endDate:
        overrides.endDate !== undefined
          ? overrides.endDate
          : state.endDate || undefined,
      languageId:
        overrides.languageId !== undefined
          ? overrides.languageId
          : state.languageId || undefined,
      genreIds:
        overrides.genreIds !== undefined
          ? overrides.genreIds
          : state.genreIds.length
            ? state.genreIds.join(',')
            : undefined,
    }),
    [
      state.genreIds,
      state.limit,
      state.maxDuration,
      state.minDuration,
      state.page,
      state.search,
      state.startDate,
      state.endDate,
      state.languageId,
    ]
  );

  const fetchData = useCallback(
    async (filters: ListMoviesArgs) => {
      if (isFetchingRef.current) return null;

      isFetchingRef.current = true;
      startLoading();

      try {
        const response = await getMovies(filters);

        if (response && response.result) {
          saveMovies(response.result);
          return response;
        } else {
          toast.error('Erro ao buscar filmes', {
            description: requestsMessages.movies.listMovies.error,
          });
          return null;
        }
      } catch (error) {
        toast.error('Erro ao buscar filmes', {
          description: requestsMessages.movies.listMovies.error,
        });
        console.error(error);
        return null;
      } finally {
        stopLoading();
        isFetchingRef.current = false;
      }
    },
    [saveMovies, startLoading, stopLoading]
  );

  const handleFetchMovies = useCallback(
    async (filters?: ListMoviesArgs) => {
      let fetchFilters;

      if (!filters) {
        fetchFilters = buildFilters();
      } else {
        fetchFilters = filters;
      }

      initialFetchDoneRef.current = true;
      return await fetchData(fetchFilters);
    },
    [buildFilters, fetchData]
  );

  const handleSearchContent = useCallback(
    (searchTerm: string, debounceTime = 500) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = setTimeout(async () => {
        changeSearchQuery(searchTerm);
        changePage(1);

        const filters = buildFilters({ search: searchTerm, page: 1 });
        await fetchData(filters);
        searchTimeoutRef.current = null;
      }, debounceTime);
    },
    [changeSearchQuery, changePage, buildFilters, fetchData]
  );

  const handleChangePage = useCallback(
    async (page: number) => {
      changePage(page);

      const filters = buildFilters({ page });
      await fetchData(filters);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [buildFilters, changePage, fetchData]
  );

  return {
    state,
    isLoading: state.loading,
    handleFetchMovies,
    handleSearchContent,
    handleChangePage,
  };
};

export { useSearchAndFilter };
