'use client';

import { createContext } from 'react';

import { SearchAndFilterContextType } from '@/types/contexts/search-and-filter-context';

const SearchAndFilterModeContext =
	createContext<SearchAndFilterContextType | null>(null);

export default SearchAndFilterModeContext;
