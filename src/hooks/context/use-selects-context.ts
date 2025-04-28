'use client';

import { useContext } from 'react';

import SelectsContext from '@/contexts/selects-context/selects-context';

const useSelectsContext = () => {
  const context = useContext(SelectsContext);

  if (!context) {
    throw new Error('useSelectsContext must be used within an SelectProvider');
  }

  return context;
};

export { useSelectsContext };
