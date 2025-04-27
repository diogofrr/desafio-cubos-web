import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { SessionLoader } from './components/session-loader';
import { BackgroundWithGradient } from '@/components/background-with-gradient';

import BackgroundImage from '@/../public/images/background.webp';
import SubHeader from './components/sub-header';
import SearchAndFilterProvider from '@/contexts/search-and-filters-context/search-and-filter-provider';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <BackgroundWithGradient imageUrl={BackgroundImage}>
      <SearchAndFilterProvider>
        <SessionLoader>
          <div className="flex flex-col min-h-[768px] h-auto w-full">
            <Header showLogoutButton={true} className="" />
            <SubHeader />
            {children}
            <Footer className="mt-auto" />
          </div>
        </SessionLoader>
      </SearchAndFilterProvider>
    </BackgroundWithGradient>
  );
}
