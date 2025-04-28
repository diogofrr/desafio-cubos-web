import type {
  SelectsContextActionsTypes,
  SelectsContextInitialState,
} from '@/types/contexts/selects-context';

import actions from './actions';

const reducer = (
  state: SelectsContextInitialState,
  action: SelectsContextActionsTypes
) => {
  switch (action.type) {
    case actions.SAVE_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case actions.SAVE_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
