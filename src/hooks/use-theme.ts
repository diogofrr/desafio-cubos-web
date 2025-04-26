'use client'

const useTheme = () => {
	const setDarkMode = () => {
		localStorage.setItem('theme', 'dark')
		document.documentElement.classList.add('dark')
	}

	const setLightMode = () => {
		localStorage.setItem('theme', 'light')
		document.documentElement.classList.remove('dark')
	}

	const loadTheme = () => {
		const storedTheme = localStorage.getItem('theme');
		const prefersDarkQuery = '(prefers-color-scheme: dark)';
		const mediaQueryList = window.matchMedia(prefersDarkQuery);
	
		if (!storedTheme) {
			const shouldUseDarkTheme = mediaQueryList.matches;
			setDarkModeIf(shouldUseDarkTheme);
			return;
		}
	
		const isDarkTheme = storedTheme === 'dark';
		setDarkModeIf(isDarkTheme);
	}
	
	const setDarkModeIf = (shouldUseDarkTheme: boolean) => {
		if (shouldUseDarkTheme) {
			setDarkMode();
		} else {
			setLightMode();
		}
	}

	const changeTheme = () => {
		const theme = localStorage.getItem('theme')

		if (theme === 'light') {
			localStorage.setItem('theme', 'dark')
			document.documentElement.classList.add('dark')
		} else {
			localStorage.setItem('theme', 'light')
			document.documentElement.classList.remove('dark')
		}
	}

	return {
		changeTheme,
		loadTheme
	}
}

export { useTheme }