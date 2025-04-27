'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@/contexts/auth-context/auth-provider';
import { ProviderProps } from '@/types/root';

export default function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}
