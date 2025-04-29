import { MoviesList } from './components/movies-list';
import { NotificationBell } from './components/notification-bell';
import SubHeader from './components/sub-header';

export default function Home() {
  return (
    <>
      <SubHeader />
      <MoviesList />
      <NotificationBell />
    </>
  );
}
