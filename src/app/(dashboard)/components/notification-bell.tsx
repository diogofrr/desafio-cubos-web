'use client';

import Bell from '@/components/icons/bell';
import { useFetchNotifications } from '@/hooks/dashboard/movies/use-fetch-notifications';

const NotificationBell = () => {
  const { notifications, hasNotifications } = useFetchNotifications();

  return (
    <button
      type="button"
      disabled={!hasNotifications}
      className={`fixed bottom-6 right-6 p-4 rounded-full text-mauve-1 z-10 ${
        hasNotifications
          ? 'bg-purple-9 dark:bg-purple-dark-9 animate-floating hover:bg-purple-10 dark:hover:bg-purple-dark-10 cursor-pointer'
          : 'bg-mauve-8 dark:bg-mauve-dark-8 opacity-70 cursor-not-allowed'
      }`}
      onClick={() => {
        if (hasNotifications && notifications?.length > 0) {
          window.open(
            notifications[notifications.length - 1].linkView,
            '_blank'
          );
        }
      }}
    >
      <div className="relative">
        <Bell />
      </div>
    </button>
  );
};

export { NotificationBell };
