import { createContext } from 'react';
import type { ThemeContextType } from '@/types/contexts/theme-context';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
