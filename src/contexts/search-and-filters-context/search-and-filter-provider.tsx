'use client';

import { useReducer } from 'react';

import SearchAndFilterContext from './search-and-filter-context';
import actions from './actions';
import reducer from './reducer';
import initialState from './data';

import { SearchAndFilterProviderProps } from '@/types/contexts/search-and-filter-context';
import { ListMoviesResponse } from '@/types/movies/list-movies';

const SearchAndFilterProvider = ({
  children,
}: SearchAndFilterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeSearchQuery = (query: string) => {
    dispatch({
      type: actions.CHANGE_SEARCH_QUERY,
      payload: query,
    });
  };

  const changePage = (page: number) => {
    dispatch({
      type: actions.CHANGE_PAGE,
      payload: page,
    });
  };

  const changeMinDuration = (duration: number) => {
    dispatch({
      type: actions.CHANGE_MIN_DURATION,
      payload: duration,
    });
  };

  const changeMaxDuration = (duration: number) => {
    dispatch({
      type: actions.CHANGE_MAX_DURATION,
      payload: duration,
    });
  };

  const changeStartDate = (date: string) => {
    dispatch({
      type: actions.CHANGE_START_DATE,
      payload: date,
    });
  };

  const changeEndDate = (date: string) => {
    dispatch({
      type: actions.CHANGE_END_DATE,
      payload: date,
    });
  };

  const changeLanguageId = (languageId: string) => {
    dispatch({
      type: actions.CHANGE_LANGUAGE_ID,
      payload: languageId,
    });
  };

  const changeGenreIds = (genreIds: string[]) => {
    dispatch({
      type: actions.CHANGE_GENRE_IDS,
      payload: genreIds,
    });
  };

  const saveMovies = (movies: ListMoviesResponse['result']) => {
    dispatch({
      type: actions.SAVE_MOVIES,
      payload: movies,
    });
  };

  const startLoading = () => {
    dispatch({
      type: actions.CHANGE_LOADING_STATE,
      payload: true,
    });
  };

  const stopLoading = () => {
    dispatch({
      type: actions.CHANGE_LOADING_STATE,
      payload: false,
    });
  };

  return (
    <SearchAndFilterContext.Provider
      value={{
        state,
        changeSearchQuery,
        changePage,
        changeMinDuration,
        changeMaxDuration,
        changeStartDate,
        changeEndDate,
        changeLanguageId,
        changeGenreIds,
        saveMovies,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </SearchAndFilterContext.Provider>
  );
};

export default SearchAndFilterProvider;
