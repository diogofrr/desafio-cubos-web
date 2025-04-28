'use client';

import { requestsMessages } from '@/constants/requests-messages';
import deleteMovie from '@/services/dashboard/delete-movie';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const useDeleteMovie = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await deleteMovie({ id });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['deleteMovie'] });
      toast.success('Sucesso!', {
        description: requestsMessages.movies.deleteMovie.success,
      });
      setTimeout(() => {
        push('/');
      }, 1000);
    },
    onError: (error: Error) => {
      toast.error('Erro!', {
        description: requestsMessages.movies.deleteMovie.error,
      });
      console.error(error.message);
    },
  });
};
export { useDeleteMovie };
