import { ResponseData } from '@/types/globals';
import { Genre, VoteStats } from './list-movies';

interface GetMovieArgs {
  id: string;
}

interface Language {
  id: string;
  name: string;
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
  omitedUserVote: unknown[];
}

interface GetMovieResponse extends ResponseData {
  result: Movie;
}

export { GetMovieArgs, Movie, Language, GetMovieResponse };
