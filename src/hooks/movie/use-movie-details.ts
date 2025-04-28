'use client';

import { useQuery } from '@tanstack/react-query';
import getMovie from '@/services/dashboard/get-movie';
import { Movie } from '@/types/movies/get-movie-info';

interface UseMovieDetailsProps {
  movieId: string;
}

interface UseMovieDetailsReturn {
  movie: Movie | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const useMovieDetails = ({
  movieId,
}: UseMovieDetailsProps): UseMovieDetailsReturn => {
  const fetchMovieDetails = async () => {
    const response = await getMovie(movieId);

    if (!response) {
      throw new Error('Não foi possível carregar os dados do filme.');
    }

    return response.result;
  };

  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: fetchMovieDetails,
    staleTime: 1000 * 60 * 5, // 5 minutos
    enabled: !!movieId,
  });

  return {
    movie: movie || null,
    isLoading,
    isError,
    error: error as Error | null,
  };
};
export { useMovieDetails };
