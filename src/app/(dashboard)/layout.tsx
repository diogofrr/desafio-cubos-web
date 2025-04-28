import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { BackgroundWithGradient } from '@/components/background-with-gradient';

import BackgroundImage from '@/../public/images/background.webp';
import DashboardProvider from './provider';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <BackgroundWithGradient imageUrl={BackgroundImage}>
      <DashboardProvider>
        <div className="flex flex-col min-h-[768px] h-auto w-full">
          <Header showLogoutButton={true} className="" />
          {children}
          <Footer className="mt-auto" />
        </div>
      </DashboardProvider>
    </BackgroundWithGradient>
  );
}
