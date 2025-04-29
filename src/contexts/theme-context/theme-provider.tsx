'use client';

import { useEffect, useReducer } from 'react';

import { Theme, ThemeProviderProps } from '@/types/contexts/theme-context';

import ThemeContext from './theme-context';
import actions from './actions';
import reducer from './reducer';
import initialState from './data';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;

      if (savedTheme) {
        dispatch({
          type: actions.SET_THEME,
          payload: savedTheme,
        });
      } else {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        const systemTheme: Theme = prefersDark ? 'dark' : 'light';

        dispatch({
          type: actions.SET_THEME,
          payload: systemTheme,
        });
      }

      dispatch({
        type: actions.SET_LOADING,
        payload: false,
      });
    }
  }, []);

  const setTheme = (theme: Theme) => {
    dispatch({
      type: actions.SET_THEME,
      payload: theme,
    });
  };

  return (
    <ThemeContext.Provider value={{ state, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
