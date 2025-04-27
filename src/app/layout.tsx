import { ReactNode } from 'react';

import Provider from './provider';

import '@/styles/brand/theme.css';

interface LayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Cubos Movies</title>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                }

                function setTheme(theme) {
                  const root = document.documentElement;

                  if (theme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }

                  root.setAttribute('data-theme', theme);
                }

                const theme = getThemePreference();
                setTheme(theme);

                window.addEventListener('DOMContentLoaded', () => {
                  document.documentElement.classList.add('theme-transition-ready');
                });
              })();
            `,
					}}
				/>
			</head>
			<body className="antialiased bg-mauve-1 dark:bg-mauve-dark-1">
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
