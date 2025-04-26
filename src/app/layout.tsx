import { LayoutProps } from "@/types/root";
import Provider from "./provider";
import '@/styles/brand/theme.css';

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="pt-BR" className="">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
				<title>Cubos Movies</title>
      </head>
      <body
        className={`antialiased`}
      >
				<Provider>
					{children}
				</Provider>
      </body>
    </html>
  );
}
