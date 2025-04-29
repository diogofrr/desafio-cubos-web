import { ResponseData } from '@/types/globals';

interface Notification {
  movieId: string;
  sentAt: string;
  linkView: string;
  status: string;
}

interface GetNotificationsResponse extends ResponseData {
  result: Notification[];
}
export { GetNotificationsResponse, Notification };
