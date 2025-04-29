'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import updateMovie from '@/services/dashboard/update-movie';
import { UpdateMovieArgs } from '@/types/movies/update-movie';
import { requestsMessages } from '@/constants/requests-messages';

const useFetchUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateMovieArgs) => {
      const response = await updateMovie(data);
      return response;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['movie', variables.id],
      });

      queryClient.setQueryData(['movies'], (oldData) => {
        return oldData;
      });

      toast.success('Sucesso!', {
        description: requestsMessages.movies.updateMovie.success,
      });
    },
    onError: (error: Error) => {
      toast.error('Erro!', {
        description: requestsMessages.movies.updateMovie.error,
      });
      console.error(error.message);
    },
  });
};
export { useFetchUpdateMovie };
