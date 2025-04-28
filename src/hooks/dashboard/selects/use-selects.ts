'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { useSelectsContext } from '@/hooks/context/use-selects-context';
import getGenres from '@/services/dashboard/get-genres';
import getLanguages from '@/services/dashboard/get-languages';
import { requestsMessages } from '@/constants/requests-messages';

const useSelects = () => {
  const { state, saveGenres, saveLanguages } = useSelectsContext();
  const queryClient = useQueryClient();

  const {
    data: genres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
    refetch: refetchGenres,
  } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      const response = await getGenres();
      if (!response || !response.result || response === null) {
        toast.error(requestsMessages.movies.getGenres.error);
        return null;
      }
      saveGenres(response.result);
      return response.result;
    },
    staleTime: 1000 * 60 * 10,
    enabled: !state.genres,
  });

  const {
    data: languages,
    isLoading: isLoadingLanguages,
    isError: isErrorLanguages,
    refetch: refetchLanguages,
  } = useQuery({
    queryKey: ['languages'],
    queryFn: async () => {
      const response = await getLanguages();
      if (!response || !response.result) {
        toast.error(requestsMessages.movies.getLanguages.error);
        return null;
      }
      saveLanguages(response.result);
      return response.result;
    },
    staleTime: 1000 * 60 * 10,
    enabled: !state.languages,
  });

  const fetchAll = () => {
    if (!state.genres) {
      refetchGenres();
    }
    if (!state.languages) {
      refetchLanguages();
    }
  };

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['genres'] });
    queryClient.invalidateQueries({ queryKey: ['languages'] });
  };

  return {
    genres: state.genres || genres,
    languages: state.languages || languages,
    isLoading: isLoadingGenres || isLoadingLanguages,
    isError: isErrorGenres || isErrorLanguages,
    refetchGenres,
    refetchLanguages,
    fetchAll,
    invalidateQueries,
  };
};

export { useSelects };
