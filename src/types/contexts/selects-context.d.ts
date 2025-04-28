import { ReactNode } from 'react';
import { Genre } from '../movies/get-genres';
import { Language } from '../movies/get-languages';

interface SelectsContextInitialState {
  genres: Genre[] | null;
  languages: Language[] | null;
}

interface SelectsContextActions {
  SAVE_GENRES: 'SAVE_GENRES';
  SAVE_LANGUAGES: 'SAVE_LANGUAGES';
}

type SelectsContextActionsTypes =
  | {
      type: SelectsContextActions['SAVE_GENRES'];
      payload: Genre[];
    }
  | {
      type: SelectsContextActions['SAVE_LANGUAGES'];
      payload: Language[];
    };

interface SelectsContextType {
  state: SelectsContextInitialState;
  saveGenres: (genres: Genre[]) => void;
  saveLanguages: (languages: Language[]) => void;
}

interface SelectsProviderProps {
  children: ReactNode;
}

export {
  SelectsContextInitialState,
  SelectsContextActions,
  SelectsContextActionsTypes,
  SelectsContextType,
  SelectsProviderProps,
};
