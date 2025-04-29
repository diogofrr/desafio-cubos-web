'use client';

import Link from 'next/link';

import { useModal } from '@/hooks/use-modal';
import { useTheme } from '@/hooks/use-theme';

import { LogoutModal } from '@/app/(dashboard)/components/logout-modal';
import { Button } from '@/components/button';
import { Cubos } from '@/components/cubos';

import Sun from './icons/sun';
import Moon from './icons/moon';

interface HeaderProps {
  showLogoutButton?: boolean;
  className?: string;
}

const Header = ({ showLogoutButton = false, className }: HeaderProps) => {
  const { changeTheme } = useTheme();
  const { handleClose, isOpen, handleOpen } = useModal();

  return (
    <header
      className={`w-full p-4 border-b-1 border-mauve-alpha-6 dark:border-mauve-dark-alpha-6 ${className}`}
    >
      <div className="flex flex-row items-center justify-between max-w-[1366px] w-full h-full mx-auto">
        <Link
          href="/"
          target="_self"
          className="flex items-center justify-center gap-4 text-mauve-12 dark:text-mauve-dark-12"
        >
          <Cubos sizes={{ width: 160, height: 36 }} />
          <h1 className="font-body font-bold text-xl">Movies</h1>
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant="secondary" onClick={changeTheme}>
            <span className="hidden dark:block">
              <Sun />
            </span>
            <span className="block dark:hidden">
              <Moon />
            </span>
          </Button>
          {showLogoutButton && (
            <Button variant="primary" onClick={handleOpen}>
              Logout
            </Button>
          )}
        </div>
      </div>

      <LogoutModal isOpen={isOpen} handleClose={handleClose} />
    </header>
  );
};

export { Header };
