'use client';

import { useReducer } from 'react';

import type { SelectsProviderProps } from '@/types/contexts/selects-context';
import { Genre } from '@/types/movies/get-genres';
import { Language } from '@/types/movies/get-languages';

import SelectsContext from './selects-context';
import actions from './actions';
import reducer from './reducer';
import initialState from './data';

const SelectsProvider = ({ children }: SelectsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveGenres = (genres: Genre[]) => {
    dispatch({
      type: actions.SAVE_GENRES,
      payload: genres,
    });
  };

  const saveLanguages = (languages: Language[]) => {
    dispatch({
      type: actions.SAVE_LANGUAGES,
      payload: languages,
    });
  };

  return (
    <SelectsContext.Provider value={{ state, saveGenres, saveLanguages }}>
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
