'use client';

import { useContext } from 'react';

import ThemeContext from '@/contexts/theme-context/theme-context';

const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext must be used within an ThemeProvider');
	}

	return context;
};

export { useThemeContext };
