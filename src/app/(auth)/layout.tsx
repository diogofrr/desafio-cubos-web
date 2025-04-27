import { Header } from './components/header';
import { Footer } from './components/footer';
import { BackgroundWithGradient } from '@/components/background-with-gradient';
import BackgroundImage from '@/../public/images/background.webp';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BackgroundWithGradient imageUrl={BackgroundImage}>
      <Header />
      {children}
      <Footer />
    </BackgroundWithGradient>
  );
}
