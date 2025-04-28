'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../context/use-auth-context';

import { clearSession } from '@/lib/session';

const useSession = () => {
  const { state } = useAuthContext();
  const { push } = useRouter();

  const handleLogout = useCallback(async () => {
    await clearSession().then(() => {
      push('/login');
    });
  }, [push]);

  return {
    session: state.user,
    handleLogout,
  };
};

export { useSession };
