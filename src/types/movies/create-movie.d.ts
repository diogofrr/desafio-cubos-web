import { ResponseData } from '../globals';

interface MovieStatus {
  RELEASED: 'RELEASED';
  CANCELLED: 'CANCELLED';
  PENDING: 'PENDING';
}

interface CreateMovieArgs {
  title: string;
  originalTitle: string;
  subtitle?: string;
  synopsis: string;
  budget?: number;
  revenue?: number;
  releaseDate: string;
  duration: number;
  popularity?: number;
  trailerUrl?: string;
  status: Status;
  language: string;
  genres: string[];
  image: File;
}

interface CreateMovieResponse extends ResponseData {
  result: string;
}
export { CreateMovieResponse, CreateMovieArgs, MovieStatus };
