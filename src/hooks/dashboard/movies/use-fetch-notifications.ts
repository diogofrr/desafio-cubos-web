'use client';

import { useQuery } from '@tanstack/react-query';
import getNotifications from '@/services/dashboard/get-notifications';
import { GetNotificationsResponse } from '@/types/movies/get-notifications';

const useFetchNotifications = () => {
  const { data, isLoading, error, refetch } =
    useQuery<GetNotificationsResponse | null>({
      queryKey: ['notifications'],
      queryFn: getNotifications,
    });

  return {
    notifications: data?.result || [],
    isLoading,
    error,
    refetch,
    hasNotifications: !!data?.result?.length,
  };
};

export { useFetchNotifications };
