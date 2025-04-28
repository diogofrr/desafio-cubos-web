'use client';

import { ReactNode } from 'react';

import { SessionLoader } from './components/session-loader';
import SearchAndFilterProvider from '@/contexts/search-and-filters-context/search-and-filter-provider';
import SelectsProvider from '@/contexts/selects-context/selects-provider';

interface DashboardProviderProps {
  children: ReactNode;
}

export default function DashboardProvider({
  children,
}: DashboardProviderProps) {
  return (
    <SelectsProvider>
      <SearchAndFilterProvider>
        <SessionLoader>{children}</SessionLoader>
      </SearchAndFilterProvider>
    </SelectsProvider>
  );
}
