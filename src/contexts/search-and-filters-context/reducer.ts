import {
  SearchAndFilterContextActionsTypes,
  SearchAndFilterContextInitialState,
} from '@/types/contexts/search-and-filter-context';

import actions from './actions';

const reducer = (
  state: SearchAndFilterContextInitialState,
  action: SearchAndFilterContextActionsTypes
) => {
  switch (action.type) {
    case actions.CHANGE_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
      };
    case actions.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case actions.CHANGE_MIN_DURATION:
      return {
        ...state,
        minDuration: action.payload,
      };
    case actions.CHANGE_MAX_DURATION:
      return {
        ...state,
        maxDuration: action.payload,
      };
    case actions.CHANGE_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case actions.CHANGE_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case actions.CHANGE_LANGUAGE_ID:
      return {
        ...state,
        languageId: action.payload,
      };
    case actions.CHANGE_GENRE_IDS:
      return {
        ...state,
        genreIds: action.payload,
      };
    case actions.SAVE_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actions.CHANGE_LOADING_STATE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
