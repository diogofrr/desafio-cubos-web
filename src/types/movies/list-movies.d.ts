import { ResponseData } from '@/types/globals';
import { Genre } from './get-genres';

interface VoteStats {
  totalVotes: number;
  averageScore: number;
}

interface ListMovie {
  id: string;
  title: string;
  imageUrl: string;
  genres: Genre[];
  voteStats: VoteStats;
}

interface ListMoviesArgs {
  page: number;
  limit: number;
  minDuration?: number;
  maxDuration?: number;
  startDate?: string;
  endDate?: string;
  languageId?: string;
  genreIds?: string;
  search?: string;
}

interface Pagination {
  total: number;
  page: 1;
  limit: 10;
  totalPages: 1;
  hasNext: false;
  hasPrevious: false;
}

interface ListMoviesResponse extends ResponseData {
  result: {
    data: ListMovie[];
    pagination: Pagination;
  };
}

export {
  ListMovie,
  Genre,
  VoteStats,
  ListMoviesArgs,
  ListMoviesResponse,
  Pagination,
};
