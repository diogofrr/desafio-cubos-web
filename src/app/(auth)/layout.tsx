import { ReactNode } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { BackgroundWithGradient } from '@/components/background-with-gradient';
import BackgroundImage from '@/../public/images/background.webp';

interface AuthLayout {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayout) {
  return (
    <BackgroundWithGradient imageUrl={BackgroundImage}>
      <div className="flex flex-col justify-between items-center min-h-[768px] h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </BackgroundWithGradient>
  );
}
