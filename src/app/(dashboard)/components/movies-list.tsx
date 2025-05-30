'use client';

import { useSearchAndFilter } from '@/hooks/dashboard/search-and-filter/use-search-and-filter';
import CardMovie from './card-movie';
import { Pagination } from './pagination';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MoviesList = () => {
  const { state, isLoading, handleFetchMovies } = useSearchAndFilter();

  useEffect(() => {
    handleFetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto flex flex-col items-center w-full max-w-[1366px]">
      <div className="p-4 sm:p-6 bg-mauve-alpha-3 dark:bg-mauve-dark-alpha-3 min-h-[768px] h-auto w-full">
        {isLoading ? (
          <ul className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index}>
                <div className="relative w-[183px] sm:w-[235px] h-[281px] sm:h-[355px] overflow-hidden rounded-lg">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : state.movies?.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[500px] text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-mauve-11 dark:text-mauve-dark-11 mb-2">
              Nenhum filme encontrado
            </h2>
            <p className="text-sm sm:text-base text-mauve-10 dark:text-mauve-dark-10 max-w-md">
              Tente ajustar os filtros ou realizar uma nova busca para encontrar
              o que procura.
            </p>
          </div>
        ) : (
          <ul className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center">
            {state.movies?.data.map((movie) => {
              return (
                <li key={movie.id}>
                  <CardMovie
                    id={movie.id}
                    title={movie.title}
                    posterUrl={movie.imageUrl}
                    rating={movie.voteStats.averageScore}
                    genres={movie.genres}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex justify-center mt-4 mb-6">
        {!isLoading && state.movies && state.movies.data.length > 0 && (
          <Pagination />
        )}
      </div>
    </main>
  );
};

export { MoviesList };
