'use client';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/button';
import { Cubos } from '@/components/cubos';
import Icon from '@/components/icon';

const Header = () => {
  const { changeTheme } = useTheme();

  return (
    <header className="w-full h-[72px] px-4 border-b-1 border-mauve-alpha-6 dark:border-mauve-dark-alpha-6">
      <div className="flex flex-row items-center justify-between max-w-[1440px] w-full h-full mx-auto">
        <div className="flex items-center justify-center gap-4 text-mauve-12 dark:text-mauve-dark-12">
          <Cubos sizes={{ width: 160, height: 36 }} />
          <h1 className="font-body font-bold text-xl">Movies</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant="secondary" onClick={changeTheme}>
            <span className="hidden dark:block">
              <Icon name="sun" />
            </span>
            <span className="block dark:hidden">
              <Icon name="moon" />
            </span>
          </Button>
          <Button variant="primary">Logout</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
