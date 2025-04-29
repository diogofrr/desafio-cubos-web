'use client';

import { useQuery } from '@tanstack/react-query';
import getMovie from '@/services/dashboard/get-movie';

interface UseMovieDetailsProps {
  movieId: string;
  enabled?: boolean;
}

const useMovieDetails = ({ movieId, enabled = true }: UseMovieDetailsProps) => {
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
    refetch: refetchMovie,
  } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: fetchMovieDetails,
    staleTime: 1000 * 60 * 5,
    enabled: !!movieId || enabled,
  });

  return {
    movie: movie || null,
    isLoading,
    isError,
    refetchMovie,
    error: error as Error | null,
  };
};
export { useMovieDetails };
