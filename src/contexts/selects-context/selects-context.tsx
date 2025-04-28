'use client';

import { createContext } from 'react';

import type { SelectsContextType } from '@/types/contexts/selects-context';

const SelectsContext = createContext<SelectsContextType | null>(null);

export default SelectsContext;
