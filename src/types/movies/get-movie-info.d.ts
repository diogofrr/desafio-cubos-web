import { ResponseData } from '@/types/globals';
import { Genre, VoteStats } from './get-genres';
import { Language } from './get-languages';

interface GetMovieArgs {
  id: string;
}

interface UserVote {
  id: string;
  score: number;
}

interface Movie {
  id: string;
  title: string;
  subtitle: string | null;
  originalTitle: string;
  synopsis: string;
  budget: string;
  revenue: string;
  releaseDate: string;
  duration: number;
  imageUrl: string;
  trailerUrl: string;
  status: string;
  languageId: string;
  genres: Genre[];
  language: Language;
  profit: number;
  votesAverage: VoteStats;
  omitedUserVote: UserVote[];
}

interface GetMovieResponse extends ResponseData {
  result: Movie;
}

export { GetMovieArgs, Movie, GetMovieResponse };
