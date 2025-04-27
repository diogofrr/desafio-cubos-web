'use client';

import { useThemeContext } from './context/use-theme-context';

const useTheme = () => {
	const { state, setTheme } = useThemeContext();

	const changeTheme = () => {
		const root = document.documentElement;
		const isDark = root.classList.contains('dark');

		if (isDark) {
			root.classList.remove('dark');
			root.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
			setTheme('light');
		} else {
			root.classList.add('dark');
			root.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	};

	const getTheme = () => {
		if (typeof window === 'undefined') return;
		const theme =
			document.documentElement.getAttribute('data-theme') === 'dark'
				? 'dark'
				: 'light';
		setTheme(theme);
	};

	return {
		changeTheme,
		getTheme,
		...state,
	};
};

export { useTheme };
