import { ReactNode } from 'react';

import { ListMoviesResponse } from '@/types/movies/list-movies';

interface SearchAndFilterContextInitialState {
  search: string;
  page: number;
  limit: number;
  minDuration: number;
  maxDuration: number;
  startDate: string;
  endDate: string;
  languageId: string;
  genreIds: string[];
  movies: ListMoviesResponse['result'] | null;
  loading: boolean;
}

interface SearchAndFilterContextActions {
  CHANGE_SEARCH_QUERY: 'CHANGE_SEARCH_QUERY';
  CHANGE_PAGE: 'CHANGE_PAGE';
  CHANGE_MIN_DURATION: 'CHANGE_MIN_DURATION';
  CHANGE_MAX_DURATION: 'CHANGE_MAX_DURATION';
  CHANGE_START_DATE: 'CHANGE_START_DATE';
  CHANGE_END_DATE: 'CHANGE_END_DATE';
  CHANGE_LANGUAGE_ID: 'CHANGE_LANGUAGE_ID';
  CHANGE_GENRE_IDS: 'CHANGE_GENRE_IDS';
  CHANGE_LOADING_STATE: 'CHANGE_LOADING_STATE';
  SAVE_MOVIES: 'SAVE_MOVIES';
}

type SearchAndFilterContextActionsTypes =
  | {
      type: SearchAndFilterContextActions['CHANGE_SEARCH_QUERY'];
      payload: string;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_PAGE'];
      payload: number;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_MIN_DURATION'];
      payload: number;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_MAX_DURATION'];
      payload: number;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_START_DATE'];
      payload: string;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_END_DATE'];
      payload: string;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_LANGUAGE_ID'];
      payload: string;
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_GENRE_IDS'];
      payload: string[];
    }
  | {
      type: SearchAndFilterContextActions['SAVE_MOVIES'];
      payload: ListMoviesResponse['result'];
    }
  | {
      type: SearchAndFilterContextActions['CHANGE_LOADING_STATE'];
      payload: boolean;
    };

interface SearchAndFilterContextType {
  state: SearchAndFilterContextInitialState;
  changeSearchQuery: (search: string) => void;
  changePage: (page: number) => void;
  changeMinDuration: (minDuration: number) => void;
  changeMaxDuration: (maxDuration: number) => void;
  changeStartDate: (startDate: string) => void;
  changeEndDate: (endDate: string) => void;
  changeLanguageId: (languageId: string) => void;
  changeGenreIds: (genreIds: string[]) => void;
  saveMovies: (movies: ListMoviesResponse['result']) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

interface SearchAndFilterProviderProps {
  children: ReactNode;
}

export {
  SearchAndFilterContextInitialState,
  SearchAndFilterContextActions,
  SearchAndFilterContextActionsTypes,
  SearchAndFilterContextType,
  SearchAndFilterProviderProps,
};
