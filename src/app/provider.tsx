'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { ProviderProps } from '@/types/root';
import { useLayoutEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';

export default function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient();
	const { loadTheme } = useTheme()

	useLayoutEffect(() => {
		loadTheme()
		console.log('loadTheme')
	}, [loadTheme]);
	

  return (
    <QueryClientProvider client={queryClient}>
			{children}
    </QueryClientProvider>
  );
}
