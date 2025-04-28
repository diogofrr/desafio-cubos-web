'use client';

import { useContext } from 'react';
import SearchAndFilterContext from '@/contexts/search-and-filters-context/search-and-filter-context';

const useSearchAndFilterContext = () => {
  const context = useContext(SearchAndFilterContext);

  if (!context) {
    throw new Error(
      'useSearchAndFilterContext must be used within an SearchAndFilterProvider'
    );
  }

  return context;
};

export { useSearchAndFilterContext };
