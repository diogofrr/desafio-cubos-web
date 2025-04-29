'use client';

import { ReactNode, useCallback, useEffect } from 'react';
import { useSession } from '@/hooks/auth/use-session';
import { useAuthContext } from '@/hooks/context/use-auth-context';

import { getSession } from '@/lib/session';

interface SessionLoaderProps {
  children: ReactNode;
}

const SessionLoader = ({ children }: SessionLoaderProps) => {
  const { handleLogout } = useSession();
  const { saveUserData } = useAuthContext();

  const handleSaveUserData = useCallback(async () => {
    const userData = await getSession();

    if (!userData) {
      await handleLogout();
    } else {
      saveUserData(userData);
    }
  }, [handleLogout, saveUserData]);

  useEffect(() => {
    handleSaveUserData();
  }, []);

  return <>{children}</>;
};

export { SessionLoader };
