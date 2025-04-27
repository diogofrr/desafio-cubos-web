import type {
	ThemeContextActionsTypes,
	ThemeContextInitialState,
} from '@/types/contexts/theme-context';

import actions from './actions';

const reducer = (
	state: ThemeContextInitialState,
	action: ThemeContextActionsTypes
) => {
	switch (action.type) {
		case actions.SET_THEME: {
			return {
				...state,
				theme: action.payload,
			};
		}
		case actions.SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
