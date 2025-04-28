'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import createMovie from '@/services/dashboard/create-movie';
import { CreateMovieArgs } from '@/types/movies/create-movie';
import { requestsMessages } from '@/constants/requests-messages';

export const useFetchCreateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateMovieArgs) => {
      const response = await createMovie(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      toast.success(requestsMessages.movies.createMovie.success);
    },
    onError: (error: Error) => {
      toast.error(requestsMessages.movies.createMovie.error);
      console.error(error.message);
    },
  });
};
