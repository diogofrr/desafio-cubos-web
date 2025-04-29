import { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextInitialState {
  theme: Theme;
  isLoading: boolean;
}

interface ThemeContextActions {
  SET_THEME: 'SET_THEME';
  SET_LOADING: 'SET_LOADING';
}

type ThemeContextActionsTypes =
  | { type: ThemeContextActions['SET_THEME']; payload: Theme }
  | { type: ThemeContextActions['SET_LOADING']; payload: boolean };

interface ThemeContextType {
  state: ThemeContextInitialState;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export {
  Theme,
  ThemeContextInitialState,
  ThemeContextActions,
  ThemeContextActionsTypes,
  ThemeContextType,
  ThemeProviderProps,
};
