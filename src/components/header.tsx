'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/button';
import { Cubos } from '@/components/cubos';
import Icon from '@/components/icon';
import { useSession } from '@/hooks/auth/use-session';

interface HeaderProps {
  showLogoutButton?: boolean;
  className?: string;
}

const Header = ({ showLogoutButton = false, className }: HeaderProps) => {
  const { changeTheme } = useTheme();
  const { handleLogout } = useSession();

  return (
    <header
      className={`w-full p-4 border-b-1 border-mauve-alpha-6 dark:border-mauve-dark-alpha-6 ${className}`}
    >
      <div className="flex flex-row items-center justify-between max-w-[1366px] w-full h-full mx-auto">
        <a
          href="/"
          target="_self"
          className="flex items-center justify-center gap-4 text-mauve-12 dark:text-mauve-dark-12"
        >
          <Cubos sizes={{ width: 160, height: 36 }} />
          <h1 className="font-body font-bold text-xl">Movies</h1>
        </a>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant="secondary" onClick={changeTheme}>
            <span className="hidden dark:block">
              <Icon name="sun" />
            </span>
            <span className="block dark:hidden">
              <Icon name="moon" />
            </span>
          </Button>
          {showLogoutButton && (
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
